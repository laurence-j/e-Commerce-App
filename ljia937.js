const showHome = () => {
    document.getElementById("Home").style.display = "block";
    document.getElementById("Products").style.display = "none";
    document.getElementById("News").style.display = "none";
    document.getElementById("Location").style.display = "none";
    document.getElementById("Guestbook").style.display = "none";
    document.getElementById("Registration").style.display = "none";
    document.getElementById("Login").style.display = "none";

    document.getElementById("HomeTab").style.backgroundColor = "grey";
    document.getElementById("ProductsTab").style.backgroundColor = "transparent";
    document.getElementById("NewsTab").style.backgroundColor = "transparent";
    document.getElementById("LocationTab").style.backgroundColor = "transparent";
    document.getElementById("GuestbookTab").style.backgroundColor = "transparent";
    document.getElementById("RegistrationTab").style.backgroundColor = "transparent";
    document.getElementById("Login").style.backgroundColor = "transparent";
    document.getElementById("logout").style.visibility = "hidden";
}

const showModal = (message) => {
    document.getElementById("modal").style.display = "block";
    document.getElementById("modalMessage").innerHTML = message;
}

window.onload = showHome;

const showProducts = (products) => {
    document.getElementById("Home").style.display = "none";
    document.getElementById("Products").style.display = "block";
    document.getElementById("News").style.display = "none";
    document.getElementById("Location").style.display = "none";
    document.getElementById("Guestbook").style.display = "none";
    document.getElementById("Registration").style.display = "none";
    document.getElementById("Login").style.display = "none";
    
    document.getElementById("HomeTab").style.backgroundColor = "transparent";
    document.getElementById("ProductsTab").style.backgroundColor = "grey";
    document.getElementById("NewsTab").style.backgroundColor = "transparent";
    document.getElementById("LocationTab").style.backgroundColor = "transparent";
    document.getElementById("GuestbookTab").style.backgroundColor = "transparent";
    document.getElementById("RegistrationTab").style.backgroundColor = "transparent";
    document.getElementById("Login").style.backgroundColor = "transparent";
    
    const ourTab = document.getElementById("ourTab");

    let tableContent = "";
    const addProducts = (record) => {
        tableContent += 
        "<tr class = 'titleRow'><td><img src = 'http://redsox.uoa.auckland.ac.nz/ds/DairyService.svc/itemimg?id=" 
        +  record.ItemId  + "'width = 150 height = 150></img></td><td>"+ record.Title +"</td><td> $" + record.Price + "</td><td>" + record.Origin + "</td><td><input type = 'button' id = 'buyNow' value = 'Buy Now' onclick = 'buyNow(" + record.ItemId + ")' style = 'font-size: 0.8em; width: 150px; height:40px; border-radius:4px;';></td>";
    }
    
    products.forEach(addProducts)
    ourTab.innerHTML = tableContent;
}

const getProducts = () => {
    const fetchPromise = fetch('http://localhost:8188/DairyService.svc/items',
    {
        headers : {
            "Accept" : "application/json",
        },   
    });
    const streamPromise = fetchPromise.then((response) => response.json());
    streamPromise.then((data) => showProducts(data));
} 

function searchFunction() {
	let UserInput = document.getElementById("search");
	let Filter = UserInput.value.toUpperCase();
	let Table = document.getElementById("ourTab");
	let getTr = Table.getElementsByTagName("tr");
	for (search = 0; search < getTr.length; search++) {
		let result = getTr[search].getElementsByTagName("td")[1];
		if (result) {
			if (result.innerHTML.toUpperCase().indexOf(Filter) > - 1) {
				getTr[search].style.display = "";
			}
			else {
				getTr[search].style.display = "none";
			}
		}
	}
}

const showNews = (news) => {
    document.getElementById("Home").style.display = "none";
    document.getElementById("Products").style.display = "none";
    document.getElementById("News").style.display = "block";
    document.getElementById("Location").style.display = "none";
    document.getElementById("Guestbook").style.display = "none";
    document.getElementById("Registration").style.display = "none";
    document.getElementById("Login").style.display = "none";
    
    document.getElementById("HomeTab").style.backgroundColor = "transparent";
    document.getElementById("ProductsTab").style.backgroundColor = "transparent";
    document.getElementById("NewsTab").style.backgroundColor = "grey";
    document.getElementById("LocationTab").style.backgroundColor = "transparent";
    document.getElementById("GuestbookTab").style.backgroundColor = "transparent";
    document.getElementById("RegistrationTab").style.backgroundColor = "transparent";
    document.getElementById("Login").style.backgroundColor = "transparent";
    
    const ourNews = document.getElementById("ourNews");

    let newsContent = "";
    const addNews = (record) => {
        newsContent += 
        "<tr class = 'titleRow'><td><br><img src ='" + record.enclosureField.urlField + "'width = 300 height = 300></img><br></td><td><br><a href =" +  record.linkField  + ">"+ record.titleField +"</a><br></td><td><br>" 
        + record.descriptionField + "<br></td><td><br>" + record.pubDateField + "<br></td>";
    }

    news.forEach(addNews);
    ourNews.innerHTML = newsContent;
}

