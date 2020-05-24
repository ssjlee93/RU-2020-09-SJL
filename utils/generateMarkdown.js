function generateMarkdown(data) {
  return `
# ${data.title}

${data.description}

![${data.label}](https://img.shields.io/static/v1?label=${data.label}&message=${data.message}&color=${data.color})

## Table of Contents 

* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
* [Credits](#credits)

## Installation

${data.installation}

## Usage

${data.usage}

## License

${data.license}

## Contributing

${data.contributing}

## Tests

${data.tests}

## Questions

If you have any more question, please contact ${data.email}

## Credits

${data.credits}

`;
}

module.exports = generateMarkdown;
