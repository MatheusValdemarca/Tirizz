var formulario = document.querySelector('form#contato')
//var botão = document.querySelector('button(type"submit")')

formulario.addEventListener('submit', enviar);

function enviar(evento) {
    evento.preventDefault()
    var dados = new FormData(formulario)
    var nome = dados.get('nome')
    var email = dados.get('email')
    var turma = dados.get('turma')
    var motivo = dados.get('motivo')
    var mensagem = dados.get('mensagem')
    console.log(nome, email, turma, motivo, mensagem);

    //enviar por email
    var resultado = document.createElement('p')

    resultado.innerHTML = `
    <b>${nome}</b>, sua mensagem foi enviada com sucesso!
    `
    resultado.style.padding = '10px'
    resultado.style.textAlign = 'center'
    formulario.append(resultado);

    var templateParams = {
        nome: nome,
        email: email,
        motivo: motivo,
        mensagem: mensagem,
    };

    emailjs.send('service_86u922c', 'template_0bnc74j', templateParams)
        .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
        }, function(error) {
        console.log('FAILED...', error);
        });
}


