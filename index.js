// Generated by CoffeeScript 2.3.2
// ![PlayFrame](https://avatars3.githubusercontent.com/u/47147479)
// # Evolve

// ###### 0.16 kB Deep calling assign

// ## Installation
// ```sh
// npm install --save @playframe/evolve
// ```

// ## Usage
// ```js
// import evolve from '@playframe/evolve'

// const props = {onclick: (event)=> fetch()}

// const clickLogger = { onclick: (handler)=>(e)=>
//   console.log(e)
//   handler && handler(e);
// }

// const loggedClicksProps = evolve(props, clickLogger);
// ```

// ## Annotated Source

// Caching `Array.isArray` for perf
var evolve, isArray;

({isArray} = Array);

// Exporting a deep assign that passes old values to functions
module.exports = evolve = (base, upgrade) => {
  var evolved, k, type, v;
  evolved = {...base};
  for (k in upgrade) {
    v = upgrade[k];
    type = typeof v;
    evolved[k] = type === 'function' ? v(base[k]) : type === 'object' && !isArray(v) ? evolve(base[k], v) : v;
  }
  return evolved;
};