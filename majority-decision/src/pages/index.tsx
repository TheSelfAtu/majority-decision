import type { NextPage } from "next";
import axios from "axios";
import { H1 } from "../uiParts/heading/h1";

const Home: NextPage = () => {
  const insertUser = async () => {
    await axios.post("/api/users");
  };

  return (
    <div>
      <H1>当てはまるのはだれ？</H1>
    </div>
  );
};

export default Home;
