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

  // map through data.js to create Notification components
  const notifications = data.map((item) => {
    return (
      <Notification
        key={item.id}
        item={item}
        readValue={item.read}
        badgestyles={badgeStyles}
      />
    );
  });

  return (
    <div className="App">
      <Header handleClick={markAllRead} />
      <NotificationList notifications={notifications} />
    </div>
  );
}
