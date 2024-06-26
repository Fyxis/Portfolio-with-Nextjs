'use client'
import Link from "next/link"
import { useState, useEffect } from "react"

const Navbar = () => {
    const [show, setShow] = useState("")

    useEffect(() => {
        const url = window.location.pathname
        switch (url) {
            case "/dashboard":
                setShow("/dashboard")
                break
            case "/about":
                setShow("/about")
                break
            case "/skills":
                setShow("/skills")
                break
            case "/project":
                setShow("/project")
                break
            default:
                setShow("")
                break
        }
    })
    
    return (
        <div className="fixed w-full top-0 left-0 px-16 bg-black">
            <div className="flex flex-row h-16 items-center justify-between bg-black">
                <div className="flex flex-row">
                    <Link href={"/home"}>
                        <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
                            My Portfolio
                        </h1>
                    </Link>
                </div>
                <div className="flex flex-row gap-5">
                    <Link href={"/about"} className={show === "/about" ? "bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500" : "text-white hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-pink-500 hover:to-violet-500"}>
                        About
                    </Link>
                    <Link href={"/skills"} className={show === "/skills" ? "bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500" : "text-white hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-pink-500 hover:to-violet-500"}>
                        Skills
                    </Link>
                    <Link href={"/project"} className={show === "/project" ? "bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500" : "text-white hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-pink-500 hover:to-violet-500"}>
                        Projects
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar