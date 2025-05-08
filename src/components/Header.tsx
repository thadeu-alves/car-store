import { useEffect, useState } from "react";

export function Header() {
    const [open, setOpen] = useState(false);

    const links = [
        {
            href: "/",
            title: "Home",
        },
        {
            href: "/cars",
            title: "All Cars",
        },
        {
            href: "/booking",
            title: "Booked Cars",
        },
    ];

    useEffect(() => {
        if (open) {
            document.body.classList.add(
                "overflow-y-hidden"
            );
        } else {
            document.body.classList.remove(
                "overflow-y-hidden"
            );
        }
    }, [open]);

    function handleSidebar() {
        console.log("click");
        setOpen(!open);
    }

    return (
        <div className="bg-[#B8B8B8] border-b border-[#a0a0a0]">
            <nav className="flex justify-between bg-[#B8B8B8] px-6 py-3  max-w-[1020px] mx-auto">
                <a href="/">
                    <h1 className="text-2xl font-medium">
                        Logo
                    </h1>
                </a>
                <button
                    className="bg-white w-fit p-2 rounded-xl lg:hidden"
                    onClick={handleSidebar}
                >
                    <img
                        src="/menu.svg"
                        alt="menu"
                        className="w-6"
                    />
                </button>

                <ul className="justify-end items-center flex-1 gap-6 hidden lg:flex">
                    {links.map((link) => {
                        return (
                            <a
                                href={link.href}
                                key={link.title}
                            >
                                <li className="font-medium text-md">
                                    {link.title}
                                </li>
                            </a>
                        );
                    })}
                </ul>

                <div
                    className={`lg:hidden fixed inset-0 w-full h-screen bg-[#B8B8B8] border-r border-r-[#707070] z-50 transition-transform duration-300 ease-in-out transform ${
                        open
                            ? "translate-x-0"
                            : "-translate-x-full"
                    }`}
                >
                    <div className="p-6 flex flex-col h-full">
                        <button
                            className="bg-white w-fit p-2 rounded-xl fixed "
                            onClick={handleSidebar}
                        >
                            <h1 className="w-6 font-medium">
                                X
                            </h1>
                        </button>

                        <ul className="flex flex-col justify-center items-center flex-1 gap-6">
                            {links.map((link) => {
                                return (
                                    <a
                                        href={link.href}
                                        key={link.title}
                                    >
                                        <li className="font-medium text-2xl">
                                            {link.title}
                                        </li>
                                    </a>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}
