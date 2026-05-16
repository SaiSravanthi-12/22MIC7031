import { useEffect, useState } from "react";

import { notifications as initialData } from "../api/notificationApi";

import { Log } from "../utils/logging_middleware/logger";

const useNotifications = () => {
  const [notifications, setNotifications] =
    useState(initialData);

  useEffect(() => {
    Log(
      "frontend",
      "info",
      "hook",
      "Notification hook initialized"
    );
  }, []);

  const markAsRead = (id: number) => {
    setNotifications((prev) =>
      prev.map((notification) =>
        notification.id === id
          ? { ...notification, read: true }
          : notification
      )
    );

    Log(
      "frontend",
      "info",
      "state",
      `Notification ${id} marked as read`
    );
  };

  const deleteNotification = (id: number) => {
    setNotifications((prev) =>
      prev.filter(
        (notification) =>
          notification.id !== id
      )
    );

    Log(
      "frontend",
      "warn",
      "state",
      `Notification ${id} deleted`
    );
  };

  return {
    notifications,
    markAsRead,
    deleteNotification,
  };
};

export default useNotifications;