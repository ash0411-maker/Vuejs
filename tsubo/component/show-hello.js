Vue.component('my-product', {
    template: `
    <div>
        <button v-on:click="clickHandler">値下げをする</button>{{price}}円
    </div>
    `,
    props: ["price"],
    methods: {
        clickHandler: function() {
            // 子コンポーネントにchild-clickイベントを発生させる
            // 親のテンプレートを通じて親のイベントハンドラを呼び出すための仲介役
            this.$emit("child-click");
        }
    }
});