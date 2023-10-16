function entradaDados(matriz){
    for(let i = 0; i < 2; i++){
        matriz[i] = []
        alert(`Informe os elementos da linha${i+1}.`)
        for(let j = 0; j < 4; j++){
            matriz[i][j] = Number(prompt(`Digite o valor para a linha:${i+1} coluna: ${j+1}`))
        }
    }
}

function principal(){
    let matriz = []
    
    entradaDados(matriz)
    num12E20(matriz)
    quantidadePares(matriz)
}


function num12E20(matriz){
    let qtde = 0

    for(let i = 0; i < 2; i++){
        for(let j = 0; j < 4; j++){
            if(matriz[i][j] >= 12 && matriz[i][j] <= 20){
                qtde++
            }
        }
        console.log(`A quantidade de numeros entre 12 e 20 na ${i+1}º linha é de: ${qtde}`)
        qtde = 0
    }
}

function quantidadePares(matriz){
    let qtdePares = 0

    for(let i = 0; i < 2; i++){
        for(let j = 0; j < 4; j++){
            if(matriz[i][j]%2 == 0){
                qtdePares++
            }
        }
    }
    console.log(`A quantidade da elementos pares na matriz é de: ${qtdePares}`)
}

principal()