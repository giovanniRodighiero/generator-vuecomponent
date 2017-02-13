# Vue.js Component generator

This yeoman generator speeds up the creation of Vue.js components, especially in case of the ones written with separated files.

## Dependencies
* yeoman generator => `npm install -g yo`

## Usage
`$ yo vuecomponent`

* __Create separeted files ? (Y/n)__ :

If yes then a structure like this will be created:

```javascript
|--ComponentName/
   |--ComponentName.vue
   |--componentName.js
   |--componentName.css (sass, scss ...)
   |--componentName.html (pug, .njk, ...)
```
In which _ComponentName.vue_ requires the other files like this
```html
<template src="./componentName.pug" lang="pug"></template>

<script src="./componentName.js"></script>

<style src="./componentName.sass" lang="sass?indentedSyntax"></style>
```

Otherwise it will be used the same structure without the `src="..."` option.

* __The name of the component in lowecase__:  straightforward

* __Extension of the template engine you're using (default to normal HTML)__:
For example if you are using pug it is __pug__, for Nunjucks it is __njk__.
Avoid the dot ".", type just the extension.

* __Extension of the style language you're using (default to normal css)__: just like for the html template, note that for __sass__ language, the option `?indentedSyntax` will automatically be added.
