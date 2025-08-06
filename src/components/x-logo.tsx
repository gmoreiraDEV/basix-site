import * as React from "react"
import { SVGProps } from "react"
export default function XLogo(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={51}
            height={51}
            fill="none"
            {...props}
        >
            <path
                fill="currentColor"
                fillRule="evenodd"
                d="M51 9.664 41.336 0 0 41.336 9.665 51 25.5 35.164 41.336 51 51 41.336 35.164 25.5 51 9.664Z"
                clipRule="evenodd"
            />
            <path
                fill="currentColor"
                d="M9.664 0 0 9.67l14.495 14.504 9.665-9.67L9.664 0Z"
            />
        </svg>
    )
}
