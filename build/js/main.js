let productListSliderElement = $('.product-list-slider-section');
let staffSliderEl = $('.staff-slider');

$(document).ready(function () {
    openingText();
    mobileMenu();
    hoverDropdownMenu();
    writeUsForm (); //popup send resume and client page
    filterBox();
    priceSlider();
    toggleFilter();
    toggleMap();
    addNewAddress (); //persnal page add new address
    initCountdown();
    accordeon ();
    initModal();
    promocodeShow (); // checkout page
    productListSliderElement.length > 0 && productListSliderSection();
    productListSlider();
    staffSliderEl.length > 0 && staffSlider();
    accordionAboutProduct();
    stickyHeader();
    showCommentForm();
    showMoreProd();
    $('.about-product-titles-holder').length > 0 && stickyMenuActive();
    countTableRow(); //compare table
    addComment(); //for popup review
    openingAnswers();
    burgerMenu();
    formSuccess();
    productView(); //prod page
    scrollToVideo(); //prod page
    $('.compare').length > 0 && compareFixedHead(); //compare page 
    scrollToTestimonials();  


    $('.form_validate').formValidation();
    $('.select').styler();

    $('.promo-slider').not('.slick-initialized').slick({
        dots: true,
        arrows: true,
        // customPaging: function (slider, i) {
        //     return '<span>' +
        //            '<svg class="circle-chart" viewbox="0 0 20 20" width="18" height="18" xmlns="http://www.w3.org/2000/svg">' +
        //            '<circle class="circle-chart__circle" fill="none" stroke-width="2" stroke-dasharray="100 100" stroke-linecap="square" cx="9.9127" cy="9.9127" r="8.9127" transform="rotate(-90 9.9127 9.9127)"/>' +
        //            '</svg>' +
        //            '</span>'
        // },
        slidesToShow: 1,
        fade: true,

        slidesToScroll: 1,
        // autoplay: true,
        // autoplaySpeed: 3000,
        cssEase: 'linear',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    arrows: false
                }
            },{
                breakpoint: 768,
                settings: {
                    arrows: false,
                    dots: true
                }
            }
        ]
    });

    $('.h_customScrollbar, .brands-slider').mCustomScrollbar({
        theme: 'minimal-dark',
        axis: 'x'
    });
    $('.table_customScrollbar').mCustomScrollbar({
        theme: 'light-3',
        axis: 'x',
        mouseWheel: 'false'
    });
    $('.mCustomScroll').mCustomScrollbar({
        theme: 'light-3'
    });

    $('.top-products-slider').not('.slick-initialized').slick({
        vertical: true,
        verticalSwiping: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    vertical: false,
                    verticalSwiping: false,
                    slidesToShow: 3.5,
                    slidesToScroll: 3,
                    swipeToSlide: true,
                    touchMove: true,
                    swipe: true,
                    draggable: true,
                    cssEase: 'linear'
                }
            },{
                breakpoint: 600,
                settings: {
                    vertical: false,
                    verticalSwiping: false,
                    slidesToShow: 2.5,
                    slidesToScroll: 1,
                    swipeToSlide: true,
                    touchMove: true,
                    swipe: true,
                    draggable: true,
                    cssEase: 'linear'
                }
            },{
                breakpoint: 450,
                settings: {
                    vertical: false,
                    verticalSwiping: false,
                    slidesToShow: 1.75,
                    slidesToScroll: 1,
                    swipeToSlide: true,
                    touchMove: true,
                    swipe: true,
                    draggable: true,
                    cssEase: 'ease'
                }
            }
        ]
    });
    checkSizeAndFilterSlickDivs();


    $('.images-list').not('.slick-initialized').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false
    });
    $('.js-two-item-slider').not('.slick-initialized').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        infinite: false,
        responsive: [ 
        {
            breakpoint: 1023,
            settings: {
            slidesToShow: 2,
            infinite: true,
            arrows: false,
            dots: true,
            autoplay: true,
            autoplaySpeed: 5000
            }
        }  ,
        {
            breakpoint: 661,
            settings: {
                slidesToShow: 1,
                dots: true,
                arrows: false,
                swipeToSlide: true,
                touchMove: true,
                swipe: true,
                draggable: true,
                cssEase: 'ease'
            }
        }   
        ]
    });
    $('.js-one-item-slider').not('.slick-initialized').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        infinite: false,
        responsive: [{
            breakpoint: 1024,
                settings: {
                infinite: true,
                arrows: false,
                dots: true,
                autoplay: true,
                autoplaySpeed: 8000
            }
        }]
    });

    $('.viewed-products-slider').not('.slick-initialized').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        responsive: [{
            breakpoint: 1280,
            settings: {
                arrows: false,
                dots: true
            }
        },{
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                arrows: false,
                dots: true,
                swipeToSlide: true,
                touchMove: true,
                swipe: true,
                draggable: true,
                cssEase: 'ease'
            }
        }]
    });

    var $productSlider = $('.products-slider');

    $productSlider.not('.slick-initialized').slick({
        slidesToShow: 5,
        slidesToScroll: 5,
        dots: true,
        infinite: false,
        customPaging: function(slider, i) {
            let currentIndex = (i + 1) * 5;
            if (currentIndex > slider.slideCount) {
                currentIndex = slider.slideCount;
            }
            return '<div class="num-slider">' + '<span class="current-num">' + currentIndex + '</span>' + ' / ' + '<span>' + slider.slideCount + '</span>' + '</div>';
        },
        arrows: true,
        prevArrow: $('.slider-prev'),
        nextArrow: $('.slider-next'),
        responsive: [{
            breakpoint: 1901,
            settings: {
                infinite: false,
                slidesToShow: 4,
                slidesToScroll: 4,
                customPaging: function(slider, i) {
                    let currentIndex = (i + 1) * 4;
                    if (currentIndex > slider.slideCount) {
                        currentIndex = slider.slideCount;
                    }
                    return '<div class="num-slider">' + '<span class="current-num">' + currentIndex + '</span>' + ' / ' + '<span>' + slider.slideCount + '</span>' + '</div>';
                }
            }
        },{
            breakpoint: 1280,
            settings: {
                infinite: false,
                slidesToShow: 3,
                slidesToScroll: 3,
                customPaging: function(slider, i) {
                    let currentIndex = (i + 1) * 3;
                    if (currentIndex > slider.slideCount) {
                        currentIndex = slider.slideCount;
                    }
                    return '<div class="num-slider">' + '<span class="current-num">' + currentIndex + '</span>' + ' / ' + '<span>' + slider.slideCount + '</span>' + '</div>';
                }
            }
        },{
            breakpoint: 1024,
            settings: {
                infinite: false,
                slidesToShow: 2,
                slidesToScroll: 2,
                customPaging: function(slider, i) {
                    let currentIndex = (i + 1) * 2;
                    if (currentIndex > slider.slideCount) {
                        currentIndex = slider.slideCount;
                    }
                    return '<div class="num-slider">' + '<span class="current-num">' + currentIndex + '</span>' + ' / ' + '<span>' + slider.slideCount + '</span>' + '</div>';
                }
            }
        },{
            breakpoint: 768,
            settings: {
                dots: false,
                arrows: false,
                slidesToShow: 2.3,
                slidesToScroll: 1,
                infinite: false,
                swipeToSlide: true,
                touchMove: true,
                swipe: true,
                draggable: true,
                cssEase: 'ease'
            }
        }]
    });

    var windowConstWidth = $(window).width();

    $(window).on('resize', function () {        
        var windowWidth = window.innerWidth
            || document.documentElement.clientWidth
            || document.body.clientWidth;
            countTableRow();

            if($("div").is(".compare")){
                $(".table_customScrollbar").mCustomScrollbar("destroy");  
                $('.table_customScrollbar').mCustomScrollbar({
                    theme: 'light-3',
                    axis: 'x',
                    mouseWheel: 'false'
                });  
            } 

            $('.top-products-slider').slick('slickUnfilter');

        if (windowWidth > 1024) {
            $('.product-scroll-item').length > 0 && initStickyProduct();
           
            if($('.header-panel').hasClass('search-opened') ) {
            	$('.header-panel').removeClass('search-opened');
                $('.search').removeClass('opened');
                $('body').removeClass('side-open');
                $('#menu-layout').remove();
            }  
        } else if (windowWidth <= 1024) {
            // accordionAboutProduct();
            $('.product-info-panel').length > 0 && stickyProductPanel();
            if($(window).width() != windowConstWidth && $('.header-panel').hasClass('search-opened')){
                $('.header-panel').removeClass('search-opened');
                $('.search').removeClass('opened');
                $('body').removeClass('side-open');
                $('#menu-layout').remove();
            }
        }
        
        if (windowWidth < 768) {
            $('.useful-products-list').not('.slick-initialized').slick({
                dots: true
            });

            blogligListSliderInit();

            $('.product-item-detail-slider-images-container').not('.slick-initialized').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                fade: false,
                infinite: true,
                dots: true
            });
            
            if($("div").is(".customScrollbar-modal")){
                $(".customScrollbar-modal").mCustomScrollbar("destroy");  
            }  
            checkSizeAndFilterSlickDivs();

            $('.h_customScrollbar.content-menu').mCustomScrollbar('destroy');

        } else if (windowWidth >= 768)  {
            $('.useful-products-list.slick-initialized').slick('unslick');
            $('.blog-list.slick-initialized').slick('unslick');
            $('.product-item-detail-slider-images-container.slick-initialized').slick('unslick');
            $('.customScrollbar-modal').mCustomScrollbar({theme: 'light-3'});
            checkSizeAndFilterSlickDivs();
        }
    }).trigger('resize');

    $('.benefits-section').not('.slick-initialized').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        infinite: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2.2,
                    slidesToScroll: 1,
                    cssEase: 'linear',
                    swipeToSlide: true,
                    touchMove: true,
                    swipe: true,
                    draggable: true
                }
            },{
                breakpoint: 641,
                settings: {
                    slidesToShow: 2.3,
                    slidesToScroll: 1,
                    cssEase: 'ease',
                    swipeToSlide: true,
                    touchMove: true,
                    swipe: true,
                    draggable: true
                }
            }
        ]

    });

    // $('.product-item-detail-slider-images-container').not('.slick-initialized').slick({
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     arrows: false,
    //     fade: true,
    //      asNavFor: '.product-item-detail-slider-controls',
    //     infinite: true,
    //     responsive: [{
    //         breakpoint: 768,
    //         settings: {
    //             dots: true,
    //             fade: false
    //         }
    //     }]
    // });
    // $('.product-item-detail-slider-controls').not('.slick-initialized').slick({
    //     slidesToShow: 5,
    //     slidesToScroll: 1,
    //     asNavFor: '.product-item-detail-slider-images-container',
    //     focusOnSelect: true,
    //     vertical: true,
    //     verticalSwiping: true,
    //     arrows: false,
    //     infinite: true,
    //     responsive: [{
    //         breakpoint: 1280,
    //         settings: {
    //             vertical: false,
    //             verticalSwiping: false,
    //             swipeToSlide: true,
    //             touchMove: true,
    //             swipe: true,
    //             draggable: true,
    //             cssEase: 'linear'
    //         }
    //     }]
    // });
    // $(document).on('click', '.product-item-detail-slider-controls .img-control', function (e) {
    //     e.preventDefault();
    //
    //     if (!$(this).hasClass('slick-current')) {
    //         $(this).parents('.product-item-detail-slider-controls').find('.img-control').removeClass('slick-current');
    //         $(this).addClass('slick-current');
    //     }
    // });

    /* kit */
    $('.kit-slider').not('.slick-initialized').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        adaptiveHeight: true,
        responsive: [{
            breakpoint: 1280,
            settings: {
                arrows: false,
                dots: true,
                swipeToSlide: true,
                touchMove: true,
                swipe: true,
                draggable: true,
                cssEase: 'ease'
            }
        }]
    });

    $(document).on('click', '.product-card-delivery .show-link', function (e) {
        e.preventDefault();

        if($(this).parents('.delivery-box').hasClass('opened')) {
            $(this).parents('.delivery-box').removeClass('opened');
        } else {
            $(this).parents('.delivery-box').addClass('opened');
        }
    });

    $('.delivery-title').on('click', function () {
        if (window.innerWidth < 768) {
            if ($(this).parent('.delivery-col').hasClass('active')) {
                $(this).parent('.delivery-col').removeClass('active').find('.delivery-body').slideUp(200);
            } else {
                $(this).parent('.delivery-col').addClass('active').find('.delivery-body').slideDown(200);
            }
        }
    });

    /* forms */
    $('.validate_phone').mask('+38 (999) 999 99 99');
    // $('.validate_phone').mouseover(function () {
    //     if($(this).val() == '') {
    //         $(this).addClass('has-value');
    //     }
    // });
    // $('.validate_phone').mouseout(function () {
    //     if($(this).val() == '') {
    //         $(this).removeClass('has-value');
    //     }
    // });
    $('.form-control').each(function () {
        $(this).on('blur', function () {
            if($(this).val() != '') {
                $(this).addClass('has-value');
            } else {
                $(this).removeClass('has-value');
            }
        })
    });

    // $(document).load(function () {
    //     $('.form-control').each(function () {
    //         if($(this).val() != '') {
    //             $(this).addClass('has-value');
    //         } else {
    //             $(this).removeClass('has-value');
    //         }
    //     });
    // });

    $(document).on('click', '.header-menu-dropdown .close, .callback-dropdown .close', function () {
        $(this).parents('.item-dropdown').removeClass('opened');
        $('.callback').removeClass('opened');
        $('.callback').removeClass('thx');
        // $('.bg').removeClass('active').css('z-index', '2');
    });

    $(document).mouseup(function (e){
        var div = $('.dropdown-main-container.opened , .header-menu-holder, #header.opened-menu, .search.opened, .filter-section.opened , .personal-menu-holder.opened , .personal-menu.opened-menu , .filter-section.opened');
        if (!div.is(e.target) && div.has(e.target).length === 0) {
            div.removeClass('opened');
            $('.bg').removeClass('active').css('z-index' , '3');
            $('.callback').removeClass('opened');
            $('#header').removeClass('opened-menu');
            $('.burger-menu').removeClass('opened');
            $('.header-panel').removeClass('search-opened');
            $('.personal-menu').removeClass('opened-menu');
            $('body').removeClass('side-open');          
            if($(window).width() < 1024) {
                $('body').removeClass('side-open');
                $('#menu-layout').remove();
            }
        }     
    });
    
    $(document).on('focus', '#search-input', function (e) {
        if($('.dropdown-main-container').hasClass('opened')) {
            $('.dropdown-main-container').removeClass('opened')
        }
        if($(window).width() > 1023) {
            $(this).parents('.search').addClass('opened');
            $(this).parents('.header-panel').addClass('search-opened'); 
        }
    });

    $(document).on('click', '.js-search-btn', function (e) {
        if($(window).width() < 1024) {
            $(this).parents('.search').addClass('opened');
            $(this).parents('.header-panel').addClass('search-opened');            
            if($('.burger-menu').hasClass('opened')) {
                $('.burger-menu').trigger('click');
                $('body').addClass('side-open');
                $('body').append('<div id="menu-layout"></div>'); 
            } else {
                $('body').addClass('side-open');
                $('body').append('<div id="menu-layout"></div>'); 
            }                   
        }
    });

    $(document).on('click' , '.search-back' , function(){
        if($(window).width() < 1024) {
            $(this).parents('.search').removeClass('opened');
            $(this).parents('.header-panel').removeClass('search-opened'); 
            $('body').removeClass('side-open');
            $('#menu-layout').remove(); 
        };         
    })

    $(document).on("click", ".js-dropdown", function (e) {
        e.preventDefault();
        $(this).parents(".dropdown-main-container").toggleClass("opened");
    });
    $(document).on("click", ".js-close", function (e) {
        e.preventDefault();
        if($(this).parents(".dropdown-main-container").hasClass("opened")){
            $(this).parents(".dropdown-main-container").removeClass('opened').find('.dropdown-content').removeClass("thx"); 
        }        
    });
    
    $(document).on('click', '.js-clear-input', function (e) {
        e.preventDefault();
        if($(this).siblings(".search-input-holder").find("input").val() != ''){
            $(this).siblings(".search-input-holder").find("input").val("");
            $(this).parents('.search-input').removeClass("has-val") 
        }        
    });
    $(document).on('input keyup', '.input', function (e) {
        if( $(this).val()){
            $(this).parents('.search-input').addClass("has-val")
        }else{
            $(this).parents('.search-input').removeClass("has-val")
        }      
    });

    $(document).on('click', '.dropdown-title-mob', function () {             
        $(this).parents(".mobile-menu-dropdown").removeClass("opened-city");              
    }); 
    $(document).on('click', '.js-open-city', function (e) {  
        e.preventDefault();           
        $(this).parents(".mobile-menu-dropdown").addClass("opened-city");              
    }); 

    // callback thx
    $('.callback-dropdown form').formValidation().on('submit', function (e) {
	    e.preventDefault();
	    if (!$(this).find('.input-holder').hasClass('error')) {
            $(this).parents('.callback').addClass('thx');    
            $(this).find('.input').val("").removeClass("has-value");
            $(this).find('.input-holder').removeClass("correct");
	    }
    });

    $('.review_form').formValidation().on('submit', function (e) {
	    e.preventDefault();
	    if (!$(this).find('.input-holder').hasClass('error')) {
            $(this).parents('.dropdown-content').addClass('thx');    
            $(this).find('.input').val("").removeClass("has-value");
            $(this).find('.input-holder').removeClass("correct");
	    }
    });

    $('.product-item.helping form').formValidation().on('submit', function (e) {
        e.preventDefault();
        if(!$(this).find('.input-holder').hasClass('error')) {
            var callback_form_container = $('.product-item.helping');
            callback_form_container.addClass('thx');
            $(this).find('.input').val("").removeClass("has-value");
            $(this).find('.input-holder').removeClass("correct");
            setTimeout(function () {
                callback_form_container.removeClass('thx');
            }, 5000);
        }
    });
    
    passwordView();

    $(document).on("click" , ".js-open-map" , function(){
        var gmap = $(this);
        if($(this).parents(".col").hasClass("opened")){
            $(this).parents(".col").removeClass("opened");
        } else {
            $(this).parents(".col").addClass("opened").siblings().removeClass("opened");
        }

        GoogleMap.setCenter({lat: +gmap.data('gmaps_s'), lng: +gmap.data('gmaps_n')});
        GoogleMap.setZoom(18);
        GoogleMarker.setPosition({lat: +gmap.data('gmaps_s'), lng: +gmap.data('gmaps_n')});
    });

    $(document).on('click', '[data-tab] , [data-model] , [data-price] , [data-link] ', function (e) {
        e.preventDefault();
        if($(this).attr('data-tab')) {
            $(this).addClass('selected').siblings('[data-tab]').removeClass('selected');
            $(this).parents('.technoexchange-section').find('[data-content=' + $(this).data('tab') + ']').addClass('selected').siblings('[data-content]').removeClass('selected');
            setTimeout(function() {
                $('input, select').trigger('refresh');
              }, 1)
        }
        if($(this).attr('data-model')) {
            $(this).addClass('selected').siblings('[data-model]').removeClass('selected');
            $(this).parents('.technoexchange-section').find('[data-memory=' + $(this).data('model') + ']').addClass('selected').siblings('[data-memory]').removeClass('selected');
        }
        if($(this).attr('data-price')){
            $(this).toggleClass('selected').siblings().removeClass("selected");
        }
        
        // teckhnoobmen page
        if($(this).attr('data-link')) {
            $(this).addClass('selected').siblings('[data-link]').removeClass('selected');
            $(this).parents('.accordeon_item').find('[data-conteiner=' + $(this).data('link') + ']').addClass('selected').siblings('[data-conteiner]').removeClass('selected');
        }
     });

     $(document).on('click' , '.js-share' , function(e){
         e.preventDefault();

         if($(this).find(".article-share").hasClass('active')) {
             $(this).find(".article-share").removeClass("active");
             $(".article-link").addClass("active");
        }
        else {
            $(this).find('.article-link').removeClass("active");
            $(this).find(".article-saved").addClass("active");
            setTimeout(function(){ 
                $(".article-saved").removeClass("active");
                $('.article-share').addClass('active');
            } , 3000);           
        }
     });

    $(document).on('click' , ".js-open-personal-menu , .js-close-pers-menu" , function(e){
        e.preventDefault();
        var  personalMenu =  $(this).parents(".personal-page-holder").find(".personal-menu-holder");
        if( $(personalMenu).hasClass("opened")) {
            $(personalMenu).removeClass("opened");
            $(".bg").removeClass("active");
        } else {
            $(personalMenu).addClass("opened");
            $(".bg").addClass("active");
        } 
        if($(this).hasClass("close")) {
            $(personalMenu).removeClass("opened");
            $(".bg").removeClass("active");
        }  
    });

    $(document).on("change" , 'input[type="radio"]' , function(e){
        setTimeout(function() {
            $('select').trigger('refresh');
        }, 1);
       
        var $active_conteiner = $(this).closest('.radio-title');
        let $active_data = $active_conteiner.parents().find('[data-delivery=' + $active_conteiner.data('title') + ']');
       
       
        if($(document).width() >= 768){
            $active_conteiner.addClass('active').siblings().removeClass('active');
            $active_data.addClass('active').siblings('[data-delivery]').removeClass('active');
        } else {
            $active_conteiner.addClass('active').siblings().removeClass('active');
            $active_data.slideDown().siblings('[data-delivery]').slideUp();
        }
    });

    $('.checkbox-toggle').change(function () {        
        $(this).parents(".checkbox-toggle-conteiner").find(".checkbox-toggle-content").slideToggle();    
    });

    // btn-up
    $(document).on("click" ,'.back-to-top' , function(e) {
        e.preventDefault();
        jQuery('html, body').animate({scrollTop: 0}, 500);
        return false;
    });
});