const getNews = () => {
    const fetchPromise = fetch('http://localhost:8188/DairyService.svc/news',
    {
        headers : {
            "Accept" : "application/json",
        },   
    });
    const streamPromise = fetchPromise.then((response) => response.json());
    streamPromise.then((data) => showNews(data));
}

const showLocation = () => {
    document.getElementById("Home").style.display = "none";
    document.getElementById("Products").style.display = "none";
    document.getElementById("News").style.display = "none";
    document.getElementById("Location").style.display = "block";
    document.getElementById("Guestbook").style.display = "none";
    document.getElementById("Registration").style.display = "none";
    document.getElementById("Login").style.display = "none";

    document.getElementById("HomeTab").style.backgroundColor = "transparent";
    document.getElementById("ProductsTab").style.backgroundColor = "transparent";
    document.getElementById("NewsTab").style.backgroundColor = "transparent";
    document.getElementById("LocationTab").style.backgroundColor = "grey";
    document.getElementById("GuestbookTab").style.backgroundColor = "transparent";
    document.getElementById("RegistrationTab").style.backgroundColor = "transparent";
    document.getElementById("Login").style.backgroundColor = "transparent";
}

const showGuestbook = () => {
    document.getElementById("Home").style.display = "none";
    document.getElementById("Products").style.display = "none";
    document.getElementById("News").style.display = "none";
    document.getElementById("Location").style.display = "none";
    document.getElementById("Guestbook").style.display = "block";
    document.getElementById("Registration").style.display = "none";
    document.getElementById("Login").style.display = "none";
    
    document.getElementById("HomeTab").style.backgroundColor = "transparent";
    document.getElementById("ProductsTab").style.backgroundColor = "transparent";
    document.getElementById("NewsTab").style.backgroundColor = "transparent";
    document.getElementById("LocationTab").style.backgroundColor = "transparent";
    document.getElementById("GuestbookTab").style.backgroundColor = "grey";
    document.getElementById("RegistrationTab").style.backgroundColor = "transparent";
    document.getElementById("Login").style.backgroundColor = "transparent";
}

function postComment() {
	let name = document.getElementById("userName").value;
	let comment = document.getElementById("comment").value;
	if (comment == ""){
		showModal("Please add a comment");
	}
	else {
		if (name == ""){
			showModal("Please enter your name");
		}
		else {
            const fetchPromise = fetch(("http://localhost:8188/DairyService.svc/comment?name=" + name),
            {   
                method : "POST", 
                headers : {"Content-Type" : "application/json"},
                body : JSON.stringify(comment),
            }); 
            const streamPromise = fetchPromise.then((data) => data.json());
            streamPromise.then(comment => console.log(comment));
            showModal("Your comment has been posted");
			document.getElementById("form").reset();
		    window.setTimeout(getComment,250);
		}
	}
}

const getComment = () => {
    document.getElementById("iFrame").setAttribute("src", "http://localhost:8188/DairyService.svc/htmlcomments");
}

const showRegistration = () => {
    document.getElementById("Home").style.display = "none";
    document.getElementById("Products").style.display = "none";
    document.getElementById("News").style.display = "none";
    document.getElementById("Location").style.display = "none";
    document.getElementById("Guestbook").style.display = "none";
    document.getElementById("Registration").style.display = "block";
    document.getElementById("Login").style.display = "none";
    
    document.getElementById("HomeTab").style.backgroundColor = "transparent";
    document.getElementById("ProductsTab").style.backgroundColor = "transparent";
    document.getElementById("NewsTab").style.backgroundColor = "transparent";
    document.getElementById("LocationTab").style.backgroundColor = "transparent";
    document.getElementById("GuestbookTab").style.backgroundColor = "transparent";
    document.getElementById("RegistrationTab").style.backgroundColor = "transparent";
    document.getElementById("Login").style.backgroundColor = "transparent";
}

