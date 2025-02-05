$(function() {
    $('#database_anchor').removeClass('current_anchor');

    $('#collapse_menu_btn').on('click', function() {
        $('.side_inner_container').toggleClass('expand');
        $('#content').toggleClass('collapse');
    });
    
    $.ajax({
        url: '/username',
        method: 'GET',
        success: function(data) {
            $('#logout_anchor .side_anchor_text').text('Hi, ' + data['username']);
            if (data['result']) {
                $('#admin_page_anchor').toggleClass('disabled');
            }
        },
        error: function(data) {
            alert(data.responseText);
        }
    })
});