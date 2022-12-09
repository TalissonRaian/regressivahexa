const diasCaixa = document.querySelector('#dias')
const horasCaixa = document.querySelector('#horas')
const minCaixa = document.querySelector('#min')
const secCaixa = document.querySelector('#sec')
const pomboLoop = document.querySelector('#pomboLog')
const relogioDisplay = document.querySelector('#relogio')
const localHexa = document.querySelector('#local')


const data = new Date('December 18 2022 11:00:00')



const regressivaHexa = () => {
    const dataAtual = new Date()
    const dif = data - dataAtual
    const dias = Math.floor(dif / 1000 / 60 / 60 / 24)
    const horas = Math.floor(dif / 1000 / 60 / 60) % 24
    const minutos = Math.floor(dif / 1000 / 60 ) % 24
    const segundos = Math.floor(dif / 1000 ) % 24

    diasCaixa.textContent = dias < 10 ? '0' + dias : dias
    horasCaixa.textContent = horas < 10 ? '0' + horas : horas
    minCaixa.textContent = minutos < 10 ? '0' + minutos : minutos
    secCaixa.textContent = segundos < 10 ? '0' + segundos : segundos

    console.log(dias, horas, minutos, segundos)
    
}

setTimeout(() => {
    pomboLoop.remove()

    relogioDisplay.style.display = 'flex'
    localHexa.style.display = 'flex'
    
}, 2000)

setInterval(regressivaHexa, 2000)



let cont = 1;
document.getElementById('radio1').checked = true;

setInterval(function(){
proxImg();
}, 2000)

function proxImg(){
    cont++;
    if (cont>3) {
        cont = 1;
    }
    document.getElementById('radio' + cont).checked = true;
}
