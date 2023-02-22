// var setInterval

(function() {
    var messages = [];
    var time = document.getElementById("current-time");
    var display = document.getElementById("message");
  
    function check() {
      showMessage(currentMessage());
      showTime();
    }
  
    function currentMessage() {
      var message = null;
      if (messages.length) {
        var now = toTheSecond(new Date());
        var start = toTheSecond(new Date(messages[0].start_time));
        var end = toTheSecond(new Date(start.getTime() + ( messages[0].text_duration * 1000 )));
  
        if (start <= now) {
          if (end <= now) {
            // done with the current message...
            messages = messages.slice(1);
            // ...but check if there's another one ready to go right now
            message = currentMessage();
          }
          else {
            message = messages[0];
          }
        }
      }
      return message;
    }
  
    function toTheSecond(date) {
      date.setMilliseconds(0);
      return date;
    }
  
    function showMessage(message) {
      if (message) {
        display.textContent = message.text_content;
      }
      else {
        display.textContent = "no messages";
      }
    }
  
    function showTime() {
      time.textContent = new Date().toLocaleString()
    }
  
    function getMessages() {
      setTimeout(function() {
        var now = new Date();
        messages.push(
          {"text_content":"aaaaa","text_duration":5,"start_time": new Date(now.getTime() + 3000).toISOString()},
          {"text_content":"aawwaaaaa","text_duration":5,"start_time": new Date(now.getTime() + 10000).toISOString()},
          {"text_content":"bbaawwaaaaa","text_duration":5,"start_time": new Date(now.getTime() + 15000).toISOString()}
        );
      }, 1000);
    }
  
    setInterval(check, 500);
    getMessages();
  })();
  

        