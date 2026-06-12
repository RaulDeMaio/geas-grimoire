# Agents

Reusable Claude Code subagent definitions. Drop a file into `~/.claude/agents/` (user scope) or a repo's `.claude/agents/` (project scope) to use it.

Precedence note: for **agents**, project scope overrides user scope (a repo's copy wins inside that repo). For **skills** it's the opposite (personal/user overrides project).

| Agent | Role | Edits files? | Model |
|---|---|---|---|
| `implementer` | Executes an already-decided change; commits to a branch in an isolated worktree. | yes | none — route by complexity at dispatch |
| `code-reviewer` | Read-only review of a diff for correctness bugs + quality/security/perf. | no | none — route by complexity at dispatch |
| `code-simplifier` | Read-only pragmatic complexity audit (KISS/YAGNI; overengineering, code smells). | no | none — route by complexity at dispatch |
| `speckit-cleanup-runner` | Thin dispatcher for `/speckit-cleanup-run` in any `.specify/`-initialized repo. | via skill | haiku |
| `speckit-reconcile-runner` | Thin dispatcher for `/speckit-reconcile-run`. | via skill | haiku |
| `speckit-verify-runner` | Thin dispatcher for `/speckit-verify-run` (read-only gate). | via skill | haiku |

The three `speckit-*-runner` agents are repo-agnostic generalizations of project-scoped runners; they stop if the current repo has no `.specify/`.
