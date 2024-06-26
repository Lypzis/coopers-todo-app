import React from "react";

import Layout from "../hoc/Layout";
import HeroSection from "../components/Sections/HeroSection";
import TodosSection from "../components/Sections/TodosSection";
import GoodThingsSection from "../components/Sections/GoodThingsSection";
import ContactSection from "../components/Sections/ContactSection";
import AboutSection from "../components/Sections/AboutSection";
import { useAuth } from "../contexts/AuthContext"; // Adjust path as necessary

function Home() {
  const { isAuthenticated } = useAuth(); // Get isAuthenticated from context

  return (
    <Layout>
      <HeroSection />
      <AboutSection />
      {isAuthenticated && <TodosSection />}
      <GoodThingsSection />
      <ContactSection />
    </Layout>
  );
}

export default Home;
