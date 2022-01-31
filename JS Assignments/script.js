function Area() 
{   
      var r= document.getElementById("rad").value;
     a = Math.PI * r * r ;
     alert("Area of circle is " + a);

}

function Check()
{
     var mail = document.getElementById("mail").value;
     var pw = document.getElementById("pass").value;
     const m = "upgrade@gmail.com";
     const p = 56789 ;
 
     if ( mail==m && pw==p)
     {
         document.write("You have successfully logged in");
     } 

     else  { alert ("Invalid Credentials, try again"); } 

}

function Table()
{    
     var x = prompt("Enter the table do you want");
     for (i=0;i<=10;i++)
     {
       console.log(x + "*" + i + "=" + x*i );
     }
}


document.querySelector('#btn').addEventListener('click',function Change(){
     const clr = document.querySelector('#get').value;
     document.queryCommandIndeterm('.color').style.backgroundcolor = clr ;
});

