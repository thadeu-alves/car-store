export interface Car {
    name: string;
    price: string;
    imgUrl: string;
    booked: boolean;
    id: number;
}

const Cars: Car[] = [
    {
        name: "Corola",
        price: "$99,999.99",
        imgUrl: "/car2.jpg",
        booked: false,
        id: 0,
    },
    {
        name: "Prisma",
        price: "$99,999.99",
        imgUrl: "/car2.jpg",
        booked: true,
        id: 1,
    },
    {
        name: "Uno",
        price: "$99,999.99",
        imgUrl: "/car2.jpg",
        booked: false,
        id: 2,
    },
    {
        name: "Hilux",
        price: "$99,999.99",
        imgUrl: "/car2.jpg",
        booked: true,
        id: 3,
    },
    {
        name: "Hilux",
        price: "$99,999.99",
        imgUrl: "/car2.jpg",
        booked: true,
        id: 3,
    },
    {
        name: "Hilux",
        price: "$99,999.99",
        imgUrl: "/car2.jpg",
        booked: false,
        id: 3,
    },
    {
        name: "Hilux",
        price: "$99,999.99",
        imgUrl: "/car2.jpg",
        booked: true,
        id: 3,
    },
    {
        name: "Hilux",
        price: "$99,999.99",
        imgUrl: "/car2.jpg",
        booked: false,
        id: 3,
    },
    {
        name: "Hilux",
        price: "$99,999.99",
        imgUrl: "/car2.jpg",
        booked: true,
        id: 3,
    },
];

export function Push(car: Car) {
    Cars.push(car);
}

export function getCarById(id: number) {
    return Cars[id];
}

export function getCars(amount?: number) {
    if (amount) {
        return Cars.slice(0, amount);
    }
    return Cars;
}

export function getBookedCars() {
    return Cars.filter((car) => car.booked);
}
