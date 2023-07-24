function Expertise() {
    const softwares = ["Visual Studio Code", "Postman", "Tableplus", "Docker Desktop", "FileZilla", "pgAdmin"];
    const skills = ["HTML", "CSS", "JavaScript", "React", "GIT", "Tailwind", "Express", "Sequelize", "TypeScript", "SQL"];

    function Skills(props) {
        console.log(skills);
        console.log(props.list);

        return <div className="bg-zinc-900 py-6 px-10 max-sm:mx-6 rounded-lg">
            <h2 className="font-semibold text-5xl max-sm:text-3xl text-center pb-16">{props.name}</h2>
            <div className="flex flex-wrap justify-center mx-auto gap-x-3 gap-y-6 w-96 max-sm:w-full">
                {props.list.map((item, index) => (
                    <p key={index} className="bg-zinc-800 px-5 py-3">{item}</p>
                ))}
            </div>
        </div>
    }

    return (
        <div>
            <h1 className="flex justify-center font-bold text-6xl max-sm:text-4xl pb-16">À propos de moi</h1>
            <p className="text-justify mx-96  pb-10">Je me suis lancé dans le domaine du développement web après avoir fini mon année de lycée en faisant un stage de 5 semaines dans un espace de Co-Working avec deux développeurs (un dév Front-end et Back-end) puis j'ai continué en autodidacte en étant épaulé par un développeur en freelance.</p>
            <div className="flex flex-row max-sm:flex-col justify-center gap-20 mx-32 max-sm:mx-0">
                <div className="flex flex-col gap-y-6">
                    <Skills list={skills} name="Mes compétences" />
                    <Skills list={softwares} name="Mes logiciels" />
                </div>
                <div className="px-4">
                    <img style={{ width: "480px" }} src={process.env.PUBLIC_URL + '/RATOUIT_Lucas_CV.png'} alt="CV" />
                    <a className="hover:bg-white max-sm:bg-zinc-900 hover:text-zinc-900 flex justify-center mx-auto w-40 px-4 py-2 mt-10 rounded-xl" href={process.env.PUBLIC_URL + '/RATOUIT_Lucas_CV.pdf'} download>Télécharger le CV</a>
                </div>
            </div>
        </div>
    )
};

export default Expertise;
