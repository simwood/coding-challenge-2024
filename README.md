## Introduction

We do not want you to spend more than a couple of hours of your time on this challenge, so don't worry if you leave some tasks incomplete! In case it takes too long you can consider task 1 to be mandatory, task 2 optional and task 3 a bonus.

## Project Structure

- `/backend` - Backend code
- `/frontend` - Frontend code

To run the frontend and backend, use the following commands from the root folder:

- `npm run start:front` - Starts the frontend server
- `npm run start:back` - Starts the backend server

Both processes will automatically reload when code is modified.

### Frontend

Several components are pre-implemented to maintain styling consistency — feel free to use them. You may install additional packages if you find them necessary or beneficial (e.g., for state management, routing, etc.), but please keep dependencies reasonable.

### Backend

Only two backend endpoints are currently implemented:

- `GET /clients` - Returns the list of clients.
- `POST /auth` - Accepts basic auth credentials in the Authorization header and returns a JWT if the credentials are valid.

## Task 1: Authentication

- Implement a login screen. The authentication mechanism and endpoint are already set up on the backend, refer to the code for details. A few pre-registered users are available — see `/backend/data/users.json` for credentials.
- Ensure that the backend endpoint for retrieving clients is accessible only to logged-in users. The authentication endpoint returns a JWT that should be used for protecting other endpoints.
- Likewise, ensure that the frontend app (which currently consists only of the Clients screen) is accessible only to logged-in users.
- Cache the JWT token and automatically log in if it is still valid. Also, implement logout functionality.

## Task 2: UI & Data Access

- Add loading indicators to the frontend for API requests.
- Create an endpoint that returns aggregated revenue by country, and ensure it is accessible only to admin-level users.
- Create an admin page to display data from the above endpoint, again allowing access only to admin-level users. Include functionality to download this data in CSV format.
- Implement navigation between pages.

## Task 3: Improvements

- Congratulations on completing the challenge! Before we launch it to production, what improvements would you suggest? Feel free to add any features, optimizations, or best practices you believe would enhance the app's performance, security, or user experience. Please justify your choices bellow:

# Improvements

// TODO: Write your suggestions here 😁
