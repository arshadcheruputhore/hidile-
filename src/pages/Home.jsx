"use client";
import * as React from "react";
import Header from "../components/Header";
import HeroHome from "../components/HeroHome";
import FeaturesHome from "../components/FeaturesHome";
import BenefitsHome from "../components/BenefitsHome";
import IndustryCard from "../components/IndustryCard";
import Footer from "../components/Footer";
import ToolsCardHome from "../components/ToolsCardHome";
import IntegrationFlow from "../components/IntegrationFlow";
import TrustedBrandsScroll from "../components/TrustedBrandsScroll";
import FeaturesPreviewHome from "../components/FeaturesPreviewHome";


function Home() {
  return (
    <div className="bg-gray-50">

      <main className="relative px-32 pb-5 pt-[70px] max-w-full min-h-[100vh] max-md:px-10 max-md:py-5 max-sm:p-4 bg-[linear-gradient(150deg,#F9FCFF_0%,#B8D5FF_40%,#D3E5FF_60%,#0169FD_100%)] rounded-b-3xl max-sm:rounded-b-lg mb-72 max-sm:mb-8">
        <HeroHome />
      </main>

      <main className="px-28 max-sm:px-4">
        <FeaturesHome />

        <BenefitsHome />
      </main>

      <FeaturesPreviewHome />
      <main className="px-28 max-sm:px-4 pb-12 sm:pb-16">
        <ToolsCardHome />

        <IntegrationFlow />

        <TrustedBrandsScroll />

        <IndustryCard />
      </main>

    </div>
  );
}

export default Home;
