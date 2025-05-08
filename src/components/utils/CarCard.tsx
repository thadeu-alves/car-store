import { Button } from "../ui/Button";

export function CarCard() {
    return (
        <div className="w-3/4 mx-auto min-h-[320px] bg-[#B8B8B8] flex flex-col justify-between p-6 rounded-xl">
            <div className="flex justify-between items-center">
                <h1 className="font-bold">All New Rush</h1>
                <div>💖</div>
            </div>
            <div className="flex justify-between items-center">
                <h1 className="font-bold">$99,999.99</h1>
                <Button>Shop Now</Button>
            </div>
        </div>
    );
}
