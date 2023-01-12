import type { NextPage } from "next";
import axios from "axios";

const Home: NextPage = () => {
  const insertUser = async () => {
    console.log("insertUser");
    await axios.post("/api/users");
  };

  return (
    <div>
      <button onClick={() => insertUser()}>Insert User</button>
    </div>
  );
};

export default Home;
