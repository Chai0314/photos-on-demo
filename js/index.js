(function () {
    /* 函数入口 */
    var init = function () {
        // 延迟200毫秒初始化样式
        setTimeout(function () {
            document.querySelector('.wrapper').classList.remove('init');
        }, 200)
        // 初始化事件
        initEvent();
    }
    var initEvent = function () {
        document.querySelectorAll('.wrapper .item').forEach(function (dom) {
            dom.addEventListener('click', onItemClick);
        })
        document.querySelectorAll('.masker-close').forEach(function(dom){
            dom.addEventListener('click', closeEvent);
        })
    }
    var onItemClick = function(e){
        document.querySelector('.wrapper').classList.add('active');
        this.classList.add('on')
    }
    var closeEvent = function(e){
        // 阻止冒泡
        e.stopPropagation();
        // 清楚样式
        document.querySelector('.wrapper').classList.remove('active');
        this.parentNode.parentNode.parentNode.classList.remove('on');
    }
    init();
})()