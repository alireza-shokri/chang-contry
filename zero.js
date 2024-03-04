var all={
    iran:['tab','tahran','seraz','aromea','gm'],
    us:['los','neoyork','tamp','baedn','gn'],
    sous:['sity a',' sity b','sity s',' sity d','sity e'],
    torke:[' sity j',' sity f',' sity g','sity h','sity l']
}
let  contry=document.getElementById('contry')
let sity=document.getElementsByClassName('sity')
contry.addEventListener('change',my)
let contryvalue;
let allsity;
setTimeout(() => {
    alert('salm \n mortaza kheri')
}, 3000);
function my(){

   contryvalue=(contry.value)
    allsity=(all[contryvalue])
    
    sity[0].innerHTML=allsity[0]
    sity[0].value=allsity[0]
    sity[1].innerHTML=allsity[1]
    sity[1].value=allsity[1]
    sity[2].value=allsity[2]
    sity[2].innerHTML=allsity[2]
    sity[3].value=allsity[3]
    sity[3].innerHTML=allsity[3]
    sity[4].value=allsity[4]
    sity[4].innerHTML=allsity[4]

}


