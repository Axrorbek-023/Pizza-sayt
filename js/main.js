var elSelect = document.querySelector('.select')
var elSpan = document.querySelector('.span')
var elSpan2 = document.querySelector('.span2')

var elCm1 = document.querySelector('.cm1')
var elCm2 = document.querySelector('.cm2')
var elCm3 = document.querySelector('.cm3')

var elUstida = document.querySelector('.ustida')
var elspan3 = document.querySelector('.span3')
var elspan4 = document.querySelector('.span4')
var elspan5 = document.querySelector('.span5')
var elspan6 = document.querySelector('.span6')
var elspan7 = document.querySelector('.span7')
var elspan8 = document.querySelector('.span8')
var elspan9 = document.querySelector('.span9')
var elspan10 = document.querySelector('.span10')

function select(value){
    if(value == 'Qalin'){
        elSpan.textContent = value
    }else if(value == 'Ortacha'){
        elSpan.textContent = value
    }else if(value == 'Yupqa'){
        elSpan.textContent = value
    }
}


function radius(){
    elSpan2.textContent = '25cm'
}
function radius2(){
    elSpan2.textContent = '30cm'
}
function radius3(){
    elSpan2.textContent = '35cm'
}


function fnInp1(){
    elspan3.textContent = 'Pomidor'
}
function fnInp2(){
    elspan4.textContent = "Kurka go'shti"
}
function fnInp3(){
    elspan5.textContent = 'Zaytun'}
function fnInp4(){
    elspan6.textContent = "Tuzlangan bodring"
}
function fnInp5(){
    elspan7.textContent = "Qo'ziqorin"
}
function fnInp6(){
    elspan8.textContent = 'Qazi'
}
function fnInp7(){
    elspan9.textContent = 'Achchiq'
}

function fnInp8(){
    elspan10.textContent = 'Pishloq'
}