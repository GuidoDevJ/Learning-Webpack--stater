import '../css/components.css'
import webpacklogo from '../assets/img/webpack-logo.png'
export const saludar = ((nombre = 'Sin nombre') => {
    console.log('Creando etiqueta h1')
    const h1 = document.createElement('h1')
    h1.innerHTML = `Hola ${nombre}`
    document.body.appendChild(h1) 
 
 })
 
// Img

// const img = document.createElement('img');
// img.src = webpacklogo;
// document.body.appendChild(img)