const fs = require('fs');
const handlebars = require('handlebars');
const { paramCase, pascalCase } = require('change-case');

const createJsFile = (name) => {
    const source = fs.readFileSync(__dirname + '/template.txt');
    const content = source.toString();
    const template = handlebars.compile(content);
    const result = template({ 
        pascalCase: pascalCase(name),
        paramCase: paramCase(name),
     });
    fs.writeFileSync(`./${ name }/${ name }.js`, result, { encoding: 'utf-8' });
    console.log('SUCCESS: js file created!')
};

module.exports = createJsFile;