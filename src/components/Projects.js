function Projects() {
    return (
        <div className="flex flex-col items-center">
            <h1 className="font-bold text-5xl pb-10">Mes projets</h1>
            <h3 className="font-semibold text-xl pb-20">Ci-dessous, quelques projets effectués durant un stage et par expérience personnel :</h3>
            <div className="bg-zinc-700 p-10 rounded-xl">
                <img className="w-96" src={process.env.PUBLIC_URL + 'capture_portfolio.png'} alt="capture d'écran du portfolio" />
            </div>
        </div>
    )
};

export default Projects;
