# CodeByte

Welcome to the Next.js 14 Blog Platform!

This application is a blog platform built with Next.js 14. It empowers users to sign in via Google OAuth, interact with a MongoDB database, and perform operations like creating, reading, updating, and deleting blog articles.

## Installation

To get started with the platform, follow these steps:

1. Clone this repository to your local system:

    ```bash
    git clone <repository_URL>
    ```

2. Navigate to the project directory:

    ```bash
    cd nextjs-blog-platform
    ```

3. Install all the required dependencies using npm:

    ```bash
    npm install
    ```

## Setup

To configure the application, you need to set up environment variables. Follow these instructions:

1. Create a `.env` file in the root directory of the project.

2. Add the following environment variables to the `.env` file:

    ```plaintext
    GOOGLE_ID=<YOUR_GOOGLE_CLIENT_ID>
    GOOGLE_SECRET=<YOUR_GOOGLE_CLIENT_SECRET>

    NEXTAUTH_URL=http://localhost:3000
    NEXTAUTH_SECRET=<YOUR_NEXTAUTH_SECRET>

    DATABASE_URL=<YOUR_MONGODB_DATABASE_URL>

    NEXT_PUBLIC_BASE_URL=http://localhost:3000

    FIREBASE=<YOUR_FIREBASE_API_KEY>
    ```

    Note:

    - Replace `<YOUR_GOOGLE_CLIENT_ID>` and `<YOUR_GOOGLE_CLIENT_SECRET>` with your Google OAuth client ID and client secret.
    - Replace `<YOUR_NEXTAUTH_SECRET>` with a securely generated secret for NextAuth.
    - Replace `<YOUR_MONGODB_DATABASE_URL>` with your MongoDB database connection URL.
    - Replace `<YOUR_FIREBASE_API_KEY>` with your Firebase API key.
    - Ensure to keep this `.env` file secure and never expose it publicly, especially in version control systems.

3. To generate a secure NextAuth secret, run the following command in your terminal:

    ```bash
    openssl rand -base64 32
    ```

## Usage

Follow these steps to run the application:

1. Start the development server:

    ```bash
    npm run dev
    ```

2. Open your web browser and go to http://localhost:3000 to access the blog platform.

3. Sign in using your Google account to start creating, reading, updating, and deleting blog articles.

Enjoy using the Next.js 14 Blog Platform! If you have any questions or feedback, feel free to reach out.
