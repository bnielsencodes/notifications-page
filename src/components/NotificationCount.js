export default function NotificationCount(props) {
  return (
    <div className="notification-count">
      <h1>Notifications</h1>
      <div>
        <span>{props.unreadCount}</span>
      </div>
    </div>
  );
}
