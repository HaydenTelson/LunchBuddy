$(document).ready(function() {
    $('.showEventBtn').click(showHiddenEventInfo);
})

function showHiddenEventInfo(e)
{
    var eventId = $(this).closest('.container').attr('id');
    $('#' + eventId + ' #hiddenEventInfo').toggle();
}