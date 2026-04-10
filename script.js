function acessar() {
    let loginEmail = document.getElementById('loginEmail').value;
    let loginSenha = document.getElementById('loginSenha').value;

    if (!loginEmail || !loginSenha) {
        alert("Favor preencher todos os campos");
    } else {
        window.location.href = 'cadastro.html';
    }
}

// Lista de usuários
var dadosLista = [];

// Salvar usuário
function salvauser() {
    let nomeUser = document.getElementById('nomeUser').value;

    if (nomeUser && nomeUser.trim() !== "") {
        dadosLista.push(nomeUser.trim());

        document.getElementById('nomeUser').value = ""; // limpa input

        atualizarTabela();
    } else {
        alert("Digite um nome válido");
    }
}

// Atualizar tabela
function atualizarTabela() {
    let tabela = document.getElementById('tabela');

    // Cabeçalho
    tabela.innerHTML = `
        <tr>
            <th>Nome Usuário</th>
            <th>Ações</th>
        </tr>
    `;

    // Preencher linhas
    dadosLista.forEach((nome, index) => {
        tabela.innerHTML += `
            <tr>
                <td>${nome}</td>
                <td>
                    <button onclick="editar(${index})">Editar</button>
                    <button onclick="remover(${index})">Excluir</button>
                </td>
            </tr>
        `;
    });
}

// Editar usuário
function editar(index) {
    let novoNome = prompt("Digite o novo nome:", dadosLista[index]);

    if (novoNome && novoNome.trim() !== "") {
        dadosLista[index] = novoNome.trim();
        atualizarTabela();
    } else {
        alert("Nome inválido");
    }
}

// Remover usuário
function remover(index) {
    if (confirm("Tem certeza que deseja excluir?")) {
        dadosLista.splice(index, 1);
        atualizarTabela();
    }
}''