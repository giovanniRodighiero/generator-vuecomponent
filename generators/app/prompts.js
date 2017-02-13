const componentName = {
  type: 'input',
  name: 'componentName',
  message: 'The name of the component in lowecase',
  validate: function (input) {
    if (!input)
      return 'name is required';
    return true;
  }
};

const htmlLang = {
  type: 'input',
  name: 'htmlLang',
  message: 'Extension of the template engine you\'re using (default to standard HTML)',
  default: 'html',
};

const styleLang = {
  type: 'input',
  name: 'styleLang',
  message: 'Extension of the style language you\'re using (default to standard css)__',
  default: 'css',
};


const splitted = {
  type: 'confirm',
  name: 'splitted',
  message: 'Create separeted files ?',
  default: true,
};

module.exports = [
  componentName,
  splitted,
  htmlLang,
  styleLang,
];
