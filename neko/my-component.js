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


var compChild = {
    template: `
    <div class="comp-child">
        <slot></slot>
    </div>
    `,
    props: ["num"],
    methods: {
        clickHandler: function() {
            this.$emit("child-click")
        }
    }
};

