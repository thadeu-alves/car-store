import type { Car } from "../../../db";
import { Button } from "../ui/Button";

export function CarCard({
    name,
    price,
    imgUrl,
    booked,
    id,
}: Car) {
    return (
        <div className="w-3/4 min-w-58 mx-auto min-h-[320px] bg-black text-white flex flex-col justify-between p-6 rounded-xl overflow-hidden relative group lg:my-12">
            <div className="flex justify-between items-center z-10">
                <h1 className="font-bold">{name}</h1>
                <button>
                    <img
                        src={
                            booked
                                ? "/heart-full.svg"
                                : "/heart.svg"
                        }
                        alt="heart icon"
                        className="w-6"
                    />
                </button>
            </div>
            <div className="flex justify-between items-center z-10 lg:opacity-0 group-hover:opacity-100 transition-all ease-in">
                <h1 className="font-bold">{price}</h1>
                <Button className="text-black">
                    Shop Now
                </Button>
            </div>
            <img
                src={imgUrl}
                alt="car dois"
                className="absolute h-full top-0 left-0 z-0 opacity-75 lg:opacity-65 group-hover:opacity-75 transition-all ease-in-out w-full object-cover"
            />
        </div>
    );
}
