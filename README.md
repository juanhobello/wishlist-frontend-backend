
# wishlist-frontend-backend
## Project Description

This project was developed as part of a technical test, aiming to demonstrate skills in both frontend and backend development using React and Node.js with TypeScript.

The application is composed of two parts, with a greater emphasis on the frontend, as it is the main requirement of the test:

- Backend API:
    - Built with Node.js, Express, and TypeScript.
    - Provides an endpoint that returns a mock JSON for a product listing.
    - Developed following best practices, even as a simple implementation.

- Frontend:
    - Developed using React, TypeScript, and CSS Modules.
    - All components were built from scratch without using third-party UI libraries to showcase customizability and best practices.
        - Freatures:
            - API Connection: Implemented with Redux and Redux Toolkit.
            - Data Persistence: The wishlist is saved in the LocalStorage. Although it would ideally be stored in the API for cross-device accessibility, this solution suffices for the test's scope.
            - Testing: Implemented unit tests using Jest and React Testing Library to ensure components and integrations are functioning correctly.


## How to Run the Project

### To run the application, follow these steps:
 
1. Clone the repository:

```bash
  git clone <REPOSITORY_URL>
  cd <REPOSITORY_FOLDER_NAME>
```

2. Set up the Backend:

- Navigate to the backend folder:
    ```bash
     cd backend
    ```
- Install dependencies:
    ```bash
     npm install
    ```
- Start the server:
    ```bash
     npm run dev
    ```

3. Set up the Frontend:

- Navigate to the frontend folder:
    ```bash
     cd frontend
    ```
- Install dependencies:
    ```bash
     npm install
    ```
- Start the server:
    ```bash
     npm run dev
    ```
- To run the tests.:
    ```bash
     npm test
    ```

4. Access the application:
    - The backend will be available at http://localhost:<BACKEND_PORT>.
    - The frontend will be available at http://localhost:<FRONTEND_PORT>.

### Best Practices and Technical Decisions
#### Backend
- Built using Express and TypeScript.
- Modular and maintainable code structure.
- Organized with clear separation of routes, controllers, repositories and services.

#### Frontend
- Components built from scratch using React and CSS Modules, without third-party UI libraries.
- Redux Toolkit used for state management and API connection.
- Local data persistence with LocalStorage for the wishlist.
- Scalable and customizable design.

### Known Limitations
- The wishlist is stored locally instead of being persisted in the backend, which limits cross-device access.

### Potential Improvements
- Implement pagination in the backend API to handle larger product lists efficiently.
- Store the wishlist in the backend to allow users to access it from multiple devices.
- Add unit tests to improve code reliability and maintainability.
