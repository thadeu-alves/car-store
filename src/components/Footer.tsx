export function Footer() {
    return (
        <div className="bg-[#B8B8B8]">
            <div className="flex flex-col p-6 gap-6 font-semibold max-w-[1020px] mx-auto lg:py-8">
                <h1 className="text-4xl">Logo</h1>
                <p className="font-bold">
                    Our vision is to provide convenience and
                    help increase your sales business.
                </p>
                <div>Social</div>
                <div className="border-b border-[#131313] opacity-30"></div>
                <p>©2022 Company. All rights reserved</p>
                <p className="text-center">
                    Developed by{" "}
                    <a
                        href="https://thadeualves.site"
                        className="text-[#F3F3F3]"
                    >
                        Thadeu Alves
                    </a>
                </p>
            </div>
        </div>
    );
}
