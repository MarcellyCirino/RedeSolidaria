
  // Função para aplicar máscara
  function mascara(input, tipo) {
    let valor = input.value.replace(/\D/g, ''); // remove tudo que não é número

    if (tipo === 'cpf') {
      valor = valor.replace(/(\d{3})(\d)/, '$1.$2');
      valor = valor.replace(/(\d{3})(\d)/, '$1.$2');
      valor = valor.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
    }

    if (tipo === 'telefone') {
      valor = valor.replace(/^(\d{2})(\d)/g, '($1) $2');
      valor = valor.replace(/(\d{5})(\d)/, '$1-$2');
    }

    if (tipo === 'cep') {
      valor = valor.replace(/(\d{5})(\d)/, '$1-$2');
    }

    input.value = valor;
  }

  // Seleciona os inputs
  const cpfInput = document.getElementById('cpf');
  const telInput = document.getElementById('telefone');
  const cepInput = document.getElementById('cep');

  cpfInput.addEventListener('input', () => mascara(cpfInput, 'cpf'));
  telInput.addEventListener('input', () => mascara(telInput, 'telefone'));
  cepInput.addEventListener('input', () => mascara(cepInput, 'cep'));
  
  const form = document.querySelector('.form-cadastro form');

  form.addEventListener('submit', function(event) {
    event.preventDefault(); // impede o envio real

    // Validação automática do HTML5
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    // Se chegou aqui, o formulário está válido
    alert('Cadastro realizado com sucesso! Obrigado por se inscrever.');

    // Limpa o formulário
    form.reset();
  });