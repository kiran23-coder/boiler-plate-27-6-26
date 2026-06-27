# KIAAN CORE - Architecture & Development Guidelines

## IMPORTANT

Before implementing anything, understand the vision of this project.

This is **NOT** a CRM.

This is **NOT** an HRMS.

This is **NOT** an ERP.

This is **NOT** a Hospital Management System.

This is **NOT** a School Management System.

This project is a **Reusable SaaS Boilerplate + Core Platform**.

Its purpose is to become the foundation for all future SaaS applications.

---

# Vision

Think of KIAAN CORE as our own version of:

* Laravel
* Supabase
* Firebase
* Clerk
* Shadcn UI
* SaaS Boilerplate

combined into one platform.

Future products like:

* CRM
* HRMS
* ERP
* Hospital
* School
* Inventory
* POS
* Restaurant
* Payroll
* LMS

will **NOT** implement authentication, users, roles, billing, notifications, storage, AI, reports, etc.

They will simply plug into KIAAN CORE.

Every new SaaS should only contain business logic.

Everything else must come from KIAAN CORE.

---

# Development Philosophy

Always ask yourself:

"Can this feature be reused in every future SaaS?"

If YES

→ Build it inside KIAAN CORE.

If NO

→ Do NOT add it.

---

# Never Build Business Modules

Do NOT create modules like:

Customers

Employees

Students

Doctors

Patients

Suppliers

Products

Sales

Purchase

Invoices

Attendance

Payroll

Medicines

Admissions

Appointments

Leads

Deals

Projects

Tasks

These belong to business applications.

Not to the framework.

---

# Only Build Generic Modules

Build reusable infrastructure like:

Authentication

Identity

Organizations

Users

Roles

Permissions

Multi Tenant

Subscription

Feature Flags

Workflow Engine

Notification Engine

Storage

Audit Logs

Activity

Dashboard Builder

Report Builder

Form Builder

API Management

AI Platform

Search Engine

Theme Engine

Localization

Monitoring

Analytics

Settings

Developer Center

Super Admin

Everything must be generic.

---

# UI Philosophy

The UI should never feel like a CRM.

It should feel like a platform.

Think:

Supabase Dashboard

Firebase Console

Vercel Dashboard

Stripe Dashboard

GitHub Settings

Not:

CRM

ERP

HRMS

---

# Component Philosophy

Every UI component must be reusable.

Examples:

Table

Data Grid

Form

Drawer

Modal

Search

Filters

Pagination

File Upload

Avatar

Breadcrumb

Sidebar

Topbar

Charts

Cards

Stats

Badges

Alerts

Tabs

Accordion

Buttons

Inputs

Select

Date Picker

Everything should be configurable.

Never duplicate components.

---

# CRUD Philosophy

Every CRUD page should use the same reusable layout.

Structure:

Header

Description

Search

Filters

Toolbar

Table

Pagination

Drawer

Confirmation Dialog

No custom CRUD pages unless absolutely necessary.

---

# Code Philosophy

Never hardcode values.

Everything should be:

Reusable

Modular

Configurable

Extendable

Maintainable

Scalable

Every module should work independently.

Every service should be injectable.

Every page should reuse existing components.

Avoid duplicate logic.

---

# Folder Philosophy

Organize code by modules.

Example:

core/

authentication/

organization/

users/

roles/

permissions/

tenant/

subscription/

notifications/

storage/

workflow/

reports/

dashboard/

api/

ai/

settings/

system/

developer/

shared/

components/

hooks/

services/

utils/

No business folders should exist inside KIAAN CORE.

---

# Future Architecture

Example

KIAAN CORE

↓

Install CRM Module

↓

CRM Ready

---

KIAAN CORE

↓

Install HRMS Module

↓

HRMS Ready

---

KIAAN CORE

↓

Install Hospital Module

↓

Hospital Ready

---

KIAAN CORE

↓

Install School Module

↓

School Ready

The framework should never need modifications.

Only new business modules should be added.

---

# Final Goal

KIAAN CORE should become an internal framework that powers every SaaS product we build.

When building a new product, developers should only write business-specific modules.

Authentication, Users, Roles, Permissions, Billing, Notifications, Reports, Storage, AI, APIs, Workflows, Settings, Monitoring, Analytics and all shared functionality must already exist inside KIAAN CORE.

Every decision, every component and every module should be made with reusability as the highest priority.

**Golden Rule:**

> If a feature can be reused across multiple SaaS products, build it in KIAAN CORE.
>
> If it is specific to only one business domain, do NOT build it here. It belongs in the business module, not in the boilerplate.
