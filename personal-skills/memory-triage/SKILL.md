---
name: memory-triage
description: Periodic memory-system triage sweep — promote/expire/clean personal auto-memory and repo memory vaults per the tiered promotion/demotion rules bundled in references/. Use when the session-start hook reports "memory triage due", when the user says "run memory triage", "triage memory", "sweep the memory", or asks to check for stale memories or the promotion backlog. Produces a findings report and HALTs for approval before any deletion or promotion PR.
---

# Memory Triage

Periodic sweep enforcing the memory system's promotion/demotion rules — full rule set,
tier table, and entry ontology in `references/promotion-demotion-rules.md` (read it
first). Runs read-only, reports, then acts only on approved items.

## Steps

### 1. Personal auto-memory scan (rule P-1 promotion backlog)

For each dir in `~/.claude/projects/*/memory/`:

- List `project_*` files with mtime older than **30 days**. Each is a promotion-backlog
  violation: it must be **promoted** (moved into the target repo's `docs/memory/` vault
  via a PR), **archived** (content folded into another memory or repo doc), or **deleted**.
- For every `project_*` file (any age), check whether its content names an artifact a
  teammate touches (repo file, PR, pipeline). If yes, flag as promotion candidate
  regardless of age.
- `feedback_*` and `user_*` files are exempt from promotion (personal tier by design).

### 2. Slug-orphan sweep (rule D-5)

- List all slug dirs under `~/.claude/projects/`. Flag memory-bearing dirs whose
  corresponding working directory no longer exists (dead worktrees). Propose
  merge-into-parent or delete.

### 3. Index drift

- For each memory dir with a `MEMORY.md`: verify every file has an index line and every
  index line points at an existing file. Report mismatches.

### 4. Repo vault expiry (rule D-2) — read lifecycle from entry bodies OR the index

- In each repo with `docs/memory/`: find entries with `review_by` in the past and
  `status: active`, and propose `status: stale` (excluded from synthesis) pending human
  confirm-or-extend. Read `review_by`/`status` from the entry field block where present;
  where entry *bodies* are legacy/grandfathered, read them from the `INDEX.md` table rows
  (many repos backfill lifecycle columns into the index without touching the bodies — the
  index is a valid source of truth for D-2). Only if neither the bodies nor the index
  carry `review_by`/`status` at all, note "vault expiry skipped — ontology fields not
  present" and move on. Do NOT edit vault files in this skill; vault changes go through
  a PR.

### 5. Report and HALT

- Present one consolidated findings table: item, rule violated, proposed action.
- **HALT.** Take no destructive or promoting action without explicit approval of the
  specific items. Approved deletions: execute directly. Approved promotions: dispatch
  per repo-edit norms (branch + PR for committed files).

### 6. Stamp the run

After the report is delivered (regardless of how many items were approved):

```bash
touch ~/.claude/.memory-triage-last
```

This resets the session-start due-check hook (fires when the marker is >30 days old).
