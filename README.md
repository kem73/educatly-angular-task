# Educatly Angular Task

An Angular application to view and manage articles. Users can browse through articles, view details, and explore content.

---

## Overview

This project is a web application built with Angular, allowing users to view articles in a list format. The app is designed to provide a simple, user-friendly interface for reading articles and exploring content.

---

## Key Features

- **Dynamic Article List**: View articles with titles, summaries, and links to full details.
- **Responsive Design**: Fully optimized for both mobile and desktop devices.
- **Article Details Page**: Click on an article to view full content.
- **Pagination**: Handles large datasets by paginating articles.
- **API Integration**: Fetches articles from a backend API (can be simulated using JSON Server or any mock API).

---

## Technologies Used

This project leverages the following technologies:

- **Angular**: Frontend framework for building the single-page application.
- **TypeScript**: Strongly typed superset of JavaScript.
- **RxJS**: For managing asynchronous operations and event-based programming.
- **Angular Material**: UI component library for creating modern, responsive designs.
- **Bootstrap**: For additional responsive grid layout (if used).
- **Backend API**: A backend server to fetch article data.
- **Angular Router**: For navigation between different pages of the app.
- **SCSS**: For writing modular, reusable styles.

---

## Setup Instructions

Follow these steps to set up the project locally:

1. **Clone the repository**

   git clone https://github.com/kem73/educatly-angular-task.git
   cd educatly-angular-task


2. **Install dependencies**

Ensure you have Node.js and npm installed. Then, run the following command to install the necessary dependencies:

npm install



1. **Start the development server**

To run the app locally, use the following command:

ng serve
Navigate to http://localhost:4200 in your browser to view the app.

## Running the Project

1. **Development Mode**
To start the application in development mode, use the following command:

ng serve
This will start a local development server at http://localhost:4200.

2. **Production Build**
For a production build, you can run:

ng build --prod
This will generate a production-ready build in the dist/ folder.




## Folder Structure
Here's a breakdown of the folder structure in this project:

src/
├── app/
│   ├── core/                  # Core services, models, and utilities
│   ├── pages/                 # Feature-specific modules like articles
│   │   ├── blog/              # Component for displaying article list
│   ├── app.module.ts          # Main Angular module
│   ├── app.component.ts       # Main component
│   ├── app-routing.module.ts  # Routing configuration
├── assets/                    # Static assets (images, icons, etc.)
├── environments/              # Environment-specific configurations (e.g., development, production)
├── styles/                    # Global styles
└── index.html                 # Main HTML file

- **Explanation of Key Folders**
core/: Contains singleton services and models (e.g., article.service.ts for API calls).
pages/: Contains the main features of the application, such as displaying articles and article details.
shared/: Holds reusable UI components (e.g., badge, error, empty) and custom pipes or directives.
assets/: Stores any images, icons, or other static files used in the application.




## Testing

To run unit tests for the Angular project, use the following command:
ng test


For end-to-end testing (E2E), use:
ng e2e




## Deployment
The app is deployed on Vercel:

Live Demo on Vercel :   https://educatly-angular-task.vercel.app/





Images Demo:
![alt text](image.png)

![alt text](image-1.png)



Live Demo:

https://educatly-angular-task.vercel.app/