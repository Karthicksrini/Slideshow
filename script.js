
//var colors=["https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg","Images/img2.jpg","Images/img3.jpg"];
var divison = document.createElement("div");
  var img=document.createElement("img")
  img.setAttribute("src","Images/img1.png");
  divison.setAttribute("class","mainimg");
  divison.append(img);
  document.body.append(divison);
var index=1;
const forward=()=>{
  if(index==1){
    img.setAttribute("src","Images/img1.png")
  }
  if(index==2){
    img.setAttribute("src","Images/img2.jpg")
  }
  if(index==3){
    img.setAttribute("src","Images/img3.jpg");
    index=0; 
  }
  index++;
  divison.append(img);
  document.body.append(divison);
  console.log(img);
  }
  img.remove();
  console.log(img)
  
  const backward=()=>{
    if(index==1){
      img.setAttribute("src","Images/img3.jpg")
    }
    if(index==2){
      img.setAttribute("src","Images/img1.png")
    }
    if(index==3){
      img.setAttribute("src","Images/img2.jpg");
      index=0; 
    }
    index++;
    divison.append(img);
    document.body.append(divison);
    console.log(img);
    }
    img.remove();
    console.log(img)
  

backward();
const flash=setInterval(forward,2000);
img.setAttribute("onmouseover","over()");
img.setAttribute("onmousedown","down()");

var over=()=>{
    setTimeout(flash);
}

var down=()=>{

}



