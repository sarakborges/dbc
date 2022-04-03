import { FC } from "react";
import { MoreVerticalOutline } from "@styled-icons/evaicons-outline";

import { DropdownitemsProps } from "Helpers/Constants/DropdownItems/props";

import { Link } from "Components/Atoms/Link";
import { Button } from "Components/Atoms/Button";

import { DropdownProps } from "./props";

import * as Styled from "./style";

const Dropdown: FC<DropdownProps> = ({
  items,
  isVisible,
  handleToggle,
  hAlignment,
  vAlignment,
}) => {
  const toggleDropdown = () => {
    handleToggle(!isVisible);
  };

  if (items?.length < 1) {
    return <></>;
  }

  return (
    <Styled.DropdownWrapper>
      <Button onClick={toggleDropdown} pad='16px'>
        <MoreVerticalOutline size={32} />
      </Button>

      <Styled.DropdownList
        isVisible={isVisible}
        hAlignment={hAlignment}
        vAlignment={vAlignment}
      >
        {items.map((item: DropdownitemsProps) => {
          return (
            <li key={item.label}>
              {item.link && (
                <Link href={item.link} pad='16px 60px 16px 16px'>
                  {item.label}
                </Link>
              )}

              {item.action && (
                <Button onClick={item.action} pad='16px 60px 16px 16px'>
                  {item.label}
                </Button>
              )}
            </li>
          );
        })}
      </Styled.DropdownList>
    </Styled.DropdownWrapper>
  );
};

export { Dropdown };
