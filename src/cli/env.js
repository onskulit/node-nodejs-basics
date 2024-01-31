const parseEnv = () => {
    const envVariables = process.env;

    const parsedEnvVariables = Object.keys(envVariables)
        .filter((key) => key.startsWith('RSS_'))
        .map((key) => `${key}=${envVariables[key]}`)
        .join('; ');

    console.log(parsedEnvVariables);
};

parseEnv();
