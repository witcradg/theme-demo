import Link from "next/link";

export default function Navbar() {
    return (
        <div className="max-2-3xl mx-auto px-4 sm:px-6 lg-px-8">
            <div className="flex justify-between h-16">
                <div className="flex justify-between items-center w-full">
                    <Link href="/">
                        <h1 className="text-2xl font-medium"></h1>
                    </Link>
                </div>
            </div>
        </div>
    )
}