# Dentalora Clinic

Production-oriented Next.js foundation for Dentalora.

## Roles
- Patient: book, cancel and reschedule own appointment.
- Doctor: view own schedule and cancel own appointments; no confirmation/reschedule.
- Secretary: view all schedules, create bookings and perform permitted Excel operations; no system administration.
- Dr. Mina Ayman: sole administrator with full clinic authorization.

## Security requirements
The booking database must enforce a unique doctor/date/time constraint server-side. Patient and staff data must never be exposed through the public UI. Secrets belong in Vercel environment variables, never in Git.

## Backend status
This repository now contains the production UI foundation. Database/email credentials and provider connections must be configured before enabling real patient bookings; no fake credentials are committed.
