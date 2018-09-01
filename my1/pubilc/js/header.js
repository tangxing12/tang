
function tim(){
    var time=document.getElementById("time");
    var time1=new Date();
    time.innerHTML=`${time1.getFullYear()}年${time1.getMonth()+1}月${time1.getDate()}日`;
}
setInterval(tim,0);
var jd=document.getElementById("yc").nextElementSibling.children[0];
jd.onclick=function(){
    if(document.getElementById("yc").className=="yc")
    document.getElementById("yc").className="yc1";
    else
    {document.getElementById("yc").className="yc";
    document.getElementById("yc").style.width="150px";
        document.getElementById("yc").style.height="150px";
    }
}


/*数字*/
var i=0;
var ul=document.querySelector("#yuandian>ul");
ul.onclick=function(e){
    if(e.target.nodeName=="LI"){
     clearInterval(time);
        var li=e.target;
        /*清除当前的*/
        var li1=document.querySelector("#lunbo>ul>li.lix");
        li1.className=li1.className.replace("lix","");
        var li2=document.querySelector("#yuandian>ul>li.back");
        li2.className=li2.className.replace("back","");
        /*赋新值 */
        li.className="back";
        var n=li.innerHTML-1;
      var  li3=document.querySelector("#lunbo>ul");
            li3.children[n].className+=" lix";
    }
}

/*轮播*/
   function lun(){
       var li=document.querySelector("#lunbo>ul>li.lix");
       if(li.nextElementSibling !=null){
         li.className=li.className.replace("lix","");
           li.nextElementSibling.className+=" lix";
           i++;

       }else{
           li.className=li.className.replace("lix","");
           li.parentElement.firstElementChild.className+=" lix";
           i=0;
       }
       var sz=document.querySelector("#yuandian>ul");
      sz.children[i].className="back";
       if(i-1>=0){
           sz.children[i-1].className="";
       }else{
           sz.children[4].className="";
       }
   }
var time=setInterval(lun,2000);
/*显示表格*/
var ul=document.querySelector(".zj>.gudi2>ul");
var div1=document.querySelector(".zj>.gudi2");
  ul.onmouseover=function(e){
      if(e.target.nodeName=="LI"){
          var li=e.target;
          for(var li1 of li.parentElement.children)
          {li1.style.backgroundColor="";
              li.style.backgroundColor="#1B7D20";
          }
          for(var m=2;m<8;m++){
              if(div1.children[m].className.indexOf("xs1")!=-1){
              div1.children[m].className=div1.children[m].className.replace("xs1","d-none");
              }else if(div1.children[m].className.indexOf("d-none")!=-1){
              }else{
                  div1.children[m].className+=" d-none";
              }
          }
          switch (li.innerHTML){
              case "旅游资讯":div1.children[2].className="xs1"
                  break;
              case "微视频":div1.children[3].className="xs1"
                  break;
              case "桃花节情报":div1.children[4].className="xs1"
                  break;
              case "赏花攻略":div1.children[5].className="xs1"
                  break;
              case "景区联合":div1.children[6].className="xs1"
                  break;
              default :div1.children[7].className="xs1";
          }
      }
  }
/*城市*/
$("#dm>div>div:nth-child(3)>ul").on("click","li",function(e){
    e.preventDefault();
    var $li=$(this);
   var id=$li.children().attr("href");
    $(id).addClass("myxs");
    $(id).siblings().attr("class","myyc");
})
/*小的导航 */
  var ul=document.getElementById("ssdw").children[0];
  ul.onmousemove=function(e){
         if(e.target.nodeName=="LI"){
             for(var li of ul.children){
                 li.firstElementChild.className="";
                 if(li.className.indexOf("backg")!=-1){
                 li.className=li.className.replace(" backg","");
                 }
                 for(var j=1;j<4;j++){
                     if(document.getElementById("ssdw").children[j].className.indexOf("active")!=-1){
                         document.getElementById("ssdw").children[j].className=
                             document.getElementById("ssdw").children[j].className.replace(" active","");
                     }
                 }
             }
             e.target.className+=" backg";
           var p= e.target.dataset.mz;
             document.getElementById("ssdw").children[p].className+=" active";
         }
  }
//登录
$(function(){
    function islogin(){
        $.ajax({
            url:"http://localhost:5050/login/islogin",
            type:"get",
            dataType:"json",
            success:function(data){
                if(data.ok==0){
                        $("#ycdl").show().next().hide();
                }else{
                    $("#ycdl").hide();
                    $("#xsdl").show();
                    $("#xsdl>a:nth-child(2)").html(data.uname);
                }
            }
        })
    }
    islogin();
    $("#ycdl>a:first-child").click(function(e){
        e.preventDefault();
        location.href="http://localhost:5050/login.html?back="+location.href;
    })
    //注册
    $("#ycdl>a:nth-child(2)").click(function(e){
        e.preventDefault();
        location.href="http://localhost:5050/zuce.html";
    })
    //我的帐户
    $("#ycdl>a:nth-child(3)").click(function(e){
        e.preventDefault();
        location.href="http://localhost:5050/login.html?back="+location.href;
    })
    //注消
    $("#xsdl>a:last-child").click(function(e){
        e.preventDefault();
        $.ajax({
            url:"http://localhost:5050/login/signout",
            type:"get",
            success:islogin
        })
    })
})
var ul1=document.getElementById("suo");
ul1.onmouseover=function(e){
    if(e.target.nodeName=="LI"){
        var li=e.target;
        li.className+=" colo";
    }
}
ul1.onmouseout=function(e){
    if(e.target.nodeName=="LI"){
        var li=e.target;
       if(li.className.indexOf("colo")!=-1){
        li.className=li.className.replace(" colo","");
       }
    }
}

