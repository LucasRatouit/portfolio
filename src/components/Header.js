import { useState } from "react";

function Header() {
    const [navbar, setNavbar] = useState(false);

    function Link(props) {
        return <a className="hover:text-white max-sm:bg-zinc-700 max-sm:px-3 max-sm:py-2 max-sm:rounded-lg" href={`/#${props.href}`}>{"<"}{props.name} {"/>"}</a>
    }

    function navbarStatus() {
        if (navbar === false) {
            setNavbar(true)
        } else {
            setNavbar(false)
        }
    }

    return (
        <header className="flex flex-col whitespace-nowrap">
            <div className="flex flex-row justify-between pl-10 pr-32 max-sm:px-2 max-sm:pr-7">
                <a href="/"><img className="w-32 max-sm:w-24" src={process.env.PUBLIC_URL + '/logo.png'} alt="logo" /></a>
                <div className="flex gap-x-20 my-auto text-slate-400 font-semibold text-lg max-sm:hidden">
                    <Link href="expertise" name="À mon sujet" />
                    <Link href="projects" name="Projets" />
                    <Link href="contact" name="Contacter" />
                </div>
                <button className="sm:hidden" onClick={navbarStatus}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={`w-12 h-12 ${navbar ? "hidden" : ""}`}>
                        <path fillRule="evenodd" d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" clipRule="evenodd" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={`w-12 h-12 ${!navbar ? "hidden" : ""}`}>
                        <path fillRule="evenodd" d="M2.25 4.5A.75.75 0 013 3.75h14.25a.75.75 0 010 1.5H3a.75.75 0 01-.75-.75zm14.47 3.97a.75.75 0 011.06 0l3.75 3.75a.75.75 0 11-1.06 1.06L18 10.81V21a.75.75 0 01-1.5 0V10.81l-2.47 2.47a.75.75 0 11-1.06-1.06l3.75-3.75zM2.25 9A.75.75 0 013 8.25h9.75a.75.75 0 010 1.5H3A.75.75 0 012.25 9zm0 4.5a.75.75 0 01.75-.75h5.25a.75.75 0 010 1.5H3a.75.75 0 01-.75-.75z" clipRule="evenodd" />
                    </svg>
                </button>
            </div>
            <div className={`flex flex-col items-center gap-y-10 pt-16 ${!navbar ? "hidden" : ""}`} onClick={navbarStatus}>
                <Link href="expertise" name="À mon sujet" />
                <Link href="projects" name="Projets" />
                <Link href="contact" name="Contacter" />
            </div>
            <div className="flex flex-col text-center gap-y-6 pt-72 max-sm:pt-40">
                <h1 className="font-bold text-9xl max-sm:text-4xl">RATOUIT LUCAS</h1>
                <h3 className="font-semibold text-xl max-sm:text-xs">Développeur FRONT END - BACK END</h3>
            </div>
        </header>
    )
};

export default Header;
