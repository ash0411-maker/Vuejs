// var myComponent = {
//     template: `
//     <div>
//         <button v-on:click="clickHandler">阪神に連勝させる</button>対巨人{{win}}連勝中
//     </div>
//     `,
//     props: ["win"],
//     methods: {
//         clickHandler: function() {
//             this.$emit("child-click")
//         }
//     }
// }


var myComponent = {
    template: `
    <div>
        <button v-on:click="clickHandler">イベント発火</button>狛江の{{num}}
    </div>
    `,
    props: ["num"],
    methods: {
        clickHandler: function() {
            this.$emit("child-click")
        }
    }
};

