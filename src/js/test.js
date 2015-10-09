var data = [
	{    
		firstName: "Cédric",
	    lastName: "Hueso",
	    blogURL: "http://cedric.hueso.com"
	},
	{    
		firstName: "Godet",
	    lastName: "Maxime",
	    blogURL: "http://maxime.godet.com"
	},
	{    
		firstName: "Kim",
	    lastName: "Antoine",
	    blogURL: "http://antoine.kim.com"
	},
	{    
		firstName: "Douchement",
	    lastName: "Patrick",
	    blogURL: "http://patrick.douchement.com"
	},
	{    
		firstName: "Guezennec",
	    lastName: "Yves",
	    blogURL: "http://yves.guezennec.com"
	},
	{    
		firstName: "Destin",
	    lastName: "Guy-Michel",
	    blogURL: "http://guy-michel.destin.com"
	}
];
var source = document.querySelector("#template").innerHTML ; 
var template = Handlebars.compile(source);  
var html = template(data);
document.querySelector("body").innerHTML = html;