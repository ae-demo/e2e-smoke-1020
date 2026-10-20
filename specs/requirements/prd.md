# VM health note

## Problem Statement

After a VM recovery, the team needs a quick, visible sign that a small public web app is up and serving. Today there is nothing simple to check.

## Solution

A single public web page, "VM health note", that shows a heading, today's date and a short static message. No sign-in, no database, no backend service and no external resources.

## Actors

- Visitor: anyone who opens the page; sees it without signing in.

## Features

- F1 [Health note page](features/F1-health-note-page.md)

## Product-wide

See [Product-wide](product-wide.md).

## Out of Scope

- Sign-in or any user accounts.
- A database or any stored data.
- A backend service.
- External resources or third-party services.
- Anything beyond one small web app.