$(window).on('orientationchange', function() {
    if ($(window).width() <= 768) {
        $('.blog-list.slick-initialized').slick('unslick');
    } else {
        blogligListSliderInit();
    }
});

function blogligListSliderInit() {
    $('.blog-list').not('.slick-initialized').slick({
        centerMode: true,
        infinite: true,
        centerPadding: '15px',
        slidesToShow: 1,
        slidesToScroll: 1,
        swipeToSlide: true,
        touchMove: true,
        swipe: true,
        draggable: true,
        cssEase: 'ease',
        variableWidth: true,
        responsive: [{
            breakpoint: 500,
            settings: {
                variableWidth: false
            }
        }]
    });
}
function checkSizeAndFilterSlickDivs(){
    if($(document).width() >= 768){
        $('.top-products-slider').slick('slickFilter','.ol');
    }else {
        $('.top-products-slider').slick('slickUnfilter');
    }
}

function passwordView(){
    $(document).on("click" , ".pass_icon", function(){
        $(this).toggleClass("active_eye");
        if($(this).hasClass("active_eye")){
            $(this).siblings(".input").prop("type" , "text");
        }
        else{
            $(this).siblings(".input").prop("type" , "password");
        }
    })
}

function  accordeon () {
    if($('.accordeon_item').hasClass('active')) {
        $('.accordeon_item.active > .accordeon_content').css('display' , 'block');
    }
    $(document).on('click' , '.accordeon_head' , function(){  
        if($(this).parent().hasClass('active')){
            $(this).parent().removeClass('active');
            $(this).siblings('.accordeon_content').slideUp();
        } else {
            $(this).parent().addClass('active');
            $('.service-slider').slick('unslick');            
            serviceSlider (); 
            sliderShop ();    
        }      
        if(!$(this).siblings('.accordeon_content').is(':visible')) {
            $(this).siblings('.accordeon_content').slideDown();
        }
    });   
}

