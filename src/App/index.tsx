import { FC, MouseEvent, useEffect, useRef, useState } from "react";

import { DROPDOWN_ITEMS } from "Helpers/Constants";

import { Dropdown } from "Components/Molecules/Dropdown";

import * as Styled from "./style";

const App: FC = () => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleDropdownToggle = (isVisible: boolean) => {
    setIsDropdownVisible(isVisible);
  };

  const handleCloseDropdown = (e: Event) => {
    const el = dropdownRef?.current;

    if (!el || !el?.contains(e?.target as Node)) {
      setIsDropdownVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleCloseDropdown);

    return () => {
      document.removeEventListener("click", handleCloseDropdown);
    };
  }, [dropdownRef]);

  return (
    <>
      <Styled.Global />

      <Styled.AppWrapper>
        <div ref={dropdownRef}>
          <Dropdown
            items={DROPDOWN_ITEMS}
            isVisible={isDropdownVisible}
            handleToggle={handleDropdownToggle}
          />
        </div>
      </Styled.AppWrapper>
    </>
  );
};

export { App };
