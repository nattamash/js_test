"use sctict";

const options = {
    name: 'natasha',
    age: 21,
    love : {
        name: 'Nikita',
        age: 23
    }
};
const {name, age} = options.love ;
console.log(name);

for (let key in options) {
    if (typeof(options[key]) === 'object') {
        for( let i in options[key]) {
            console.log(`свойство ${i} имеет значение ${options[key][i]}`);
        }
    }
        else {
            console.log(`свойство ${key} имеет значение ${options[key]}`);
        }
}

console.log (Object.keys(options).length);
