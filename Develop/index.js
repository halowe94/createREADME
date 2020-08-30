let inquirer = require("inquirer");
let fs = require('fs');

// array of questions for user
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?"
    },
    {
        type: "input",
        name: "description",
        message: "Give a brief descriptiion of your project"
    },
    {
        type: "input",
        name: "packageName",
        message: "What package needs to be installed? "
    },
    {
        type: "input",
        name: "packageLink",
        message: "What is the link to the package?"
    }

];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {
    //data is the response object containing the responses toa ll of the user questions
    inquirer.prompt(questions).then(function (data) {
        let filename = "README.md"

        let readMeTemplate = `
# ${data.title}

${data.description}

## Installation

Use the package manager [${data.packageName}](${data.packageLink}) to install foobar.

\`\`\`bash
pip install foobar
\`\`\`

## Usage

\`\`\`python
import foobar

foobar.pluralize('word') # returns 'words'
foobar.pluralize('goose') # returns 'geese'
foobar.singularize('phenomena') # returns 'phenomenon'
\`\`\`

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)`

        fs.writeFile(filename, readMeTemplate, function (err) {
            if (err) {
                console.log(err);
            }
            console.log("you created a README file!!!");
        });

    })
};

// function call to initialize program
init();
