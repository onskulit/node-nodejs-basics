const parseArgs = () => {
    const args = process.argv.slice(2);

    const parsedArgs = [];

    for (let i = 0; i < args.length; i += 2) {
        const argName = args[i].slice(2);
        const argValue = args[i + 1];

        parsedArgs.push(`${argName} is ${argValue}`);
    }

    console.log(parsedArgs.join(', '));
};

parseArgs();
