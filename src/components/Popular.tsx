import type { Car } from "../../db";
import { Button } from "./ui/Button";
import { CarList } from "./utils/CarList";

export function Popular({ data }: { data: Car[] }) {
    return (
        <div className="bg-[#F3F3F3] flex justify-center items-center">
            <div className="flex flex-col text-center p-6 gap-6 bg-[#F3F3F3] md:grid md:grid-cols-2 lg:grid-cols-4 max-w-[1020px] mx-auto lg:py-12">
                <h1 className="font-medium text-4xl col-span-2 lg:col-span-4">
                    Most Popular Models to Own
                </h1>
                <p className="col-span-2 lg:col-span-4">
                    A high-performance web-based car sales
                    platform for any dealership and
                    automotive website.
                </p>

                <CarList data={data} />

                <a
                    href="/cars"
                    className="col-span-2 lg:col-span-4"
                >
                    <Button className="w-fit mx-auto">
                        Show More Car
                    </Button>
                </a>
            </div>
        </div>
    );
}
