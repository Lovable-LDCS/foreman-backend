# Architecture – True North Specification

> This file defines the complete architecture for THIS app.  
> Foreman and all agents must treat this as the single source of truth.

## 1. App Purpose and Core Outcomes

- High-level goal:
- Primary user types:
- Key success metrics:

## 2. Screens, Layout and Navigation

- Global layout (header, sidebar, footer):
- Routes and pages:
  - `/` –
  - `/dashboard` –
  - `/admin` –
  - ...
- Navigation behaviour (desktop + mobile):
- Preview modes (e.g. Desktop/Mobile toggle) and how they should behave.

## 3. Components and Wiring

- Core components and what they do:
- Which components must be visible in which screens:
- Rules for “wiring”:
  - When this component is considered wired.
  - Expected interactions (click, hover, input, submit).
- Components that are allowed to be removed if not used.

## 4. Data & Domain Model

- Entities and fields:
- Relationships:
- Where data is stored (DB, external APIs):
- Performance expectations (pagination, limits, caching).

## 5. Workflows / User Journeys

Describe each critical workflow:

- Name:
- Entry point:
- Steps:
- Success outcome (what the user sees):
- Error/edge cases:
- Notifications or emails involved:

## 6. UI/UX & Branding

- Branding rules (logo placement, colour palette, typography):
- Spacing and sizing guidelines:
- Desktop vs mobile layout rules:
- Loading indicators:
- Success and error toasts:
- Accessibility considerations.

## 7. Notifications & Communication

- Which actions trigger notifications:
- How notifications appear (toasts, banners, modals, email):
- Expected copy style (tone of voice).

## 8. Security & Compliance

- Role definitions (Admin, User, Guest, etc.):
- Gating rules for admin-only features:
- Data access constraints (RLS or other policies):
- POPI/GDPR/Disclosure requirements:
- Logging and retention rules.

## 9. Integrations

- External APIs used:
- Required environment variables:
- Failure modes and how the UI should react.

## 10. Watchdog and Health Checker

- What the Watchdog must monitor:
- Thresholds for alerts:
- What should appear on the Health Checker screen:
- Expected confidence metrics / drift detection.

## 11. Roadmap / Milestones

- Phase 1:
- Phase 2:
- Phase 3:

Each milestone must link to specific flows and QA items.

## 12. Open Questions / Pending Decisions

- Items that are not yet fully specified but must be decided before GREEN.
