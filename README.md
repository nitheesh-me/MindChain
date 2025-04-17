<p align="center">
  <a href="" rel="noopener">
 <img style="border-radius:10%" width=200px height=200px src="./docs/logo.png" alt="Bot logo"></a>
</p>

<!-- <h1 align="center">MindChain</h1> -->

<div align="center">

[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![university](https://img.shields.io/badge/university-IIIT_Hyderabad-orange.svg)]()
[![GitHub Issues](https://img.shields.io/github/issues/nitheesh-me/MindChain)](https://github.com/nitheesh-me/MindChain/issues)
[![GitHub Pull Requests](https://img.shields.io/github/issues-pr/nitheesh-me/MindChain)](https://github.com/nitheesh-me/MindChain/pulls)
[![License](https://img.shields.io/badge/license-CC0-blue.svg)](/LICENSE)

</div>

---

MindChain is a community-driven platform designed to connect help-seekers with experts across academics, research, and events at IIIT Hyderabad. It leverages advanced query matching, incremental notifications, and real-time communication for an efficient, human-centric experience.

## Features

- **Personalized Query Matching**: Matches help-seekers with domain experts based on expertise and availability.
- **Incremental Notifications**: Phased notifications ensure efficient response management.
- **Real-Time Communication**: Seamless chat interface for instant support.
- **User-Friendly Interface**: Responsive design for browser extensions and web applications.

## Tech Stack

- **Frontend**: React.js, Tailwind CSS
- **Backend**: Node.js (Express) or Python (FastAPI)
- **Database**: PostgreSQL, MongoDB
- **Real-Time**: WebSockets
- **Authentication**: JWT-based secure access

## Folder Structure

The repository is organized as follows:

```
MindChain/
├── backend/                # Backend services and APIs
│   ├── src/                # Source code for backend
│   │   ├── controllers/    # Request handlers
│   │   ├── models/         # Data models
│   │   ├── routes/         # API routes
│   │   ├── services/       # Business logic and services
│   │   ├── utils/          # Utility functions
│   │   └── app.js          # Entry point
│   ├── tests/              # Backend tests
│   ├── .env.example        # Environment variables template
│   └── package.json        # Backend dependencies
├── frontend/               # Frontend application
│   ├── src/                # Source code for frontend
│   │   ├── components/     # Reusable React components
│   │   ├── pages/          # Page components
│   │   ├── hooks/          # Custom React hooks
│   │   ├── styles/         # Tailwind and global styles
│   │   ├── utils/          # Utility functions
│   │   └── App.js          # Entry point
│   ├── public/             # Public assets
│   ├── tests/              # Frontend tests
│   ├── .env.example        # Environment variables template
│   └── package.json        # Frontend dependencies
├── docs/                   # Documentation
│   ├── API.md              # API documentation
│   ├── Architecture.md     # System architecture and design
│   └── README.md           # Additional documentation
├── scripts/                # Automation and deployment scripts
├── .gitignore              # Git ignore file
├── LICENSE                 # License file
└── README.md
```

## 📝 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Folder Structure](#folder-structure)
- [📝 Table of Contents](#-table-of-contents)
- [🏁 Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Installing](#installing)
- [🚀 Deploying Your Own Instance](#-deploying-your-own-instance)
- [✍️ Authors](#️-authors)
- [🎉 Acknowledgements](#-acknowledgements)

## 🏁 Getting Started

These instructions will help you set up the project locally for development and testing purposes.

### Prerequisites

Ensure you have the following installed:

- Node.js
- Python 3.8+
- PostgreSQL
- MongoDB

### Installing

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/MindChain.git
   cd MindChain
   ```

2. Set up the backend:

   ```bash
   cd backend
   cp .env.example .env
   bun install
   ```

3. Set up the frontend:

   ```bash
   cd ../frontend
   cp .env.example .env
   bun install
   ```

4. Start the development servers:

   ```bash
   # Backend
   cd backend
   bun start

   # Frontend
   cd ../frontend
   bun start
   ```

## 🚀 Deploying Your Own Instance

Refer to the [docs/Architecture.md](docs/Architecture.md) for deployment instructions.

## ✍️ Authors

- [@nitheesh-me](https://github.com/nitheesh-me) - Idea & Development

## 🎉 Acknowledgements

- Inspiration from similar platforms
- References to open-source libraries and tools