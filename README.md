# MyContacts Backend API

This is the backend API for the MyContacts application, built with Node.js, Express, and MongoDB. It provides authentication and contact management features.

## Features

-   **User Authentication**: Register and login users with JWT authentication.
-   **Contact Management**: Create, read, update, and delete contacts.
-   **Secure Endpoints**: Protected routes using JWT middleware.
-   **Error Handling**: Centralized error handling for consistent API responses.

## Technologies Used

-   **Node.js**: JavaScript runtime environment.
-   **Express**: Fast, unopinionated, minimalist web framework for Node.js.
-   **MongoDB**: NoSQL database for storing application data.
-   **Mongoose**: Elegant MongoDB object modeling for Node.js.
-   **JSON Web Token (JWT)**: For secure user authentication and authorization.
-   **Bcrypt**: For hashing user passwords.
-   **Dotenv**: For loading environment variables.

## Getting Started

### Prerequisites

-   [Node.js](https://nodejs.org/) installed on your machine.
-   [MongoDB](https://www.mongodb.com/) installed locally or a generic MongoDB Atlas connection string.

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/TrieuNguyenPhu/mycontacts-backend.git
    ```
2.  Navigate to the project directory:
    ```bash
    cd mycontacts-backend
    ```
3.  Install dependencies:
    ```bash
    npm install
    ```
4.  Create a `.env` file in the root directory and add the following environment variables:
    ```env
    PORT=5001
    CONNECTION_STRING=mongodb+srv://<username>:<password>@cluster0.example.mongodb.net/mycontacts-backend?retryWrites=true&w=majority
    ACCESS_TOKEN_SECRET=your_secret_access_token
    ```

### Running the Application

-   **Development Mode** (using nodemon):
    ```bash
    npm run dev
    ```
    The server will start on the port specified in `.env` (defaulting to 5000 or 5001).

-   **Production Mode**:
    ```bash
    npm start
    ```

## API Endpoints

### User Authentication

| Method | Endpoint | Description | Access |
|---|---|---|---|
| POST | `/api/users/register` | Register a new user | Public |
| POST | `/api/users/login` | Login user and get access token | Public |
| GET | `/api/users/current` | Get current user information | Private |

### Contacts

| Method | Endpoint | Description | Access |
|---|---|---|---|
| GET | `/api/contacts` | Get all contacts for the logged-in user | Private |
| POST | `/api/contacts` | Create a new contact | Private |
| GET | `/api/contacts/:id` | Get a specific contact by ID | Private |
| PUT | `/api/contacts/:id` | Update a contact by ID | Private |
| DELETE | `/api/contacts/:id` | Delete a contact by ID | Private |

**Note**: Private endpoints require a Bearer Token in the `Authorization` header:
```
Authorization: Bearer <your_access_token>
```

## Error Handling

The API uses a custom error handling middleware to return structured error responses in JSON format, including the error message and stack trace (in development mode).

## License

This project is licensed under the MIT License.
