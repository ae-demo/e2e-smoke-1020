# Domain model

The product stores no data. The only record is the fixed note the page shows, held in the page itself; today's date comes from the visitor's clock.

```mermaid
erDiagram
    HealthNote {
        string heading
        string message
    }
```