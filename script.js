var a=0
async function foo()
{


    
    let  data= await fetch ("https://api.artic.edu/api/v1/artworks");

    
    let  data1 =await data.json();
    
    //this loop is going to access diff image in api 
    //bec in api we use template literals
 for(var i=0;i<12;i++)
 {
   
var cc=data1.data[i].image_id   
var img= new Image();
img.setAttribute("class","img")
img.src=`https://www.artic.edu/iiif/2/${cc}/full/843,/0/default.jpg`

//we access each image and pass this image along with data to the function foo()
foo1(img,data1)


  }
}
foo();
function foo1(img,data1)
{
    //here insted of loop we are using one variable "a" we declare it in top
    //here we create div with get element by id and each time "a"  changes we access diff slide from bootstrap carousel and
    //we are going to attach and append api data to each diff slide of carousel
    //at the end we increase "a" again and again so that we access diff slide and attach info to it.

    var div=document.getElementById(a)
   
    
    var title=document.createElement("h3")
    title.setAttribute("class","title")
    var artist_title=document.createElement("h3")
    artist_title.setAttribute("class","artist")
    var date_display=document.createElement("h3")
    date_display.setAttribute("class","display")
    var place_of_origin=document.createElement("h3")
    place_of_origin.setAttribute("class","place")
    //here we access all important data related to image and attach it to html tags
    title.innerHTML="Title : "+data1.data[a].title
    artist_title.innerHTML="Name of Artist : "+data1.data[a].artist_title
    date_display.innerHTML="Date of Creation : "+data1.data[a].date_display
    place_of_origin.innerHTML="Place of Origin : "+data1.data[a].place_of_origin



div.append(title)
div.append(artist_title)
div.append(date_display)
div.append(place_of_origin)
div.append(img)
  
    a++;
}