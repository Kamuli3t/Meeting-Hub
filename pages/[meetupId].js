import MeetupDetail from "../components/meetups/MeetupDetail";

function MeetupDetails(props) {
  return (
    <MeetupDetail
      id="m1"
      title="Asmara"
      image="https://upload.wikimedia.org/wikipedia/commons/6/61/Asmara%2C_cattedrale_cattolica%2C_01.JPG"
      address="Maekel,Eritrea"
      description="This is the capital city of Eritrea."
    />
  );
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
