function openPopup(clickShowBtn, popupShow) {
    $(clickShowBtn).on('click',function(){
        $(popupShow).bPopup({
            speed: 450,
            transition: 'slideDown',
            zIndex:99999,
            onOpen: function() { 
                $(popupShow).css('visibility', 'visible'); 
            },
            onClose: function() { 
                $(popupShow).css('visibility', 'hidden'); 
            }
        });
    });
}
function closePopup(clickCloseBtn, popupClose) {
    $(clickCloseBtn).on('click' ,function() {
        $(popupClose).css('visibility', 'hidden');
        $(popupClose).bPopup().close();
    })
}
function isEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
}
function isPhone(phone) {
    var regex = /^\+?\d{1,3}?[- .]?\(?(?:\d{2,3})\)?[- .]?\d\d\d[- .]?\d\d\d\d$/;
    return regex.test(phone);
}
jQuery(document).ready(function ($) {
	if (typeof $.datetimepicker !== "undefined") {
        $.datetimepicker.setLocale('vi');
        $('.datepicker').datetimepicker({
            timepicker:false,
            format:'Y-m-d'
        });
        $('.datetimepicker').datetimepicker({
            format:'Y-m-d H:i:s',
            defaultTime:'00:00:00',
            formatTime:'H:i:s'
        });
    }
})
openPopup('.filter-content','#filter-content');
$('.popup-close').on('click' ,function() {
    $('#filter-content').css('visibility', 'hidden');
    $('#filter-content').bPopup().close();
});
//show - hidden sitebar left
$('body').on('click','*[data-toggle_sitebar]',function(e){
    var check = $(this).attr('data-toggle_sitebar');
    if(check == 0) {
        $('.left-col').addClass('left-col-hidden');
        $('.right-col').addClass('right-col-full');
        $(this).attr('data-toggle_sitebar',1);
    }else {
        $('.left-col').removeClass('left-col-hidden');
        $('.right-col').removeClass('right-col-full');
        $(this).attr('data-toggle_sitebar',0);
    }
});
//Show - hidden menu mobile
$('body').on('click','*[data-menu_m]',function(e){
    $('.nav-menu-m').addClass('active');
});
$('body').on('click','*[data-close_menu_m]',function(e){
    $('.nav-menu-m').removeClass('active');
});