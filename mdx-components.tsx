import type { MDXComponents } from 'mdx/types'
import Image from '@/components/ui/Image'
import Link from 'next/link'

export function useMDXComponents(components: MDXComponents): MDXComponents {
    return {
        // Built-in components
        h1: ({ children }) => <h1 className="text-3xl font-bold mb-4">{children}</h1>,
        h2: ({ children }) => <h2 className="text-2xl font-bold mt-8 mb-4">{children}</h2>,
        p: ({ children }) => <p className="mb-4">{children}</p>,
        a: ({ href, children }) => <Link href={href || '#'} className="text-blue-600 hover:underline">{children}</Link>,
        img: (props) => <Image alt={props.alt || ''} {...props} />,
        // Merge custom components
        ...components,
    }
} 