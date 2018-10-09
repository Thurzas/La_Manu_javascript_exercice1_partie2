var changment=false;
function change(){
  var img =document.getElementsByTagName('img')[0];
  changment==true? img.src  ='img/image1.jpg':img.src  ='img/image1_2.jpg';
  changment=!changment;
};
