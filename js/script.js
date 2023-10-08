const miss = (erro) => {
    document.querySelector('#endereco').value = innerHTML = ''
    document.querySelector('#complemento').value = innerHTML = ''
    document.querySelector('#bairro').value = innerHTML = ''
    document.querySelector('#municipio').value = innerHTML = ''
    document.querySelector('#uf').value = innerHTML = ''
}

const cepValid = (cep) => cep.length == 8 && /^[0-9]+$/.test(cep)




const completeTheFields = (address) => {
    document.querySelector('#endereco').value = address.logradouro
    document.querySelector('#complemento').value = address.complemento
    document.querySelector('#bairro').value = address.bairro
    document.querySelector('#municipio').value = address.localidade
    document.querySelector('#uf').value = address.uf 
}

const cepInput = document.querySelector('#cep')
cepInput.addEventListener('input', function() {
    const cep = this.value

    if (!cepValid(cep)) {
        this.value = cep.slice(0, 8).replace(/\D/g, '')
    }
})

const search = async () => {
    const cep = document.querySelector('#cep').value
    const url = `https://viacep.com.br/ws/${cep}/json/`

    if(cepValid(cep)){
        const data = await fetch(url)
        const address = await data.json()
    
            if(address.hasOwnProperty('erro')){
                erro.innerHTML = '[ERRO] Cep invalido, verifique e tente novamente!'
                miss(erro) 
            }else{
                completeTheFields(address)
                erro.innerHTML =''
            }
    
    }else{
        erro.innerHTML = '[ERRO] Cep invalido, verifique e tente novamente!'
        miss(erro) 
    }

   
    
}
const erro = document.querySelector('#erro')
const research = document.querySelector('#pesquisa')
research.addEventListener('click',search)