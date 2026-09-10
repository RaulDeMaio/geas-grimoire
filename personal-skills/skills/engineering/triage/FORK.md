# Fork note

Forked from `mattpocock/skills` `skills/engineering/triage` (upstream commit as of 2026-09-10) with local changes:

- `AGENT-BRIEF.md`: template gains `**Dipendenze:**` (sibling tickets that must be committed first) and `**Complessità:** XS | S | M | L`, with the sizing rule. `ticket-loop` builds its dependency graph and routes agents from these two lines.
- `SKILL.md`: a brief graded `L` cannot be labelled `ready-for-agent`; split into S/M subtasks first.
- Earlier local divergences (Italian brief vocabulary, Jira instead of GitHub issues).

Do not refresh this skill blindly from upstream: re-apply these lines after any refresh.
