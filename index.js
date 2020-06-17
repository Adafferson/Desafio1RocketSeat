// DESAFIO
//Crie um programa com um objeto para armazenar dados de um programador como nome, idade e tecnologias que trabalha.

const Programadores =[
    {
        nome:'Camilo',
        idade: 31,
        tecnologias:'Javascript,Phyton',
        especialidade:'Web'
    },
    {
        nome:'Gustavo',
        idade: 28,
        tecnologia:'Java, C++',
        especialidade:'Desktop'
    },
    {
        nome:'Paulo',
        idade: 23,
        tecnologias:'Ruby, Java',
        especialidade: 'Mobile'
    }
]
// Imprima em tela o nome e especialidade da primeira tecnologia que o usuário utiliza no seguinte formato:
// O usuário Carlos tem 32 anos e usa a tecnologia C++ com especialidade em Desktop  


console.log(`O usuário ${Programadores[0].nome} tem ${Programadores[0].idade} e usa as tecnologias ${Programadores[0].tecnologias.split(',')[0]} com especialidade em ${Programadores[0].especialidade}`)

