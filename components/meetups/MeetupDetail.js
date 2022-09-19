import classes from "./MeetupDetail.modules.css";

function MeetupDetail(props) {
  return (
    <section className={classes.details}>
      <img src={props.image} alt={props.title} />
      <h1>{props.title}</h1>
      <address>{props.address}</address>
      <p>{props.address}</p>
    </section>
  );
}

export default MeetupDetail;
