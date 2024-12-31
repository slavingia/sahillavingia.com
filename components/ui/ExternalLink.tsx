import { ArrowUpRight } from "lucide-react"

interface ExternalLinkProps {
    href: string
    children: React.ReactNode
    className?: string
}

export default function ExternalLink({ href, children, className = "" }: ExternalLinkProps) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-1 hover:text-gray-700 dark:hover:text-gray-300 ${className}`}
        >
            {children}
            <ArrowUpRight className="w-3 h-3" />
        </a>
    )
} 