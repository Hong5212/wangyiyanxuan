// rem适配
(function (designWidth) {
  var size = document.documentElement.clientWidth / (designWidth / 100)
  document.documentElement.style.fontSize = size + 'px'
  document.body.style.fontSize = '14px'
})(750);

/*window.onload = function () {
  var contentList = document.querySelectorAll('#app .content>div')
  var guideItems = document.querySelectorAll('#app .guide_item')

  /!*footer tab切换*!/
  for(var i = 0; i < guideItems.length; i++){
    // 给每个guideItems注册一个下标
    guideItems[i].index = i
    // 给guideItems[i]添加手指离开屏幕事件
    guideItems[i].addEventListener('touchend', function () {
      for(var i = 0; i < guideItems.length; i++){
        // 清除contentList[i]的类 on
        guideItems[i].className = 'guide_item'
        // 清除contentList[i]的类 on
        contentList[i].className = ''
      }
      // 给guideItem[i]添加类 guide_item on
      this.className = 'guide_item on'
      // 给contentList[i]添加类 on
      contentList[this.index].className = 'on'
    })
  }
}*/
