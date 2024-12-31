export default function Loading() {
    return (
        <div className="min-h-screen flex items-center bg-white dark:bg-black">
            <main className="py-6 sm:py-10 px-4 sm:px-8 mx-auto max-w-4xl w-full">
                <div className="space-y-6 animate-pulse">
                    <div className="flex justify-between items-center">
                        <div>
                            <div className="h-8 w-48 bg-gray-200 dark:bg-neutral-800 rounded"></div>
                            <div className="flex mt-2 space-x-2">
                                <div className="h-4 w-16 bg-gray-200 dark:bg-neutral-800 rounded"></div>
                                <div className="h-4 w-12 bg-gray-200 dark:bg-neutral-800 rounded"></div>
                                <div className="h-4 w-14 bg-gray-200 dark:bg-neutral-800 rounded"></div>
                            </div>
                        </div>
                        <div className="h-8 w-8 bg-gray-200 dark:bg-neutral-800 rounded"></div>
                    </div>

                    <div className="space-y-4 pt-10">
                        {[...Array(6)].map((_, i) => (
                            <div key={i} className="flex items-center justify-between">
                                <div className="h-6 w-3/4 bg-gray-200 dark:bg-neutral-800 rounded"></div>
                                <div className="h-4 w-12 bg-gray-200 dark:bg-neutral-800 rounded"></div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
                        {[...Array(6)].map((_, i) => (
                            <div key={i} className="h-[300px] bg-gray-200 dark:bg-neutral-800 rounded"></div>
                        ))}
                    </div>
                </div>
            </main>
        </div>
    )
} 