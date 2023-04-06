   var imageTag=document.createElement('img')
   imageTag.alt='imagehere'
   imageTag.src='https://th.bing.com/th?id=OIP.rvSWtRd_oPRTwDoTCmkP5gHaE8&w=306&h=204&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2'
   document.body.appendChild(imageTag)

   var inpTag = document.createElement('input')
   inpTag.type='text'
   document.body.appendChild(inpTag)
   var unorderlist=document.createElement('ul')
   document.body.appendChild(unorderlist)
   inpTag.onchange=function buttonone() {
     
   //  var hOneTag = document.createElement('h5')
   //  hOneTag.innerText=inpTag.value
   //  document.body.appendChild(hOneTag)
    
   var list = document.createElement('li')
   list.innerText=inpTag.value
   unorderlist.appendChild(list)
    }
    
 //    var aTag =document.createElement('a')
 //    aTag.innerText='ATAG'
 //    aTag.href='https://www.google.com'
 //    document.body.appendChild(aTag)

//    var button = document.createElement('button')
//    button.innerText='ClickHere!'
//    document.body.appendChild(button)

//    button.onclick=function buttonone() {
//    var hOneTag = document.createElement('h5')
//    hOneTag.innerText=inpTag.value
//    document.body.appendChild(hOneTag)
//    var aTag =document.createElement('a')
//    aTag.innerText='ATAG'
//    aTag.href='https://www.google.com'
//    document.body.appendChild(aTag)
// }

