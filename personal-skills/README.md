# personal-skills

Index of skills in this repo, grouped by category. Live skills under `~/.claude/skills/` are symlinks into `skills/<category>/<name>/` here (see `AGENTS.md`) — `archive/` skills are repo-only and not symlinked.

## Engineering

- **assess-indicator** — Audit a single Gold-layer KPI/indicator column against its official statistical definition (Eurostat / ISTAT / ILO / Worldbank / OECD / SDMX) and trace it back to source.
- **codebase-design** — Shared vocabulary for designing deep modules.
- **diagnosing-bugs** — Diagnosis loop for hard bugs and performance regressions.
- **docs-wiki** — Generate or maintain a Karpathy-style LLM-wiki for a codebase — bottom-up per-directory README rollups PLUS a curated docs/wiki/ hub of concept + how-to pages connected by [[wikilinks]], written for BOTH non-technical teammates and AI agents.
- **domain-modeling** — Build and sharpen a project's domain model.
- **improve-codebase-architecture** — Scan a codebase for deepening opportunities, present them as a visual HTML report, then grill through whichever one you pick.
- **prototype** — Build a throwaway prototype to answer a design question.
- **quality-analysis** — Structured Gold-table quality investigation for Delta Lake / Databricks Lakehouse pipelines.
- **self-harness** — Mine past Claude Code sessions for recurring failure patterns, then propose and validate targeted fixes to the harness — CLAUDE.md, skills, agents, hooks, settings.json.
- **technical-doc-writer** — Guide for creating effective, structured, and token-efficient technical documentation.
- **to-issues** — Break a plan, spec, or PRD into independently-grabbable issues on the project issue tracker using tracer-bullet vertical slices.
- **to-prd** — Turn the current conversation context into a PRD and publish it to the project issue tracker.
- **to-spec** — Turn the current conversation into a spec and publish it to the project issue tracker — no interview, just synthesis of what you've already discussed.
- **triage** — Move issues and external PRs through a state machine of triage roles — categorise, verify, grill if needed, and write agent-ready briefs.
- **wayfinder** — Plan a huge chunk of work — more than one agent session can hold — as a shared map of decision tickets on your issue tracker, and resolve them one at a time until the way to the destination is clear.
- **writing-great-skills** — Reference for writing and editing skills well — the vocabulary and principles that make a skill predictable.

## Productivity

