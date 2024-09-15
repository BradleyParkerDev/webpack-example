/// <reference types="webpack/module" /> 

import  generateJoke  from "./generateJoke";
import { getPokemon } from "./getPokemon";
console.log('Recovered work!')
const joke = generateJoke();
console.log(joke);
// console.log(import.meta.webpack); // without reference declared above, TypeScript will throw an error
getPokemon()