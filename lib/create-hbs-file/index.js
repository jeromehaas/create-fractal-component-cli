const fs = require('fs');
const handlebars = require('handlebars');
const { paramCase } = require('change-case');

const createHbsFile = (name) => {
    const source = fs.readFileSync(__dirname + '/template.txt');
    const content = source.toString();
    const template = handlebars.compile(content);
    const result = template({ 
        paramCase: paramCase(name),
     });
    fs.writeFileSync(`./${ name }/${ name }.hbs`, result, { encoding: 'utf-8' });
    console.log('SUCCESS: hbs file created!')
};

module.exports = createHbsFile;