import styled from "styled-components";

export const DropdownWrapper = styled.div`
  position: relative;
`;

interface DropdownListProps {
  isVisible?: boolean;
  hAlignment?: string;
  vAlignment?: string;
}
export const DropdownList = styled.ul<DropdownListProps>`
  position: absolute;
  left: ${({ hAlignment }) => (hAlignment === "left" ? "0" : "auto")};
  right: ${({ hAlignment }) => (hAlignment === "right" ? "0" : "auto")};
  top: ${({ vAlignment }) => (vAlignment === "top" ? "100%" : "auto")};
  bottom: ${({ vAlignment }) => (vAlignment === "bottom" ? "100%" : "auto")};
  z-index: 1;

  display: flex;
  flex-flow: column;

  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  visibility: ${({ isVisible }) => (isVisible ? "visible" : "hidden")};

  transition: opacity 0.3s, visibility 0.3s;
`;
