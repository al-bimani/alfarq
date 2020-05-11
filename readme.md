بسم الله الرحمن الرحيم  

# alfarq
alfarq is an arabic word, means 'the difference'.  
i created this package to get the differences  
between values of any data type in javascript.  


# readme

this package exports one function called 'of'  
the function will dettermain the data type   
of the given argument and will return a new   
function called 'in' which accpets the second value   
then the function will return value of the same datatype   
given or will return null if there's no diffrence  


```javascript
const alfarq = require("alfarq");

const a = [1]; // index: 0, value: 1
const b = [2]; // index: 0, value: 2

const result = alfarq.of(a).in(b); // [2]

console.log(result)
```  

as seen in the result, it returns `[2]` which means    
the result is the new changed value.  

another example  

```javascript
const alfarq = require("alfarq");

const course1 = {
    title: "how to geek", // key: title, value: ""how to geek"
    tutorials: [ // key: tutorials, value: array
        { // index: 0, value: object
            title: "introduction", // key: title, value: "introduction"
            order: 0 // key: order, value: 0
        }
    ]
};

const course2 = {
    title: "how to geek", // key: title, value: ""how to geek"
    tutorials: [ // key: tutorials, value: array
        { // index: 0, value: object
            title: "introduction", // key: title, value: "introduction"
            order: 1 // key: order, value: 1
        }
    ]
};

const result = alfarq.of(course1).in(course2); // { tutorials: [ { order: 1 } ] }

console.log(result)
```

the result is clear, only the changed values is registered with their path.  
the unchanged values is skipped.


## License

MIT © [al-bimani](https://github.com/al-bimani)