function filterBox() {
    $('.filter-box__title').on('click', function () {
        if($(this).parent().hasClass('active')) {
            $(this).parent().removeClass('active');
            $(this).next().slideUp();
        } else {
            $(this).parent().addClass('active');
            $(this).next().slideDown();
        }
    })
}

function priceSlider() {
    var rangeMinValue = 0,
        rangeMaxValue = 1000;
    $('.ui-slider-track').slider({
        range: true,
        min: rangeMinValue,
        max: rangeMaxValue,
        values: [rangeMinValue, rangeMaxValue],
        slide: function (event, ui) {
            $('.min-price').val(ui.values[0]);
            $('.max-price').val(ui.values[1]);
        }
    });

    $('.min-price').change(function () {
        var val1 = $('.min-price').val(),
            val2 = $('.max-price').val();

        if (parseInt(val1) > parseInt(val2)) {
            val1 = val2;
            $('.min-price').val(val1);
            $('.handle-min-price').html(val1);
        }
        $('.handle-min-price').html(val1);
        $('.ui-slider-track').slider('values', 0, val1);
    });

    $('.max-price').change(function () {
        var val1 = $('.min-price').val(),
            val2 = $('.max-price').val();

        if (parseInt(val2) > rangeMaxValue) {
            $('.max-price').val(rangeMaxValue);
        }
        if (val1 < 0) {
            $('.min-price').val(val1);
        }
        if (parseInt(val1) > parseInt(val2)) {
            val2 = val1;
            $('.max-price').val(val2);
            $('.handle-max-price').text(val2);
        }
        $('.handle-max-price').html(val2);
        $('.ui-slider-track').slider('values', 1, val2);
    })
}

