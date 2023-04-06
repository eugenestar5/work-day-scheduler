

// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(document).ready(function () {

    //Storing hourly element ID's into variables
    var h9 = $("#hour-9");
    var h10 = $("#hour-10");
    var h11 = $("#hour-11");
    var h12 = $("#hour-12");
    var h13 = $("#hour-13");
    var h14 = $("#hour-14");
    var h15 = $("#hour-15");
    var h16 = $("#hour-16");
    var h17 = $("#hour-17");

    //Declaring dayjs variables
    var hour = 0;
    var currentHour = dayjs().get('hour')



    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    
    // Declaring event variables for each hour
    var saveButtonH9 = h9.children(2);
    var saveButtonH10 = h10.children(2);
    var saveButtonH11 = h11.children(2);
    var saveButtonH12 = h12.children(2);
    var saveButtonH13 = h13.children(2);
    var saveButtonH14 = h14.children(2);
    var saveButtonH15 = h15.children(2);
    var saveButtonH16 = h16.children(2);
    var saveButtonH17 = h17.children(2);

    
    //creating eventlistener for each hourly save button
    //hour 9 event
    saveButtonH9.on('click', function (event){
        event.preventDefault();

            var textAreaInput9='';
            textAreaInput9 = $.trim($("#h9").val());
            
            var calendarData9={
                userInput9: textAreaInput9
            };

            localStorage.setItem("calendarData9", JSON.stringify(calendarData9));
    })

    //hour 10 event
    saveButtonH10.on('click', function (event){
        event.preventDefault();

            var textAreaInput10='';
            textAreaInput10 = $.trim($("#h10").val());
            
            var calendarData10={
                userInput10: textAreaInput10
            };

            localStorage.setItem("calendarData10", JSON.stringify(calendarData10));
    })

    //hour 11 event
    saveButtonH11.on('click', function (event){
        event.preventDefault();

            var textAreaInput11='';
            textAreaInput11 = $.trim($("#h11").val());
            
            var calendarData11={
                userInput11: textAreaInput11
            };

            localStorage.setItem("calendarData11", JSON.stringify(calendarData11));
    })

    //hour 12 event
    saveButtonH12.on('click', function (event){
        event.preventDefault();

            var textAreaInput12='';
            textAreaInput12 = $.trim($("#h12").val());
            
            var calendarData12={
                userInput12: textAreaInput12
            };

            localStorage.setItem("calendarData12", JSON.stringify(calendarData12));
    })

    //hour 13 event
    saveButtonH13.on('click', function (event){
        event.preventDefault();

            var textAreaInput13='';
            textAreaInput13 = $.trim($("#h13").val());
            
            var calendarData13={
                userInput13: textAreaInput13
            };

            localStorage.setItem("calendarData13", JSON.stringify(calendarData13));
    })

    //hour 14 event
    saveButtonH14.on('click', function (event){
        event.preventDefault();

            var textAreaInput14='';
            textAreaInput14 = $.trim($("#h14").val());
            
            var calendarData14={
                userInput14: textAreaInput14
            };

            localStorage.setItem("calendarData14", JSON.stringify(calendarData14));
    })

    //hour 15 event
    saveButtonH15.on('click', function (event){
        event.preventDefault();

            var textAreaInput15='';
            textAreaInput15 = $.trim($("#h15").val());
            
            var calendarData15={
                userInput15: textAreaInput15
            };

            localStorage.setItem("calendarData15", JSON.stringify(calendarData15));
    })

    //hour 16 event
    saveButtonH16.on('click', function (event){
        event.preventDefault();

            var textAreaInput16='';
            textAreaInput16 = $.trim($("#h16").val());
            
            var calendarData16={
                userInput16: textAreaInput16
            };

            localStorage.setItem("calendarData16", JSON.stringify(calendarData16));
    })

    //hour 17 event
    saveButtonH17.on('click', function (event){
        event.preventDefault();

            var textAreaInput17='';
            textAreaInput17 = $.trim($("#h17").val());
            
            var calendarData17={
                userInput17: textAreaInput17
            };

            localStorage.setItem("calendarData17", JSON.stringify(calendarData17));
    })


    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    
        if(h9){
            hour = 9;
            if(currentHour > hour){
                h9.addClass('past');
                h9.children(1).attr("disabled",true)
            } else if (currentHour < hour){
                h9.addClass('future');
            } else {
                h9.addClass('present');
            }
        }
        
        if(h10){
            hour = 10;
            if(currentHour > hour){
                h10.addClass('past');
                h10.children(1).attr("disabled",true)
            } else if (currentHour < hour){
                h10.addClass('future');
            } else {
                h10.addClass('present');
            }
        }

        if(h11){
            hour = 11;
            if(currentHour > hour){
                h11.addClass('past');
                h11.children(1).attr("disabled",true)
            } else if (currentHour < hour){
                h11.addClass('future');
            } else {
                h11.addClass('present');
            }
        }

        if(h12){
            hour = 12;
            if(currentHour > hour){
                h12.addClass('past');
                h12.children(1).attr("disabled",true)
            } else if (currentHour < hour){
                h12.addClass('future');
            } else {
                h12.addClass('present');
            }
        }

        if(h13){
            hour = 13;
            if(currentHour > hour){
                h13.addClass('past');
                h13.children(1).attr("disabled",true)
            } else if (currentHour < hour){
                h13.addClass('future');
            } else {
                h13.addClass('present');
            }
        }

        if(h14){
            hour = 14;
            if(currentHour > hour){
                h14.addClass('past');
                h14.children(1).attr("disabled",true)
            } else if (currentHour < hour){
                h14.addClass('future');
            } else {
                h14.addClass('present');
            }
        }

        if(h15){
            hour = 15;
            if(currentHour > hour){
                h15.addClass('past');
                h15.children(1).attr("disabled",true)
            } else if (currentHour < hour){
                h15.addClass('future');
            } else {
                h15.addClass('present');
            }
        }

        if(h16){
            hour = 16;
            if(currentHour > hour){
                h16.addClass('past');
                h16.children(1).attr("disabled",true)
            } else if (currentHour < hour){
                h16.addClass('future');
            } else {
                h16.addClass('present');
            }
        }

        if(h17){
            hour = 17;
            h17.addClass('mb-3');
            if(currentHour > hour){
                h17.addClass('past');
                h17.children(1).attr("disabled",true)
            } else if (currentHour < hour){
                h17.addClass('future');
            } else {
                h17.addClass('present');
            }
        }

  // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    
    //storing user input in the textarea field
    //hour 9
    if(h9){
        var getCalendarData9 = JSON.parse(localStorage.getItem("calendarData9")) || [];
        var textAreaEL9 = $("#h9");

        textAreaEL9.attr("value", textAreaEL9.text(getCalendarData9.userInput9));
     
    }

    //hour 10
    if(h10){
        var getCalendarData10 = JSON.parse(localStorage.getItem("calendarData10")) || [];
        var textAreaEL10 = $("#h10");

        textAreaEL10.attr("value", textAreaEL10.text(getCalendarData10.userInput10));
        
    }

    //hour 11
    if(h11){
        var getCalendarData11 = JSON.parse(localStorage.getItem("calendarData11")) || [];
        var textAreaEL11 = $("#h11");

        textAreaEL11.attr("value", textAreaEL11.text(getCalendarData11.userInput11));
    
    }

    //hour 12
     if(h12){
         var getCalendarData12 = JSON.parse(localStorage.getItem("calendarData12")) || [];
         var textAreaEL12 = $("#h12");

         textAreaEL12.attr("value", textAreaEL12.text(getCalendarData12.userInput12)) || [];

     }

     //hour 13
     if(h13){
        var getCalendarData13 = JSON.parse(localStorage.getItem("calendarData13")) || [];
        var textAreaEL13 = $("#h13");

        textAreaEL13.attr("value", textAreaEL13.text(getCalendarData13.userInput13));

    }

    //hour 14
    if(h14){
        var getCalendarData14 = JSON.parse(localStorage.getItem("calendarData14")) || [];
        var textAreaEL14 = $("#h14");

        textAreaEL14.attr("value", textAreaEL14.text(getCalendarData14.userInput14));
        
    }

    //hour 15
    if(h15){
        var getCalendarData15 = JSON.parse(localStorage.getItem("calendarData15")) || [];
        var textAreaEL15 = $("#h15");

        textAreaEL15.attr("value", textAreaEL15.text(getCalendarData15.userInput15));
    
    }

    //hour 16
    if(h16){
        var getCalendarData16 = JSON.parse(localStorage.getItem("calendarData16")) || [];
        var textAreaEL16 = $("#h16");

        textAreaEL16.attr("value", textAreaEL16.text(getCalendarData16.userInput16));
    
    }

    //hour 17
    if(h17){
        var getCalendarData17 = JSON.parse(localStorage.getItem("calendarData17")) || [];
        var textAreaEL17 = $("#h17");

        textAreaEL17.attr("value", textAreaEL17.text(getCalendarData17.userInput17));

    }

    // Reseting user input and local storage 
    var resetButton = $("#resetButton");

   resetButton.on("click", function(event){
        event.preventDefault();

        window.localStorage.removeItem("calendarData9");
        textAreaEL9.val("");

        window.localStorage.removeItem("calendarData10");
        textAreaEL10.val("");

        window.localStorage.removeItem("calendarData11");
        textAreaEL11.val("");

        window.localStorage.removeItem("calendarData12");
        textAreaEL12.val("");

        window.localStorage.removeItem("calendarData13");
        textAreaEL13.val("");

        window.localStorage.removeItem("calendarData14");
        textAreaEL14.val("");

        window.localStorage.removeItem("calendarData15");
        textAreaEL15.val("");

        window.localStorage.removeItem("calendarData16");
        textAreaEL16.val("");

        window.localStorage.removeItem("calendarData17");
        textAreaEL17.val("");
   });

    //Enable Input fields and set it to future class to allow input after 5pm through 8am to schedule for next day
    if(currentHour > 17 || currentHour < 9){

        h9.addClass('future');
        h9.children(1).attr("disabled",false)
        textAreaEL9.attr("placeholder", "Enter data to schedule for Next Day");

        h10.addClass('future');
        h10.children(1).attr("disabled",false)
        textAreaEL10.attr("placeholder", "Enter data to schedule for Next Day");

        h11.addClass('future');
        h11.children(1).attr("disabled",false)
        textAreaEL11.attr("placeholder", "Enter data to schedule for Next Day");

        h12.addClass('future');
        h12.children(1).attr("disabled",false)
        textAreaEL12.attr("placeholder", "Enter data to schedule for Next Day");

        h13.addClass('future');
        h13.children(1).attr("disabled",false)
        textAreaEL13.attr("placeholder", "Enter data to schedule for Next Day");

        h14.addClass('future');
        h14.children(1).attr("disabled",false)
        textAreaEL14.attr("placeholder", "Enter data to schedule for Next Day");

        h15.addClass('future');
        h15.children(1).attr("disabled",false)
        textAreaEL15.attr("placeholder", "Enter data to schedule for Next Day");

        h16.addClass('future');
        h16.children(1).attr("disabled",false)
        textAreaEL16.attr("placeholder", "Enter data to schedule for Next Day");

        h17.addClass('future');
        h17.children(1).attr("disabled",false)
        textAreaEL17.attr("placeholder", "Enter data to schedule for Next Day");

    }

  });
  

   // TODO: Add code to display the current date in the header of the page.
   var todayDate = dayjs();
   var currentDateHeader = $('#currentDay');
   currentDateHeader.text(todayDate.format('MMM D, YYYY, h:mm a'));
   currentDateHeader.css('color','red');
   currentDateHeader.css('font-size','30px');

   