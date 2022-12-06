import NotificationCount from "./NotificationCount";
import MarkRead from "./MarkRead";

export default function Header() {
  return (
    <div className="Header">
      <NotificationCount />
      <MarkRead />
    </div>
  );
}
