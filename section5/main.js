var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!'
    }
})


var app2 = new Vue({
    el: '#app-2',
    data: {
        message: 'You loaded this page on ' + new Date().toLocaleString()
    }
})


var app3 = new Vue({
    el: '#app-3',
    data: {
        seen: true
    }
})


var app4 = new Vue({
    el: '#app-4',
    data: {
        todos: [
            { text: 'Learn JavaScript' },
            { text: 'Learn Vue' },
            { text: 'Build something awesome' }
        ]
    }
})


var app5 = new Vue({
    el: '#app-5',
    data: {
        message: "Hello, Vue.js!"
    },
    methods: {
        reverseMessage: function() {
            this.message = this.message.split('').reverse().join('')
        }
    }
})



var app6 = new Vue({
    el: '#app-6',
    data: {
        message: 'Hello Vue!'
    }
})



Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
})

var app7 = new Vue({
    el: '#app-7',
    data: {
        groceryList: [
            { id: 0, text: 'Vegetables' },
            { id: 1, text: 'Cheese' },
            { id: 2, text: 'Whatever else humans are supposed to eat' }
        ]
    }
})

var todo = new  Vue({
    el: "#todo",
    data: {
        newItem: "",
        todos: [{
            title: "task1",
            isDone: false
        },
        {
            title: "task2",
            isDone: false
        },
        {
            title: "task3",
            isDone: true
        }
        ]
    },
    watch: {
        // todos: function() {
        //     localStorage.setItem("todos", JSON.stringify(this.todos));
        //     alert("Data Saved");
        // }
        todos: {
            handler: function() {
                localStorage.setItem("todos", JSON.stringify(this.todos));
            },
            deep: true
        }
    },
    mounted: function() {

    },
    methods: {
        addItem: function() {
            var item = {
                title: this.newItem,
                isDone: false
            }
            this.todos.push(item);
            this.newItem = ""
        },
        deleteItem: function(index) {
            if(confirm("R u sure?")){
                this.todos.splice(index, 1);
            }
        },
        purge: function() {
            if(!confirm("delete finished")) {
                return;
            }
            // this.todos = this.todos.filter(function(todo) {
            //     return !todo.isDone;
            // });
            this.todos = this.remaining
        }
    },
    computed: {
        remaining: function() {
            // var item = this.todos.filter(function(todo) {
            //     return !todo.isDone;
            // });
            // return item.length
            return this.todos.filter(function(todo) {
                return !todo.isDone;
            });
        }
    }
})







// 繰り返し
// data: {
//     list: ["リッご", "kkkk", "ddddd", "aaaa"]
// }




// イベントの利用
// methods: {
//     handleClick: function(event){
//         alert(event.alert)
//     }
// }
