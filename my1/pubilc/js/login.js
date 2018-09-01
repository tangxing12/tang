(function() {
    function slid() {
        var img = document.querySelector("#img>.row>.col-md-5>img.show");
        img.className = "";
        if (img.nextElementSibling != null) {
            img.nextElementSibling.className = "show";
        } else {
            img.parentNode.children[0].className = "show";
        }
    }
    setInterval(slid,3000);
    var inputs=document.querySelectorAll("#img>.row>div:nth-child(2)>ul>li>input");
    for(var inpu of inputs){
        inpu.onfocus=function(){
            var inpu=this;
            inpu.className="bk";
        }
        inpu.onblur=function(){
            var inpu=this;
            inpu.className="";
        }
    }
/*提示框*/
    var button=document.getElementsByTagName("button")[0];
    var uname=document.getElementsByName("uname")[0];
    var upwd=document.getElementsByName("upwd")[0];
    button.onclick=function(){
        var button=this;
       if(!(/^\w{1,10}$/.test(uname.value))) {
           var st = button.parentElement.parentElement.children[5];
           st.className = "tisk1";
       }
       else if(!(/^\w{1,10}$/.test(upwd.value))) {
            var st = button.parentElement.parentElement.children[6];
            st.className = "tisk1";
        }else{}
    }
    uname.onfocus=function(){
        var st = button.parentElement.parentElement.children[5];
        st.className = "tisk";
    }
    upwd.onfocus=function(){
        var st = button.parentElement.parentElement.children[6];
        st.className = "tisk";
    }
})()
$(function(){
    $("#dlan>li:nth-child(9)").click(function(){
        var upwd=$(":password").val();
        var uname=$(":text").val();
        $.ajax({
            url:"http://localhost:5050/login/silogin",
            type:"post",
            data:{uname,upwd},
            dataType:"json",
            success:function(data){
                if(data.ok==0){
                    alert(data.msg);
                }else{
                    alert("登录成功，自动返回上一页");
                    var back=location.search.slice(6);
                    location.href=back;
                }
            }
        })
    })
})

var li=document.getElementById("zuce");
 li.onclick=function(e){
     e.preventDefault();
     location.href="http://localhost:5050/zuce.html";

 }
