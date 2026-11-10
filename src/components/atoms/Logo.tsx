import type { ImgHTMLAttributes } from 'react'

export default function Logo({ src, alt = '' }: ImgHTMLAttributes<HTMLImageElement>) {
    return (
        <img
            src={src}
            alt={alt}
            className='h-full w-full object-contain'
        />
    )
}