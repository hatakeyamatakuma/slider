//フェード処理の速さ
const fadeSpeed = 1000;
//imgをまず全部見えなくする
$(".key-visual img").hide();
//key-visualの最初の部分にactiveというクラス名を付け、それを見えるようにする。
$(".key-visual img:first").addClass("active").show();

let changeImage = function(){
  //activeの付いた要素を$activeと定義
  let $active = $(".key-visual img.active")
  //activeの付いた要素の次の要素にimgという文字列が存在するか否か。存在する場合$nextに次のimgを代入。なければ最初のimgを代入し最初の画面に戻る。
  let $next = $active.next("img").length?$active.next("img"):$(".key-visual img:first");

  $active.fadeOut(fadeSpeed).removeClass("active");
  $next.fadeIn(fadeSpeed).addClass("active");
}

let changeReverce = function(){
  //activeの付いた要素を$activeと定義
  let $active = $(".key-visual img.active")
  //activeの付いた要素の次の要素にimgという文字列が存在するか否か。存在する場合$nextに次のimgを代入。なければ最初のimgを代入し最初の画面に戻る。
  let $prev = $active.prev("img").length?$active.prev("img"):$(".key-visual img:last");

  $active.fadeOut(fadeSpeed).removeClass("active");
  $prev.fadeIn(fadeSpeed).addClass("active");
}

$(".right-btn").on("click",function(){
  console.log("右クリック")
  changeImage();
  count = 0;
})

$(".left-btn").on("click",function(){
  console.log("左クリック")
  changeReverce();
  count = 0;
})

// 自動スライド
var count = 0;

setInterval(() => {
if (count > 4) {
  count = 0;
  changeImage();
}
count++;
console.log(count);
}, 1000);