function toggleFilter() {
    $(document).on('click', '.filter-link', function (e) {
        e.preventDefault();

        $('.filter-section').addClass('opened');
        $('.bg').addClass('active').css('z-index' , '99');
        $('body').addClass('side-open')
    });

    $(document).on('click', '.close-filter', function () {
        $('.filter-section').removeClass('opened');
        $('.bg').removeClass('active').css('z-index' , '3');
        $('body').removeClass('side-open');
    })
}
  
function openingText() {
    var text = '';

    $(document).on('click', '.opening-text', function (e) {
        e.preventDefault();

        if($(this).parent().hasClass('opened')) {
            $(this).parent().removeClass('opened');
        } else {
            $(this).parent().addClass('opened');
        }
    })
}

function burgerMenu() {
    var indexClick = 0,
        menuTrigger = '.burger-menu',
        wrapper = $('body'),
        menuLayout = '#menu-layout';

    var indexWindowChange = 0;

    if (window.innerWidth < 1024) {
        indexWindowChange = 0;
    } else {
        indexWindowChange = 1;
    }

    $(document).on('click', menuTrigger, function() {

        // if ($(this).parents('#header').hasClass('opened-menu')) {
        //     $(this).removeClass('opened').parents('#header').removeClass('opened-menu');
        //     $('.bg').removeClass('active');
        // } else {
        //     $(this).addClass('opened').parents('#header').addClass('opened-menu').removeClass('closed-menu');
        //     $('.bg').addClass('active');
        // }

        if (window.innerWidth < 1024 && indexClick == 0) {
            $(this).addClass('opened').parents('#header').addClass('opened-menu').removeClass('closed-menu').find('.input').val('');
            wrapper.attr('data-pos', $(window).scrollTop());
            wrapper.addClass('side-open');
            wrapper.append('<div id="menu-layout"></div>');
            indexClick = 1;

        } else if (window.innerWidth < 1024 && indexClick == 1) {
            $(this).removeClass('opened').parents('#header').removeClass('opened-menu');
            $(menuLayout).removeClass('active');
            wrapper.removeClass('side-open');
            $('.main').scrollTop( wrapper.attr( 'data-pos' ));
            $(menuLayout).remove();
            indexClick = 0;
        }
    });

    $(document).on('click', menuLayout, function () {
        if(window.innerWidth < 1024 && indexClick == 1) {
            $(menuTrigger).removeClass('opened').parents('#header').removeClass('opened-menu');
            $(menuLayout).remove();
            wrapper.removeClass('side-open');
            indexClick = 0;
        }
    });

    $(window).resize(function () {
        if (window.innerWidth < 1024) {
            if (indexWindowChange == 1) {
                indexWindowChange = 0;
            }
        } else if (window.innerWidth >= 1024) {
            if (indexWindowChange == 0) {
                indexWindowChange = 1;
                $(menuTrigger).removeClass('opened').parents('#header').removeClass('opened-menu');
                $(menuLayout).remove();
                wrapper.removeClass('side-open');
                indexClick = 0;
            }
        }
    });
}

