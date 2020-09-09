Vue.component('my-product', {
    template: `
        <div>
            <span>{{name}}</span>:<span>{{price}}</span>
        </div>
        `,
    data: function() {
        return {
            name: 'スマホケース',
            price: 980
        }
    }
    // // propに定義したプロパティは親からデータを受け取るための入れ物
    // props: ["name", "price"]
});