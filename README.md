# Ajackus-tech
## User Management Dashboard

A modern, responsive **User Management Dashboard** built with **React** and **TailwindCSS**, featuring CRUD operations, filtering, pagination, and toast notifications. The dashboard uses **JSONPlaceholder** as a mock backend API for demonstration purposes.

---

## Table of Contents

- [Demo](#demo)  
- [Features](#features)  
- [Technologies](#technologies)  
- [Setup & Installation](#setup--installation)  
- [Project Structure](#project-structure)  
- [Usage](#usage)  
- [Known Limitations](#known-limitations)  
- [Future Improvements](#future-improvements)  
- [Development Timeline](#development-timeline)  

---

## Demo

>[Live Url](https://melodic-faun-a72fb1.netlify.app/)

Example screenshot:  
![Dashboard Screenshot](./user-management-dashboard/assets/Screenshot%202025-09-21%20224044.png)  

---

## Features

### User Interface
- Responsive **grid-based user cards** with animations and hover effects  
- Search users by **name, email, or department**  
- Filter users via a **popup form**  
- Add/Edit/Delete users with **modal forms**  
- Pagination with **customizable limits** (10, 25, 50, 100)  
- **Loading spinners** for API requests  
- **Toast notifications** for success/error actions  

### Backend Interaction
- Fetches users from **JSONPlaceholder `/users` endpoint`**  
- Simulated CRUD operations (Add, Edit, Delete) via API requests  

### Animations & UI
- Flip animations for user cards  
- Smooth **fade-in modals** and **scale-up transitions**  
- Interactive **buttons with gradient backgrounds and hover effects**  

---

## Technologies

- **React 18** (Functional Components + Hooks)  
- **TailwindCSS** (Responsive, utility-first CSS framework)  
- **Axios** for API requests  
- **Vite** for fast development build  
- **Lucide-React** for vector icons  

---

## Setup & Installation

1. Clone the repository:

```bash
git clone "github url"
cd user-management-dashboard
```
2. Install dependencies:

```bash
npm install
```
3. Run The Project:

```bash
npm run dev
```

