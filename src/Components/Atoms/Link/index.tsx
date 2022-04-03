import { FC } from "react";

import { LinkProps } from "./props";

import * as Styled from "./style";

const Link: FC<LinkProps> = ({ children, href, pad }) => {
  return (
    <Styled.Link pad={pad} href={href}>
      {children}
    </Styled.Link>
  );
};

export { Link };
