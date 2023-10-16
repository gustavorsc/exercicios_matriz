function entradaDados(matriz){
    for(let i = 0; i < 6; i++){
        matriz[i] = []
        alert(`Informe os elementos da linha${i+1}.`)
        for(let j = 0; j < 3; j++){
            matriz[i][j] = Number(prompt(`Digite o valor para a linha:${i+1} coluna: ${j+1}`))
        }
    }
}

function principal(){
    let matriz = []
    
    entradaDados(matriz)
    maiorNum(matriz)
    menorNum(matriz)
}

function maiorNum(matriz){
    let maior = 0, coluna = 0, linha = 0
    for(let i = 0; i < 6; i++){
        for(let j = 0; j < 3; j++){
            if(matriz[i][j] > maior){
                maior = matriz[i][j]
                linha = i
                coluna = j
            }
        }
    }

    console.log(`O maior elemento da matriz é o elemento ${maior} e está localizado na linha: ${linha+1} coluna: ${coluna+1}`)
}

function menorNum(matriz){
    let menor = matriz[0][0], linha = 0, coluna = 0

    for(let i = 0; i < 6; i++){
        for(let j = 0; j < 3; j++){
            if(matriz[i][j] < menor){
                menor = matriz[i][j]
                linha = i
                coluna = j
            }
        }
    }

    console.log(`O menor elemento da matriz é o elemento ${menor} e está localizado na linha: ${linha+1} coluna: ${coluna+1}`)
}

principal()