function checkScroll(){var l=1*$(".navbar").height();$(window).scrollTop()>l?$(".navbar").addClass("scrolled"):$(".navbar").removeClass("scrolled")}$(".navbar").length>0&&$(window).on("scroll load resize",function(){checkScroll()});