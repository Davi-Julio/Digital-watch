var hr = document.querySelector('.hr');
var mim  = document.querySelector('.min');
var seg = document.querySelector('.seg');

const dat = setInterval(function time(){

    var date = new Date();

    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();

    if(h <10) h = '0' + h; 
    if(m <10) m = '0' + m; 
    if(s <10) s = '0' + s; 


    hr.innerHTML = h;
    mim.innerHTML = m;
    seg.innerHTML =s

})

