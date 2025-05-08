export function HowWork() {
    return (
        <div>
            <div className="flex flex-col gap-6 p-6 text-center md:grid md:grid-cols-3 max-w-[1020px] mx-auto lg:py-12">
                <h1 className="text-4xl font-medium col-span-3">
                    How it work
                </h1>
                <p className="text-[#1A202C] col-span-3">
                    A high-performance web-based car sales
                    platform for any dealership and
                    automotive website.
                </p>
                <div className="flex flex-col justify-center items-center gap-4 max-w-64 mx-auto lg:my-12">
                    <div className="bg-[#B8B8B8] h-[106px] w-[106px] rounded-4xl p-4">
                        <img
                            src="/locale.svg"
                            alt="locale icon"
                            className="w-fit"
                        />
                    </div>
                    <h2 className="text-xl font-semibold">
                        Choose Location
                    </h2>
                    <p className="text-sm">
                        Aliquam erat volutpat. Integer
                        malesuada turpis id fringilla
                        suscipit. Maecenas ultrices, orci
                        vitae convallis mattis.
                    </p>
                </div>
                <div className="flex flex-col justify-center items-center gap-4 max-w-64 mx-auto lg:my-12">
                    <div className="bg-[#B8B8B8] h-[106px] w-[106px] rounded-4xl p-4">
                        <img
                            src="/schedule.svg"
                            alt="schedule icon"
                            className="w-fit"
                        />
                    </div>
                    <h2 className="text-xl font-semibold">
                        Choose Location
                    </h2>
                    <p className="text-sm">
                        Aliquam erat volutpat. Integer
                        malesuada turpis id fringilla
                        suscipit. Maecenas ultrices, orci
                        vitae convallis mattis.
                    </p>
                </div>
                <div className="flex flex-col justify-center items-center gap-4 max-w-64 mx-auto lg:my-12">
                    <div className="bg-[#B8B8B8] h-[106px] w-[106px] rounded-4xl p-4">
                        <img
                            src="/car.svg"
                            alt="car icon"
                            className="w-fit"
                        />
                    </div>
                    <h2 className="text-xl font-semibold">
                        Choose Location
                    </h2>
                    <p className="text-sm">
                        Aliquam erat volutpat. Integer
                        malesuada turpis id fringilla
                        suscipit. Maecenas ultrices, orci
                        vitae convallis mattis.
                    </p>
                </div>
            </div>
        </div>
    );
}
