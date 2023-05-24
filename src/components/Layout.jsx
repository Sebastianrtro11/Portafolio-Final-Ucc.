import React from "react";

export const LayoutHeader = ({ children }) => {
  return (
    <div className="flex justify-between items-center mx-auto px-4 max-w-[1140px] font-roboto xl:px-0">
      {children}
    </div>
  );
};

export const LayoutHero = ({ children }) => {
  return <main className="mx-auto max-w-[990px] lg:px-5">{children}</main>;
};

export const Layout = ({ children }) => {
  return <main className="mx-auto max-w-[990px]">{children}</main>;
};

export const Layouexperience = ({ children }) => {
  return <main className="mx-auto max-w-[990px]">{children}</main>;
};

export const LayoutFooter = ({ children }) => {
  return <main className="mx-auto max-w-[990px]">{children}</main>;
};
