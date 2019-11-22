$(function(){
    $(".header_box").load("header.html",function(){
        main();
        navText("公司动态");
    });
    $(".footer").load("footer.html");

    //获取nid
    var str=window.location.href;
    var nid=str.substr(str.lastIndexOf("=")+1);
    $.ajax({
        type:"post",
        url:"data/news_detail.php",
        data:{nid:nid},
        success:function(d){
            //console.log(d);
            $(".news_details>h2").html(d.title);
            var t=parseInt(d.pubTime);
            $(".news_details>span").append(dateFormat(t));
            $(".news_content").html(d.content);
        }
    });

})