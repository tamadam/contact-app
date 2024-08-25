## Table of Contents

- [Contact App](#contact-app)
- [App Features](#app-features)
- [Screenshots](#screenshots)
- [Running the Project Locally](#running-the-project-locally)

## Contact App

Welcome to the Contact App! This application provides a straightforward way to manage your contacts. You can easily create new contacts, edit existing ones, or delete those you no longer need. All your contacts are displayed in a convenient list format for easy viewing. Additionally, you have the option to upload profile pictures, making your contact list more personalized and visually engaging. Perfect for keeping your connections organized and accessible!

## App Features

* **Create, edit, delete, and view** contacts easily, with **form pre-population** and **validation powered by Zod**
* Upload and store profile pictures in an **Amazon S3** bucket
* Toggle between **Dark and Light modes**
* Responsive layout

## Screenshots
**Home page - Desktop**             |  **Home page - Mobile**
:-------------------------:|:-------------------------:
![image](https://github.com/user-attachments/assets/5c4410e5-8320-450b-b851-2ea9564765f9)  |  ![image](https://github.com/user-attachments/assets/565439ce-d655-44e5-8997-f579e465c45a)

**Light Mode - Desktop**             |  **Light mode - Mobile**
:-------------------------:|:-------------------------:
![image](https://github.com/user-attachments/assets/314a5b05-9404-4cd0-b64e-6cb996a48636) | ![image](https://github.com/user-attachments/assets/72129aeb-8891-4aae-a9d2-44e375648b02)


**Contact Form - Desktop**             |  **Contact Form - Mobile**
:-------------------------:|:-------------------------:
![image](https://github.com/user-attachments/assets/5a3b53a0-8b15-45ed-a2f6-210af413ba6e) | ![image](https://github.com/user-attachments/assets/d9ecf395-794f-41a2-9ba9-aa3e01a37f57)


## Running the Project Locally

The program is deployed to GitHub using a PostgreSQL database. However, you can easily run the project locally using an **SQLite database** by following these steps:

* Clone the repository
* Make sure you have Node.js and npm installed, then run: **npm install**
* Set Up the SQLite Database
  * Locate the **prisma** folder and delete the migrations folder
  * In the **schema.prisma** file, comment out the PostgreSQL configuration and uncomment the SQLite configuration
* Run Database Migrations by **npx prisma migrate dev**
* Create Environment Files:
  * Create a .env file at the root of the project and add the following variable: ```NEXT_PUBLIC_API_URL="http://localhost:3000/api"```
  * If you want to enable AWS image upload functionality, you need to set up an S3 bucket. Then, create these variables in the .env file:
    ```
    AWS_S3_REGION=""
    AWS_S3_ACCESS_KEY=""
    AWS_S3_SECRET_KEY=""
    AWS_S3_BUCKET_NAME=""
    ```
* Start the Development Server: **npm run dev**


