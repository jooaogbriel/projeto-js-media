const array = [70,70,80]

console.log(mediaDoAluno(array));

function mediaDoAluno(notas){
    const media = calcularMedia(notas)

    if (media < 59) return 'F'

    if (media < 69) return 'D'

    if (media < 79) return 'C'

    if (media < 89) return 'B'
    return 'A';
}

function calcularMedia(array){
    let soma = 0 

    for(let valor of array ){
        soma += valor;
    }
    return soma/(array.length);
}

function startTime()
{
var today=new Date();
var h=today.getHours();
var m=today.getMinutes();
var s=today.getSeconds();
// add a zero in front of numbers<10
m=checkTime(m);
s=checkTime(s);
document.getElementById('txt').innerHTML=h+":"+m+":"+s;
t=setTimeout('startTime()',500);

}

function checkTime(i)
{
if (i<10)
  {
  i="0" + i;
  }
return i;
}
