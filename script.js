// view foto
function previewFoto(event) {
  var reader = new FileReader();
  reader.onload = function () {
    var fotoPreview = document.getElementById("fotoPreview");
    fotoPreview.src = reader.result;
  };
  reader.readAsDataURL(event.target.files[0]);
}
//da lista para a carteirinha
function gerarCarteirinha(button) {
  var row = button.parentNode.parentNode;
  var foto = row.cells[0].querySelector("img").src;
  var matricula = row.cells[1].textContent;
  var nome = row.cells[2].textContent;
  var registro = row.cells[4].textContent;
  var equipe = row.cells[5].textContent;
  var dataNascimento = row.cells[6].textContent;
  var cpf = row.cells[8].textContent;
  var categoria = row.cells[3].textContent;
  var esporte = row.cells[7].textContent;

  document.getElementById("fotoPreview2").src = foto;
  document.getElementById("nome").textContent = nome;
  document.getElementById("matricula").textContent = matricula;
  document.getElementById("registro").textContent = registro;
  document.getElementById("equipe").textContent = equipe;
  document.getElementById("dataNascimento").textContent = dataNascimento;
  document.getElementById("cpf").textContent = cpf;
  document.getElementById("categoria").textContent = categoria;
  document.getElementById("esporte").textContent = esporte;

  var modal = document.getElementById("modal");
  modal.style.display = "block";
}
  // Função para fechar o modal
  function fecharModal() {
    var modal = document.getElementById("modal");
    modal.style.display = "none";
  }

  // Função para gerar PDF (implementação adicional)
  function generatePDF() {
    // Lógica para gerar PDF
    alert("Implementação para gerar PDF");
  }


function gerarTodasAsCarteirinhas() {
  var table = document.querySelector("table tbody");
  var rows = table.rows;
  var container = document.getElementById("carteirinhas-container");
  container.innerHTML = ""; // Clear the container

  for (var i = 0; i < rows.length; i++) {
    var row = rows[i];
    var foto = row.cells[0].querySelector("img").src;
    var matricula = row.cells[1].textContent;
    var nome = row.cells[2].textContent;
    var registro = row.cells[3].textContent;
    var equipe = row.cells[4].textContent;
    var dataNascimento = row.cells[5].textContent;
    var cpf = row.cells[6].textContent;

    var carteirinhaHTML = `
            <div class="carteirinha">
                <div class="branco">
                    <div class="verde">
                        <div class="topo">
                            <img src="assets/JEMB'S.jpg" alt="jembs" />
                            <div>
                                <h3>JOGOS ESCOLARES MUNICIPAL <br> DOS BARREIROS- ANOo</h3>
                                <h4>SUB-09</h4>
                            </div>
                        </div>
                        <div class="div-nome">
                            <h4>Nome Completo</h4>
                            <p>${nome}</p>

                            <div class="equipe">
                                <div>
                                    <h4>Equipe/Escola</h4>
                                    <p>${equipe}</p>
                                </div>
                                <div>
                                    <h4>Data de Nascimento</h4>
                                    <p>${dataNascimento}</p>
                                </div>
                            </div>

                            <div class="foto-registro">
                                <img id="fotoPreview2" src="${foto}" alt="foto"/>
                                <div>
                                    <h4>Registro</h4>
                                    <p>${registro}</p>
                                    <h4>CPF</h4>
                                    <p>${cpf}</p>
                                    <h4>Matrícula</h4>
                                    <p>${matricula}</p>
                                </div>
                                <img id="prefeitura" class="brasão" src="assets/prefeituradosbarreiros.jpg" alt="">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;

    container.insertAdjacentHTML("beforeend", carteirinhaHTML);
  }
}
// do form para carteirinha
document
  .getElementById("atletaForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    // Get form values
    const nome = document.getElementById("nome").value;
    const dataNascimento = document.getElementById("data_nascimento").value;
    const escola = document.getElementById("escola").value;
    const matricula = document.getElementById("matricula").value;
    const registro = document.getElementById("registro").value;
    const cpf = document.getElementById("cpf").value;

    // Set card values
    document.getElementById("nomeCarteirinha").innerText = nome;
    document.getElementById("dataNascimentoCarteirinha").innerText =
      dataNascimento;
    document.getElementById("escolaCarteirinha").innerText = escola;
    document.getElementById("matriculaCarteirinha").innerText = matricula;
    document.getElementById("registroCarteirinha").innerText = registro;
    document.getElementById("cpfCarteirinha").innerText = cpf;

    // Display photo
    const foto = document.getElementById("foto").files[0];
    const reader = new FileReader();
    reader.onload = function (e) {
      document.getElementById("fotoPreview2").src = e.target.result;
    };
    reader.readAsDataURL(foto);
  
    var modal = document.getElementById("modal");
      modal.style.display = "block";
  });

// formatar data
document.addEventListener("DOMContentLoaded", function () {
  const input = document.getElementById("data_nascimento");
  const span = document.getElementById("data_formatada");
  const dataNascimentoCarteirinha = document.getElementById(
    "dataNascimentoCarteirinha"
  );

  // Evento para mostrar a data formatada ao selecionar uma data
  input.addEventListener("change", function () {
    const dataISO = input.value;
    if (dataISO) {
      const [ano, mes, dia] = dataISO.split("-");
      span.textContent = `${dia}/${mes}/${ano}`;
    } else {
      span.textContent = "";
    }
  });

  // Evento para converter a data ao enviar o formulário
  document
    .getElementById("atletaForm")
    .addEventListener("submit", function (event) {
      event.preventDefault(); // Impede o envio do formulário

      const dataISO = input.value;

      if (dataISO) {
        const [ano, mes, dia] = dataISO.split("-");
        const dataFormatada = `${dia}/${mes}/${ano}`;

        // Atualize o conteúdo do <p> com a data formatada
        dataNascimentoCarteirinha.textContent = dataFormatada;
      }
    });
});
