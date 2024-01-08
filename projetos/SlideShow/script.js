'use strict';

const images = [

    { 'id': '1', 'url': 'classroom.jpg' },
    { 'id': '2', 'url': 'deathnote.jpg' },
    { 'id': '3', 'url': 'Hellsing.jpg' },
    { 'id': '4', 'url': 'Jigokuraku.jpg' },
    { 'id': '5', 'url': 'JujutsuKaisen.jpg' },
    { 'id': '6', 'url': 'KemonoJihen.jpg' },
    { 'id': '7', 'url': 'MobPsycho100.jpg' },
    { 'id': '8', 'url': 'Monogatari.jpeg' },
    { 'id': '9', 'url': 'evangelion.jpg' },

]

const container = document.querySelector('#container-items');

const loadImages = (images, container) => {
    images.forEach ( image => {
        container.innerHTML += `
        <div class='item'>
            <img src='${image.url}'
        </div>
        `
    })
}

//loadImages( images, container );