function mobileMenu() {
    $(document).on('click', '.mobile_menu .submenu_section a', function () {
        $(this).siblings('.submenu').addClass('active');
    });
    $(document).on('click', '.mobile_menu .back', function() {
        $(this).closest('.submenu').removeClass('active');
    });
}

$(function() {
    $(".js-autocomplete").autocomplete({
      search: function(event, ui) {
        setTimeout(() => {
          let w = $(this).autocomplete("widget").find("div"),
            re = new RegExp("("+this.value+")", "i");
          w.html((i, html) =>

            html.replace(re, "<span class='active-letter'>$1</span>")
          );
        },100);
      },
      open: function (result) {
            if (navigator.userAgent.match(/(iPod|iPhone|iPad)/)) {
                $('.ui-autocomplete').off('menufocus hover mouseover');
            }
        },
      source: [
        "Полтава",
        "Полонное",
        "Полтава1",
        "Полонное1",
        "Полтава2",
        "Полонное2",
        "Полтава3",
        "Полонное3",
        "Луцк",
        "Львов",
        "Киев",
        "Запорожье",
        "Кременчуг",
        "Конев",
        "Харьков",
        "Одесса",
        "Днепр",
        "Черкассы"
      ]
    });
});

function hoverDropdownMenu() {
    /* dropdown menu */
    $('.menu-section .menu > li').hover(function () {
        if($(this).children('.menu-dropdown').length > 0 && ($(window).innerWidth() >= 1023)) {
            $(this).stop().addClass('hover');
            $('.bg').stop().addClass('active');
            $('#header').stop().addClass('opened-dropdown');
        }
    }, function () {
        $(this).stop().removeClass('hover');
        $('.bg').stop().removeClass('active');
        $('#header').stop().removeClass('opened-dropdown');
    });
}

function initMap() { 
    var image = 'img/map-marker.svg';
    if(document.querySelector('.map')!==null){
        window.GoogleMap = new google.maps.Map(document.querySelector('.map'), {disableDefaultUI: true});
        window.GoogleMarker = new google.maps.Marker({map: GoogleMap, icon: image });
    }

    //for shops page many maps
    var maps = [];
    var markers = [];
    var $maps = $('.shop_map');
    $.each($maps, function (i, value) {        
        var uluru = { lat: parseFloat($(value).attr('lat')), lng: parseFloat($(value).attr('lng')) };
        var mapDivId = $(value).attr('id');
        maps[mapDivId] = new google.maps.Map(document.getElementById(mapDivId), {
            zoom: 17,
            center: uluru,
            disableDefaultUI: true
        });
        markers[mapDivId] = new google.maps.Marker({
            position: uluru,
            icon: image,
            map: maps[mapDivId]
        });
    });

    //shops map 
    if(document.querySelector('.main-shop-map')!==null){
        var kh = { lat: 49.994507, lng: 36.1457431 },
            kv = { lat: 50.4019514, lng: 30.3926093 },
            coords = [
                { title: "Харьков, ул. Героев труда, 9", lat: 50.0272784, lng: 36.3286569 }, 
                { title: "Харьков, пл. Конституции, 9", lat: 49.990614, lng: 36.2297137 }, 
                { title: "Харьков, ул. Рымарская, 6", lat: 49.9939296, lng: 36.2287064 }, 
                { title: "Харьков, ул. ул. Героев Труда, 7", lat: 50.0290381, lng: 36.3258379 }, 
                { title: "Харьков, Окружная дорога, 4а", lat: 50.0644704, lng: 36.1908733 }, 
                { title: "Киев, ул. Ак. Павлова, 44-Б", lat: 49.9903821, lng: 36.2882175 }];    

            if (document.querySelector('#main-shop-map') !== null) {
                var map = new google.maps.Map(document.querySelector('#main-shop-map'), {
                    center: kh,
                    scrollwheel: false,
                    zoom: 11,
                    disableDefaultUI: true
                });

                Array.prototype.map.call(coords, function (coord) {
                    var marker = new google.maps.Marker({
                    position: { lat: coord.lat, lng: coord.lng },
                    map: map,
                    icon: image,
                    title: coord.title
                    });
                });
            }
    }
}

