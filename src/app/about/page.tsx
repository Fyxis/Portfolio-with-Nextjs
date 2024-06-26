'use client'

import Navbar from '../components/navbar'

const About = () => {
    return (
        <>
            <Navbar />
            <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 mt-10">
                <div className="h-screen flex">
                    <div className="grid grid-cols-1 mt-9">
                        <h1 className="text-3xl font-bold text-white">INI ABOUT</h1>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About