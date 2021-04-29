import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Users from './views/Users.vue';
import UsersPosts from './views/UsersPosts.vue';
import UsersProfile from './views/UsersProfile.vue';
import HeaderUsers from './views/HeaderUser.vue';
import HeaderHome from './views/HeaderHome.vue';

Vue.use(Router);

export default new Router({
  mode: "history",
  // どのURLをどのコンポーネントに結びつけるか
  routes: [
    {
      path: '/',
      components: {
        default: Home,
        header: HeaderHome
      },
      // beforeEnter(to, from, next) {
      //   next(false)
      // }
    },
    {
      path: '/users/:id',
      components: {
        default: Users,
        header: HeaderUsers
      },
      props: {
        default: true,
        header: false
      }, //idを渡している
      children: [
        { path: "posts", component: UsersPosts},
        { path: "profile", component: UsersProfile, name: "users-profile"},
      ]
    },
    {
      path: "/hello",
      redirect: "/"
    }
  ],
  // scrollBehavior(to, from, savedPosition) {
  //   // パターン１
  //   // console.log(to);
  //   // if (to.hash) {
  //   //   return {
  //   //     selector: to.hash
  //   //   }
  //   // }

  //   // パターン２
  //   // return {
  //   //   selector: '#next-user',
  //   //   offset: { x: 0, y: 100 }
  //   // }
  //   // return {x: 0, y: 0 } パターン１
  // }
});
