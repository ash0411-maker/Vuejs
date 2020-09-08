// asyncを使うと非同期関数と呼ばれるようになる。
// 非同期関数の中ではawaitが使えるようになる。
// responseオブジェクトのなかに成功・失敗・実際のデータなどの情報が入る。
// responseの情報を使いやすくするためにresponseオブジェクトのjsonメソッドを使う必要がある。


// async function callApi() {
//     // fetchをしたらPromiseオブジェクトが返ってくる
//     const res = await fetch("https://jsonplaceholder.typicode.com/users");
//     const users = await res.json();
//     console.log(users);
// }
// callApi();





// DOM
const button = document.getElementById("addBtn");
const lists = document.getElementById("lists");



// 関数
function addList(user) {
    const list = document.createElement("li");
    list.innerText = user.name;
    lists.appendChild(list)
}


async function getUsers() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users")
    const users = await res.json();
    return users
};



async function listUsers() {
    const users = await getUsers();
    users.forEach(addList);
};


// イベント
window.addEventListener("load", listUsers);
button.addEventListener("click", listUsers);

