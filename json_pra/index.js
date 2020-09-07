// asyncを使うと非同期関数と呼ばれるようになる。
// 非同期関数の中ではawaitが使えるようになる。
// responseオブジェクトのなかに成功・失敗・実際のデータなどの情報が入る。
// responseの情報を使いやすくするためにresponseオブジェクトのjsonメソッドを使う必要がある。


async function callApi() {
    // fetchをしたらPromiseオブジェクトが返ってくる
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await res.json();
    console.log(users);
}

callApi();