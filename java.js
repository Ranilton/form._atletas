document.getElementById("submit").addEventListener("click", function(event) {
    event.preventDefault(); // Evita que o formulário seja submetido normalmente

    // Captura os valores dos campos do formulário
    var nome = document.getElementById("nome").value;
    var dataNascimento = document.getElementById("data_nascimento").value;
    var escola = document.getElementById("escola").value;
    var genero = document.querySelector('input[name="genero"]:checked').value;
    var categoria = document.querySelector('input[name="categoria"]:checked').value;
    var tipoDeJogo = document.getElementById("juegos").value;
    var matricula = document.getElementById("matricula").value;
    var registro = document.getElementById("registro").value;
    var cpf = document.getElementById("cpf").value;
    var telefone = document.getElementById("telefone").value;
    var endereco = document.getElementById("endereco").value;

    // Atualiza os campos da carteirinha com os valores capturados
    document.getElementById("nome").textContent = nome;
    document.getElementById("escola").textContent = escola;
    document.getElementById("dataNascimento").textContent = dataNascimento;
    document.getElementById("registro").textContent = registro;
    document.getElementById("cpf").textContent = cpf;
    document.getElementById("matricula").textContent = matricula;

    // Você pode adicionar o restante dos campos da mesma maneira

    // Exibe a carteirinha
    document.querySelector(".doc").style.display = "block";
});

//mandar o formularioa para a carteirinha.