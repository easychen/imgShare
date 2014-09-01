$.fn.extend({

   imgShare:function(){
    var that = this;
    $(this).find("img").each(function(index)
    {
        if( this.width >= 200 && this.height >= 100 )
        {
            //console.log('in'+this.width+'~'+this.height);
            $(this).on('mouseenter',function()
            {
                imageshare_show(this);
            });
            
            $(this).on('mouseleave',function()
            {
                imageshare_hide();
            });
            
        }
    });
    return that;

   }

})


function imageshare_hide()
{
    $("#imgshare_div").data('show' , 0);
    setTimeout(function(){
        if( parseInt($("#imgshare_div").data('show')) == 0 )
            $("#imgshare_div").hide();} , 10000 );
}

function imageshare_show( img )
{
    //console.log(img);
    if( $("#imgshare_div").length < 1 )
    {
        var odiv = $( "<a class='imgshare'>分享到微博</a>" );
        odiv.attr( 'id' , 'imgshare_div' );
        $('body').prepend( odiv );
    }

    $("#imgshare_div").attr('href','http://service.weibo.com/share/share.php?title=' + encodeURIComponent('分享图片 in 「 '+document.title+' 」 ') + '&url='+ encodeURIComponent(window.location) +'&source=bookmark&pic='+encodeURIComponent(img.src));

    $("#imgshare_div").attr('target','_blank');

 
    var top = $(img).offset().top;
    var left =$(img).offset().left;

    $("#imgshare_div").data('show' , 1);
    $("#imgshare_div").css('top',top);
    $("#imgshare_div").css('left',left+$(img).width()-100);
    //console.log('img position top ' + top + '~ left ' + left);


    $("#imgshare_div").show();

}