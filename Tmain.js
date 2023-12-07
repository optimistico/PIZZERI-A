pizza_list_array = [];

function getmenu()
	{    
        
        var item = document.getElementById("nombre_pizza").value; 
       
        pizza_list_array.push(item);
        
        var remove_commas = pizza_list_array.join("<br># ");
        document.getElementById("mostrar_menú").innerHTML =  "# " + remove_commas;
	}