import { Section } from "./Section";

export interface Story {
  id: string;
  headline: string;
  image: {
    url: string | undefined;
    caption: string | undefined;
  };
  intro: string;
  url: string;
  section: Section;
}