const userRegistration = () => {
	let Name = document.getElementById("registerUsername").value;
    let Password = document.getElementById("registerPassword").value;
    let repeatPassword = document.getElementById("repeatPassword").value;

    let data = {Name, Password};
	if (Name == ""){
		showModal("Please enter a username");
	}
	else {
        if (Password == ""){
            showModal("Please enter a password");
        }
            else {
            if (Password != repeatPassword){
                showModal("Repeated password did not match");
            }
            else {
                const fetchPromise = fetch(("http://localhost:8188/DairyService.svc/register"),
                {   
                    method : "POST", 
                    headers : {"Content-Type" : "application/json"},
                    body : JSON.stringify(data),
                }); 

                const streamPromise = fetchPromise.then((response) => response.json());
                streamPromise.then((data) => verification(data));

                document.getElementById("registrationForm").reset();
            }
        }
    } 
}

const verification = (data) => {
    const result = document.getElementById("verification");

    if (data == "Username not available")
    {
        showModal("This account (username) already exists!")
        result.innerHTML = "This account (username) already exists!"
    }

    else{
        result.innerHTML = ""
        showModal("Account successfully created!")
    }
}

const buyNow = (id) => {
    if (document.getElementById("LoginTab").style.visibility != "hidden"){
        showLogin();
    }

    if (document.getElementById("LoginTab").style.visibility == "hidden"){
        const fetchPromise = fetch(('http://localhost:8189/Service.svc/buy?id=' + id),
        {
            headers : {
                "Accept" : "application/json",
            },   
        });

        const streamPromise = fetchPromise.then((data) => data.json());
        streamPromise.then((data) => showModal(data));
    }
}

const showLogin = () => {
    document.getElementById("Home").style.display = "none";
    document.getElementById("Products").style.display = "none";
    document.getElementById("News").style.display = "none";
    document.getElementById("Location").style.display = "none";
    document.getElementById("Guestbook").style.display = "none";
    document.getElementById("Registration").style.display = "none";
    document.getElementById("Login").style.display = "block";

    document.getElementById("HomeTab").style.backgroundColor = "transparent";
    document.getElementById("ProductsTab").style.backgroundColor = "transparent";
    document.getElementById("NewsTab").style.backgroundColor = "transparent";
    document.getElementById("LocationTab").style.backgroundColor = "transparent";
    document.getElementById("GuestbookTab").style.backgroundColor = "transparent";
    document.getElementById("RegistrationTab").style.backgroundColor = "transparent";
    document.getElementById("LoginTab").style.backgroundColor = "transparent";
}

const userLogin = () => {
    const xhr = new XMLHttpRequest();
    const uri = 'http://localhost:8189/Service.svc/user';
    let username = document.getElementById("loginUsername").value;
    let password = document.getElementById("loginPassword").value;

    if (username == ""){
		showModal("Please enter a username");
	}
	else {
        if (password == ""){
            showModal("Please enter a password");
        }
        else{
            xhr.open("GET", uri, true, username, password);
            xhr.withCredentials = true;

            xhr.onload= () => {
                console.log(xhr.status);
                const result = document.getElementById("show_result");
                const error = document.getElementById("loginError");

                if (xhr.status == "200")
                {
                    result.innerHTML = xhr.responseText;
                    document.getElementById("logout").style.visibility = "visible";
                    document.getElementById("RegistrationTab").style.visibility = "hidden";
                    document.getElementById("LoginTab").style.visibility = "hidden";
                    document.getElementById("Login").style.display = "none";
                    document.getElementById("Home").style.display = "block";
                    document.getElementById("HomeTab").style.backgroundColor = "grey";
                    showModal("You have successfully logged in");
                }

                else {
                    showModal("Incorrect login details! Please re-enter your username and password.")
                    error.innerHTML = "Incorrect login details! <br><br> Please re-enter your username and password."
                }
            }
            
            xhr.send(null);
            document.getElementById("loginForm").reset(); 
        }
    }
}

const userLogout = () =>{
    const result = document.getElementById("show_result");
    document.getElementById("logout").style.visibility = "hidden";
    document.getElementById("RegistrationTab").style.visibility = "visible";
    document.getElementById("LoginTab").style.visibility = "visible";
    document.getElementById("Login").style.display = "none";
    result.innerHTML = "Guest";
    showModal("You have successfully logged out");
}

window.onclick = function(event) {
  if (event.target == document.getElementById("modal")) {
    document.getElementById("modal").style.display = "none";
  }
}