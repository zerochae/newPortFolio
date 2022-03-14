import * as T from "Types/index";

import {
  faFolderOpen,
  faMagnifyingGlass,
  faScrewdriverWrench,
  faIdCard,
} from "@fortawesome/free-solid-svg-icons";
import {
  faBlogger,
  faGithub,
  faInstagram,
  faJs,
  faReact,
  faVuejs,
} from "@fortawesome/free-brands-svg-icons";
import TsIcon from "Assets/TsIcon";

export const LAYERS: number = 4;

export const LAYERPROPS: T.LayerPropsType[] = [
  { id: 5, translateX: "40px", translateY: "-40px" },
  { id: 4, translateX: "30px", translateY: "-30px" },
  { id: 3, translateX: "20px", translateY: "-20px" },
  { id: 2, translateX: "10px", translateY: "-10px" },
  { id: 1, translateX: "0px", translateY: "0px" },
];

export const COLORS: T.ColorsType = {
  ABOUT: "#ff7707",
  SKILLS: "#990ea1",
  PROJECTS: "#1398ae",
  CONTACT: "#4fa507",
  REACT: "#61DAFB",
  VUE: "#4FC08D",
  JS: "#F7DF1E",
  TS: "#3178c6",
  TS2: "rgb(49, 120, 198)",
  INSTAGRAM: "#e4405f",
  GIT: "#4c3c3c",
  BLOG: "#869",
};

export const ICONS: T.IconsType = {
  MAIN: [
    {
      id: 1,
      icon: faIdCard,
      background: COLORS.ABOUT,
    },
    {
      id: 2,
      icon: faScrewdriverWrench,
      background: COLORS.SKILLS,
    },
    {
      id: 3,
      icon: faFolderOpen,
      background: COLORS.PROJECTS,
    },
    {
      id: 4,
      icon: faMagnifyingGlass,
      background: COLORS.CONTACT,
    },
  ],
  SKILLS: [
    {
      id: 1,
      icon: faReact,
      background: COLORS.REACT,
    },
    {
      id: 2,
      icon: faVuejs,
      background: COLORS.VUE,
    },
    {
      id: 3,
      icon: faJs,
      background: COLORS.JS,
    },
    {
      id: 4,
      icon: TsIcon,
      background: COLORS.TS,
    },
  ],
  PROJECTS: [],
  CONTACT: [
    {
      id: 1,
      icon: faInstagram,
      background: COLORS.INSTAGRAM,
    },
    {
      id: 2,
      icon: faGithub,
      background: COLORS.GIT,
    },
    {
      id: 3,
      icon: faBlogger,
      background: COLORS.BLOG,
    },
  ],
};
