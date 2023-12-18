function verify (){
     
    console.log(`email1: ${email1.value}: Email2: ${email2.value}`);
  
    if(document.getElementById("email1").checkValidity() && document.getElementById("email1").value === document.getElementById("email2").value) {
  
      document.getElementById("submit").removeAttribute("disabled");
      document.getElementById("submit").style.backgroundColor = "#004580";
      document.getElementById("submit").style.cursor = "pointer";
  
    } else {

      document.getElementById("submit").setAttribute("disabled", "disabled");
      document.getElementById("submit").style.backgroundColor = "initial";
      document.getElementById("submit").style.cursor = "initial";

    }
  }

  $(".theForm").on("input paste keyup", "input[type=email]", verify);