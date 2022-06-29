document.addEventListener("keypress", function(e) {
    if(e.key === 'Enter') {
        var btn = document.querySelector("#enter");
      btn.click();
    }
  });
function Enter(){
    let email = document.querySelector('#email').value;
    let senha = document.getElementById('senha').value;
    let erro = document.getElementById('erro');
    if(email=='admin'){
        if(senha=='admin'){
            window.location.replace("https://joiasjew.vercel.app/home/home.html")
        } else{
            erro.innerHTML = 'Senha incorreta! Tente novamente!';
            erro.style.color = 'red';
            erro.style.display = 'flex'
        }    
    }else{
        erro.innerHTML = 'Email incorreto! Tente novamente!';
        erro.style.color = 'red';
        erro.style.display = 'flex'
    }

}