function toggleMap (){
    $(document).on("click" , ".js-toggle-map" , function(){
        $(this).parents(".conteiner-map-holder").toggleClass('map-opened').find(".col_map").slideToggle();
    });
}

//form on client page and popup send resume 
function writeUsForm (){
    $('.js-write_form').formValidation().on('submit', function (e) {
        e.preventDefault();      
        if (!$(this).find('.input-holder').hasClass('error')) {
            $(this).parent().addClass("thx");    
        }
    });
}

function trackPrice (){
    $('#track-price_form').formValidation().on('submit', function (e) {
        e.preventDefault();      
        if (!$(this).find('.input-holder').hasClass('error')) {
            $(this).parent().addClass("thx"); 
            $(".price-block-holder .js-checkbox").addClass("active-checbox");
        }
    });
}

function formThx (){
    $('.form-with-thx').formValidation().on('submit', function (e) {
        e.preventDefault();      
        if (!$(this).find('.input-holder').hasClass('error')) {
            $(this).parents('.form__modal').addClass("thx");            
        }
    });
}


function sendComment(){
    $('#review_form').formValidation().on('submit', function (e) {
        e.preventDefault();      
        if (!$(this).find('.input-holder').hasClass('error')) {
            $(this).parent().addClass("thx");
        }
    });
}


function addNewAddress(){
    $(document).on("click" , ".js-addr-add" , function(e){
        e.preventDefault();
        if( $(this).parents(".addr-conteiner").hasClass("empty-address")) {
            $(this).parents(".addr-conteiner").removeClass("empty-address");
            $(this).parents(".addr-add").addClass("active");
        }  
    });
}

function serviceSlider (){
    $('.service-slider').not('.slick-initialized').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        responsive: [{
                breakpoint: 1366,
                settings: {                    
                    slidesToShow: 2,
                    arrows: false, 
                    dots: true,
                    swipeToSlide: true,
                    touchMove: true,
                    swipe: true,
                    draggable: true,
                    cssEase: 'linear'
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                    dots: true,
                    swipeToSlide: true,
                    touchMove: true,
                    swipe: true,
                    draggable: true,
                    cssEase: 'ease'
                }
        }]
    });   

}

function initCountdown() {
    $('.countdown').each(function () {
        $(this).countdown($(this).data('date'), function (event) {
            $(this).html(event.strftime(''
                + '<div class="time days flip"><span class="count">%D</span></div>'
                + '<div class="time hours flip"><span class="count">%H</span></div>'
                + '<div class="time minutes flip"><span class="count">%M</span></div>'
                + '<div class="time seconds flip"><span class="count">%S</span></div>'
            ));
        });
    });
}

// promocode show
function promocodeShow () {
    $(document).on("click", '.js-promocode-link' , function(e){
        e.preventDefault();
        $(this).parents('.promocode-holder').addClass("opened");       
    });
    $(document).on("click", '.js-close-code' , function(e){
        e.preventDefault();
        $(this).parents('.promocode-holder').removeClass("opened");       
    });
}

//tekhnobmen
function sliderShop (){
    $('.active .js-one-item-shop').not('.slick-initialized').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        infinite: false
    });
}

/* modals */
function initModal() {
    var main_modal = $('#modal-main');
    var windowW =  window.innerWidth;
    var clientW =  document.documentElement.clientWidth ;
    var scrollW = windowW - clientW;
    
	// при закриванні модалі
	main_modal.on('hidden.bs.modal', function () {
        $("body").css("padding-right" , "0");
        $("#header.fixed").css("padding-right" , "0");  
        if($("#modal-main").hasClass("center-modal")) {
            $('#modal-main').removeClass("center-modal");
            if($('body').hasClass('not-fixed')) {
                $('body').removeClass('not-fixed')
            }
        }  
        if($("#modal-main").hasClass("product-modal")) {
            $('#modal-main').removeClass("product-modal")
        } 
    });

	// при показуванні модалі
	main_modal.on('show.bs.modal', function () {
        $("body").css("padding-right" , scrollW+"px"); 
        $("#header.fixed").css("padding-right" , scrollW+"px");
    });

	// клік по підкладці модалі
	$(document).on('click', '.modal-backdrop', function () {});

	$(document).on('click', '[data-openmodal]', function(e) {
        e.preventDefault();

		var link = $(this).data('openmodal');
		main_modal.find('.modal-dialog').load(link, function() {
            main_modal.modal('show');            
            $('.select').styler();
			$('.form_validate').formValidation();
            $('.validate_phone').mask('+38 (999) 999 99 99');
            $('.form_validate').formValidation();
            $('.customScrollbar-modal').mCustomScrollbar({theme: 'light-3'}); 
            if($(window).width() < 768) {$(".customScrollbar-modal").mCustomScrollbar("destroy");}               
            serviceSlider (); //service slider popup basket
            writeUsForm (); //for popup send resume            
            sendComment(); //for send review
            initMap(); 
            trackPrice ();  
            formThx();                     

            $('.js-input').each(function () {
                $(this).on('blur', function () {
             		if($(this).val() != '') {$(this).addClass('has-value');} 
             		else {$(this).removeClass('has-value');}
                    })                    
            });
            $(".upload-btn-wrapper input[type=file]").change(function(){
                var filename = $(this).val().replace(/.*\\/, "");
                $("#file-name").html(filename);																				
            }); 
            $('#login_form').formValidation().on('submit', function (e) {
                e.preventDefault();
                if (!$(this).find('.input-holder').hasClass('error')) {
                        var form_serialized = $(this).serialize();                       
                        $(this).parents('.first-step').addClass('close-step').siblings('.second-step').addClass("open-step");                        		       
                }
            });
            function pass_success(form_serialized , val_email) {
                $.ajax({
                    url: "",
                    beforeSend: function () {
                        $(".email").text(val_email);
                    },
                    data: form_serialized,
                    success: function (data) {
                        $('.forgot-pass-form ').addClass('thx-info');                       
                    }
                });
            }
            $('#forgot-pass_form').formValidation().on('submit', function (e) {
                e.preventDefault();
                if (!$(this).find('.input-holder').hasClass('error')) {
                    var form_serialized = $(this).serialize();
                    var val_email = $(this).find('.email_f').val()
                    pass_success(form_serialized , val_email);
                }
            });
        });

        if($(this).hasClass('js-center-modal')) {
            $('#modal-main').addClass('center-modal');
            if($(this).hasClass('visual-item')) {
                $('body').addClass('not-fixed');
            }
        } 

        if($('body').hasClass('side-open') && $(window).width() < 1024){
            setTimeout (function(){
                $( ".burger-menu" ).trigger( "click" );               
            }, 200);            
        } 
        
        // if($(this).hasClass('js-product-modal')) {
        //     if($(window).width() > 768) {
        //         $('#modal-main').addClass('product-modal');
        //     }         
        // }

        $(window).resize(function() {
            if($(window).width() < 768 && $('#modal-main').hasClass('product-modal')){
                $('.center-modal').find('.close-modal').trigger('click');     
            }
        });  
        
        if($(this).parents('.dropdown-main-container').hasClass('opened')) {
            $(this).parents('.dropdown-main-container').removeClass('opened')
        }
	})
}


