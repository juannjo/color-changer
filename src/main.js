const numbercito = document.getElementById('numbercito');

const fondo = document.getElementById('allContainer');

const colorRandom = () => {
    const randomizeCol = Math.floor(Math.random()*16777215).toString(16);
    if(numbercito.childElementCount < 1) {
        numbercito.textContent = `#${randomizeCol}`
    }; 

    fondo.style.backgroundColor = `#${randomizeCol}`;
};

colorRandom();
