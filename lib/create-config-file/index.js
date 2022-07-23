const fs = require('fs');
const handlebars = require('handlebars');
const { paramCase, pascalCase } = require('change-case');

const createConfigFile = (name) => {
    const source = fs.readFileSync(__dirname + '/template.txt');
    const content = source.toString();
    const template = handlebars.compile(content);
    const result = template({ 
        headerCase: pascalCase(name),
     });
    fs.writeFileSync(`./${ name }/${ name }.config.yml`, result, { encoding: 'utf-8' });
    console.log('SUCCESS: config file created!')
};

module.exports = createConfigFile;