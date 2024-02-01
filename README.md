# Prosper Test

## Overview

This README provides an overview of the technologies and dependencies chosen for the development of the the Prosper takehome test. The app facilitates users to ask questions and interact with a PDF document within the user interface.

## Technologies and Dependencies

- **React:** React was chosen as the primary frontend library for building the user interface of the due to its declarative and component-based nature.

- **TypeScript:** TypeScript was selected as the programming language for the project due to its strong static typing capabilities, which help catch errors during development and provide better code maintainability and scalability compared to plain JavaScript.

- **Vite:** Vite was chosen as the build tool for the project due to its fast build times and modern development experience, enabling quicker development iterations and efficient bundling of assets.

- **Tailwind CSS:** This was my first time using Tailwind, but since in the previous interviews you guys told me that is what you use, I've tried to experience this by myself.

- **PNPM:** PNPM was chosen as the package manager for managing project dependencies due to its deterministic dependency resolution and disk space efficiency.

- **Toastify:** Toastify was selected as the notification library for displaying toast messages within the application, providing a simple and customizable way to notify users about various events and actions.

- **react-pdf-viewer:** react-pdf-viewer was chosen as the PDF viewer component for rendering PDF regarding the test instructions.

## Execution

To run the the project locally, follow these steps:

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/matheusgrandi/prosper-test

   ```

2. Go to the directory

   ```bash
   cd prosper-test

   ```

3. Install the dependencies

   ```bash
   pnpm install

   ```

4. Run the project
   ```bash
   pnpm dev
   ```

## Difficulties

This project was very interesting to work with, since it goes over around a different needs.
For me the most challenge part was customizing the pdf-viewer. The documentation is very poor and there's not a lot of thing on internet to check how it works. I could handle that reading the github forum of this project and also reading the methods that were being called in order to style it.
Another point is that the API was very unstable, not working some times.

## Useful references

- Pnpm: https://pnpm.io/installation
