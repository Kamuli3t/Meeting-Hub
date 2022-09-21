import MeetupDetail from "../components/meetups/MeetupDetail";

function MeetupDetails(props) {
  return (
    <MeetupDetail
      id={props.id}
      title={props.title}
      image={props.image}
      address={props.address}
      description={props.description}
    />
  );
}

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  // fetch from API
  const meetupId = context.params.meetupId;

  return {
    props: {
      meetupData: {
        id: meetupId,
        title: "Asmara",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/6/61/Asmara%2C_cattedrale_cattolica%2C_01.JPG",
        address: "Maekel,Eritrea",
        description: "This is the capital city of Eritrea.",
      },
    },
  };
}

export default MeetupDetails;
