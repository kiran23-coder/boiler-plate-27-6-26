Sir ko "Admin Panel" nahi chahiye. Sir ko "Laravel + Firebase + Supabase + Clerk + Shadcn" jaisa apna ecosystem banana hai.

Main is requirement ko 4 layers me divide karunga.

KIAAN CORE ARCHITECTURE
                        KIAAN CORE PLATFORM

┌────────────────────────────────────────────────────────────────────┐
│                      SaaS Products Layer                           │
├────────────────────────────────────────────────────────────────────┤
│ CRM │ HRMS │ Hospital │ School │ ERP │ POS │ Inventory │ Payroll │
└────────────────────────────────────────────────────────────────────┘
                                ▲
                                │
                    Plug Business Modules Here
                                │
┌────────────────────────────────────────────────────────────────────┐
│                 Shared SaaS Framework Layer                        │
├────────────────────────────────────────────────────────────────────┤
│ Authentication                                                     │
│ Organization                                                       │
│ User Management                                                    │
│ Roles & Permissions                                                │
│ Multi Tenant                                                       │
│ Subscription                                                       │
│ Billing                                                            │
│ Notifications                                                      │
│ Reports                                                            │
│ Dashboard Builder                                                  │
│ Workflow Engine                                                    │
│ Storage                                                            │
│ AI Platform                                                        │
│ API Management                                                     │
│ Search Engine                                                      │
│ Localization                                                       │
│ Theme Engine                                                       │
│ Settings                                                           │
└────────────────────────────────────────────────────────────────────┘
                                ▲
                                │
┌────────────────────────────────────────────────────────────────────┐
│                     BaaS Infrastructure                            │
├────────────────────────────────────────────────────────────────────┤
│ PostgreSQL                                                         │
│ Redis                                                              │
│ Queue                                                              │
│ Scheduler                                                          │
│ File Storage                                                       │
│ Cache                                                              │
│ Background Jobs                                                    │
│ Monitoring                                                         │
│ Logging                                                            │
│ APIs                                                               │
└────────────────────────────────────────────────────────────────────┘
Sidebar Wireframe

Sirf reusable modules.

────────────────────────────
## Step-by-Step Workflow (Super Admin Journey)

Ye section explain karta hai ki **Kiaan Core** (SaaS Boilerplate) step-by-step kaise kaam karta hai jab ek Super Admin login karta hai.

**Step 1: Super Admin Login (Identity)**
- Super Admin `Authentication` page par apni details dalta hai.
- Backend credentials verify karke JWT token aur 'Role Permissions' return karta hai.
- `AuthContext` backend se aayi in permissions ko globally store karta hai.

**Step 2: Dynamic Sidebar & UI Rendering**
- Login ke baad system decide karta hai ki is user ko kya-kya dikhna chahiye.
- `Sidebar.jsx` hardcoded roles ki jagah backend se aayi permissions read karta hai, aur sirf allowed menus (jaise Multi Tenant, Access Control, Settings) render karta hai.

**Step 3: Multi-Tenant Setup (Base Framework)**
- Super Admin **Multi Tenant > Tenants** par jata hai.
- Ek naya Tenant (eg: "Acme Corp") create karta hai.
- Us Tenant ke liye Custom Domains, aur UI Branding (Logos, Colors) set karta hai.

**Step 4: Access Control Configuration**
- **Access Control > Permissions**: Super admin system ke har module (View, Edit, Delete) ke granular rights banata hai.
- **Access Control > Roles**: Fir ek "Role" (eg: Manager) banata hai aur usme Permissions add karta hai.
- **Access Control > Users**: Naye users invite kiye jate hain, jinhe ek "Role" assign kiya jata hai. Isse "Users ➔ Roles ➔ Permissions" ka strict flow maintain hota hai.

**Step 5: Organization Structure Setup**
- **Organization > Branches**: Tenant ke alag-alag Branches banaye jate hain.
- **Organization > Departments**: Branches ke andar Departments (HR, IT, Sales) bante hain.
- **Organization > Teams**: In Departments ke andar Teams banti hain, jisme Users ko daala jata hai.

**Step 6: Subscription & Monetization**
- SaaS platform ko monetize karne ke liye **Subscription > Plans** me alag-alag tiers (Free, Pro, Enterprise) banaye jate hain.
- **Subscription > Features** me plan ki limitations set hoti hain.
- Billing aur Invoices manage kiye jate hain.

**Step 7: Universal Features (AI, Storage, Workflows)**
- **AI Platform**: LLM Providers (OpenAI, Claude) connect hote hain.
- **Workflow**: Auto-triggers banaye jate hain (eg: Jab naya user aaye, to welcome email bhejo).
- **Storage / Notifications**: Files aur Emails centrally manage hote hain.

*(Note: Is pure safar (workflow) me kisi bhi specific business logic jaise 'Patient', 'Lead', ya 'Student' ka zikr nahi hai. Ye sirf ek Engine hai jiske upar future SaaS apps plug hongi.)*
────────────────────────────

🏠 Dashboard

────────────────────────────

