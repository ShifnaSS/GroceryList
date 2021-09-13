displayTable= function(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState==4&&this.status==200){
            var response = JSON.parse(this.responseText);
            // console.log(response);
            var Jproducts = response.products;
            // console.log(Jpeople);
            //var output = "<table><th>"+"GROCERY LIST"+"</th></table><tr><th>"+"Serial No:"+"</th><th>"+"Name"+"</th><th>"+"Qunatity"+"</th><th>"+"Unit"+"</th><th>"+"Department"+"</th><th>"+"Note";
            var output = "";

            Jproducts.forEach(function(i) {
                output += "<tr><th>"+ i.Sno +"</th><th>"+ i.name + "</th><th>"+ i.quantity + "</th><th>"+ i.unit +  "</th><th>"+ i.department + "</th><th>"+ i.notes + "</th></tr>";
            });
             $("#Mytable").append(output).removeClass("hidden"); 
             $("#Click").remove();
        }
        
    }
    xhttp.open("GET","/products.json",true);
    xhttp.send();
    }
     