const swc = require('../pkg')

let settings = {
  jsc: {
    target: "es2016",
    parser: {
      syntax: "ecmascript",
      jsx: true,
      dynamicImport: false,
      numericSeparator: false,
      privateMethod: false,
      functionBind: false,
      exportDefaultFrom: false,
      exportNamespaceFrom: false,
      decorators: false,
      decoratorsBeforeExport: false,
      topLevelAwait: false,
      importMeta: false,
    },
  },
};

let code = `
let a = 1;
let b = {
    c: {
        d: 1
    }

};
console.log(b?.c?.d);

let MyComponent = () => {
    return (<div a={10}>
        <p>Hello World!</p>
    </div>);
}
`;

let result = swc.transformSync(code, settings);
// console.log("result from transformSync", result);
// console.log(result.code);

swc.denoRequireFetch('').then(res => {
  console.log(res)
})
