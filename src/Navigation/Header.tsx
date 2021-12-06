import { useState } from "react";

import NavButton from "./NavButton";
import CollapseSidebarButton from "./CollapseSidebarButton";

const Header = () => {
    const [collapsed, setCollapsed] = useState(false);

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
        setTimeout(() => {
            setCollapsed(!collapsed);
        }, collapsed ? 300 : 0);
    }

    return (
        // <header className="site-header bg-gray-50 fixed top-0 bottom-0 left-0 flex flex-col font-outfit">
        <header id="sidebar" className="transition-all duration-300 site-header bg-gray-50 h-screen flex flex-col font-outfit p-4 shadow">
            <CollapseSidebarButton onClick={collapseSidebar} collapsed={collapsed} />
            <h1 id="app-title" className={"font-bold text-4xl text-center mt-4 mb-10" + (collapsed ? ' hidden' : '')}>Todo App</h1>
            <div className={"header-content flex flex-col flex-grow justify-between" + (collapsed ? ' hidden' : '')}>
                <nav className="main-nav">
                    <span className="header-label uppercase text-sm font-medium mx-2 text-gray-600 tracking-wider">Workspaces</span>
                    <ul className="space-y-3">
                        <NavButton text="Default Workspace" />
                        <NavButton text="2" />
                        <NavButton text="3" />
                        <NavButton text="4" />
                        <NavButton text="5" />
                    </ul>
                </nav>
                <div className="secondary-nav">
                    <span className="header-label uppercase text-sm font-medium mx-2 text-gray-600 tracking-wider">Settings</span>
                </div>
            </div>
        </header>
    );
};

export default Header;
