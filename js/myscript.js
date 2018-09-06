var $ = function( selector ) {
    return new select( selector );
};

select = function( selector ){
    this.element = document.querySelector(selector);

    this.hide = function () {
        // console.log(this.element);
        this.element.style.display = 'none';
    }

    this.show = function () {
        this.element.style.display = 'block';
    }
};


