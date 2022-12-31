export default function MarkRead(props) {
  return (
    <div className="mark-read">
      <button onClick={props.markAllRead} >
        Mark all as read
      </button>
    </div>
  );
}
