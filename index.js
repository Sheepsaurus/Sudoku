$(document).ready(function(){
    window.currentlySelected = "";
    UnselectAndSelect(".selectorButton");
    //unselectAndSelect("td");
    $("td").click(function(){
        if ($(this).attr('class') != "selectorButton") {           

            //console.log("Are there other numbers Horizontally? = " + HandleHorizontal($(this).parent()))
            //console.log("Are there other numbers Vertically? = " + HandleVertical($(this).index()))
            //console.log("If this is true, there is no crossing: " + HandleHorizontal($(this).parent()) && HandleVertical($(this).index()));

            if (HandleHorizontal($(this).parent()) || 
                HandleVertical($(this).index()) || 
                HandleSection($(this).attr('class'))) {
                console.log("You are not allow to put this number here")
            } else {
                $(this).html(window.currentlySelected); 
            }          
        }
    })
})

function HandleSection(className) {
    var sectionOfElements = document.getElementsByClassName(className);

    for (var i = 0; i < sectionOfElements.length; i++) {
        var boxNumber = sectionOfElements[i].innerHTML;
        if (boxNumber == window.currentlySelected) return true;
    }
    return false;
}

function HandleHorizontal(parent) {
    // We're examining one row
    var children = parent.children();

    // Every single column
    for (var i = 0; i < children.length; i++) {
        var boxNumber = children[i].innerHTML;
        if (boxNumber == window.currentlySelected) return true;
    } 
    return false;
}

function HandleVertical(index) {
    // We're examining several rows
    var rows = [$("#topRowFirst"),    $("#topRowSecond"),    $("#topRowThird"), 
                $("#middleRowFirst"), $("#middleRowSecond"), $("#middleRowThird"), 
                $("#bottomRowFirst"), $("#bottomRowSecond"), $("#bottomRowThird")]
    
    // One time each
    for (var i = 0; i < rows.length; i++) {
        var boxNumber = rows[i].children()[index].innerHTML;
        if (boxNumber == window.currentlySelected) return true;
    } 
    return false;
}

function UnselectAndSelect(element) {
    $(element).click(function(){
        // Set all other boxes to non-lit
        $(element).css("box-shadow", "inset 0px 0px 0px 1px");
        // Highlight the clicked box
        $(this).css("box-shadow", "inset 0px 0px 0px 3px");
        // Take value of clicked box
        window.currentlySelected = $(this).html();
    });
}