import type { ImgHTMLAttributes } from 'react'
import { cn } from '@/lib/cn'

export default function Logo({ className, alt = '', ...props }: ImgHTMLAttributes<HTMLImageElement>) {
    return (
        <img
            alt={alt}
            width={44}
            height={44}
            className={cn('block size-11 rounded-full object-contain', className)}
            {...props}
        />
    )
}