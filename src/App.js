import React from "react";
import data from "./data";
import Header from "./components/Header";
import NotificationList from "./components/NotificationList";
import Notification from "./components/Notification";
import "./App.css";

export default function App() {
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
