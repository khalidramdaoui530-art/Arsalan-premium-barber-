*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    scroll-behavior:smooth;
}

body{
    font-family:'Poppins',sans-serif;
    background:#0b0b0b;
    color:#fff;
}

header{
    position:fixed;
    width:100%;
    top:0;
    left:0;
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:25px 80px;
    z-index:1000;
    background:rgba(0,0,0,.45);
    backdrop-filter:blur(10px);
}

.logo h2{
    font-family:'Cinzel',serif;
    color:#d4af37;
    font-size:30px;
    letter-spacing:4px;
}

nav ul{
    display:flex;
    list-style:none;
    gap:35px;
}

nav a{
    color:#fff;
    text-decoration:none;
    font-weight:500;
    transition:.3s;
}

nav a:hover{
    color:#d4af37;
}

.hero{
    height:100vh;
    background:url("images/hero.jpg") center center/cover no-repeat;
    display:flex;
    align-items:center;
    position:relative;
}

.overlay{
    position:absolute;
    width:100%;
    height:100%;
    background:rgba(0,0,0,.65);
}

.hero-content{
    position:relative;
    margin-left:100px;
    max-width:650px;
    z-index:10;
}

.hero h1{
    font-size:75px;
    line-height:1;
    color:#d4af37;
    font-family:'Cinzel',serif;
    margin-bottom:25px;
}

.hero p{
    font-size:18px;
    color:#ddd;
    margin-bottom:40px;
    line-height:1.8;
}

.btn{
    display:inline-block;
    background:#d4af37;
    color:#000;
    padding:15px 45px;
    border-radius:50px;
    text-decoration:none;
    font-weight:bold;
    transition:.3s;
}

.btn:hover{
    background:#fff;
    transform:translateY(-3px);
}

.services{
    padding:100px 10%;
    text-align:center;
}

.services h2{
    color:#d4af37;
    font-size:42px;
    margin-bottom:60px;
    font-family:'Cinzel',serif;
}

.cards{
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(250px,1fr));
    gap:30px;
}

.card{
    background:#171717;
    padding:40px;
    border-radius:20px;
    transition:.4s;
    border:1px solid #333;
}

.card:hover{
    transform:translateY(-10px);
    border-color:#d4af37;
}

.card i{
    font-size:45px;
    color:#d4af37;
    margin-bottom:20px;
}

.card h3{
    margin-bottom:15px;
}

.gallery{
    padding:100px 10%;
    text-align:center;
}

.gallery h2{
    color:#d4af37;
    margin-bottom:50px;
    font-family:'Cinzel',serif;
}

.images{
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(300px,1fr));
    gap:25px;
}

.images img{
    width:100%;
    border-radius:15px;
    transition:.4s;
}

.images img:hover{
    transform:scale(1.05);
}

footer{
    text-align:center;
    padding:40px;
    background:#000;
    border-top:1px solid #222;
}

footer h3{
    color:#d4af37;
    margin-bottom:10px;
}

@media(max-width:768px){

header{
padding:20px;
flex-direction:column;
}

nav ul{
margin-top:20px;
gap:18px;
flex-wrap:wrap;
justify-content:center;
}

.hero-content{
margin:0 30px;
}

.hero h1{
font-size:45px;
}

}
