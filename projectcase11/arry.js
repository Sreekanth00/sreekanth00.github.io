
/* 
     Website: Car Care -project- 11
       Author: Sreekanth
       Date: 12.3.2018
*/

var bookdata=document.getElementById("book");
var  btn=document.getElementById("btn");
btn.addEventListener("click",function(){
 var ourRequest=new XMLHttpRequest();
 ourRequest.open('GET','https://www.lampbusters.com/coperni/javascript2/grbooks_ajax.php?command=byyearjson&searchterm=2013');
 ourRequest.onload=function(){
	 var ourData=JSON.parse(ourRequest.responseText);
	 renderHTML(ourData);
 };
ourRequest.send();
});
function renderHTML(data){
	var htmlString="";
	for (i=0;i < data.length; i++) {
		htmlString +="<p>" + "Book-ID:-" +"&nbsp" + data[i].bookid+"&nbsp"  +"&nbsp" +"Title:-"+ data[i].title +"&nbsp"  +"&nbsp"+"&nbsp"+"Year:-"  +"&nbsp"+"&nbsp" + data[i].year  +"&nbsp"  +"&nbsp"+"&nbsp"+"ISBN13:-"  +"&nbsp"+"&nbsp" + data[i].isbn13 +"&nbsp"  +"&nbsp"+"&nbsp"+"Publisher:-"  +"&nbsp"+"&nbsp" + data[i].publisher +".</p>";
	}
	bookdata.insertAdjacentHTML('beforeend',htmlString);
}