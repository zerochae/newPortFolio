import styled, { css } from "styled-components";

import * as C from "Constants/index";

const LayerProps = C.LAYERPROPS;

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

export const Li = styled.li<{ iconBg: string }>`
  position: relative;
  width: 60px;
  height: 60px;
  margin: 0 10px;

  &:hover span {
    background: ${(props) => props.iconBg};
    transition: 1s;
    z-index: 1000;
    color: #fff;
    box-shadow: -1px 1px 1px rgba(0, 0, 0, 0.05);
  }

  &:hover svg rect {
    fill: rgb(255, 255, 255);
  }

  &:hover svg path {
    fill: ${(props) =>
      props.iconBg === C.COLORS.TS && `${C.COLORS.TS2} !important`};
  }

  ${createLayerCss()};
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
