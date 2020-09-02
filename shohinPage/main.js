// Vue.filter('number_format', function(val){
//   return val.toLocaleString();
// });

// var app = new Vue({
//   el: "#app",
//   data: {
//     showSaleItem: false,
//     showDelvFree: false,
//     sortOrder: 1,
//     products: 
//   },
//   computed: {
//     filteredList: function() {
//       // 絞り込み後の商品リストを返す算出プロパティ
//       var newList = []
//       for(var i=0; i < this.products.length; i++) {
//         // 表示対象か判定
//         var isShow = true;
//         // i番目の商品が表示対象か判定
//         if(this.showSaleItem && !this.products[i].isSale) {
//           // 「セール対象」のチェックありで、セール対象品でない時
//           isShow = false;
//         }

//         if(this.showDelvFree && this.products[i].delv > 0) {
//           // 「送料無料」のチェックありで、送料ありの場合
//           isShow = false
//         }

//         if(isShow) {
//           newList.push(this.products[i])
//         }
//       }

//       // 新しい配列を並び替える
//       if(this.sortOrder == 1) {
//         // 元の順番にpushしているから並び替え済み
//       }
//       else if(this.sortOrder == 2) {
//         newList.sort(function(a, b) {
//           return a.price - b.price;
//         });
//       }
//       return newList;
//     }
//   },
//   watch: {
//     // セール対象品を監視
//     showSaleItem: function(newVal, oldVal) {
//       console.log("showSaleItemのウォッチャ");
//     },
//     showDelvFree: function(newVal, oldVal) {
//       console.log("showDelvFreeのウォッチャ");
//     }
//   }
// });


var btnLoad = document.querySelector('#load');
// 読み込みボタンのクリックイベントハンドラを定義
btnLoad.addEventListener('click', function(event) {
  //【手順1】XMLHttpRequestオブジェクトのインスタンスを生成
  var xmlHttpRequest  = new XMLHttpRequest();
  //【手順2】通信状態の変化を監視するイベントハンドラを設定
  xmlHttpRequest.onreadystatechange = function() {
    // レスポンスの受信が正常に完了したとき
    if (this.readyState == 4) {
      console.log(this.readyState, this.response);
    }
  };
  //【手順3】レスポンスの形式を指定する
  xmlHttpRequest.responseType = 'json';
  //【手順4】リクエストメソッドと読み込むファイルのパスを指定する
  xmlHttpRequest.open('GET', 'products.json');
  //【手順5】リクエストを送信する（非同期通信を開始する）
  xmlHttpRequest.send();
});
