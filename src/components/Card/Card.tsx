import React from "react";

import { Story } from "../../types/Story";

import "./card.scss";

const MAX_DESC_LENGTH = 77;

const formatDesc = (desc: string) =>
  desc.length >= MAX_DESC_LENGTH
    ? `${desc.slice(0, MAX_DESC_LENGTH).trim()}...`
    : desc;

export const Card = ({ url, image, intro, headline }: Story) => (
  <div className="card">
    <a href={url}>
      <img className="card__image" src={image.url} alt={image.caption} />
    </a>
    <div className="card__description">
      <a className="card__title" href={url}>
        <h3>{headline}</h3>
      </a>
      <p>{formatDesc(intro)}</p>
    </div>
  </div>
);
