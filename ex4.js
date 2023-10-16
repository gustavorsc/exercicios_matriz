function entradaDados(matriz, vendedor){
    for (let i=0; i<3; i++){
        matriz[i] = [] // cria uma matriz
        vendedor[i] = prompt(`Informe o nome do vendedor ${i+1}`)
        alert(`Informe os elementos da linha${i+1}.`)
        for(let j=0; j<4; j++){
            matriz[i][j] = Number(prompt(`Digite O valor do elemento ${i+1}x${j+1}`))
        }
    }
}

function principal(){
    let matriz = []
    let vendedor = []
    entradaDados(matriz, vendedor)
    somaDigPrincipal(matriz)
    vendas(matriz, vendedor)
}
principal()

function somaDigPrincipal(matriz){
    let soma = 0
    for(let i=0; i<3; i++){
        for(let j=0; j<4; j++){
            if(j == i){
                soma += matriz[i][j]
            }
        }
    }
    console.log(`A soma da diagonal principal é: ${soma}`)
}

function vendas(matriz, vendedor){
    let somaVendedor = 0
    let somaSemanas = 0

    for(let i=0; i<3; i++){
        for(let j=0; j<4; j++){
                somaVendedor += matriz[i][j]
        }
        console.log(`O vendedor ${vendedor[i]} vendeu no mês R$${somaVendedor}`)
    }

    for(let j=0; j<4; j++){
        for(let i=0; i<3; i++){
            somaSemanas += matriz[j][i]
        }
        console.log(`A semana ${j+1} teve o total de R$${somaSemanas} `)
    }
}

principal()
