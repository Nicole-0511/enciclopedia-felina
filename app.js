
function pesquisar() {
    // Obtém a seção onde os resultados serão exibidos
    let section = document.getElementById ("resultados-pesquisa");
   
    let campoPesquisa = document.getElementById("campo-pesquisa").value

    //se campoPesquisa for uma string sem nada
    if (!campoPesquisa) {
       section.innerHTML = "<p>Não encontramos nada. Por favor, digite uma raça felina ou uma característica.</p>"
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";

    // Itera sobre cada dado na lista de dados
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()
        // se  titulo includes campoPesquisa
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)){
             // Cria um novo elemento
        resultados += `
        <div class="item-resultado">
            <h2>
                <a href="#" target="_blank">${dado.titulo}</a>
            </h2>
            <p class="descricao-meta">${dado.descricao}</a>
            <a href=${dado.link} target="_blank">Mais informações</a>
            </div>
        `;
        }
    }

if (!resultados) {
   resultados = "<p>Não encontramos nada.</p>"
}

    // Atribui os resultados à seção HTML
    section.innerHTML = resultados;
}




