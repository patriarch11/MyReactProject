function Slider() {
    this.prevBtn = null;
    this.nextBtn = null;
    this.slideImg = null;

    this.imgsUrls = [];
    this.currentIndex = 0;
};
Slider.prototype.init = function (elIdent, urls) {
    var that = this;
    var el = document.querySelector(`.${elIdent}`);

    var prevBtn = el.querySelector('.prevBtn');
    var nextBtn = el.querySelector('.nextBtn');
    var slideImg = el.querySelector('.slideImg');

    function pushImg(urls) {
        for (let i = 0; i < urls.length; i++) {
            this.imgsUrls.push(urls[i]);
        }
    }
    pushImg(urls);

    this.slideImg.src = this.imgsUrls[this.currentIndex];

    this.prevBtn.addEventListener('click', function () {
        that.onPreBtnClick();
    });
    this.nextBtn.addEventListener('click', function () {
        that.onNextBtnClick();
    });

    this.prevBtn.disabled = true;
};
Slider.prototype.onPreBtnClick = function (e) {
    this.currentIndex--;
    this.slideImg.src = this.imgsUrls[this.currentIndex];
    this.nextBtn.disabled = false;
    if (this.currentIndex === 0) {
        this.prevBtn.disabled = true;
    }
};
Slider.prototype.onNextBtnClick = function (e) {
    this.currentIndex++;
    this.slideImg.src = this.imgsUrls[this.currentIndex];
    this.prevBtn.disabled = false;
    if (this.currentIndex === this.imgsUrls.length - 1) {
        this.nextBtn.disabled = true;
    }
};