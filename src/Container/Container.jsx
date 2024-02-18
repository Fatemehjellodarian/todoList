import { useState } from "react";
import Avatar from "../components/Fjimages/Avatar";
import ProfileCard from "../components/ProfileCard/ProfileCard";
import Layout from "../components/Layout/Layout";

function Container() {
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    age: "",
    gender: "",
  });

  return (
    <Layout>
      <Avatar gender={formData.gender} />
      <ProfileCard formData={formData} setFormData={setFormData} />
    </Layout>
  );
}

export default Container;
