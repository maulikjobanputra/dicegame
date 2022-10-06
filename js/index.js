function play(){
    let a = Math.floor(Math.random() * 6) + 1;
    let b = Math.floor(Math.random() * 6) + 1;
    if(a>b){
        document.getElementById("title").textContent = "🚩Player 1 Wins!";
    }else if(a<b){
        document.getElementById("title").textContent = "🚩Player 2 Wins!";
    }else{
        document.getElementById("title").textContent = "🚩Match Draw!";
    };
    if(a==1){
        document.getElementById("player1").setAttribute("src","images/dice1.png")
    };
    if(a==2){
        document.getElementById("player1").setAttribute("src","images/dice2.png")
    };
    if(a==3){
        document.getElementById("player1").setAttribute("src","images/dice3.png")
    };
    if(a==4){
        document.getElementById("player1").setAttribute("src","images/dice4.png")
    };
    if(a==5){
        document.getElementById("player1").setAttribute("src","images/dice5.png")
    };
    if(a==6){
        document.getElementById("player1").setAttribute("src","images/dice6.png")
    };
    if(b==1){
        document.getElementById("player2").setAttribute("src","images/dice1.png")
    };
    if(b==2){
        document.getElementById("player2").setAttribute("src","images/dice2.png")
    };
    if(b==3){
        document.getElementById("player2").setAttribute("src","images/dice3.png")
    };
    if(b==4){
        document.getElementById("player2").setAttribute("src","images/dice4.png")
    };
    if(b==5){
        document.getElementById("player2").setAttribute("src","images/dice5.png")
    };
    if(b==6){
        document.getElementById("player2").setAttribute("src","images/dice6.png")
    };
    document.getElementById("btn").textContent= "PLAY again!";
}

