// Caso precise fazer requisições a partir de um input de texto, para não precisar fazer uma requisição a cada letra digitada...
// setamos um timeOut de 1 segundo para esperarmos o usuário parar de digitar...

<input type="text" onChange={search()}></input>

const store = {
  timer: null
}

const search = () => {
  if(store.timer !== null) {
    clearTimeout(this.timer)
  }

  store.timer = setTimeout(() => {
    callRequisition() 
  }, 1000);
}
