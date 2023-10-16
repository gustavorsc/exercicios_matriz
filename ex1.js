function entradaDados(matriz){
    for(let i = 0; i < 3; i++){
        matriz[i] = []
        alert(`Informe os elementos da linha${i+1}.`)
        for(let j = 0; j < 5; j++){
            matriz[i][j] = Number(prompt(`Digite o valor para a linha:${i+1} coluna: ${j+1}`))
        }
    }
    return matriz
}

function principal(){
    let matriz = []
    
    matriz = entradaDados(matriz)
    quantidade(matriz)

}

function quantidade(matriz){
    let vet1520 = []
    let qtde = 0

    for(let i = 0; i < 3; i++){
        for(let j = 0; j < 5; j++){
            if(matriz[i][j] >= 15 && matriz[i][j] <= 20){
                vet1520.push(matriz[i][j])
            }
        }
    }
    qtde = vet1520.length
    console.groupCollapsed(`A quantidade de números entre 15 e 20 é de ${qtde}`)
   
}

principal()