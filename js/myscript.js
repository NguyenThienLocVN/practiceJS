
// Declare an object with name like $ in Jquery
var $ = function( selector ){
    // Property to get the selection element
    this.element = document.querySelector(selector);

    // Method to hide the element
    this.hide = function () {
        this.element.style.display = 'none';
    }

    // Method to show the element
    this.show = function () {
        this.element.style.display = 'block';
    } 

    return this;
};


