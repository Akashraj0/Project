import { Special } from "./Special";
import {Hero} from "./Hero"
import { Testimony } from "./Testimony";
import { About } from "./About";
import {Header} from "./Header"
import { Footer } from "./Footer";

export function Main()
{
    return(
        <>
        <Header/>
        <Hero/>
        <Special/>
        <Testimony/>
        <About/>
        <Footer/>
        </>
    )
}