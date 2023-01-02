import Project from "../../package.json";

export const Views = ({
    index: "",
    signin: "",
    signup: "",
})

export const Application = ({
    title: "Gamer Vision",
    description: "Gives you extra assistance with gamer vision",
})

export const Config = () => ({
    ...Application,
    constants: ({
        debug: true,
        name: Project.name,
        version: Project.version,
    }),
})

export default Config;