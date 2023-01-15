import type { NextPage } from "next";
import axios from "axios";
import { Radio } from "../uiParts/Radio";
import { Divider } from "@chakra-ui/react";
import { H1 } from "../uiParts/heading/h1";

const Home: NextPage = () => {
  const insertUser = async () => {
    await axios.post("/api/users");
  };

  return (
    <div>
      <H1>当てはまるのはだれ？</H1>
      <Divider />
      {/* <button onClick={() => insertUser()}>Insert User</button> */}
      <Radio></Radio>
    </div>
  );
};

export default Home;
