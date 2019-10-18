
        know = {
            "Estoy triste" : "No estes triste, pensa que podes ser hincha de boca...",
             "Hola" : "Hola buenas tardes",
            "¿Como estas?" :"Yo estoy muy bien, gracias por preguntar",
            "Adios" : "Hasta luego, que tengas un buen día",
            
        };
        function talk() {
            var user = document.getElementById("userBox").value;
            document.getElementById("userBox").value = "";
            document.getElementById("chatLog").innerHTML += user+"<br>";
            if (user in know) {
                document.getElementById("chatLog").innerHTML += know[user]+"<br>";
            } else {
                document.getElementById("chatLog").innerHTML += "No te entiendo... Intenta otra vez...<br>";
            }
        }

  