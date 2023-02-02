let count = 0;
//imgをまず全部見えなくする
$("#js-slide img").hide();
//key-visualの最初の部分にactiveというクラス名を付け、それを見えるようにする。
$("#js-slide img:first").addClass("active").show();

const changeImage = function(){
  //activeの付いた要素を$activeと定義
  const active = $("#js-slide img.active")
  //activeの付いた要素の次の要素にimgという文字列が存在するか否か。存在する場合nextに次のimgを代入。なければ最初のimgを代入し最初の画面に戻る。
  const next = active.next("img").length?active.next("img"):$("#js-slide img:first");

  active.css('display', 'none').removeClass("active");
  next.fadeIn(1000).addClass("active");
}

const changeReverce = function(){
  //activeの付いた要素を$activeと定義
  const active = $("#js-slide img.active")
  //activeの付いた要素の前の要素にimgという文字列が存在するか否か。存在する場合nextに次のimgを代入。なければ最初のimgを代入し最初の画面に戻る。
  const prev = active.prev("img").length?active.prev("img"):$("#js-slide img:last");

  active.css('display', 'none').removeClass("active");
  prev.fadeIn(1000).addClass("active");
}

$(".right-btn").on("click",function(){
  changeImage();
  count = 0;
})

$(".left-btn").on("click",function(){
  changeReverce();
  count = 0;
})

// 自動スライド

setInterval(() => {
if (count > 4) {
  count = 0;
  changeImage();
}
count++;
}, 1000);