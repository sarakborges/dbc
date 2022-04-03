import { FC } from "react";

import { ButtonProps } from "./props";

import * as Styled from "./style";

const Button: FC<ButtonProps> = ({ children, type, onClick, pad }) => {
  return (
    <Styled.Button type={type || "button"} onClick={onClick} pad={pad}>
      {children}
    </Styled.Button>
  );
};

export { Button };
