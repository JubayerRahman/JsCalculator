// mode functions
const notmalButton = document.getElementById('modeNormal').addEventListener('click',()=>{
    document.getElementById('main').classList.toggle('normalBackground')
    document.getElementById('main').classList.remove('orangeBackground');
    document.getElementById('main').classList.remove('redbackground');
    document.getElementById('main').classList.remove('pinkBackground');
    Array.from(document.getElementsByClassName('button')).forEach((element)=>{
        element.classList.remove('orangeButtons')
        element.classList.remove('redButton')
        element.classList.remove('pinkButton')
    })
})

const orangeButton = document.getElementById('modeOrange').addEventListener('click',()=>{
    document.getElementById('main').classList.toggle('orangeBackground');
    document.getElementById('main').classList.remove('redbackground');
    document.getElementById('main').classList.remove('pinkBackground');
    document.getElementById('main').classList.remove('normalBackground');
    Array.from(document.getElementsByClassName('button')).forEach((element)=>{
        element.classList.toggle('orangeButtons')
        element.classList.remove('redButton')
        element.classList.remove('pinkButton')
    })
})

const redButton = document.getElementById('modeRed').addEventListener('click',()=>{
    document.getElementById('main').classList.toggle('redbackground');
    document.getElementById('main').classList.remove('orangeBackground');
    document.getElementById('main').classList.remove('pinkBackground');
    document.getElementById('main').classList.remove('normalBackground');
    Array.from(document.getElementsByClassName('button')).forEach((element)=>{
        element.classList.toggle('redButton')
        element.classList.remove('orangeButtons')
        element.classList.remove('pinkButton')
    })
})

const pinkButton = document.getElementById('modePink').addEventListener('click',()=>{
    document.getElementById('main').classList.toggle('pinkBackground')
    document.getElementById('main').classList.remove('redbackground')
    document.getElementById('main').classList.remove('orangeBackground')
    document.getElementById('main').classList.remove('normalBackground');
    Array.from(document.getElementsByClassName('button')).forEach((element)=>{
        element.classList.toggle('pinkButton')
        element.classList.remove('orangeButtons')
        element.classList.remove('redButton')
    })
})

// display function

Array.from(document.getElementsByClassName('number')).forEach((element)=>{
    element.addEventListener('click',()=>{
        document.getElementById('text').innerHTML += element.value;
    })
})

Array.from(document.getElementsByClassName('Icon')).forEach((element)=>{
    element.addEventListener('click',()=>{
        document.getElementById('text').innerHTML += element.value;
    })
})

//ac function

const ac = document.getElementById('ac').addEventListener('click',()=>{
    document.getElementById('text').innerHTML = "";
})

// creator function
const creator =document.getElementById('creator').addEventListener('click', ()=>{
    document.getElementById('text').innerHTML = "";
    const creatorLink = document.createElement('a')
    const link = document.createTextNode('Jobayer Rahman')
    creatorLink.appendChild(link);
    creatorLink.title ="Jobayer Rahman"
    creatorLink.href ='https://jubayerrahman.github.io/JubayerCompletePortfolio/'
    creatorLink.target ='_blank'
    document.getElementById('display').appendChild(creatorLink);
    // document.getElementById('text').innerHTML += "Jobayer Rahman";
})

//equal function
const equals= document.getElementById('equals').addEventListener('click',()=>{
    try{
        document.getElementById('text').innerText = eval(document.getElementById('text').innerText);
    } catch{
        document.getElementById('text').innerText = "Error! Contact Jobayer"
    }
})