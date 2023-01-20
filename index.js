//imgをまず全部見えなくする
$(".key-visual img").hide();
//key-visualの最初の部分にactiveというクラス名を付け、それを見えるようにする。
$(".key-visual img:first").addClass("active").show();

const changeImage = function(){
  //activeの付いた要素を$activeと定義
  let active = $(".key-visual img.active")
  //activeの付いた要素の次の要素にimgという文字列が存在するか否か。存在する場合nextに次のimgを代入。なければ最初のimgを代入し最初の画面に戻る。
  let next = active.next("img").length?active.next("img"):$(".key-visual img:first");

  active.fadeOut().removeClass("active");
  next.fadeIn().addClass("active");
}

const changeReverce = function(){
  //activeの付いた要素を$activeと定義
  let active = $(".key-visual img.active")
  //activeの付いた要素の前の要素にimgという文字列が存在するか否か。存在する場合nextに次のimgを代入。なければ最初のimgを代入し最初の画面に戻る。
  let prev = active.prev("img").length?active.prev("img"):$(".key-visual img:last");

  active.fadeOut().removeClass("active");
  prev.fadeIn().addClass("active");
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
let count = 0;

setInterval(() => {
if (count > 4) {
  count = 0;
  changeImage();
}
count++;
}, 1000);