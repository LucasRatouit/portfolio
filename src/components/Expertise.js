function Expertise() {
    const softwares = ["Visual Studio Code", "Postman", "Tableplus", "Docker Desktop", "FileZilla", "pgAdmin"];
    const skills = ["HTML", "CSS", "JavaScript", "React", "GIT", "Tailwind", "Express", "Sequelize", "TypeScript", "SQL"];

    return (
        <div>
            <h1 className="flex justify-center font-bold text-6xl pb-16">À propos de moi</h1>
            <div className="flex flex-row justify-center gap-20 mx-32">
                <div>
                    <div className="bg-zinc-900 py-6 px-10 rounded-lg">
                        <h2 className="font-semibold text-5xl text-center pb-16">Mes compétences</h2>
                        <div className="flex flex-wrap justify-center mx-auto gap-x-3 gap-y-6 w-96">
                            {skills.map((skill, index) => (
                                <p key={index} className="bg-zinc-800 px-5 py-3">{skill}</p>
                            ))}
                        </div>
                    </div>

                    <div className="bg-zinc-900 py-6 px-10 mt-20 rounded-lg">
                        <h2 className="font-semibold text-5xl text-center pb-16">Mes logiciels</h2>
                        <div className="flex flex-wrap justify-center mx-auto gap-x-3 gap-y-6 w-96">
                            {softwares.map((software, index) => (
                                <p key={index} className="bg-zinc-800 px-5 py-3">{software}</p>
                            ))}
                        </div>
                    </div>
                </div>

                <div>
                    <img style={{ width: "480px" }} src={process.env.PUBLIC_URL + '/RATOUIT_Lucas_CV.png'} alt="CV" />
                    <a className="hover:bg-white hover:text-zinc-900 flex justify-center mx-auto w-40 px-4 py-2 mt-10 rounded-xl" href={process.env.PUBLIC_URL + '/RATOUIT_Lucas_CV.pdf'} download>Télécharger le CV</a>
                </div>
            </div>
        </div>
    )
};

export default Expertise;