function productListSliderSection() {
    productListSliderElement.not('.slick-initialized').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [{
            breakpoint: 1280,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 5
            }
        },{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3.5,
                slidesToScroll: 1,
                arrows: false,
                infinite: false,
                lazyLoad: 'ondemand'
            }
        },{
            breakpoint: 768,
            settings: {
                slidesToShow: 2.2,
                slidesToScroll: 1,
                arrows: false,
                infinite: false,
                lazyLoad: 'ondemand',
                swipeToSlide: true,
                touchMove: true,
                swipe: true,
                draggable: true,
                cssEase: 'ease'
            }
        }]
    });
}
function productListSlider() {
    $('.product-list-slider').not('.slick-initialized').slick({
        slidesToShow: 8,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 1900,
            settings: {
                slidesToShow: 6
            }
        }, {
            breakpoint: 1366,
            settings: {
                slidesToShow: 5
            }
        },{
            breakpoint: 1024,
            settings: {
                slidesToShow: 4
            }
        },{
            breakpoint: 768,
            settings: {
                slidesToShow: 2.3,
                slidesToScroll: 2,
                arrows: false,
                infinite: false,
                swipeToSlide: true,
                touchMove: true,
                swipe: true,
                draggable: true,
                cssEase: 'ease'
            }
        }]
    });
}

function staffSlider() {
    staffSliderEl.not('.slick-initialized').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: true,
        swipeToSlide: true,
        touchMove: true,
        swipe: true,
        draggable: true,
        cssEase: 'ease'
    });
}

/* fixed menu */
function stickyHeader() {
    var $menu = $('#header'),
        $menuHeight = $menu.outerHeight(),
        $mainContent = $(".main");    

    $(window).scroll(function() {
        if (!$('body').hasClass('product_page')) {

            if ($(this).scrollTop() > $menuHeight && $menu.hasClass('default')) {
                $menu.removeClass('default')
                    .addClass('fixed');                    
                $('body').addClass('fixed-menu');
                // if($(window).width() > 1023 ) {
                //     $mainContent.css("padding-top" , $menuHeight);
                // }
            } else if ($(this).scrollTop() <= $menuHeight && $menu.hasClass('fixed')) {
                $menu.removeClass('fixed')
                    .addClass('default');
                $('body').removeClass('fixed-menu');
                // if($(window).width() > 1023 ) {
                //     $mainContent.css("padding-top" , "0");
                // }
            }
        } else if ($('body').hasClass('product_page')) {

        }
        
    });
}

function stickyMenuActive() {
    $('.about-product-titles-holder a').bind('click', function(e) {
        e.preventDefault();

        $(document).off("scroll");
        $(this).addClass('active').siblings('a.about-product-title').removeClass('active');

        var target = $(this).attr('href');
        $('html,body').animate({
            scrollTop: $(target).offset().top - 65
        }, 600);
    });
}

$(window).scroll(function () {

    // var scrollDistance = $(window).scrollTop();
    //
    // $('.section-item').each(function (i) {
    //     if($(this).position().top <= scrollDistance && $(this).position().top + $(this).height() > scrollDistance) {
    //         $('.about-product-titles-holder a.active').removeClass('active');
    //         $('.about-product-titles-holder a').eq(i).addClass('active');
    //     }
    // });

    // btn-up
    if ($(this).scrollTop() > 220) {
        $('.back-to-top').fadeIn(500);
    } else {
        $('.back-to-top').fadeOut(500);
    }
});

function openingAnswers() {
    $(document).on('click', '.testimonial-block .opening-more', function (e) {
        e.preventDefault();
        if($(this).parents('.testimonial-block').hasClass('opened')) {
            $(this).parents('.testimonial-block').removeClass('opened');
            $(this).parents('.testimonial-block').find('.answer-text-holder').slideUp(500);
        } else {
            $(this).parents('.testimonial-block').addClass('opened');
            $(this).parents('.testimonial-block').find('.answer-text-holder').slideDown(500);
        }
    })
}

function initStickyProduct() {
    var menuPanel = $('.about-product-titles').outerHeight();
    var topPos = $('.about-product-section').offset().top - menuPanel;

    $(window).scroll(function() {
        var $top = $(document).scrollTop(),
            pip = $('.viewed-products-section').offset().top,
            height = $('.product-scroll-item').outerHeight();

        if ($top > topPos && $top < pip - height - menuPanel) {
            $('.product-scroll-item').addClass('sticky').removeAttr("style");
        } else if ($top > pip - height - menuPanel) {
            $('.product-scroll-item').removeClass('sticky').css({'position':'absolute','bottom':'0'});
        } else {
            $('.product-scroll-item').removeClass('sticky');
        }

        if ($top > $('.about-product-section').offset().top && $top < pip - 200) {
            $('.about-product-titles').closest('.description-column').addClass('fixed-menu');
        } else {
            $('.about-product-titles').closest('.description-column').removeClass('fixed-menu');
        }
    });
}

