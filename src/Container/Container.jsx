import { useState } from "react";
import Avatar from "../components/Fjimages/Avatar";
import ProfileCard from "../components/ProfileCard/ProfileCard";
import Layout from "../components/Layout/Layout";

function Container() {
  return (
    <Layout>
      <Avatar />
      <ProfileCard />
    </Layout>
  );
}

export default Container;
