require('babel-polyfill')
const jokeEl = document.querySelector('.joke');
const btn = document.querySelector('.btn');

btn.addEventListener('click', getJoke);

getJoke()
//在这个函数里面向笑话网站发送一个请求   希望他把笑话数据返回给我们
// 然后才能生成新的笑话
async function getJoke() {
    let response = await fetch('https://icanhazdadjoke.com/', {
        headers: {
            accept: 'application/json'
        }
    })
    let data = await response.json()
    jokeEl.innerHTML = data.joke;
}