function stickyProductPanel() {
    var panelBar = $('.product-info-panel'),
        //st = $('.product-card-info-section').offset().top,
        //lastScrollTop = 0,
        scrollPosition = 0,
        st = 0;

    $(window).scroll(function() {
        scrollPosition = $(this).scrollTop();
        st = $('.product-card-info-section').offset().top;

        // console.log(scrollPosition + '+');
        // if (scrollPosition > st && scrollPosition < lastScrollTop) {
        if (scrollPosition > st) {
            //panelBar.fadeIn(0);
            panelBar.css({'transform':'translate(0, 0)'});
        } else {
            //panelBar.fadeOut(0);
            panelBar.css({'transform':'translate(0, 115%)','transition':'transform .2s ease-in-out'});
        }

        // lastScrollTop = scrollPosition;
    });
}

function accordionAboutProduct() {
    var firstEl = $('.section-item-title').first();
    firstEl.parent().addClass('active');
    firstEl.next().slideDown();

    $(document).on('click', '.section-item-title', function () {
        var parent = $(this).parent();
        if(parent.hasClass('active') && $(this).next().is(':visible')) {
            parent.removeClass('active');
            $(this).next().slideUp();
        } else {
            parent.find(productListSliderElement).length > 0 && productListSliderElement.slick('refresh');
            // productListSliderElement.length > 0 && productListSliderSection();
            parent.find(staffSliderEl).length > 0 && staffSliderEl.slick('refresh');
            // staffSliderEl.length > 0 && staffSlider();
            parent.addClass('active');
            $(this).next().slideDown(100);
        }
    });
}

function setHeight(x) {
    var maxHeight = 0,
        dataRow = $('[data-row=' + x + ']');
    dataRow.each(function(){
        if ( $(this).height() > maxHeight ){
            maxHeight = $(this).height();
        } 
    });
    dataRow.height(maxHeight);
}

function countTableRow(){
    let rowCount = $(".compare-info > .compare-table__row").length;        
    for(let x = 0; x < rowCount; x++){
        setHeight(x);
    }
}

function showMoreProd(){
    $(document).on("click" , ".js-show-more" , function(){
        if($(this).parents(".review-product").hasClass("show-more")) {
            $(this).parents(".review-product").removeClass("show-more");
            $(this).parents(".review-product").find(".hide-item").slideUp();
        } else {
            $(this).parents(".review-product").addClass("show-more");
            $(this).parents(".review-product").find(".hide-item").slideDown();        
        }
    })
}
// addComment 
function addComment(){    
    $(document).on("click" , ".js-type-comment" , function(e){
        e.preventDefault();
        if($(this).closest('.review-type').hasClass("opened")) {
            $(this).closest('.review-type').removeClass("opened")
            $(this).closest('.review-type').find(".field").slideUp();
        } else {
            $(this).closest('.review-type').addClass("opened")
            $(this).closest('.review-type').find(".field").slideDown();
        }
    })
}

const showCommentForm = function(){
    $(document).on("click" , ".js-show-comment-form" , function(){
        $(this).hide();
        $(".comment-form-holder").slideDown();
    });
};

$(document).on('click' , '.js-page-name', function(){
    if($(this).parents('.personal-menu').hasClass('opened-menu')) {
        $(this).parents('.personal-menu').removeClass('opened-menu')
    } else {
        $(this).parents('.personal-menu').addClass('opened-menu')
    }    
});


function formSuccess(){
    $('.form-with-success').formValidation().on('submit', function (e) {
        e.preventDefault();      
        if (!$(this).find('.input-holder').hasClass('error')) {
            $(this).parents('.form-with-success-holder').addClass('successful');            
        }
    });
}

function productView() {
    
    $(document).on('click' , '[data-preview]' , function(e){
        $(this).addClass('active-preview').siblings().removeClass('active-preview');
        $(this).parents('.product-item-detail-slider-container').find('[data-img=' + $(this).data('preview') + ']').addClass('active-prod-img').siblings().removeClass('active-prod-img');
        e.preventDefault();
    });
}
function scrollToVideo() {
    $(document).on('click' , '.js-scroll-video' , function(e) {
        e.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top,
            headerHeight = $('#header').outerHeight() + 10;
        $('#section-video').addClass('active').find('.section-item-body').show();
        $('body,html').animate({scrollTop: top - headerHeight}, 1500);    
    })
}

function compareFixedHead() {     
        var colW = $('.compare-table__col').outerWidth(),
            countCol = 0,
            scrollToTable = $('.product-description').offset().top - 70,
            scrollToLastRow = $('.compare-table__row-bottom-info').offset().top,
            rowFixedH = $('.compare-table__row-fixed').outerHeight();

        $(".compare-table__row-fixed  .compare-table__col").each(function () {
            if ($(this).is(':visible')) {
                countCol++;
            }
        });

        $(window).scroll(function () {
            if ($(this).scrollTop() > scrollToTable) {
                $('.compare-table__row-fixed').addClass('is-fixed');
                $('.compare-info').css('padding-top', rowFixedH + 'px');
                $('.compare-table__row-fixed').css({
                    'transform': 'translateX(' + - $('.compare-info').scrollLeft() + 'px' + ')',
                    'width': countCol * colW + 'px'
                });
                if ($(this).scrollTop() > scrollToLastRow) {                    
                    $('.compare-table__row-fixed').addClass('hide')
                } else {
                    $('.compare-table__row-fixed').removeClass('hide')
                }
            } else {
                $('.compare-table__row-fixed').removeClass('is-fixed');
                $('.compare-info').css('padding-top', '0');
                $('.compare-table__row-fixed').css({
                    'transform': 'translateX(0)',
                    'width': '100%'
                })
            }
        });

        $('.compare-info').scroll(function () {
            if ($('.compare-table__row-fixed').hasClass('is-fixed')) {
                $('.compare-table__row-fixed').css({
                    'transform': 'translateX(' + - $('.compare-info').scrollLeft() + 'px' + ')',
                    'width': countCol * colW + 'px'
                });
            };                        
        });
}

function scrollToTestimonials(){
    $(document).on('click' , '.js-scroll-totestomonials' , function(e){
        e.preventDefault();           
        if ($(window).width() > 1023) {
            $('.js-totestimonials-link').trigger('click'); 
        } else {
            var target = $(this).attr('data-href');    
            if(!$('#section-testimonials').hasClass('active')) {
                $('#section-testimonials .section-item-title').trigger('click');
            }       
            $('html,body').animate({
                scrollTop: $(target).offset().top - 65
            }, 600);                            
        }
    })
}