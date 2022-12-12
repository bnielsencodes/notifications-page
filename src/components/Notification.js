export default function Notification(props) {
  return (
    <div className="notification">
      <img
        src={require(`../assets/images/${props.item.img}`)}
        alt="user avatar"
      />
      <div>
        <div>
          <span className="name">{props.item.name}</span>
          <span className="action">{props.item.action}</span>
          <span className="link primary-link">{props.item.primaryLink}</span>
          <span className="link secondary-link">
            {props.item.secondaryLink}
          </span>
          <span className="badge" style={props.badgestyles}></span>
        </div>
        <p className="time">{props.item.time}</p>
        <div id={props.item.messageId} className="message">
          {props.item.message}
        </div>
      </div>
    </div>
  );
}
