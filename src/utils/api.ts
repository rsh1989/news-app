import axios from 'axios';
import { Section } from '../types/Section';
import { Story } from "../types/Story";

const STUFF_API = 'https://www.stuff.co.nz/static/spade/nCuL9ZmbMXzhGbHTJNJYU6i45y9hj0DJrhPteuU6MGB68zM5goWqk5Q1aNkh.json';
const IMAGE_TYPE = 'Thumbnail 1:1';

interface Response {
  data: {
    stories: StoryResponse[];
  }
}

interface StoryResponse {
  storyId: string;
  story: {
    headline: string;
    intro: string;
    images: [{
      type: string;
      caption: string;
      src: string;
    }]
    url: string;
    section: Section;
  }
}

export const getStories = async (): Promise<Story[]> => axios.get(STUFF_API).then((resp: Response) => 
  resp.data.stories.map((s: StoryResponse) => {
    const image = s.story.images.find(i => i.type === IMAGE_TYPE);
    
    return {
      id: s.storyId,
      headline: s.story.headline,
      image: {
        url: (image || {}).src,
        caption: (image || {}).caption
      },
      intro: s.story.intro,
      url: s.story.url,
      section: s.story.section
    }
  })
);
