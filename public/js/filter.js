$(document).ready(function() 
    {
        console.log("in ready function")
        $("#myBtnContainer").change(function () {
        var firstDropVal = $('#myBtnContainer option:selected').val();
        filterSelection(firstDropVal);
        });
        function filterSelection(eventType)
        {
            console.log(eventType);
            if (eventType == "Food"){
                $("#foodEvents").show()
                $("#studyEvents").hide()
                $("#showEvents").hide()
                $("#speakerEvents").hide()

            }
            else if (eventType == "Study"){
                $("#foodEvents").hide()
                $("#studyEvents").show()
                $("#showEvents").hide()
                $("#speakerEvents").hide()
            }
            else if (eventType == "Show"){
                $("#foodEvents").hide()
                $("#studyEvents").hide()
                $("#showEvents").show()
                $("#speakerEvents").hide()
            }
            else if (eventType == "Guest Speaker"){
                $("#foodEvents").hide()
                $("#studyEvents").hide()
                $("#showEvents").hide()
                $("#speakerEvents").show()
            }
            else if (eventType == "Display All"){
                $("#foodEvents").show()
                $("#studyEvents").show()
                $("#showEvents").show()
                $("#speakerEvents").show()
            }
        }
    });