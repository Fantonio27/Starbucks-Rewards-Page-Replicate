$(function(){
    activeContent();
})

let passval = 0;

function activeTab (index = 1) {
    
    if(passval != index){
        passval = index;
        const total = index * 110;

        $(".line-bottom").css( "left", `${total}px`);

        activeContent(index + 1)
    }
}

function activeContent (active = 1) {
    
    $(".content").children().hide();
    $(".content").children(`div:nth-child(${active})`).fadeIn(500); 
}
  