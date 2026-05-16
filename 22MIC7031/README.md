# Campus Notifications Microservice

This project is a campus notification platform where students receive real-time updates related to:

- Placements
- Events
- Results

The project is split into stages and implements both backend API handling and a frontend React application.

## Stage 1 — Backend / Notification Service

### Requirements

- Fetch notifications from the provided Notifications API
- Prioritize notifications using:
  - Placement > Result > Event
  - Recency
- Display the top `n` unread important notifications
- Maintain the top 10 efficiently as new notifications arrive
- Implement logging middleware
- Push code continuously to GitHub
- Create a `Notification_System_Design.md`

### API contract

The API response structure contains:

- `ID`
- `Type`
- `Message`
- `Timestamp`

Example notification types:

- `Placement`
- `Result`
- `Event`

## Stage 2 — Frontend Application

### Requirements

- React frontend built with Material UI
- Display all notifications
- Display priority notifications
- Filter by notification type
- Pagination support
- Viewed / unviewed notification states
- Responsive UI
- Run on http://localhost:3000

### Backend API query support

The backend API supports query parameters for:

- `limit`
- `page`
- `notification_type`

Output
<img width="1910" height="1016" alt="image" src="https://github.com/user-attachments/assets/f19dad4d-848b-4fe8-a2f2-90a6cd6e9cac" />


<img width="1841" height="889" alt="image" src="https://github.com/user-attachments/assets/6d6b612a-91c2-4556-a6ca-d4baf48a730c" />


<img width="1839" height="893" alt="image" src="https://github.com/user-attachments/assets/3bf6d175-8f82-4209-96e8-752beb9e1c29" />


<img width="1824" height="858" alt="image" src="https://github.com/user-attachments/assets/c44736ab-1e7c-42bb-8e49-73654893f7c9" />
