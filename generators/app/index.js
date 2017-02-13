const Generator = require('yeoman-generator');
const prompts = require('./prompts.js');

const promptMethod = function (that) {
  const done = that.async();
  that.prompt(prompts)
    .then(({ splitted, componentName, htmlLang, styleLang}) => {
      that.splitted = splitted;
      that.componentName = componentName;
      that.htmlLang = htmlLang;
      that.styleLang = styleLang;
      done();
    })
};

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);
    this.componentName = '';
    this.htmlLang = '';
    this.styleLang = '';
    this.splitted = false;
    this.capitalize = (string) => {
      return string.charAt(0).toUpperCase() + string.slice(1);
    };
  };

  prompting() {
    return promptMethod(this);
  };

  writing() {
    const { splitted, componentName, htmlLang, styleLang } = this;
    this.fs.copyTpl(
      this.templatePath('index.html'),
      this.destinationPath(`${this.capitalize(componentName)}/${this.capitalize(componentName)}.vue`),
      { splitted, componentName, htmlLang, styleLang }
    );
    if (splitted) {
      this.fs.write(`${this.capitalize(componentName)}/${componentName}.${htmlLang}`, ' ');
      this.fs.write(`${this.capitalize(componentName)}/${componentName}.${styleLang}`, ' ');
      this.fs.copyTpl(
        this.templatePath('javascript.js'),
        this.destinationPath(`${this.capitalize(componentName)}/${componentName}.js`),
        { componentName }
      );
    }
  }

};
