/* global document */
/* global TimelineMax */
/* global Power2 */
/* eslint-env es6 */

let mainNode = document.getElementById('mainNode');
let homeEle = document.getElementById('home');
let aboutEle = document.getElementById('about');

const tl = new TimelineMax();

let homeObj = {
    class:"home",
    bg:"bg-home",
    gradient:"gradient-home",
    tempbg:"temp-home-bg"
};

let aboutObj = {
    class:"about",
    bg:"bg-about",
    gradient:"gradient-about",
    tempbg:"temp-about-bg"
};

homeEle.addEventListener("click", function() {
    if(document.getElementById('child').className !== 'home') {
       loadpage.call(homeObj);
    }
});
aboutEle.addEventListener("click", function() {
    if(document.getElementById('child').className !== 'about') {
       loadpage.call(aboutObj);
    }
});

function loadpage() {
    let newSection = document.createElement("section");
    newSection.setAttribute('id', 'child');
    newSection.className = `${this.class}`;
    newSection.innerHTML = 
            `<section class="${this.bg}">
                <div class="${this.gradient}"></div>
                <div class="${this.tempbg}"></div>
            </section>`;
    mainNode.appendChild(newSection);
    
    let oldChild = document.querySelector('#child');
    mainNode.removeChild(oldChild);
    
    runAni.call(this);
}

function runAni() {
    let gradChild = document.querySelector(`.${this.gradient}`);
    let tempbg = document.querySelector(`.${this.tempbg}`);

    tl.fromTo(gradChild, 1.2, {height: '0%'}, {height: '100%'})
    .fromTo(tempbg, 1.2, {opacity: "1"}, {opacity: "0"});
}

function start() {
    let ghome = document.querySelector('.gradient-home');
    //let tempbg = document.querySelector('.temp-home-bg');
    tl.fromTo(ghome, 1.2, {height: "0"}, {height: "100%", ease: Power2.easeInOut});
    //.fromTo(tempbg, 1.2, {opacity: "1"}, {opacity: "0", ease: Power2.easeInOut}, "-=1.2");
}

start();





