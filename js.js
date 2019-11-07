document.querySelector("form").addEventListener("submit", function(e){
    e.preventDefault();
    console.log("Teste");
    var email = this.querySelector(".email").value;
    var senha = this.querySelector(".senha").value;
    if(email == ""){
        document.getElementById("msg").innerHTML = "Nenhum email informado!"        
    }    
    else {
        if(senha == ""){
            alert("Senha invalida!")
        }
        else{
            if(email == "corno@gmail.com" && senha =="123"){
                document.getElementById("msg").innerHTML = "Login realizado com sucesso!"
            }
            else{
                document.getElementById("msg").innerHTML = "Email ou senha invalidos!"
            }
        }
    }
});