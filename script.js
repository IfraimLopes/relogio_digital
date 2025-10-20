function iniciarRelogio(){
    carregar()
    setInterval(carregar, 10)
}

function carregar(){
    let h_s = window.document.getElementById('Hora')
    let m_s = window.document.getElementById('Min')
    let segundos = window.document.getElementById('segundos')
    let micro_segundos = window.document.getElementById('micro')

    let hora = new Date().getHours()
    let min = new Date().getMinutes()
    let segundo = new Date().getSeconds()
    let micro = new Date().getMilliseconds()

    if(min < 10){
        min = "0" + min;
        micro = micro < 10? "0" + micro : micro
    } 
        h_s.innerText = hora;
        m_s.innerText = min;
        segundos.innerText = segundo;
        micro_segundos.innerText = micro;





}
