Vue.component('mt-product', {
    template: `
    <div>
        <span>{{name}}</span>:<span>{{}price}</span>
    </div>
    `,
    // propに定義したプロパティは親からデータを受け取るための入れ物
    props: ["name", "price"]
});