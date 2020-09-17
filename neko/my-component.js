var myComponent = {
    template: `
    <div>
        <button v-on:click="clickHandler">阪神に連勝させる</button>対巨人{{win}}連勝中
    </div>
    `,
    props: ["win"],
    methods: {
        clickHandler: function() {
            // 子コンポーネントにchild-clickを発生させる
            this.$emit("child-click")
        }
    }
}


// Vue.component('my-component', {
//     template: `
//     <div>
//         <span>{{ message1 }}</span>
//     </div>
//     `,
// });