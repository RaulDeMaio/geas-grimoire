# Future Ideas

Non-committed ideas surfaced during work, kept for later triage — not a roadmap.

## Personal-skills packaging & docs (from mattpocock/skills audit, 2026-08-24)

- **Ship `personal-skills/` as an installable Claude Code plugin** (`.claude-plugin/marketplace.json` + `plugin.json`), mirroring mattpocock/skills — would let this skill set be installed/updated as a unit instead of relying on manual symlinks.
- **`scripts/link-skills.sh` / `list-skills.sh` equivalents** — automate the symlinking currently done by hand and regenerate the README index, cutting drift between the skills on disk and what the README documents.
- **A `CONTEXT.md`-style shared glossary** for this skill set — gives cross-skill terms one canonical definition, the same idea the repo's own `domain-modeling` skill applies to other domains, applied here to itself.
- **Per-skill human-facing doc pages under `docs/`**, fixed template (`## What it does` / `## When to reach for it` / `## Where it fits`) — makes the subset of skills worth surfacing outside agent context legible to humans browsing docs, not just to the model.
- **Explicit `disable-model-invocation`-style labeling audit across all skills** — this repo already sets the field per-skill; documenting it as a first-class categorization axis (as mattpocock/skills does) would make user-invocation-only skills easier to spot at a glance.
