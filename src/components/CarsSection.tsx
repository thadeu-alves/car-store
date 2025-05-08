import type { ReactNode } from "react";
import type { Car } from "../../db";
import { CarList } from "./utils/CarList";

export function CarsSection({
    data,
    children,
}: {
    data: Car[];
    children: ReactNode;
}) {
    return (
        <div className="bg-[#F3F3F3]">
            <div className="flex flex-col text-center p-6 gap-6  md:grid md:grid-cols-2 lg:grid-cols-4 max-w-[1020px] mx-auto">
                {children}

                <CarList data={data} />
            </div>
        </div>
    );
}
