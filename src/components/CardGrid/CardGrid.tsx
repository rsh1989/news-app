import React from "react";
import "./card-grid.scss";

import { Card } from "../Card/Card";

import { Story } from "../../types/Story";

interface CardGridProps {
  cards: Story[];
}

export const CardGrid = ({ cards }: CardGridProps) => (
  <div className="card-grid">
    {cards.map((card) => (
      <Card key={card.id} {...card} />
    ))}
  </div>
);
