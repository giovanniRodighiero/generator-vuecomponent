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
  message: 'Template engine to use (default to normal HTML)',
  default: 'html',
};

const styleLang = {
  type: 'input',
  name: 'styleLang',
  message: 'Style language to use (default to normal css)',
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
