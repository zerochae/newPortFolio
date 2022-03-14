import styled from "styled-components";
import * as C from "Constants/index";

export const Container = styled.li<{ page: string }>`
  transition: 1s;
  transform: ${(props) =>
    props.page !== C.PAGES.SKILLS ? `translateY(1000px)` : `translate(0)`};
`;
