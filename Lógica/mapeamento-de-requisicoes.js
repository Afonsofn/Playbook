 const	mapeamento_requisicoes = {
  getDadosPerfil: false, // Usamos false para as que sempre serão chamadas
  getDependentes: false,
  getDadosRh: false,
  getNomeCidade: null, // E null para as que pode ser chamadas ou nao 
  getNomePais: null,
  loadDepExtras: null,
  getDadosExtrasRh: null,
  loadDadosServidor: null
}

// Fazemos uma requição qualquer.
function getDadosPerfil() {

  axios.get(URL)
    .then(() => {
      //blablabla
    })

  // E no fim setamos a chave para true
  this.mapeamento_requisicoes.getDadosPerfil = true
}

// Quando não houver mais false a função retorna false e eu seto oq precisar.
function ablePrintButton() {
  return Object.values(this.mapeamento_requisicoes).some((req) => req === false )
}
