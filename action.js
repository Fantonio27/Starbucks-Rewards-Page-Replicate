$(function(){
    activeContent();
})

let passval = {
    navTab : 0,
    accorTab: 0,
};

function activeTab (index = 1) {
    
    if(passval.navTab != index){
        passval.navTab = index;
        const total = index * (window.innerWidth == 470? 94 : 110);

        $(".line-bottom").css( "left", `${total}px`);

        activeContent(index + 1)
    }
}

function activeContent (active = 1) {
    $(".content").children().hide();
    $(".content").children(`div:nth-child(${active})`).fadeIn(500); 
}

function accordionTab(index){
   
    $(`#accordion-content-${index}`).slideToggle(400);
}
  