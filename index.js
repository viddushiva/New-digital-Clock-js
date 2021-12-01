
function time() {
    
    const a=new Date();
// console.log(a);
var b=a.getHours();
const h="AM"
const f="PM";
if (b<12) {
    
    // console.log(h);
    document.getElementById("PM").innerText = [h];


}
else{
    // console.log("PM");
    document.getElementById("PM").innerText = [f];
}
if (b>12) {
   var b=b-12;
}
// console.log(b);
const c=new Date();
d=c.getSeconds();
// console.log(d);
// const c=new Date();
e=c.getMinutes();
// console.log(e);







// document.getElementById("hours").innerText = [b];
// document.getElementById("minutes").innerText = [e];
// document.getElementById("sec").innerText = [d];
// document.getElementById("PM").innerText = [f];

    document.getElementById("hours").innerText = b+"hr";
    document.getElementById("minutes").innerText = e+"min";
    document.getElementById("sec").innerText = d+"sec";
 

    // if (b<10) {
    //       document.getElementById("right_side_image").src= "images/1stimage.png";
    // }
    // if (b<18) {
    //     document.getElementById("right_side_image").src= "images/2ndimage.svg";
    // }
    // if (b>24) {
    //     document.getElementById("right_side_image").src= "images/3rdimage.jpg";
    // }

    setTimeout(time,1000);


}time();






// var temp_1 = 0;
// var temp_2 = 0;
// var temp_3 = 0;

// function first_change() 
// {
//       temp_1 =1;
      
// }
// function second_change() 
// {
//       temp_2 =2;
// }
// function third_chage() 
// {
//       temp_3 =3;
// }

// var src;

// function  time_change()
// {


//    if(temp_1 == 1)
//    {
//         src = "images/1stimage.png";
//    }else if(temp_2 == "2")
//    {
//         src = "images/2ndimage.svg";

       
//    }else if(temp_3 == "3")
//    {
//        src = "images/3rdimage.jpg";     
//    }


//      temp_1 = 0;
//      temp_2 = 0;
//      temp_3 = 0;

//      var read_src = document.getElementById("right_side_image").src = src;



// function newdiv() {
//     var ert=document.createElement("div");
//     ert.className="print";
//     ert.id="print"
//     document.getElementById("zxc").appendChild(ert);
//     var wer=document.getElementById("select1").value;
//     var vammo =wer.option[wer.selectedIndex].text;
//     document.getElementById("print").innerHTML="wake up time is"+value;
    
    
// }
function  time_change() {
    var qa=document.getElementById("select1").value;
    
   
    
    const hourz=new Date().getHours();
    if (hourz==qa) {
        document.getElementById("right_side_image").style.background="url(./images/1stimage.png)";
        document.getElementById("bfas").innerHTML="it is the time to wakeup"
    }
    var qs=document.getElementById("select2").value;
    if (hourz==qs) {
        document.getElementById("right_side_image").style.background="url(./images/top-view-tasty-bell-peppers-delicious-cooked-meal-with-meat-greens-seasonings-dark-surface-dish-dinner-meal-cooking-food-min.jpg)";
        document.getElementById("bfas").innerHTML="it is the time to lunch"


    }
    var qd=document.getElementById("select3").value;
    if (hourz==qd) {
        document.getElementById("right_side_image").style.background="url(./images/3rdimage.jpg)";
        document.getElementById("bfas").innerHTML="it is the time to nap";

    }
   


    var e = document. getElementById("select1");
    var pqa_1=e. options[e. selectedIndex]. text;

    var e = document. getElementById("select2");
    var pqa_2=e. options[e. selectedIndex]. text;

    var e = document. getElementById("select3");
    var pqa_3=e. options[e. selectedIndex]. text;

   document.getElementById("zxc").style.display="block";
    document.getElementById("zxd").style.display="block";
    document.getElementById("zxe").style.display="block";
    document.getElementById("get").style.display="none";

    

    



    document.getElementById("zxc").innerHTML = "wake up time is :"+pqa_1 
    document.getElementById("zxd").innerHTML ="launch time is:"+ pqa_2 
    document.getElementById("zxe").innerHTML = "nap time is:"+pqa_3 
    


        if(temp_1 == 1)
        {
             src = "images/goodmrng.jpeg";
        }else if(temp_2 == "2")
        {
             src = "images/afternoon.jpeg";
     
            
        }else if(temp_3 == "3")
        {
            src = "images/nap.jpeg";     
        }
     
     
          temp_1 = 0;
          temp_2 = 0;
          temp_3 = 0;
     



    
}

  var hour=new Date().getHours();
    if (hour>0&&hour<10) {
        document.getElementById("right_side_image").style.background="url(./images/goodmrng.jpeg)";
        
    }
    if (hour>6&&hour<18) {
        document.getElementById("right_side_image").style.background="url(./images/afternoon.jpeg)";
    }
    if (hour>18&&hour<24) {
        document.getElementById("right_side_image").style.background="url(./images/nap.jpeg)";}