- **debrief** — Systematically wrap up a session by summarizing progress, scouting for reusable skills, and cleaning up context.
- **grill-me** — A relentless interview to sharpen a plan or design.
- **grill-with-docs** — A relentless interview to sharpen a plan or design, which also creates docs (ADR's and glossary) as we go.
- **grilling** — Grill the user relentlessly about a plan, decision, or idea.
- **handoff** — Compact the current conversation into a handoff document in ~/.claude/handoffs/ so a fresh agent or a later session can pick the work up without re-deriving it.
- **memory-triage** — Periodic memory-system triage sweep — promote/expire/clean personal auto-memory and repo memory vaults per the tiered promotion/demotion rules bundled in references/.
- **prompt-architect** — Build, critique, or optimize prompts for Claude — Claude.ai chat, API system prompts, or Claude Code CLAUDE.md / slash command / agent definitions.
- **research** — Investigate a question against high-trust primary sources and capture the findings as a Markdown file in the repo.

## Speckit

- **speckit-analyze** — Perform a non-destructive cross-artifact consistency and quality analysis across spec.md, plan.md, and tasks.md after task generation.
- **speckit-archive-run** — Archive a feature specification into main project memory after merge, resolving gaps and conflicts
- **speckit-clarify** — Identify underspecified areas in the current feature spec by asking up to 5 highly targeted clarification questions and encoding answers back into the spec.
- **speckit-cleanup-run** — Review implementation, fix small issues, identify tech debt
- **speckit-cleanup** — Post-implementation quality gate that reviews changes, fixes small issues (scout rule), creates tasks for medium issues, and generates analysis for large issues.
- **speckit-implement** — Execute the implementation plan by processing and executing all tasks defined in tasks.md
- **speckit-memory-md-log-finding** — Turn a high-signal audit finding into a tracker-ready follow-up (GitHub/GitLab/Jira issue) when it's worth acting on but not worth storing as durable memory.
- **speckit-plan** — Execute the implementation planning workflow using the plan template to generate design artifacts.
- **speckit-reconcile-run** — Reconcile implementation drift by updating the feature's own spec, plan, and tasks
- **speckit-specify** — Create or update the feature specification from a natural language feature description.
- **speckit-tasks** — Generate an actionable, dependency-ordered tasks.md for the feature based on available design artifacts.
- **speckit-verify-run** — Post-implementation quality gate — validates code against spec.md, plan.md, tasks.md, and constitution.md.

## Brand

- **oe-frontend-brand** — Crea oggetti web HTML standalone on-brand per OpenEconomics, guidando colleghi con competenze eterogenee.
- **openeconomics-design** — Use this skill to generate well-branded interfaces and assets for OpenEconomics, either for production or throwaway prototypes/mocks/etc.

## Meta

- **ask-matt** — Ask which skill or flow fits your situation.
- **setup-matt-pocock-skills** — Configure this repo for the engineering skills — set up its issue tracker, triage label vocabulary, and domain doc layout.

## Archive (not loaded live)

- **algorithm-translator** — Expert AI Assistant for translating dense academic algorithms, pseudocode, and mathematical formulas into robust, numerically stable, and hardware-agnostic production code pipelines.
- **build-knowledge** — Build and manage a persistent knowledge base (second brain) using Markdown files.
- **code-reviewer** — Analyzes code for performance, maintainability, quality, and architecture
- **falsifiability-check** — Pre-report sanity check for ML / research experiments.
- **jules-cli** — Interface with the Google Jules CLI to delegate asynchronous coding tasks.
- **lift-to-common** — Mechanical refactor — lift a function (plus its transitive private helpers) from `experiments/<NN>/src/<file>.py` to `research/common/<module>.py`; rewrite imports in all consumer experiments; verify via parity + smoke + ruff.
- **llm-council** — Run any question, idea, or decision through a council of 5 AI advisors who independently analyze it, peer-review each other anonymously, and synthesize a final verdict.
- **opencode-cli** — Interface with the Opencode CLI to execute AI-driven coding tasks, generate code snippets, and manage agent sessions non-interactively.
- **opencode-config-advisor** — Detects, analyzes, and suggests changes to the Opencode CLI configuration file (config.json).
- **phase-iterate** — Standardize the smoke-fail → diagnose → minimal-patch → re-smoke loop for ML / research experiments where a single design pass rarely passes the acceptance gate.
- **read-data-contract** — Programmatically extract metadata from YML-based data contracts (dbt schema.yml, metadata.yml, *_contract.yml, *_schema.yml, etc.) to infer column names, data types, semantic descriptions, nullability, tags, and test definitions — without reading entire files into context.
- **research-loop** — Bootstrap a daily continuation of an ongoing research-loop session in a Speckit-style research lab (research/ folder with METHODOLOGY.md, STATE.md, decisions/, experiments/<NN_name>/LOG.md + results/).
- **skill-manager** — Manage and synchronize agentic skills from public GitHub repositories using the `skm` CLI utility.
- **skill-scout** — Analyzes the recent conversation history or a completed task to detect reusable patterns.
- **speckit-memory-md-audit** — Read-only, evidence-based audit of durable and feature memory files ({memory_root}/*.md, {specs_root}/<feature>/memory*.md) to flag stale, contradictory, or low-signal entries.
- **speckit-memory-md-bootstrap** — One-time repo setup for the layered Spec-Kit memory workflow: creates memory_root/specs_root folders and durable memory files from extension templates, reading .specify/extensions/memory-md/config.yml.
- **speckit-memory-md-capture-from-diff** — Capture durable knowledge and architecture decisions from current or provided diffs.
- **speckit-memory-md-capture** — Manual, human-approved reflection on completed work — reviews spec/plan/tasks plus the final diff, tests, and review findings — and updates durable memory only if the change is warranted.
- **speckit-memory-md-init** — Initialize layered memory, synthesis, and spec starter files in a target repo.
- **speckit-memory-md-plan-with-memory** — Before planning a feature, resolves memory config and retrieves durable constraints/decisions from memory so planning is memory-informed.
- **speckit-memory-md-token-report** — Compare estimated token usage between full memory reads and optimized synthesis.
- **speckit-onboard-badge** — Spec-kit workflow command: speckit-onboard-badge
- **speckit-onboard-explain** — Spec-kit workflow command: speckit-onboard-explain
- **speckit-onboard-mentor** — Spec-kit workflow command: speckit-onboard-mentor
- **speckit-onboard-quiz** — Spec-kit workflow command: speckit-onboard-quiz
- **speckit-onboard-start** — Spec-kit workflow command: speckit-onboard-start
- **speckit-onboard-team** — Spec-kit workflow command: speckit-onboard-team
- **speckit-onboard-trail** — Spec-kit workflow command: speckit-onboard-trail
- **start-experiment** — Scaffold a new experiment under research/experiments/<NN_name>/ from templates, given a user idea or the next item in a roadmap ADR.
- **start-research** — Bootstrap a new research project around a measurable claim — branch, scaffold research/, seed METHODOLOGY/CLAUDE.md/STATE, stub positioning + future_data_sources.
- **tdd-implementation** — Enforces Test-Driven Development methodology
- **word-doc** — Create professional Word documents (.docx) from company templates.
- **write-experiment-report** — Generate a robust results/report.md for a research experiment from leaderboard.csv + driving ADR + per-run JSONs.

