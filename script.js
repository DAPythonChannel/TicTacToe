$(".b-header-menu").on("click", ()=>{
    var _hidden = $(".b-header-menu-ul");
    if (_hidden.css("display") =="none")
        _hidden.css("display","block");
    else 
        _hidden.css("display","none");
});
