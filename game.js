var x=0;
if(performance.navigation.type==1)
{
    x++;
}
if(x==0)
{
    var z = document.querySelector("img");
    z.classList.add("visiblity");
    var z1 = document.querySelector("h1");
    z1.classList.add("align1");
    z1.classList.remove("heading");
}

if(x!=0)
{
    
    var y = document.querySelector("h1");
    var num1 = Math.random();
    var num2 = Math.random();
    
    num1 = num1*6;
    num1++;
    num1=Math.floor(num1);
    num2 = num2*6;
    num2++;
    num2=Math.floor(num2);
    if(num1>num2)
    {
        y.innerHTML = "PLAYER1 WINS!!!!!!!!!!!!";
        var z = document.querySelector("img");
        z.classList.remove("visiblity");
    }
    else if(num2>num1)
    {
        y.innerHTML = "PLAYER2 WINS!!!!!!!!!!!!";
        var z = document.querySelector("img");
        z.classList.remove("visiblity");
    }
    else
    {
        y.innerHTML = "ITS A DRAW!!!!!!!!!!!!";
        var z = document.querySelector("img");
        z.classList.add("visiblity");
    }
    var i = document.querySelectorAll(".img1 img");
    i[0].setAttribute("src","d"+num1+".png");
    i[1].setAttribute("src","d"+num2+".png");

    z1.classList.remove("align1");
    z1.classList.add("heading");
}
