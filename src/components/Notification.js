export default function Notification(props) {
  const badgeStyles = {
    display: props.item.read ? "none" : "inline-block",
    backgroundColor: props.item.read ? "transparent" : "#f65552",
    marginLeft: props.item.id !== 2 ? "6px" : "0px",
  };

  const messageStyles = {
    display: props.item.id !== 4 ? "none" : "block",
  };

  const postImgStyles = {
    display: props.item.id !== 5 ? "none" : "block",
  };

  return (
    <div
      className="notification"
      style={{ backgroundColor: props.item.read ? "transparent" : "#f7fafd" }}
    >
      <img
        className="avatar"
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
          <span className="badge" style={badgeStyles}></span>
        </div>
        <p className="time">{props.item.time}</p>
        <div
          id={props.item.messageId}
          className="message"
          style={messageStyles}
        >
          {props.item.message}
        </div>
      </div>
      <img
        className="postImg"
        src={require(`../assets/images/${props.item.postImg}`)}
        alt="referred to"
        style={postImgStyles}
      />
    </div>
  );
}
