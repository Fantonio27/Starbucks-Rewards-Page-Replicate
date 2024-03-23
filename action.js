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
        const total = index * 110;

        $(".line-bottom").css( "left", `${total}px`);

        activeContent(index + 1)
    }
}

function activeContent (active = 1) {
    $(".content").children().hide();
    $(".content").children(`div:nth-child(${active})`).fadeIn(500); 
}

function accordionTab(index){
   
    $(".accordion").css("height", "0px");
    if(passval.accorTab != index){
        $(`#accordion-content-${index}`).css('height', 'auto');
        passval.accorTab = index
    }else{

        passval.accorTab = 0
    }
}
  