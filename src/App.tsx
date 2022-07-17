import React, { useState, useEffect } from "react";
import { CardGrid } from "./components/CardGrid/CardGrid";
import { Story } from "./types/Story";
import { Section } from "./types/Section";
import { getStories } from "./utils/api";

import "./App.scss";

const App = () => {
  const [stories, setStories] = useState<Story[]>([]);
  const [section, setSection] = useState<Section | "All">("All");

  useEffect(() => {
    getStories().then((s) => setStories(s));
  }, []);

  return (
    <>
      <div className="section">
        <label className="section__label" htmlFor="section">
          Section
        </label>
        <select
          className="section__dropdown"
          name="section"
          id="section"
          onChange={(e) => setSection(e.target.value as Section | "All")}
        >
          <option value="All">All</option>
          <option value={Section.Business}>{Section.Business}</option>
          <option value={Section.Coronavirus}>{Section.Coronavirus}</option>
          <option value={Section.National}>{Section.National}</option>
          <option value={Section.Politics}>{Section.Politics}</option>
          <option value={Section.Quizzes}>{Section.Quizzes}</option>
        </select>
      </div>
      <CardGrid
        cards={stories.filter(
          (s) => section === "All" || s.section === section
        )}
      />
    </>
  );
};

export default App;