🔐 Identity

    Authentication

    Sessions

    Devices

    Login History

────────────────────────────

🏢 Organization

    Organizations

    Branches

    Departments

    Teams

────────────────────────────

👥 Access Control

    Users

    Roles

    Permissions

────────────────────────────

🏢 Multi Tenant

    Tenants

    Domains

    Branding

────────────────────────────

💳 Subscription

    Plans

    Features

    Coupons

    Billing

    Invoices

────────────────────────────

🔔 Notifications

    Templates

    Channels

    Logs

────────────────────────────

📁 Storage

    Files

    Media

────────────────────────────

🤖 AI Platform

    Providers

    Prompt Library

    Knowledge Base

────────────────────────────

⚡ Workflow

    Workflows

    Automations

────────────────────────────

📄 Reports

    Report Builder

────────────────────────────

📊 Dashboard Builder

────────────────────────────

🧩 Form Builder

────────────────────────────

🌐 API

    API Keys

    Webhooks

────────────────────────────

⚙ Settings

────────────────────────────

📈 Analytics

────────────────────────────

🛠 System

    Audit

    Activity

    Monitoring

────────────────────────────

👑 Super Admin
Dashboard Wireframe
+---------------------------------------------------------------+

Dashboard

---------------------------------------------------------------

[ Total Tenants ]
[ Total Users ]
[ API Requests ]
[ Storage Used ]

---------------------------------------------------------------

Quick Actions

Create Tenant

Invite User

Generate API Key

Create Workflow

---------------------------------------------------------------

Recent Activity

---------------------------------------------------------------

Recent Audit Logs

---------------------------------------------------------------

System Health

CPU

RAM

Database

Queue

Storage

---------------------------------------------------------------
Universal CRUD Page

Har page isi template se banega.

Breadcrumb

Title

Description

--------------------------------------------------------

Search

Advanced Filters

Export

Import

Refresh

+ Add

--------------------------------------------------------

Table

--------------------------------------------------------

Pagination

--------------------------------------------------------

Isi se

Users
Roles
Plans
Tenants
Files
APIs

sab chalenge.

Drawer
+---------------------------------------------+

Create Resource

---------------------------------------------

Basic Information

Advanced Settings

Metadata

Custom Fields

---------------------------------------------

Cancel

Save

+---------------------------------------------+

Popup nahi.

Drawer.

Component Library

Ye sab reusable hone chahiye.

App Layout

Sidebar

Topbar

Breadcrumb

Card

Stat Card

Table

Data Grid

Search

Pagination

Filters

Drawer

Modal

Tabs

Accordion

Badge

Avatar

Button

Input

Textarea

Switch

Checkbox

Radio

Date Picker

Time Picker

Select

Multi Select

File Upload

Rich Editor

Color Picker

Icon Picker

Loader

Skeleton

Empty State

Charts

Toast

Alert
Folder Structure
src

core

    authentication

    organization

    users

    roles

    permissions

    tenants

    billing

    workflow

    notifications

    ai

    storage

    api

    reports

    dashboard

    settings

    analytics

components

layouts

hooks

services

utils

pages

shared

Business module ka folder hi nahi hona chahiye.

Sabse Important Rules
❌ Never create

Customers

Leads

Products

Invoices

Doctors

Students

Employees

Medicines

Orders

Sales

Purchase

Payroll

Attendance

Hospital

CRM

HRMS

ERP

POS

Inventory

These are SaaS modules.

Not Boilerplate.
Future me aise use hoga
KIAAN CORE

↓

Install CRM Module

↓

Customers

Leads

Deals

Done

----------------------------

KIAAN CORE

↓

Install HRMS Module

↓

Employees

Attendance

Leave

Payroll

Done

----------------------------

KIAAN CORE

↓

Install Hospital Module

↓

Doctors

Patients

Appointments

Done
Antigravity ke liye Final Instruction

Ye line document ke end me bold me likho:

IMPORTANT

This project is NOT a business application.

It is a reusable SaaS Boilerplate and Core Platform.

Every screen, component, API, service, layout, form, table and module must be generic and reusable.

Do not implement CRM, HRMS, ERP, POS, Hospital, School, Inventory or any other business-specific functionality.

The framework should only provide shared infrastructure.

Future SaaS products will plug into this framework as independent business modules.

Think of KIAAN CORE as an operating system for SaaS applications, where products are installed as modules rather than built from scratch.
Ek aur suggestion

Ek hi WIREFRAME.md se kaam chal jayega, lekin agar tum Antigravity se best output chahte ho to project me ye 5 documents rakho:

01_PRODUCT_VISION.md – KIAAN Core kya hai.
02_SYSTEM_ARCHITECTURE.md – Layer architecture + folder structure.
03_UI_WIREFRAME.md – Har screen ka ASCII wireframe.
04_COMPONENT_LIBRARY.md – Reusable UI components aur rules.
05_DEVELOPMENT_RULES.md – Coding standards, "no business modules", reusable-first approach.

Is tarah AI ko context bahut clear milega aur implementation bhi zyada consistent rahegi.