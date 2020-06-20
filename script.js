/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

function isSmartPhone() {
  if (window.matchMedia && window.matchMedia('(max-device-width: 640px)').matches) {
    return true;
  } else {
    return false;
  }
}

if(isSmartPhone()) {
  $('.pc-dp').css('display','none');
} else {
  console.log("aaa");
  $('.sp-dp').css('display','none');
}


/* shuffle */

/* --------------------------- */

var member_ps4_1 = ['しゅーへい(主催)','すぴ','哲那','ひらりん','のっくん','ねむち','シモン','牡丹餅','ろむ','SKND','がる','はと'];
var member_ps4_2 = ['ぶんた(主催)','ひこ','きなCoCoサンチーム','レンガ','すなぎも','ダイ','ルーク','百郎百夜','AQUA','ゆん(甘口三色団子カレートルコアイスを添えて)','くろみや(甘口三色団子~~を添えて)','ぷくぷや(甘口三色団子~~を添えて)'];
var member_switch = ['しゅーへい(主催)','ケイ(主催)','ひこ','トゥエルブ','hano','メタル','ダイ','モノ','ゆーのう','はと(ムナゲ・ザ・クリキントン)','ゆん(ムナゲ・ザ・クリキントン)','くろみや(ムナゲ・ザ・クリキントン)'];

/* --------------------------- */



var shuffleType = "ps4_1";

// 要素指定のための配列
var position = ['1-1','1-2','1-3','2-1','2-2','2-3','3-1','3-2','3-3','4-1','4-2','4-3'];

// 初期設定
var target_list = ['','','','','','','','','','','',''];
for(var i=0; i<12; i++){
  target_list[i] = member_ps4_1[i];
}


$('.ps4-1-sp, .ps4-1-pc').click(function() {  
  shuffleType = "ps4_1";
  
  for(var i=0; i<12; i++){
    target_list[i] = member_ps4_1[i];
  }
  
  for(var i=0; i<12; i++) {
    $("."+position[i]).text(target_list[i]);
  }
})

$('.ps4-2-sp, .ps4-2-pc').click(function() {  
  shuffleType = "ps4_2";
  
  for(var i=0; i<12; i++){
    target_list[i] = member_ps4_2[i];
  }
  
  for(var i=0; i<12; i++) {
    $("."+position[i]).text(target_list[i]);
  }
})

$('.switch-sp, .switch-pc').click(function() {  
  shuffleType = "switch"
  
  for(var i=0; i<12; i++){
    target_list[i] = member_switch[i];
  }
  
  for(var i=0; i<12; i++) {
    $("."+position[i]).text(target_list[i]);
  }
})


$('.shuffle-sp, .shuffle-pc').click(function() {
  var roulette = [];
  
  switch(shuffleType) {
    case "ps4_1":
      // 主催チームが存在する場合主催チームは固定
      var tempArr = [3,4,5,6,7,8,9,10,11];
      tempArr = shuffle(tempArr);
      tempArr.unshift(0,1,2);
      roulette = tempArr;
      console.log(roulette);
      break;
      
    case "ps4_2":
      // 固定チームが存在する場合はそのチーム以外のメンバーをシャッフルする
      var tempArr = [1,2,3,4,5,6,7,8];
      tempArr = shuffle(tempArr);
      tempArr.unshift(0);
      tempArr.push(9,10,11);
      roulette = tempArr;  
      console.log(roulette);
      break;
      
    case "switch":
      // 主催チームがある場合は固定
      var tempArr = [2,3,4,5,6,7,8];
      tempArr = shuffle(tempArr);
      tempArr.unshift(0,1);
      tempArr.push(9,10,11);
      roulette = tempArr;
      console.log(roulette);
      break;
      
    default:
      // 固定チームが存在しない場合は全員シャッフル
      var tempArr = [0,1,2,3,4,5,6,7,8,9,10,11];
      tempArr = shuffle(tempArr);
      roulette = tempArr;    
      console.log(roulette);
      break;
  }
  
  // メンバーの表示
  for(var i=0; i<12; i++) {
    $("."+position[i]).text(target_list[roulette[i]]);
  }
  
})


// 配列をシャッフルするための関数
function shuffle(array) {
  console.log("shuffle");
  for (let i = array.length - 1; i >= 0; i--) {
    let rand = Math.floor(Math.random() * (i + 1));
    // 配列の数値を入れ替える
    [array[i], array[rand]] = [array[rand], array[i]]
  }
  return array;
}