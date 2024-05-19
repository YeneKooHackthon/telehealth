import React from 'react'
import Link from 'next/link'

const Navigation = ({nextLink}) => {
  return (
    <div className="flex justify-between">
    <Link href="/" className="flex justify-end items-center gap-x-3">
    <p className="text-sm">Home</p>
    <p className="">{`<----`}</p>
    </Link>

    <Link href={nextLink} className="flex justify-end items-center gap-x-3">
    <p className="text-sm">Next</p>
    <p className="">{`---->`}</p>
    </Link>
    
    </div>
  )
}

export default Navigation