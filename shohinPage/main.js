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



var btnLoad = document.querySelector("#load");
btnLoad.addEventListener("click", function(event) {
  var xmlHttpRequest = new XMLHttpRequest();
  xmlHttpRequest.onreadystatechange = function() {
    if(this.readyState == 4) {
      console.log(this.readyState, this.response);
    }
  }
  xmlHttpRequest.responseType = "json";
  xmlHttpRequest.open("GET", "products.json");
  xmlHttpRequest.send();
});

