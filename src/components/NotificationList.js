import Notification from "./Notification";
import data from "../data";

export default function NotificationList() {
  const notifications = data.map((item) => {
    return <Notification key={item.id} item={item} />;
  });

  return <div className="NotificationList">{notifications}</div>;
}
