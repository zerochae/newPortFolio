import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export interface IconType {
  id: number;
  content: IconDefinition | (() => JSX.Element);
  background: string;
}

export interface LayerPropsType {
  id: number;
  translateX: string;
  translateY: string;
}

export interface PagesType {
  MAIN: string;
  ABOUT: string;
  SKILLS: string;
  PROJECTS: string;
  CONTACT: string;
  REACT: string;
  VUE: string;
  JS: string;
  TS: string;
  INSTAGRAM: string;
  GIT: string;
  BLOG: string;
}

export type MenuType = string[];

export interface IconsType {
  MAIN: {
    id: number;
    data: IconType[];
  };
  SKILLS: {
    id: number;
    data: IconType[];
  };
  PROJECTS: {
    id: number;
    data: IconType[];
  };
  CONTACT: {
    id: number;
    data: IconType[];
  };
}

export interface ColorsType {
  ABOUT: string;
  SKILLS: string;
  PROJECTS: string;
  CONTACT: string;
  REACT: string;
  VUE: string;
  JS: string;
  TS: string;
  TS2: string;
  INSTAGRAM: string;
  GIT: string;
  BLOG: string;
}
