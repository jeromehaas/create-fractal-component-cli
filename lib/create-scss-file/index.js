const fs = require('fs');
const handlebars = require('handlebars');
const { paramCase } = require('change-case');

const createConfigFile = (name) => {
    const source = fs.readFileSync(__dirname + '/template.txt');
    const content = source.toString();
    const template = handlebars.compile(content);
    const result = template({ 
        paramCase: paramCase(name),
     });
    fs.writeFileSync(`./${ name }/${ name }.scss`, result, { encoding: 'utf-8' });
    console.log('SUCCESS: scss file created!')
};

module.exports = createConfigFile;