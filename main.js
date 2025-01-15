let btn = document.getElementById('btn');
let div = document.getElementById('div')
let resultado = document.querySelector('p#res');

function imc(){
    let peso = document.getElementById('txt1').value;
    let altura = document.getElementById('txt2').value;
    let calculo;
    let numeroArredondado;
    if(peso.length == 0 || altura.length == 0){
        alert('Dados incompletos');
        resultado.innerHTML = ''; 
        return;
    } else {
        peso = parseFloat(peso);
        altura = parseFloat(altura);

        calculo = peso / (altura * altura);
        numeroArredondado = Number(calculo.toFixed(2));

        div.style.display = 'block';
        resultado.innerHTML = `Seu IMC é de: ${numeroArredondado}`; 


        if(numeroArredondado >= 40) {
            resultado.innerHTML += `<p>A sua classificação é obesidade extrema III</p>`;
        } else if(numeroArredondado >= 35) {
            resultado.innerHTML += `<p>A sua classificação é obesidade II</p>`;
        } else if( numeroArredondado >= 30) {
            resultado.innerHTML += `<p>A sua classificação é obesidade I</p>`;
        }  else if(numeroArredondado >= 25) {
            resultado.innerHTML += `<p>A sua classificação é excesso de peso</p>`;
        } else if(numeroArredondado >= 18.5) {
            resultado.innerHTML += `<p>A sua classificação é normal</p>`;
        } else {
            resultado.innerHTML += `<p>A sua classificação é baixo peso</p>`;
        }
    }
}   

btn.onclick = imc;