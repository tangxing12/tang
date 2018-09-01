/*随机数*/
 var str="";
  var div=document.getElementById("sjs");
 div.onclick=function(){
     var n,m,p,k;
     var div=this;
     m=Math.floor(Math.random()*10).toString();
     n=Math.floor(Math.random()*10).toString();
     p=Math.floor(Math.random()*10).toString();
     k=Math.floor(Math.random()*10).toString();
     str=m+"&nbsp;"+"&nbsp;"+n+"&nbsp;"+"&nbsp;"+p+"&nbsp;"+"&nbsp;"+k;
     div.innerHTML=str;
   str=str.replace(/&nbsp;/gi,"");
 }

/*地区选择*/
     var cities=[
         [{"name":'东城区',"value":101},
             {"name":'西城区',"value":102},
             {"name":'海淀区',"value":103},
             {"name":'朝阳区',"value":104}],
         [{"name":"合川区","value":401},
             {"name":"渝北区","value":402},
             {"name":"巴南区","value":403},
             {"name":"九龙坡区","value":404},
             {"name":"渝中区","value":405}
         ],
         [{"name":'河东区',"value":201},
             {"name":'河西区',"value":202},
             {"name":'南开区',"value":203}],
         [{"name":'石家庄市',"value":301},
             {"name":'廊坊市',"value":302},
             {"name":'保定市',"value":303},
             {"name":'唐山市',"value":304},
             {"name":'秦皇岛市',"value":305}]
     ];
     var cs=document.getElementById("cs");
     cs.onchange=function(){
         var cs=this;
         var qx=document.getElementById("quxian");
         var i=cs.selectedIndex-1;
         if(i>=0){
             qx.innerHTML="";
             var frag=document.createDocumentFragment();
             frag.appendChild(new Option("--请选择--"));
             var citis=cities[i];
             for(var city of citis){
                 frag.appendChild(new Option(city.name));
             }
             quxian.appendChild(frag);
             quxian.className="";
         }else{
             quxian.className="hidden1";
         }
     }
/*var inpu=document.getElementById("cds");
console.log(inpu.checked);*/
$(function(){
    $("#cds1").click(function(){
        if(!$(":checkbox").is(":checked")){
            $("#cds").attr("disabled",true);
        }else{
            $("#cds").removeAttr("disabled");
        }
    })
/*点击提交*/
    $("#cds").click(function(){
     var $uPone =$("[name=phone]").val();
       var zhenz=/[0-9]{11}/;
        if(!zhenz.test($uPone)){
            $("[name=phone]").next().html("手机号有误");
            $("[name=phone]").next().css({"backgroundColor":"gray",color:"red"});
        }else{
            /*注册信息*/
            var uname=$("[name=uname]").val();
            var upwd=$("[name=upwd]").val();
            var upwd1=$("[name=upwd1]").val();
            var email=$("[name=email]").val();
            var phone=$("[name=phone]").val();
            var sex=$("[name=sex]").val();
            var yzm=$("[name=yzm]").val();
            //判断验证码(str) 验证密码
            if(yzm==str&&upwd==upwd1){
                $.ajax({
                    url:"http://localhost:5050/login/zc",
                    type:"post",
                    data:{uname,upwd,email,phone,sex},
                    dataType:"json",
                    success:function(data){
                        console.log(data.ok);
                        if(data.ok==1){
                            alert("注册成功，自动返回主页");
                            location.href="http://localhost:5050/header.html";
                        }else{
                            alert("信息有误");
                        }
                    }
                })
            }else{
                alert("输入信息有误");
            }

        }
    })
})

