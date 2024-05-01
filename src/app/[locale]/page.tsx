import { SectionOne } from "./components/sections/section-1/section";
import { SectionTwo } from "./components/sections/section-2/section";
import { SectionThree } from "./components/sections/section-3/section";
import { SectionFour } from "./components/sections/section-4/section";
import { SectionFive } from "./components/sections/section-5/section";
import { SectionSix } from "./components/sections/section-6/section";
import { FooterSection } from "./components/footer-section";
import { Banner } from "./components/banner";
import { useState } from "react";

export default function Home() {
  return (
    <>
      <Banner>
        <main className="flex justtify-center align-center content-center items-center flex-col">
          <SectionOne />
          <SectionTwo />
          {/* <SectionThree /> */}
          <SectionFour />
          <SectionFive />
          <SectionSix />
        </main>
        <FooterSection />
      </Banner>
    </>
  );
}
