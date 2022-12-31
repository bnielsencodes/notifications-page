import React, { useState } from "react";
import data from "./data";
import Header from "./components/Header";
import NotificationList from "./components/NotificationList";
import Notification from "./components/Notification";

export default function App() {
  const [notification, setNotification] = useState(data);

  const badgeStyles = {
    display: read ? "none" : "inline-block",
    backgroundColor: read ? "transparent" : "#f65552",
  };
  const unreadCount = notification.filter(
    (notification) => notification.read === false
  ).length;


  // map through data.js to create Notification components
  const notifications = notification.map((item) => {
    return <Notification key={item.id} item={item} />;
  });

  return (
    <div className="App">
      <Header unreadCount={unreadCount} markAllRead={markAllRead} />
      <NotificationList notifications={notifications} />
    </div>
  );
}
