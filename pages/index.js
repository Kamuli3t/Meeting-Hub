import { useEffect, useState } from "react";
import MeetupList from "../components/meetups/MeetupList";

const DUMMY_LIST = [
  {
    id: "m1",
    title: "Asmara",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/6/61/Asmara%2C_cattedrale_cattolica%2C_01.JPG",
    address: "Maekel,Eritrea",
    description: "This is the capital city of Eritrea.",
  },
  {
    id: "m2",
    title: "Massawa",
    image: "http://kevinstravelblog.com/wp-content/uploads/2017/02/DSC1974.jpg",
    address: "Northern-Redsea,Eritrea",
    description: "This is the turists favorite city of Eritrea.",
  },
];

function HomePage(props) {
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(() => {
    // Send http request and fetch data
    setLoadedMeetups(DUMMY_LIST);
  }, [loadedMeetups]);

  return <MeetupList meetups={DUMMY_LIST} />;
}

export default HomePage;
