
# Stencil Component Example

This is a starter project for building Web Components using Stencil.
In the first step a radiobutton with label and grouping capabilities is build.


## Getting Started

To start building additional web components using Stencil, clone this repo to a new directory:

```bash
git clone https://github.com/serkoma/sgb9-components.git my-component
cd my-component
git remote rm origin
```

and run:

```bash
npm install
npm start
```

To build the component for production, run:

```bash
npm run build
```

To run the unit tests for the components, run:

```bash
npm test
```

Need help? Check out the stencil docs [here](https://stenciljs.com/docs/my-first-component).


## Naming Components

When creating new component tags, it is recommend _not_ using `stencil` in the component name (ex: `<stencil-datepicker>`). This is because the generated component has little to nothing to do with Stencil; it's just a web component!

So we use a prefix that fits for our goal building components for an application that is related to sgb9. So we use the prefix `sgb9`.

## Using this component

### supported props
property    | type | description
------------ | ----------------- | ------
 **label** | string | A string-value to be displayed next to the button.
 **group** | string |The name of a buttongroup, this button belongs to.
 **idValue** | string |The value of the id of this control, used to bind it to its label.
 **value** | number | The value of this control. This is returned by the  *checkRadioChanged* Event.  
**checked** | boolean |  An optional prop, to indicate the button, that is initially checked.

`<sgb9-radio label={RADIOTEXTE[0]} group="elan-radio-1" idValue="elan-radio-0000" value={0} checked={true}>`

- To get informed of changes use

`  @Listen('checkRadioChange')`
`  checkChangeHandler(event: CustomEvent) { `
`    console.log(MODULNAME + 'Received the custom checkRadioChange event: ', event); `
`  }`
-The checked button value resides in *event.detail.value*.


### Script tag

- [Publish to NPM](https://docs.npmjs.com/getting-started/publishing-npm-packages)
- Put a script tag similar to this `<script src='https://unpkg.com/my-component@0.0.1/dist/mycomponent.js'></script>` in the head of your index.html
- Then you can use the element anywhere in your template, JSX, html etc

### Node Modules
- Run `npm install sgb9-components --save`
- Put a script tag similar to this `<script src='node_modules/sgb9-components/dist/sgb9components.js'></script>` in the head of your index.html
- Then you can use the element anywhere in your template, JSX, html etc

### In a stencil-starter app
- Run `npm install my-component --save`
- Add an import to the npm packages `import my-component;`
- Then you can use the element anywhere in your template, JSX, html etc
