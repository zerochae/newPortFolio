import styled, { css, keyframes } from "styled-components";

/*
color code
facebook #3b5999
instagram #e4405f
*/

const LayerProps = [
  { id: 5, translateX: "40px", translateY: "-40px" },
  { id: 4, translateX: "30px", translateY: "-30px" },
  { id: 3, translateX: "20px", translateY: "-20px" },
  { id: 2, translateX: "10px", translateY: "-10px" },
  { id: 1, translateX: "0px", translateY: "0px" },
];

const LiProps = [
  { id: 1, background: "#e4405f" },
  { id: 2, background: "#3b5999" },
  { id: 3, background: "#25D366" },
];

const createAnimation = () => css`
  ${LayerProps.reduce(
    (styles, row) =>
      (styles += `
    @keyframes in${row.id} {
      to {transform: translate(${row.translateX}, ${row.translateY});
    }
    @keyframes out${row.id} {
      to {transform: translate(330px,0px)};}
    }
`),
    ""
  )}
`;

const createLayerCss = () => css`
  ${LayerProps.reduce(
    (styles, row) =>
      (styles += `
    &:hover span:nth-child(${row.id}){
      animation: in${row.id} 0.5s forwards;
      opacity:1;
    }
    `),
    ""
  )}
`;

const createLiCss = () => css`
  ${LiProps.reduce(
    (styles, row) =>
      (styles += `
        &:nth-child(${row.id}):hover span{
          background: ${row.background};
        }
    `),
    ""
  )}
`;

export const Li = styled.li`
  position: relative;
  width: 60px;
  height: 60px;
  margin: 0 10px;

  &:hover span {
    z-index: 1000;
    color: #fff;
    box-shadow: -1px 1px 1px rgba(0, 0, 0, 0.05);
  }

  ${createLayerCss()};

  ${createLiCss()};

  ${createAnimation()};
`;

export const Layer = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex !important;
  justify-content: center;
  align-items: center;
  background: #333;
  color: rgba(255, 255, 255, 0.2);
  font-size: 30px !important;
`;
