# CLAUDE.md - Project Instructions

## Project Overview

[PROJECT_NAME] - [Brief description of the project]. Built with Next.js 14, TypeScript, and Tailwind CSS.

## Core Principle

**Autonomous execution with quality gates.**

No manual orchestration required. Investigate, plan, implement, test, and verify independently while maintaining quality standards.

---

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS
- **UI Components:** Shadcn UI (New York style)
- **Package Manager:** pnpm

---

## Commands

```bash
pnpm dev      # Development server (localhost:3000)
pnpm build    # Production build - MUST pass with 0 errors
pnpm lint     # Linting - MUST pass with 0 errors
```

---

## Quality Gates (Non-Negotiable)

### Before Completing Any Task:

```bash
pnpm build    # 0 errors required
pnpm lint     # 0 errors required
```

### Code Standards

- **NO `any` or `unknown` types** - Use proper TypeScript
- **NO duplicate code** - Create reusable functions/components
- **Shadcn UI only** - No other UI libraries
- **Files < 450 lines** - Split if larger
- **PascalCase components** - All component files use PascalCase

### Bug Fixes

- **Find root cause** - Never quick patch
- **Scan for similar issues** - Fix all instances
- **Prevent recurrence** - Add safeguards

---

## Project Structure

```
app/                    # Pages and API routes
  (routes)/             # Route groups
  api/                  # API routes
components/             # React components
  ui/                   # Shadcn UI primitives
  layout/               # Layout components
  sections/             # Page sections
lib/                    # Utilities and services
  utils.ts              # Helper functions
constants/              # Configuration and constants
types/                  # TypeScript type definitions
docs/                   # Documentation
  reference/            # Technical reference
  TASKS.md              # Task queue
  CONTEXT.md            # Working log
```

---

## Working Log

Document significant changes in `docs/CONTEXT.md`:

```markdown
## [Date] - [Brief Title]

**Goal:** What was requested
**Solution:** What was implemented
**Files Changed:**
- path/to/file.ts - description

**Status:** COMPLETE
```

---

## When to Ask

Work autonomously but ask when:
- **Ambiguous requirements** - Multiple valid interpretations
- **Breaking changes** - Would alter existing behavior significantly
- **New dependencies** - Need to add packages (always ask first)
- **Destructive operations** - Database migrations, file deletions

---

## Git Protocol

```bash
git commit -m "type: description"
```

Types: `feat`, `fix`, `refactor`, `docs`, `style`, `test`, `chore`

Rules:
- Commit after successful build/lint
- Never force push to main
- Never skip hooks

---

## Task Management

Use the slash commands to manage tasks:

| Command | Purpose |
|---------|---------|
| `/create <file>` | Create tasks from a task file |
| `/start` | Begin next [NOT STARTED] task |
| `/continue` | Resume [STARTED] task |
| `/finish` | Test and complete [REVIEW] task |
| `/do-all` | Execute all tasks automatically |
| `/plan` | Enter planning mode |

---

## Summary

1. Read the task/request
2. Investigate and understand context
3. Plan and implement solution
4. Run `pnpm build && pnpm lint`
5. Document in CONTEXT.md if significant
6. Report completion
