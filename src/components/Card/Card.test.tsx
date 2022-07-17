import React from "react";
import { render, screen } from "@testing-library/react";
import { Card } from "./Card";
import { Section } from "../../types/Section";

test("renders Card component and truncates intro", () => {
  render(
    <Card
      id="1"
      url=""
      headline="Housing changes kick in from this weekend as Government unveils major policy"
      image={{
        caption: "",
        url: "",
      }}
      section={Section.Business}
      intro="Investment properties will have an effective capital gains tax from this weekend with many investors paying 33 or 39 per cent. Interest deductibility for investment properties has also been removed."
    />
  );
  const headline = screen.getByText(
    /Housing changes kick in from this weekend as Government unveils major policy/i
  );
  const intro = screen.getByText(
    /Investment properties will have an effective capital gains tax from this week.../i
  );

  expect(headline).toBeInTheDocument();
  expect(intro).toBeInTheDocument();
});

test("renders Card component and does not truncate intro", () => {
  render(
    <Card
      id="1"
      url=""
      headline="Housing changes kick in from this weekend as Government unveils major policy"
      image={{
        caption: "",
        url: "",
      }}
      section={Section.Business}
      intro="Investment properties will have a capital gains tax"
    />
  );
  const headline = screen.getByText(
    /Housing changes kick in from this weekend as Government unveils major policy/i
  );
  const intro = screen.getByText(
    /Investment properties will have a capital gains tax/i
  );

  expect(headline).toBeInTheDocument();
  expect(intro).toBeInTheDocument();
});
