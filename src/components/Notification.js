export default function Notification(props) {
  return (
    <div className="Notification">
      <div>
        <img
          src={require(`../assets/images/${props.item.img}`)}
          alt="user avatar"
        />
        <div>
          <div>
            <p>
              <span>{props.item.name}</span>
              <div>
                <span>{props.item.action}</span>
                <span>{props.item.link}</span>
                {/* <span></span> */}
              </div>
            </p>
            <span>{props.item.badge}</span>
          </div>
          <p>{props.item.time}</p>
        </div>
      </div>
      <div>{props.item.message}</div>
    </div>
  );
}
