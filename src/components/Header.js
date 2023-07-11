function Header() {
    return (
        <header className="flex flex-col whitespace-nowrap">
            <div className="flex flex-row justify-between pl-10 pr-32">
                <a href="/"><img className="w-32" src={process.env.PUBLIC_URL + '/logo.png'} alt="logo" /></a>
                <div className="flex gap-x-20 my-auto text-slate-400 font-semibold text-lg">
                    <a className="hover:text-white" href="/#expertise">{"<"}À mon sujet {"/>"}</a>
                    <a className="hover:text-white" href="/#projects">{"<"}Projets {"/>"}</a>
                    <a className="hover:text-white" href="/#contact">{"<"}Contacter {"/>"}</a>
                </div>
            </div>
            <div className="flex flex-col text-center gap-y-6 pt-72">
                <h1 className="font-bold text-9xl">RATOUIT LUCAS</h1>
                <h3 className="font-bold text-xl">Développeur FRONT END - BACK END</h3>
            </div>
        </header>
    )
};

export default Header;
