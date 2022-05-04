<template>
  <div class="container py-5">
    <NavTabs />
    <h1 class="mt-5">
      美食達人
    </h1>
    <hr>
    <!-- 美食達人卡片 -->
    <div class="row text-center"> <UsersTopCards v-for="user in users"  :initial-users="user" :key="user.id" /></div>
  </div>
</template>
<script>
/* eslint-disable*/
import NavTabs from '../components/NavTabs.vue'
import UsersTopCards from '../components/UsersTopCards.vue'
const dummyData = {
  "users": 
  [
        {
            "id": 1,
            "name": "root",
            "email": "root@example.com",
            "password": "$2a$10$UocYTCQ8NIfr.LvDFoO7Iu/eowGj94aJB.B3UbmsKgYGy7otnJqoy",
            "isAdmin": true,
            "image": "https://i.imgur.com/R1BFelI.jpeg",
            "createdAt": "2022-03-21T05:24:16.000Z",
            "updatedAt": "2022-03-21T05:24:16.000Z",
            "Followers": [],
            "FollowerCount": 0,
            "isFollowed": false
        },
        {
            "id": 2,
            "name": "user1",
            "email": "user1@example.com",
            "password": "$2a$10$caIdaby9sy6h6jol9RkL/.ApL7FMxTxTX/yln/4gpKGrScKw8qIea",
            "isAdmin": false,
            "image": "https://i.imgur.com/Am4NvOi.jpeg",
            "createdAt": "2022-03-21T05:24:16.000Z",
            "updatedAt": "2022-03-21T05:24:16.000Z",
            "Followers": [],
            "FollowerCount": 0,
            "isFollowed": false
        },
        {
            "id": 3,
            "name": "user2",
            "email": "user2@example.com",
            "password": "$2a$10$Ecri7F740yOQfRN4SGnNR.s5CZIleQwfjaZDxlutuXc01xfwtulwK",
            "isAdmin": false,
            "image": "https://i.imgur.com/3WHo02T.jpeg",
            "createdAt": "2022-03-21T05:24:16.000Z",
            "updatedAt": "2022-03-21T05:24:16.000Z",
            "Followers": [],
            "FollowerCount": 0,
            "isFollowed": false
        }
    ]
};
export default {
  name: "UserTops",
  components: {
    NavTabs,
    UsersTopCards
  },
  data () {
    return {
      users: [],
    }
  },
   created() {
    this.fetchUsers()
  },
  methods: {
    fetchUsers() {
      const user = dummyData
      console.log(user)
      this.users = user.users.map((user) => ({
        id: user.id,
        name: user.name,
        image: user.image,
        FollowerCount: user.FollowerCount,
        isFollowed: user.isFollowed
      }))
    }
  }
}
</script>
