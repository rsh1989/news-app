import React from "react";
import { Meta } from "@storybook/react";

import { Card as CardComponent } from "./Card";
import { Section } from "../../types/Section";

export default {
  title: "Card",
  component: CardComponent,
} as Meta;

export const Card = () => (
  <CardComponent
    id="1"
    url="https://www.stuff.co.nz/national/politics/300259371/housing-changes-kick-in-from-this-weekend-as-government-unveils-major-policy"
    headline="Housing changes kick in from this weekend as Government unveils major policy"
    image={{
      caption:
        "The CoreLogic house price index for February found the average Hamilton home now costs $712,717, up 14.5 per cent on the year earlier .",
      url: "https://resources.stuff.co.nz/content/dam/images/4/y/q/q/h/i/image.related.StuffThumbnailSquare.1000x1000.4yrlm3.png/1616455554561.jpg",
    }}
    section={Section.Business}
    intro="Investment properties will have an effective capital gains tax from this weekend with many investors paying 33 or 39 per cent. Interest deductibility for investment properties has also been removed."
  />
);
