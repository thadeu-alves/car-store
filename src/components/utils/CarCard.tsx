import { Button } from "../ui/Button";

export function CarCard() {
    return (
        <div className="w-3/4 mx-auto min-h-[320px] bg-black text-white flex flex-col justify-between p-6 rounded-xl overflow-hidden relative group">
            <div className="flex justify-between items-center z-10">
                <h1 className="font-bold">All New Rush</h1>
                <div>
                    <img
                        src="/heart.svg"
                        alt="heart icon"
                        className="w-6"
                    />
                </div>
            </div>
            <div className="flex justify-between items-center z-10 lg:opacity-0 group-hover:opacity-100 transition-all ease-in">
                <h1 className="font-bold">$99,999.99</h1>
                <Button className="text-black">
                    Shop Now
                </Button>
            </div>
            <img
                src="/car2.jpg"
                alt="car dois"
                className="absolute top-0 left-0 z-0 opacity-75 lg:opacity-65 group-hover:opacity-75 transition-all ease-in-out"
            />
        </div>
    );
}
