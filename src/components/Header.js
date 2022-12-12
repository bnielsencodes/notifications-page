import NotificationCount from "./NotificationCount";
import MarkRead from "./MarkRead";

export default function Header(props) {
  return (
    <div className="header">
      <NotificationCount />
      <MarkRead handleClick={props.handleClick} />
    </div>
  );
}
