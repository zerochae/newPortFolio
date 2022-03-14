declare module "*.svg" {
  import { ReactElement, SVGprops } from "react";
  const content: (props: SVGprops<SVGElement>) => ReactElement;
  export default content;
}
