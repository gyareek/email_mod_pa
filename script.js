document.querySelector("#edit").addEventListener("click" , myFunction);


function myFunction() {
        var emailField = document.getElementById('emailField').value;
        var onlyName = emailField.split('@');
        var holderName = onlyName[0];
        var extension = '@'+onlyName[1];
        var removedDots = holderName.replace(/\./g, "");
        const myFirst = [];
        var rest1 = [];
        var rest2 = [];
        var finalResults = [];
        myFirst.length = removedDots.length -1;
        for(var i = 1; i < removedDots.length; i++){
          myFirst[i-1] = removedDots.substring(0, i) + '.' + removedDots.substring(i, removedDots.length);
          rest1.push("  " + myFirst[i-1] + extension + "  ");
          finalResults.push("  " + myFirst[i-1] + extension + "  ");
        }
        for(i = 0; i < myFirst.length; i++){
          var mySecond = myFirst[i];
          for(var j = i + 3; j < mySecond.length; j++){
            rest2.push("  " + mySecond.substring(0, j) + '.' + mySecond.substring(j, removedDots.length + 1) + extension + "  ");
            finalResults.push("  " + mySecond.substring(0, j) + '.' + mySecond.substring(j, removedDots.length + 1) + extension + "  ");
                     }
             }
        document.getElementById("P1").innerHTML = "The First Results Are:";
        document.getElementById("results").innerHTML = rest1;
        document.getElementById("P2").innerHTML = "The Second Results Are:";
        document.getElementById("results2").innerHTML = rest2;
        document.getElementById("P3").innerHTML = "The Compiled Results Are:";
        document.getElementById("results3").innerHTML = finalResults;
        }
