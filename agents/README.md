# Agents

Reusable Claude Code subagent definitions. Drop a file into `~/.claude/agents/` (user scope) or a repo's `.claude/agents/` (project scope) to use it.

Precedence note: for **agents**, project scope overrides user scope (a repo's copy wins inside that repo). For **skills** it's the opposite (personal/user overrides project).

| Agent | Role | Edits files? | Model |
|---|---|---|---|
| `orchestrator` | Background PI for multi-wave delegated workflows: dispatches subagents routed by complexity, synthesizes reports, never holds bulk artifacts; PushNotification when a user decision is pending. | no (delegates) | sonnet (override per dispatch) |
| `implementer` | Generalist fallback: executes an already-decided change; commits to a branch in an isolated worktree. Prefer a domain profile below when one matches. | yes | none — route by complexity at dispatch |
| `impl-dbx` | Databricks data-engineering implementer (ingestion bronze/silver, dbt gold, DAB YAML, delivery). | yes | sonnet |
| `impl-fe` | Frontend implementer (React product UI + OE brand HTML assets; repo design guardrails outrank brand skills); dispatch `model: opus` for design-heavy work. | yes | sonnet |
| `minion` | Trivial mechanical executor (moves, renames, one-liners, doc updates); anonymous subagent, never a named teammate. | yes | haiku |
| `code-reviewer` | Read-only review of a diff for correctness bugs + quality/security/perf. | no | opus |
| `code-simplifier` | Read-only pragmatic complexity audit (KISS/YAGNI; overengineering, code smells). | no | opus |
| `speckit-cleanup-runner` | Thin dispatcher for `/speckit-cleanup-run` in any `.specify/`-initialized repo. | via skill | haiku |
| `speckit-reconcile-runner` | Thin dispatcher for `/speckit-reconcile-run`. | via skill | haiku |
| `speckit-verify-runner` | Thin dispatcher for `/speckit-verify-run` (read-only gate). | via skill | haiku |

The three `speckit-*-runner` agents are repo-agnostic generalizations of project-scoped runners; they stop if the current repo has no `.specify/`.
