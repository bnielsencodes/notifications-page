export default function Notification(props) {
  return (
    <div className="Notification">
      <div className="Notification--main">
        <img
          src={require(`../assets/images/${props.item.img}`)}
          alt="user avatar"
        />
        <div>
          <div>
            <p>
              <div>
                <span className="name">{props.item.name}</span>
                <span className="action">{props.item.action}</span>
                <span className="link primary-link">
                  {props.item.primaryLink}
                </span>
                <span className="link secondary-link">
                  {props.item.secondaryLink}
                </span>
                {/* <span></span> */}
              </div>
            </p>
            <span>{props.item.badge}</span>
          </div>
          <p className="time">{props.item.time}</p>
        </div>
      </div>
      <div>{props.item.message}</div>
    </div>
  );
}
