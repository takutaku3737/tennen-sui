var swiper = new Swiper('.swiper-container', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  loop: true,
  pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
});

// バブルアニメーション======================================
$(function() {
  var   bgsc1 = 0;
  var   bgsc2 = 0;
  var   bgsc3 = 0;
  var   bgsc4 = 0;
setInterval(function() {
  bgsc1 +=  0;
  bgsc2 += -2;
  bgsc3 += -5;
  bgsc4 += -7;
  $(".skinBody2").css("background-position", bgsc1 + "px " + bgsc2 + "px");
  $(".skinBody3").css("background-position", bgsc1 + "px " + bgsc3 + "px");
  $(".skinFrame").css("background-position", bgsc1 + "px " + bgsc4 + "px");
});
});

// ハンバーガーメニュー
  $(function() {
    $('.hamburger').click(function() {
        $(this).toggleClass('active');
        if ($(this).hasClass('active')) {
            $('.globalMenuSp').addClass('active');
        } else {
            $('.globalMenuSp').removeClass('active');
        }
    });
});

// aboutのスライドイン====================================
$(function(){

  var effect_btm = 300; // 画面下からどの位置でフェードさせるか(px)
  var effect_move = 50; // どのぐらい要素を動かすか(px)
  var effect_time = 800; // エフェクトの時間(ms) 1秒なら1000

  //親要素と子要素のcssを定義
  $('.about-box').css({
      opacity: 0
  });
  $('.about-box').children().each(function(){
      $(this).css({
          opacity: 0,
          transform: 'translateY('+ effect_move +'px)',
          transition: effect_time + 'ms'
      });
  });

  // スクロールまたはロードするたびに実行
  $(window).on('scroll load', function(){
      var scroll_top = $(this).scrollTop();
      var scroll_btm = scroll_top + $(this).height();
      var effect_pos = scroll_btm - effect_btm;

      //エフェクトが発動したとき、子要素をずらしてフェードさせる
      $('.about-box').each( function() {
          var this_pos = $(this).offset().top;
          if ( effect_pos > this_pos ) {
              $(this).css({
                  opacity: 1,
                  transform: 'translateY(0)'
              });
              $(this).children().each(function(i){
                  $(this).delay(100 + i*200).queue(function(){
                      $(this).css({
                          opacity: 1,
                          transform: 'translateY(0)'
                      }).dequeue();
                  });
              });
          }
      });
  });

});

// メインタイトルのスライドイン====================================
$(function(){
  // アニメーションさせたいクラス
  var container = $(".main-title__txt");
// アニメーションスピード
var speed = 60;

// テキストの間にスペースを入れます
var content = $(container).html();
var text = $.trim(content);
var newHtml = "";

// スペースで区切ったテキストを、テキストの数だけspanで囲む
text.split("").forEach(function(v) {
 newHtml += '<span>' + v + '</span>';
});

// spanで囲んだテキスト群をHTMLに戻す
$(container).html(newHtml);

// 1文字ずつ表示
var txtNum = 0;
setInterval(function() {
  $(container).find('span').eq(txtNum).css({opacity: 1});
 txtNum++
}, speed);
});

// introduce right title hover ======================================
$(function(){
$('.intro-box-right__title').hover(
  function(){
    $(this).animate({
      'font-size':'2.3rem'
    },500);
  },
  function(){
    $(this).animate({
      'font-size':'2rem'
    },500);
  }
);
});

// ページ内スクロール==========================================
//ページ間スムーススクロール
$('a[href^="#"]').click(function() {
  // スクロールの速度
  var speed = 400; // ミリ秒で記述
  var href = $(this).attr("href");
  var target = $(href == "#" || href == "" ? 'html' : href);
  var position = target.offset().top - 160;
  $('body,html').animate({
    scrollTop: position
  }, speed, 'swing');
  return false;
});
