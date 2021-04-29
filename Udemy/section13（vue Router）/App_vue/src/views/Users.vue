<template>
  <div>
    <h3>USERS</h3>
    <router-link to="/users/1">ユーザー1</router-link>
    <router-link to="/users/2">ユーザー2</router-link>
    <hr>
    <!-- $routerはnavigation $routeは情報が入っている -->
    <h1>USER NO. {{ id }}</h1>

    <router-link :to="'/users/' + (Number(id) - 1) + '/profile'">前のユーザー</router-link>
    <router-link :to="{ name: 'users-profile', params: { id: Number(id) + 1 } }">次のユーザー</router-link> <!-- 上とおなじで、こっちの方が良き -->
    <router-view></router-view> <!-- profile, postsを表示。ネストされたcomponent（children） -->
  </div>
</template>

<script>
export default ({
  props: ["id"]
})
</script>
