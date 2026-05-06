# Getting the Rate Card Off Excel
### Re-platforming pricing as a .NET 8 / EF Core / Azure SQL API with a 10-phase product roadmap

**Author:** Joshua Zimdars  
**Status:** Phase 1 complete · API live · Customer-facing surface area in design  
**Stack:** .NET 8, ASP.NET Core 8, Entity Framework Core 8, SQL Server / Azure SQL, Swagger, PowerShell

---

## TL;DR
Golden Limo's rate card lived in Excel/VBA — readable by humans, unreachable by software. I rebuilt it as a versioned API with 9 controllers and 22 entities, so the same pricing source of truth can power the internal Quote Calculator today and a customer self-service site, an affiliate network, and a mobile PWA tomorrow.

## The Problem
A spreadsheet rate card has two failure modes: it can't be queried by other systems, and it can't be safely changed without breaking downstream tools nobody documented. Both were true. To unlock the next decade of growth — customer self-service booking, an affiliate operator network, multi-currency international charter — pricing had to become a service, not a file.

## The Approach
- **API-first.** Every concept (vehicles, pricing rules, day-of-week modifiers, time-of-day modifiers, holiday overrides, add-ons, surcharges, transfer zones, transfer pricing) became a CRUD resource with a Swagger-documented contract.
- **Soft-delete + audit by default.** No "delete" in this domain ever means "actually delete" — pricing changes need to be auditable.
- **PowerShell as the dev story.** `setup.ps1`, `run.ps1`, `migrate.ps1`, `seed-data.ps1` — anyone who joins the team can be productive in under 10 minutes.
- **Phased rollout.** I authored a 10-phase roadmap (Foundation → Pricing Engine → Admin Portal → Customer Booking → AI Auto-Quote → Integrations → Affiliate Network → Customer Portal → Multi-Currency → Mobile + Polish). Each phase gates the next.

## What I'd Do Differently
- I should have shipped versioned pricing rules from Phase 1, not Phase 3. Retrofitting versioning is harder than including it.
- I underweighted observability. Phase 1 has Swagger but no structured logging or metrics. Adding that next.

## Why this matters
The point of building a platform isn't the platform — it's that *every* future strategic initiative is now cheaper. Customer self-service booking goes from "yearlong rebuild" to "frontend on top of the existing API." That's the leverage S&O work is supposed to produce.