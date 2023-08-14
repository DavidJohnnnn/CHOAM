$('.RevealCard').hover(
    function () { // Mouse enter
        $(this).find(".revealImg").removeClass("imgClassReveal");
        
        $(this).find(".revealImg").addClass("imgClassHide");
        
        $(this).find(".revealDes").removeClass("descriptionClassHide");
        
        $(this).find(".revealDes").addClass("descriptionClassReveal");

    }, function () { // mouse leave
        $(this).find(".revealImg").addClass("imgClassReveal");
        
        $(this).find(".revealImg").removeClass("imgClassHide");
        
        $(this).find(".revealDes").addClass("descriptionClassHide");
        
        $(this).find(".revealDes").removeClass("descriptionClassReveal");
        
    }
  );