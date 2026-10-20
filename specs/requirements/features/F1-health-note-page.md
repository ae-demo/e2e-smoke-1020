# Health note page

## Purpose

A public page that shows a heading, today's date and a short static message to any visitor.

## User Stories

- F1.1 As a visitor, I open the page without signing in and see the heading "VM health note".
- F1.2 As a visitor, I see today's date on the page.
- F1.3 As a visitor, I see a short static message below the heading.

## Decisions

- Today's date is the visitor's current local date, shown in a readable long form (for example, 20 October 2026). *assumed*
- The message is fixed text that does not change between visits; its wording is "The VM is up and serving this page." *assumed*

## Out of Scope

- Any live health check, status data or history.
- Editing the message from the page.

