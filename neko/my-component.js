var myComponent = {
    template: `
    <p>My component</p>
    `,
    props: ["win"],
    methods: {
        clickHandler: function() {
            this.$emit("child-click")
        }
    }
}

// Vue.component("my-component", {
//     template: "<p>My component</p>"
// })

