import { Button } from "./ui/Button";
import { CarCard } from "./utils/CarCard";

export function Popular() {
    return (
        <div className="flex flex-col text-center p-6 gap-6 bg-[#F3F3F3]">
            <h1 className="font-medium text-4xl">
                Most Popular Models to Own
            </h1>
            <p>
                A high-performance web-based car sales
                platform for any dealership and automotive
                website.
            </p>

            <CarCard />
            <CarCard />
            <CarCard />

            <Button className="w-fit mx-auto">
                Show More Car
            </Button>
        </div>
    );
}
