import styled from "styled-components";

interface LinkProps {
  pad?: string;
}
export const Link = styled.a<LinkProps>`
  display: flex;
  place-items: center;
  gap: 16px;

  width: 100%;
  padding: ${({ pad }) => pad || "0"};

  font-size: 20px;
  font-family: Roboto, sans-serif;
  text-decoration: none;

  background-color: var(--lightGray);

  transition: background-color 0.3s;

  &:hover {
    background-color: var(--blue);
  }
`;
