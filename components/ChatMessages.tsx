'use client'

import { motion } from 'framer-motion'

const messages = [
    "C u in three weeks?",
    "Hellooooooo?",
    "I miss u",
    "Cya soon…. rite?",
    "R u coming or not?",
    "I ❤️ u",
    "Got an A in MoBio!!",
    "😡",
]

export default function ChatMessages() {
    return (
        <div className="flex flex-col items-start space-y-2 p-4 bg-gray-100 dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800 rounded-lg max-w-sm">
            {messages.map((message, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                    <div
                        className="px-4 py-2 bg-white dark:bg-neutral-950 text-gray-800 dark:text-gray-200 rounded-2xl rounded-bl-none shadow-sm"
                        role="listitem"
                    >
                        {message}
                    </div>
                </motion.div>
            ))}
        </div>
    )
}

