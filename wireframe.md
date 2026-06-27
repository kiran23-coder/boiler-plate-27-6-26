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