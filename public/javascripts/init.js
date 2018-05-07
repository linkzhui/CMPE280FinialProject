$(init);
function init()
{
    $(".main").attr("href","/");
    $(".clothes").attr("href","/clothes");
    $(".shoes").attr("href","/shoes");
    $(".beauty").attr('href',"/beauty");
    $(".login").attr("href","/user/login");
    $(".signup").attr("href","/user/signup");
    $(".logout").attr("href","/user/logout");
    $(".shoppingChart").attr("style","background: url(/images/shoppingChart1.png)");
    $(".shoppingChartUrl").attr("href","/shopping");
    $(".checkout").attr("href","/checkOut");

}