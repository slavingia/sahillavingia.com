export default function Loading() {
    return (
        <div className="prose dark:prose-invert mx-auto py-5 sm:py-24 flex-1 w-full max-w-3xl">
            <div className="animate-pulse space-y-4 bg-white dark:bg-black">
                <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-1/4"></div>
                <div className="h-8 bg-gray-200 dark:bg-gray-800 rounded w-3/4"></div>
                <div className="space-y-3">
                    <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded"></div>
                    <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded"></div>
                    <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-5/6"></div>
                </div>
            </div>
        </div>
    );
} 