//Puxar BD
const livros = require("./database")

//Extensão para adicionar um input na tela
const input = require("readline-sync")

//question principal categoria
const verCategoria = input.question("Deseja buscar por categoria? (S/N)")

//function para buscar por categoria
function analise(valor){
    if(valor.toLocaleUpperCase() == "S"){
        console.log("As categorias são:")
        for(i=0;i < livros.length; i++){
            console.log(livros[i].categoria)
        }
        const qualCategorias = input.question("Digite a categoria que deseja: ")
        const categorias = livros.filter(livro => livro.categoria === qualCategorias.toLocaleLowerCase())
        console.log(categorias)
    }else{
        const paginas = livros.sort(function compate(a,b){
            if(a.paginas < b.paginas){
                return -1
            }else if(a.paginas > b.paginas){
                return 1
            }else{
                return 0
            }
        })

        console.log(paginas)
    }
}

//ativando a busca de categoria
analise(verCategoria)


//funcao para buscar por recomendação
function recomendacao(valor){
    if(valor.toLocaleUpperCase() == "S"){
        const recomendo = livros.filter(book => book.recomenda == true && book.jaLeu == true)
        console.log(recomendo)
       
    }else{
        const paginas = livros.sort(function compate(a,b){
            if(a.paginas < b.paginas){
                return -1
            }else if(a.paginas > b.paginas){
                return 1
            }else{
                return 0
            }
        })

        console.log(paginas)
    }
}


//question da recomendação
const verRecomedacao = input.question("Deseja ver minhas recomendacoes agora? (S/N)")

// ativando a recomendacao
recomendacao(verRecomedacao)


//funcao para fazer a busca por desejo
function desejo(valor){
    if(valor.toLocaleUpperCase() == "S"){
        const NaoLidos = livros.filter(nlidos => nlidos.jaLeun
             == false)
        console.log(NaoLidos)
       
    }else{
        const paginas = livros.sort(function compate(a,b){
            if(a.paginas < b.paginas){
                return -1
            }else if(a.paginas > b.paginas){
                return 1
            }else{
                return 0
            }
        })

        console.log(paginas)
    }
}

// question da lista de desejos
const verDesejo = input.question("Deseja ver minha lista de desejo agora? (S/N)")

// ativando a funcao da lista de desejo
desejo(verDesejo)