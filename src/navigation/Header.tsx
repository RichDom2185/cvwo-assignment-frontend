import React, { useState } from "react";
import CollapseSidebarButton from "./CollapseSidebarButton";
import HeaderMenuItem from "./HeaderMenuItem";
import NavButton from "./NavButton";

const aboutMessage: string = `\
thing.do © 2022 Richard Dominick

thing.do is a simple todo app built with React, TypeScript, and Ruby on Rails. It was built as part of the 2021 winter assignment by National University of Singapore's (NUS) Computing Voluntary and Welfare Organisation (CVWO). This app is open source and is available on GitHub at https://github.com/RichDom2185/cvwo-assignment-frontend`;

const Header: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  const displayAboutMessage: React.MouseEventHandler = () => {
    alert(aboutMessage);
  };

  function collapseSidebar(): void {
    // console.log("collapse sidebar");
    const sidebar: HTMLElement = document.getElementById("sidebar")!;
    // const title: HTMLElement = document.getElementById("app-title")!;
    // document.querySelectorAll('#sidebar > * + * ').forEach((value: Element) => {
    //     // console.log(value);
    //     // value.classList.toggle("hidden");
    //     if (value.tagName === "H1") {
    //         value.textContent = "";
    //     }
    // });
    sidebar.classList.toggle("collapsed");
    // title.textContent = "";
    // console.log("collapsed: " + collapsed);
    setTimeout(
      () => {
        setCollapsed(!collapsed);
      },
      collapsed ? 300 : 0
    );
  }

  return (
    // <header className="site-header bg-gray-50 fixed top-0 bottom-0 left-0 flex flex-col font-outfit">
    <header
      id="sidebar"
      className="transition-all duration-300 site-header bg-gray-50 h-screen flex flex-col font-outfit p-4 shadow"
    >
      <CollapseSidebarButton onClick={collapseSidebar} collapsed={collapsed} />
      <h1
        id="app-title"
        className={
          "font-bold text-4xl text-gray-700 text-center mt-4 mb-10" +
          (collapsed ? " hidden" : "")
        }
      >
        thing.do
      </h1>
      <div
        className={
          "header-content flex flex-col flex-grow justify-between" +
          (collapsed ? " hidden" : "")
        }
      >
        <nav className="main-nav">
          <span className="header-label uppercase text-sm font-medium mx-2 text-gray-600 tracking-wider">
            Workspaces
          </span>
          <ul className="space-y-3">
            <NavButton text="Default Workspace" />
            {/* <NavButton text="2" />
                        <NavButton text="3" />
                        <NavButton text="4" />
                        <NavButton text="5" /> */}
          </ul>
        </nav>
        <div className="secondary-nav">
          <HeaderMenuItem onClick={displayAboutMessage}>About</HeaderMenuItem>
        </div>
      </div>
    </header>
  );
};

export default Header;
