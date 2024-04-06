import React from 'react'
import Link from 'next/link'
const page = () => {
  return (
    <div className='flex flex-col gap-6 items-center justify-center'>
        <h1 className="text-3xl py-6">
          Profile
        </h1><br />
       <div className="flex gap-3">
       <Link href="/profile/earn" className="border-2 px-4 py-1 hover:opacity-80 transition-all rounded-lg dark:border-default-100"> 
          Earn
        </Link>
        <Link href="/profile/promoter" className="border-2 px-4 py-1 hover:opacity-80 transition-all rounded-lg dark:border-default-100"> 
          Promoter
        </Link>
       </div>
    </div>
  )
}

export default page