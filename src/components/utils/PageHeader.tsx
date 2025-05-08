export function PageHeader({
    title,
    paragraf,
}: {
    title: string;
    paragraf: string;
}) {
    return (
        <>
            <h1 className="font-medium text-4xl md:col-span-2 lg:col-span-4">
                {title}
            </h1>
            <p className="md:col-span-2 lg:col-span-4">
                {paragraf}
            </p>
        </>
    );
}
