export default function MarkRead(props) {
  return (
    <div className="mark-read">
      <button onClick={props.handleClick}>Mark all as read</button>
    </div>
  );
}
