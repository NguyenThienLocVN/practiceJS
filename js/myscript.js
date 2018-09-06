
    // var element = document.getElementById('id');
    // element.onclick = function() {
        
    // }



    var $ = function (selector) {
        this.selector = document.querySelector(selector);

        this.hide = function(){
            alert('hide');
        }

        this.show = function(){
            alert('show');
        }
    };
    
    var $ = new $("li");

    document.getElementById("btn-hide").onclick = $.hide();


    







    //var buttonHide =  document.getElementById("btn-hide");





    