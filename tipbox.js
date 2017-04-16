/*carousel*/
  var jsImg = new Array("slider_3.jpg","slider_2.jpg");
        var jsImg_len = jsImg.length; 
        var i=1;                       
        setInterval("sequentialImg()",2000);
        function sequentialImg(){  
            document.getElementById("first").innerHTML  = "<img src='"+jsImg[i]+"' width=100% height=50vw>";        
                i++;
                if(i>=jsImg_len)  i=0;
        }
/*goole map*/ 
 function initMap() {
        var myLatLng = {lat: 22.979919, lng: 120.220703};

        var map = new google.maps.Map(document.getElementById('map'), {
          center:{lat: 22.979919, lng: 120.13},
          scrollwheel: false,
          zoom:12
        });

        var marker = new google.maps.Marker({
          map: map,
          position: myLatLng,
          title: 'Hello World!'
        });
      }
/*navbar*/
 $(function(){
　$(window).load(function(){
　　$(window).bind('scroll resize', function(){
　　var $this = $(this);
　　var $this_Top=$this.scrollTop();
    var $p = $(".nav");
    
　　if($this_Top < 30){
　　　$('.nav').stop().animate({top:"0px"});
　　　$p.css("background-color","rgba(0, 0, 0, 0)");
  }
    
　　　　if($this_Top > 30){
　　　　$('.nav').stop().animate({top:"-40px"});
        $p.css("background-color","rgba(26, 23, 24, 0.9)");
　　　 }
　　}).scroll();
　});
});
/**/
