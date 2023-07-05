let milisegundos = 1
let segundos = 1
let minutos = 1
let horas = 1

let play = document.getElementById('play')
let pause = document.getElementById('pause')
let resetar = document.getElementById('resetar')


play.addEventListener('click', function (ev) {
    function actionMilisegundos() {
        document.getElementById('milisegundos').innerText = milisegundos
        if (milisegundos === 59) {
            milisegundos = 0
        } else {
            milisegundos++
        }
    }

    function actionSegundos() {
        document.getElementById('segundos').innerText = segundos
        if (segundos === 59) {
            segundos = 0
        } else {
            segundos++
        }
    }

    function actionMinutos() {
        document.getElementById('minutos').innerText = minutos
        if (minutos === 59) {
            minutos = 0
        } else {
            minutos++
        }
    }

    function actionHoras() {
        document.getElementById('horas').innerText = minutos
        if (horas === 59) {
            horas = 0
        } else {
            horas++
        }
    }

    let pausarhora = setInterval(actionHoras, 60000)
    let pausarminu = setInterval(actionMinutos, 60000)
    let pausarSegu = setInterval(actionSegundos, 1000)
    let pausarMili = setInterval(actionMilisegundos, 10)

    pause.addEventListener('click', function (ev) {
        clearInterval(pausarMili)
        clearInterval(pausarSegu)
        clearInterval(pausarminu)
        clearInterval(pausarhora)
    })

    resetar.addEventListener('click', function (ev) {
        location.reload();
    })

})

