import React from "react";

import SectionHero from "./section-hero/section-hero.component";
import SectionTradition from "./section-tradition/section-tradition.component";
import SectionNatural from "./section-natural/section-natural.component";
import SectionSpecials from "./section-specials/section-specials.component";
import SectionOwner from "./section-owner/section-owner.component";

import './home.styles.scss';

export default function HomePage() {
  return (
    <>
      <SectionHero/>
      <SectionTradition/>
      <SectionSpecials/>
      <SectionNatural/>
      <SectionOwner/>
    </>
  );
}
