function entradaDeDados(matriz, alunos){
    for(let i=0; i<15; i++){
        matriz[i] = []
        alert(`Informe o nome e as notas do aluno ${i+1}`)
        alunos[i] = prompt(`Informe o nome:`)
        for(let j=0; j<5; j++){
            matriz[i][j] = Number(prompt(`Informe a nota da prova ${i+1}`))
        }
    }
}

function principal(){
    let matriz = []
    let alunos = []
    entradaDeDados(matriz, alunos)
    mediaAritmetica(matriz, alunos)

}

function mediaAritmetica(matriz,alunos){
    media = 0
    mediaTurma = 0
    for(let i=0; i<15; i++){
        for(let j=0; j<5; j++){
            media += matriz[i][j]
        }
        media = media / 5
        mediaTurma = media
        console.log(`O aluno(a) ${alunos[i]} teve a media de ${media}`)
        media = 0
    }
    mediaTurma = mediaTurma / 15
    console.log(`A média da turma é de ${mediaTurma}`)
}