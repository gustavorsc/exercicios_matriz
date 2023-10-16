function entradaDados(matriz, meses){
    for (let i=0; i<12; i++){
        matriz[i] = [] // cria uma matriz
        meses[i] = prompt(`Informe o nome do mês ${i+1}`)
        alert(`Informe os elementos da linha${i+1}.`)
        for(let j=0; j<4; j++){
            matriz[i][j] = Number(prompt(`Digite O valor do elemento ${i+1}x${j+1}`))
        }
    }
}

function principal(){
    let matriz = []
    let meses = []
    entradaDados(matriz, meses)
    vendasMes(matriz, meses)
    vendaSemana(matriz)
    vendasTotal(matriz)
}

function vendasMes(matriz, meses){
    let somaVendas = 0
    for(let i=0; i<12; i++){
        for(let j=0; j<4; j++){
            somaVendas += matriz[i][j]
        }
        console.log(`No mês de ${meses[i]} foi vendido um total de R$${somaVendas}.`)
        somaVendas = 0
    }
}

function vendaSemana(matriz){
    let somaSemana = 0
    for(let j=0; j<4; j++){
        for(let i=0; i<12; i++){
            somaSemana += matriz[i][j]
        }
        console.log(`O total de cendas na semana ${j+1} doi de R$${somaSemana}.`)
        somaSemana = 0
    }
}

function vendasTotal(matriz){
    let soma = 0
    for(let i=0; i<12; i++){
        for(let j=0; j<4; j++){
            soma += matriz[i][j]
        }
    }

    console.log(`O total de vendas durante o ano foi de R$${soma}.`)
}

principal()