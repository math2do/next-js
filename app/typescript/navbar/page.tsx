"use client";
import { useState } from "react";

type NavItemListType = string[];
const navItems: NavItemListType = ["home", "about", "project", "contact"];

const Navbar = () => {
  const [selected, setSelected] = useState(navItems[0]);
  return (
    <div className="mx-auto max-w-6xl p-4 text-center">
      <h1>
        <span className="underlined">Nav Items</span>
      </h1>

      <NavList
        navItems={navItems}
        selected={selected}
        setSelected={setSelected}
      />
    </div>
  );
};

type NavListProps<T> = {
  navItems: T[];
  selected: T;
  setSelected: (item: T) => void;
};

function NavList<T extends React.ReactNode>({
  navItems,
  selected,
  setSelected,
}: NavListProps<T>) {
  return (
    <ul className="mt-6 space-y-2">
      {navItems.map((item, index) => {
        return (
          <li
            key={index}
            onClick={() => setSelected(item)}
            className="cursor-pointer"
          >
            <h1>
              <span className={`${item == selected && "underlined"}`}>
                {item}
              </span>
            </h1>
          </li>
        );
      })}
    </ul>
  );
}

export default Navbar;
