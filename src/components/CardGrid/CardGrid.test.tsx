import React from "react";
import { render, screen } from "@testing-library/react";
import { CardGrid } from "./CardGrid";
import { Section } from "../../types/Section";

test("renders all Card components in CardGrid", () => {
  render(
    <CardGrid
      cards={[
        {
          id: "1",
          url: "",
          headline:
            "Housing changes kick in from this weekend as Government unveils major policy",
          image: {
            caption: "",
            url: "",
          },
          section: Section.Business,
          intro: "",
        },
        {
          id: "2",
          url: "",
          headline:
            "Dads attempt to withdraw 8k from KiwiSaver for braces rejected",
          image: {
            caption: "",
            url: "",
          },
          section: Section.Business,
          intro: "",
        },
      ]}
    />
  );
  const firstHeadline = screen.getByText(
    /Housing changes kick in from this weekend as Government unveils major policy/i
  );
  const secondHeadline = screen.getByText(
    /Dads attempt to withdraw 8k from KiwiSaver for braces rejected/i
  );

  expect(firstHeadline).toBeInTheDocument();
  expect(secondHeadline).toBeInTheDocument();
});
