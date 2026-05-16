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

## Notes

This project should serve as a full-stack campus notification management system with notification prioritization, type filtering, and real-time-style handling.

If you want, I can also add the `Notification_System_Design.md` file and wire the API query parameters into the frontend filter/pagination implementation.
