function calcularIMC() {
    const valorIMC = document.getElementById('valorIMC');
    const categoriaIMC = document.getElementById('categoriaIMC');
    const resultadoIMC = document.getElementById('resultadoIMC');
    const resultadoinformacao = document.getElementById('resultadoinformacao');
    var peso = document.getElementById('peso1').value;
    var altura = document.getElementById('altura1').value;
    var pesoNumerico = Number.parseFloat(peso);
    var alturaNumerico = Number.parseFloat(altura);
    var imc = pesoNumerico / (alturaNumerico * alturaNumerico);
    var imcArredondado = Number.parseFloat(imc.toFixed(1));
    valorIMC.innerHTML = "IMC: " + imcArredondado;
    if (imcArredondado < 18.5) {
        categoriaIMC.innerHTML = "Abaixo do peso";
        resultadoIMC.innerHTML = "Seu IMC está abaixo da faixa considerada adequada."
        resultadoinformacao.innerHTML = "Avalie seus hábitos alimentares e, se necessário, procure orientação profissional.";
    }else if(imcArredondado >= 18.5 && imcArredondado <= 24.9){
        categoriaIMC.innerHTML = "Peso normal";
        resultadoIMC.innerHTML = "Seu peso está dentro da faixa considerada saudável.";
        resultadoinformacao.innerHTML = "Manter uma alimentação equilibrada e praticar atividades físicas é essencial para sua saúde.";
    }else if(imcArredondado >= 25 && imcArredondado <= 29.9){
        categoriaIMC.innerHTML = "Sobrepeso";
        resultadoIMC.innerHTML = "Seu IMC indica excesso de peso." 
        resultadoinformacao.innerHTML = "Pequenas mudanças na alimentação e na rotina de exercícios podem ajudar no controle do peso.";
    }else if(imcArredondado >=30 && imcArredondado <= 34.9){
        categoriaIMC.innerHTML = "Obesidade grau I";
        resultadoIMC.innerHTML = "Seu IMC indica obesidade grau I.";
        resultadoinformacao.innerHTML = "É importante acompanhar sua saúde e buscar orientação profissional para definir estratégias adequadas.";
    }else if(imcArredondado >= 35 && imcArredondado <= 39.9){
        categoriaIMC.innerHTML = "Obesidade grau II";
        resultadoIMC.innerHTML = "Seu IMC indica obesidade grau II.";
        resultadoinformacao.innerHTML = "O acompanhamento com profissionais de saúde pode ajudar na redução de riscos e no cuidado contínuo.";
    }else{
        categoriaIMC.innerHTML = "Obesidade grau III";
        resultadoIMC.innerHTML = "Seu IMC indica obesidade grau III.";
        resultadoinformacao.innerHTML = "Recomenda-se procurar acompanhamento profissional para avaliação e orientação individualizada.";
    }
}

function limparInputs() {
    document.getElementById('formcampos').reset();
}