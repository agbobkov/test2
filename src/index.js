import $ from "jquery";
global.$ = $;
console.log($('#app'));

import Article from "./article"

import css from "./style.css";

let article = new Article({
    head: 'Ливерпуль победил Чэлси',
    description: 'This is it'
})

article.render();

// console.log(i)
