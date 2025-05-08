import { CarCard } from "./utils/CarCard";

export function CarsSection() {
    return (
        <div className="flex flex-col text-center p-6 gap-6 bg-[#F3F3F3]">
            <h1 className="font-medium text-4xl">
                All Cars
            </h1>
            <p>
                A high-performance web-based car sales
                platform for any dealership and automotive
                website.
            </p>

            <CarCard />
            <CarCard />
            <CarCard />
            <CarCard />
            <CarCard />
            <CarCard />
        </div>
    );
}
