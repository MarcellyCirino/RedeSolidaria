
  const telefone = document.getElementById('telefone');

  telefone.addEventListener('input', function(e) {
    let valor = telefone.value;

    // Remove tudo que não for número
    valor = valor.replace(/\D/g, '');

    // Adiciona o formato (00) 00000-0000
    if (valor.length > 10) {
      valor = valor.replace(/^(\d{2})(\d{5})(\d{4}).*/, '($1) $2-$3');
    } else if (valor.length > 5) {
      valor = valor.replace(/^(\d{2})(\d{4,5})/, '($1) $2');
    } else if (valor.length > 2) {
      valor = valor.replace(/^(\d{2})/, '($1) ');
    }

    telefone.value = valor;
  });