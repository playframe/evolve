
![PlayFrame](https://avatars3.githubusercontent.com/u/47147479)
# Evolve

###### 0.16 kB Deep calling assign

## Installation
```sh
npm install --save @playframe/evolve
```

## Usage
```js
import evolve from '@playframe/evolve'

const props = {onclick: (event)=> fetch()}

const clickLogger = { onclick: (handler)=>(e)=>
  console.log(e)
  handler && handler(e);
}

const loggedClicksProps = evolve(props, clickLogger);
```

## Annotated Source

Caching `Array.isArray` for perf

    {isArray} = Array

Exporting a deep assign that passes old values to functions

    module.exports = evolve = (base, upgrade)=>
      evolved = {base...}

      for k, v of upgrade
        type = typeof v
        evolved[k] = if type is 'function'
            v base[k]

          else if type is 'object' and not isArray v
            evolve base[k], v

          else
            v

      evolved
