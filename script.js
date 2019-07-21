/* global document */
/* global TimelineMax */
/* global Power2 */
/* eslint-env es6 */

let mainNode = document.getElementById('mainNode');
let homeBtn = document.getElementById('home');
let aboutBtn = document.getElementById('about');
let contactUsBtn = document.getElementById('contactUs');

const tl = new TimelineMax();

let homeObj = {
    class:"home",
    bg:"bg-home",
    gradient:"gradient-home",
    tempbg:""
};

let aboutObj = {
    class:"about",
    bg:"bg-about",
    gradient:"gradient-about",
    tempbg:""
};
let contactUsObj = {
    class:"contactUs",
    bg:"bg-contactUs",
    gradient:"gradient-contactUs",
    tempbg:""
};

homeBtn.addEventListener("click", function() {
    if(document.getElementById('child').className !== 'home') {
       loadpage.call(homeObj);
    }
});
aboutBtn.addEventListener("click", function() {
    if(document.getElementById('child').className !== 'about') {
       loadpage.call(aboutObj);
    }
});
contactUsBtn.addEventListener("click", function() {
    if(document.getElementById('child').className !== 'contactUs') {
       loadpage.call(contactUsObj);
    }
});

function loadpage() {
    let tempbg = document.getElementById('tempbgid').className;
    //console.log(tempbg);
    this.tempbg = tempbg;
    let newSection = document.createElement("section");
    newSection.setAttribute('id', 'child');
    newSection.className = `${this.class}`;
    newSection.innerHTML = 
            `<section class="${this.bg}">
                <div class="${tempbg}"></div> 
                <div id="tempbgid" class="${this.gradient}"></div>
            </section>`;
    // need to grab previous pages tempbg instead of a set thing
    mainNode.appendChild(newSection);
    
    let oldChild = document.querySelector('#child');
    mainNode.removeChild(oldChild);
    
    runAnimation.call(this);
}

function runAnimation() {
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





