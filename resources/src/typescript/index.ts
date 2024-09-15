/// <reference types="webpack/module" /> 
import '../css/main.css'
import  generateJoke  from "./lib/generateJoke";
import { getPokemon } from "./lib/getPokemon";
console.log('Recovered work!')
const joke = generateJoke();
console.log(joke);
// console.log(import.meta.webpack); // without reference declared above, TypeScript will throw an error
getPokemon()