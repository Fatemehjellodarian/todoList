import { useState } from "react";
import Avatar from "../components/Fjimages/Avatar";
import ProfileCard from "../components/ProfileCard/ProfileCard";
import Layout from "../components/Layout/Layout";

function Container() {
  const [gender, setGender] = useState("gender");

  return (
    <Layout>
      <Avatar gender={gender} />
      <ProfileCard gender={gender} setGender={setGender} />
    </Layout>
  );
}

export default Container;
