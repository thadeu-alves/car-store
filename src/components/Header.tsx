import { useEffect, useState } from "react";

export function Header() {
    const [open, setOpen] = useState(false);

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
        <nav className="flex justify-between bg-[#B8B8B8] p-6 border-b border-[#a0a0a0]">
            <h1 className="text-xl font-medium">Logo</h1>
            <button
                className="bg-white w-fit p-2 rounded-xl"
                onClick={handleSidebar}
            >
                <img
                    src="/menu.svg"
                    alt="menu"
                    className="w-6"
                />
            </button>

            <div
                className={` fixed inset-0 w-full h-screen bg-[#B8B8B8] border-r border-r-[#707070] z-50 transition-transform duration-300 ease-in-out transform ${
                    open
                        ? "translate-x-0"
                        : "-translate-x-full"
                }`}
            >
                <div className="p-6">
                    <button
                        className="bg-white w-fit p-2 rounded-xl"
                        onClick={handleSidebar}
                    >
                        <h1 className="w-6 font-medium">
                            X
                        </h1>
                    </button>
                </div>
            </div>
        </nav>
    );
}
