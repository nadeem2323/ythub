import {Button} from "@nextui-org/react";
import React from 'react'

const MainSec = () => {
  return (
    <div className="max-sm:px-3"> <main className="container mx-auto max-sm:px-20 relative py-12 grid place-content-center max-md:px-28 max-md:min-h-[500px]">
    <section className="grid grid-cols-1 md:grid-cols-2 gap-8 absolute -top-20">
      <div className="p-6 border-2 bg-white/5 hover:bg-white/15 backdrop-blur-xl border-default-200 transition-all cursor-pointer rounded-2xl shadow-md">
        <h2 className="text-3xl mb-6 font-bold">Promote Your Videos</h2>
        <p className="text-default-500">Get your YouTube videos seen by more people. Promote your content to reach a wider audience.</p>
        <Button href="/promote" radius="full" color="secondary" className="mt-4 flex" variant="solid">Get Started</Button>
      </div>
      <div className="p-6 border-2 bg-white/5 hover:bg-white/15 backdrop-blur-xl cursor-pointer transition-all border-default-200 rounded-2xl shadow-md">
        <h2 className="text-3xl font-bold mb-6">Earn Money by Watching Videos</h2>
        <p className="text-default-500">Earn rewards by watching videos. Join our community and start earning today!</p>
        <Button href="/promote" radius="full" color="secondary" className="mt-4" variant="solid">Join Now</Button>
      </div>
    </section>
  </main></div>
  )
}

export default MainSec