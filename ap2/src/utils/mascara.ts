// utils/validacoes.ts

// Validação e Máscara para Telefone
export function aplicarMascaraTelefone(valor: string): string {
  valor = valor.replace(/\D/g, '');

  if (valor.length > 10) {
    valor = valor.replace(/^(\d{2})(\d{5})(\d{4}).*/, '($1) $2-$3');
  } else if (valor.length > 5) {
    valor = valor.replace(/^(\d{2})(\d{4})(\d{0,4}).*/, '($1) $2-$3');
  } else if (valor.length > 2) {
    valor = valor.replace(/^(\d{2})(\d{0,5})/, '($1) $2');
  } else {
    valor = valor.replace(/^(\d*)/, '($1');
  }

  return valor;
}

export const telefoneRegex = /^\(\d{2}\) \d{4,5}-\d{4}$/;

export function validarTelefone(valor: string): boolean {
  return telefoneRegex.test(valor);
}

export function validarNome(valor: string): boolean {
  return valor.trim().length >= 3;
}


export function validarEgresso(valor: string): boolean {
  return valor === "Sim" || valor === "Não";
}

export function validarPago(valor: string): boolean {
  return valor === "Sim" || valor === "Não";
}

export function validarFormulario(campos: { nome: string; telefone: string; egresso?: string; pago?: string }) {
  const erros: { [key: string]: string } = {};

  if (!validarNome(campos.nome)) {
    erros.nome = "Nome é obrigatório e deve ter pelo menos 3 caracteres.";
  }
  if (!validarTelefone(campos.telefone)) {
    erros.telefone = "Telefone é obrigatório e deve estar no formato correto.";
  }

  if (!validarEgresso(campos.egresso || "")) {
    erros.egresso = "Por favor, selecione se é Egresso ou Convidado.";
  }
  if (!validarPago(campos.pago || "")) {
    erros.pago = "Por favor, selecione se está Pago.";
  }

  return erros;
}
