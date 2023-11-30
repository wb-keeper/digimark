"use client";

import { FC, useState } from "react";

interface NavItemsProps {}

const NavItems: FC<NavItemsProps> = () => {
  const [activeIndex, setActiveIndex] = useState<null | number>(null);
  return <div className="flex gap-4 h-full">menu</div>;
};

export default NavItems;
