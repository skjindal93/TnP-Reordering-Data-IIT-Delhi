var path = window.location.pathname;
if (path=="/tnp/student/resume/intern.php" || path=="/tnp/student/resume/workex.php" || path=="/tnp/student/resume/proj.php" || path=="/tnp/student/resume/posrespon.php"){

  $("#myDiv").before("<p>Order by Number Separated by Commas:</p>");
  $("#myDiv").before("<p>Example: If order is 2,1,5,6 then the boxes will get reordered in the mentioned sequence</p>" );
  $("#myDiv").before('<input type="text" class="sequence"></input> <button type="button" class="seq">REORDER</button><br><br>');
  $("body").append("<p style='text-align:center;'>Feel free to mail to <u>shubhamjindal18@gmail.com</u> for any bug fixes or issues");
  var divs = $("#myDiv").find("div");
  var length = divs.length;

  for (var i=0;i<length;i++){
    var t = $("#my"+(i+1)+"Div");
    t.before("<span>"+(i+1)+"</span>");
  }

  $(".seq").click(function(){
    var str = $(".sequence").val();
    var a = str.split(",");
    
    for (var i=0; i<a.length; i++){
      a[i] = parseInt(a[i]);
    }

    console.log(a);
    
    var divs = $("#myDiv").find("div");
    var length = divs.length;

    console.log(length);

    var iframe_array = new Array();
    var achievements_array = new Array();
    var input_array = new Array();
    var select_array = new Array();

    for (var i=0;i<length;i++){
          
      //divs.push($("#my"+(i+1)+"Div"));
      var iframe_p = document.getElementById('description'+(i+1)+'_ifr');
      if (iframe_p){
        var iframebody_p = iframe_p.contentDocument || iframe_p.contentWindow.document;
        var content_p = iframebody_p.getElementsByTagName('body')[0].innerHTML;
        iframe_array.push(content_p);
  
      }
      
      var achieve_p = document.getElementById('achievments'+(i+1)+'_ifr');
      if (achieve_p){
        var achievebody_p = achieve_p.contentDocument || achieve_p.contentWindow.document;
        var acontent_p = achievebody_p.getElementsByTagName('body')[0].innerHTML;
        achievements_array.push(acontent_p);
    
      }
      
      var tempinput = $("#my"+(i+1)+"Div").find("input");
      var tempinput_arr = new Array();

      for (var k =0;k<tempinput.length;k++){
        tempinput_arr.push(tempinput[k].value);
      }
      input_array.push(tempinput_arr);

      //input_array.push($("#my"+(i+1)+"Div").find("input")[0].value);

      var temp = $("#my"+(i+1)+"Div").find("select");
      var temp_arr = new Array();
      for (var k =0;k<temp.length;k++){
        temp_arr.push(temp[k].value);
      }
      select_array.push(temp_arr);
      console.log(select_array);
    }

    
    for (var j=0;j<a.length;j++){
      //var iframe = divs[a[j]-1].find("iframe");
      //var iframebody = iframe[0].contentDocument || iframe[0].contentWindow.document;
      //var content = iframebody.getElementsByTagName('body')[0].innerHTML;
      //baa.push(iframe);

      var iframe_page = document.getElementById('description'+(j+1)+'_ifr');
      if (iframe_page){
        var iframebody_page = iframe_page.contentDocument || iframe_page.contentWindow.document;
        iframebody_page.getElementsByTagName('body')[0].innerHTML = iframe_array[a[j]-1];  
      }
      


      var achieve_page = document.getElementById('achievments'+(j+1)+'_ifr');
      if (achieve_page){
        var achievebody_page = achieve_page.contentDocument || achieve_page.contentWindow.document;
        achievebody_page.getElementsByTagName('body')[0].innerHTML = achievements_array[a[j]-1];
      }
      
      //var input = divs[a[j]-1].find("input")[0];
      //$("#my"+(j+1)+"Div").find("input")[0].value = input_array[a[j]-1];
      var inputs_page = $("#my"+(j+1)+"Div").find("input");
      for (var i =0;i<inputs_page.length;i++){
        inputs_page[i].value = input_array[a[j]-1][i];
      }

      //var selects = divs[a[j]-1].find('select');
      var selects_page = $("#my"+(j+1)+"Div").find("select");
      for (var i =0;i<selects_page.length;i++){
        selects_page[i].value = select_array[a[j]-1][i];
      }

    }
    
  });
}


var script = document.createElement('script');
script.innerHTML = "\
  copy2 = function (){ \
    var frames = document.getElementsByTagName('iframe'); \
    for (i=0; i<frames.length; i++) { \
      iframe = (frames[i].contentWindow) ? frames[i].contentWindow : (frames[i].contentDocument.document) ? frames[i].contentDocument.document : frames[i].contentDocument; \
      iframe.onpaste=function(e) { \
          e.preventDefault(); \
          var text = (e.originalEvent || e).clipboardData.getData('text/plain') || prompt('Paste something..'); \
          iframe.document.execCommand('insertText', false, text); \
      }; \
    } \
  }; \
window.onload = copy2";
document.documentElement.appendChild(script);

/*$(document).ready(function(){
  copy2 = function (){
    var frames = document.getElementsByTagName('iframe');
    for (i=0; i<frames.length; i++) {
      iframe = (frames[i].contentWindow) ? frames[i].contentWindow : (frames[i].contentDocument.document) ? frames[i].contentDocument.document : frames[i].contentDocument;
      var frame = frames[i].contentWindow.document;
      frame.onpaste=function(e) {
          e.preventDefault();
          var text = (e.originalEvent || e).clipboardData.getData('text/plain') || prompt('Paste something..');
          iframe.document.execCommand('insertText', false, text);
      };
    }
  }
});*/
