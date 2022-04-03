import styled from "styled-components";

interface ButtonProps {
  pad?: string;
}
export const Button = styled.button<ButtonProps>`
  display: flex;
  place-items: center;
  gap: 16px;

  width: 100%;
  padding: ${({ pad }) => pad || "0"};

  font-size: 20px;
  font-family: Roboto, sans-serif;

  background-color: var(--lightGray);
  border: 0;
  cursor: pointer;

  transition: background-color 0.3s;

  &:hover {
    background-color: var(--blue);
  }
`;
