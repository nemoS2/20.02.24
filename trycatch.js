const variavel1 = "valor somente leitura";         //declaracao de variavel     nome=variavel1       valor dela eh=valor somente leitura  
var variavel2 = "valor editável";                  //eh uma declaracao de variavel   nome=variavel2   valo=editavel

try { // tentativa i erro
    variavel1 = "valor não permitido"; // tansformar a variavel em um valor nao permitiod
    console.log("A variavel1 foi alterada para: ", variavel1); //ações do algoritmo try
} catch (e) { // msm anterior      E=erro 
    console.error("Ops! Ocorreu o erro: ", e);
}

try {
    variavel2 = "valor permitido";
    console.log("A variavel2 foi alterado para: ", variavel2);   // deu tudo bom por isso nao deu erro
} catch (e) {
    console.error("Ops! Ocorreu um erro: ", e);
}
