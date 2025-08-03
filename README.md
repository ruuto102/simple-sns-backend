# Cosbum
This repository hosts the backend code for Cosbum, a social media platform designed for Cosplayers. 
The backend is built using NestJS, a progressive Node.js framework for building efficient and scalable server-side applications.

## 🛠️ Project setup

Create an `.env` file in the root directory of your project and add the following environment variables:

```env
MONGO_INITDB_ROOT_USERNAME=your_username
MONGO_INITDB_ROOT_PASSWORD=your_password
KEYCLOAK_ADMIN=your_username
KEYCLOAK_ADMIN_PASSWORD=your_password
```

After that you can run the following command to set up the project dependencies:

```bash
$ npm install
```

Run the docker compose command to start the MongoDB and Keycloak services:

```bash
$ docker compose up -d
```

### 🔏 Keycloak setup
This setup is currently manual and might change in the future.
1. Open Keycloak in your browser at `http://localhost:8080`.
2. Login with the admin credentials you set in the `.env` file.
3. Create a new realm named `cosbum`.
4. Create a new client named `cosbum` with the following settings:
   1. General Settings:
       - Client ID: `cosbum-frontend`
   2. Capability config:
       - Client authentication: `Off`
       - Authentication flow: `Standard flow` and `Direct Access Grants`
       - PKCE method: `S256`
   3. Login Settings:
       - Root URL: `http://localhost:5173`
       - Home URL: `http://localhost:5173`
       - Valid Redirect URIs: `http://localhost:5173/*`
       - Valid Post Logout Redirect URIs: `http://localhost:5173/*`
       - Web Origins: `http://localhost:5173`
       - Admin URL: `http://localhost:5173`
5. Go to Realm settings, the "Login" tab, and enable "User Registration".
