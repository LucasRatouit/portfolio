import { useTheme } from "./useTheme";

function Expertise() {
    const { bgColors } = useTheme();
    const skillsContext = require.context('../../public/skills')
    const skillsLogo =skillsContext.keys();
    const softwaresContext = require.context('../../public/softwares')
    const softwaresLogo =softwaresContext.keys();

    function Skills(props) {
        return <div>
            <h2 className="font-semibold text-5xl max-sm:text-3xl text-center pb-16">{props.name}</h2>
            <div className="grid grid-cols-4 justify-center items-center mx-auto gap-12 w-96 max-sm:w-full">
                {props.list.map((item, index) => (
                    <img className="w-14" key={index} src={process.env.PUBLIC_URL + props.type + '/' + item} alt="logo skills png"></img>
                ))}
            </div>
        </div>
    }

    return (
        <div>
            <h1 className="flex justify-center font-bold text-6xl max-sm:text-4xl pb-6">À propos de moi</h1>
            <p className="text-justify mx-96 pb-20">Je me suis lancé dans le domaine du développement web après avoir fini mon année de lycée en faisant un stage de 5 semaines dans un espace de Co-Working avec deux développeurs (un dév Front-end et Back-end) puis j'ai continué en autodidacte en étant épaulé par un développeur en freelance. (<a className="hover:text-zinc-500" href={process.env.PUBLIC_URL + '/POST_CV.pdf'} download>clique ici pour voir mon CV</a>)</p>
            <div className="flex flex-row max-sm:flex-col justify-center gap-20 mx-32 max-sm:mx-0">
                <div className="flex flex-col place-content-center gap-y-10">
                    <Skills list={skillsLogo} type="skills" name="Mes compétences" />
                    <span className={`${bgColors} h-px`} />
                    <Skills list={softwaresLogo} type="softwares" name="Mes logiciels" />
                </div>
            </div>
        </div>
    )
};

export default Expertise;
