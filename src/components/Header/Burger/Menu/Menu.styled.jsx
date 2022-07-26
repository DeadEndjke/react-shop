import styled from "styled-components";
import { colors } from "./../global";

export const StyledMenu = styled.nav`
  top: 0;
  right: 0;
  height: 100vh;
  width: 370px;
  position: fixed;
  background-color: ${colors.brown};
  z-index: 20;

  display: flex;
  flex-direction: column;
  padding: 10rem 0;

  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => (open ? "translateX(0%)" : "translateX(100%)")};

  @media (max-width: 400px) {
    width: 100%;
  }
`;
