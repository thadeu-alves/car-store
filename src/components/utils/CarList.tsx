import type { Car } from "../../../db";
import { CarCard } from "./CarCard";

export function CarList({ data }: { data: Car[] }) {
    return (
        <>
            {data.map((car) => {
                return (
                    <CarCard
                        name={car.name}
                        price={car.price}
                        imgUrl={car.imgUrl}
                        booked={car.booked}
                        id={car.id}
                        key={car.name}
                    />
                );
            })}
        </>
    );
}
