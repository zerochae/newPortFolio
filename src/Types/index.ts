import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export interface IconType {
  id: number;
  icon: IconDefinition | (() => JSX.Element);
  background: string;
}

export interface LayerPropsType {
  id: number;
  translateX: string;
  translateY: string;
}

export interface IconsType {
  MAIN: IconType[];
  SKILLS: IconType[];
  PROJECTS: IconType[];
  CONTACT: IconType[];
}

export interface ColorsType {
  REACT: string;
  VUE: string;
  JS: string;
  TS: string;
  TS2: string;
  INSTAGRAM: string;
  GIT: string;
  BLOG: string;
}
