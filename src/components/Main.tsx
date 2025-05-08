import { Button } from "./ui/Button";

export function Main() {
    return (
        <div className="bg-[#B8B8B8]">
            <main className="bg-[#B8B8B8] p-6 flex flex-col gap-6 overflow-x-hidden md:items-center max-w-[1020px] mx-auto lg:flex-row lg:py-12s">
                <div className="flex flex-col gap-6 justify-between h-60">
                    <h1 className="font-extrabold text-4xl">
                        Fast And Easy Way To Buy A Car
                    </h1>
                    <p className="text-[#1A202C] text-sm opacity-45">
                        Our Car Sales online purchasing
                        system designed to meet the specific
                        needs of car dealership owners. This
                        easy-to-use automotive sales
                        platform will let you manage.
                    </p>
                    <div className="flex gap-6 items-center">
                        <a href="/booking">
                            <Button>Booking Now</Button>
                        </a>
                        <a href="/cars">
                            <p>See all cars</p>
                        </a>
                    </div>
                </div>
                <div className="w-[432px] h-[320px] bg-[#999999] rounded-tl-4xl overflow-hidden">
                    <img
                        src="/car1.jpg"
                        alt="car"
                        className="h-full object-cover"
                    />
                </div>
            </main>
        </div>
    );
}
