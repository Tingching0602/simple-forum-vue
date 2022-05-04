<template>
  <div class="container py-5">
    <h1>餐廳描述頁</h1>
    <!-- 餐廳資訊頁 RestaurantDetail -->
    <RestaurantDetail :initial-restaurant="restaurant"/>
    <hr>
    <!-- 餐廳評論 RestaurantComments -->
    <RestaurantComments :restaurant-comments="restaurantComments"
    @after-delete-comment="afterDeleteComment"
    />
    <!-- 新增評論 CreateComment -->
    <CreateComment :restaurant-id="restaurant.id" @after-create-comment="afterCreateComment"
    />
  </div>
</template>
<script>
/* eslint-disable*/
import RestaurantDetail from '../components/RestaurantDetail.vue'
import RestaurantComments from '../components/RestaurantComments.vue'
import CreateComment from '../components/CreateComment.vue'
const dummyData = {
    "restaurant": {
        "id": 1,
        "name": "Miss Celestine Miller",
        "tel": "1-028-480-3466",
        "address": "745 Britney Street",
        "opening_hours": "08:00",
        "description": "incidunt rerum minus",
        "image": "https://loremflickr.com/320/240/restaurant,food/?random=9.569818715160627",
        "viewCounts": 1,
        "createdAt": "2022-03-21T05:24:16.000Z",
        "updatedAt": "2022-03-31T20:19:05.848Z",
        "CategoryId": 3,
        "Category": {
            "id": 3,
            "name": "義大利料理",
            "createdAt": "2022-03-21T05:24:16.000Z",
            "updatedAt": "2022-03-21T05:24:16.000Z"
        },
        "FavoritedUsers": [],
        "LikedUsers": [],
        "Comments": [
            {
                "id": 101,
                "text": "A voluptatibus maxime ab quis omnis consequuntur neque aut.",
                "UserId": 3,
                "RestaurantId": 1,
                "createdAt": "2022-03-21T05:24:16.000Z",
                "updatedAt": "2022-03-21T05:24:16.000Z",
                "User": {
                    "id": 3,
                    "name": "user2",
                    "email": "user2@example.com",
                    "password": "$2a$10$Ecri7F740yOQfRN4SGnNR.s5CZIleQwfjaZDxlutuXc01xfwtulwK",
                    "isAdmin": false,
                    "image": null,
                    "createdAt": "2022-03-21T05:24:16.000Z",
                    "updatedAt": "2022-03-21T05:24:16.000Z"
                }
            },
            {
                "id": 51,
                "text": "Aperiam ratione nisi aliquam eaque consequatur unde.",
                "UserId": 1,
                "RestaurantId": 1,
                "createdAt": "2022-03-21T05:24:16.000Z",
                "updatedAt": "2022-03-21T05:24:16.000Z",
                "User": {
                    "id": 1,
                    "name": "root",
                    "email": "root@example.com",
                    "password": "$2a$10$UocYTCQ8NIfr.LvDFoO7Iu/eowGj94aJB.B3UbmsKgYGy7otnJqoy",
                    "isAdmin": true,
                    "image": null,
                    "createdAt": "2022-03-21T05:24:16.000Z",
                    "updatedAt": "2022-03-21T05:24:16.000Z"
                }
            },
            {
                "id": 1,
                "text": "Quod fugiat laudantium quo laborum quas.",
                "UserId": 2,
                "RestaurantId": 1,
                "createdAt": "2022-03-21T05:24:16.000Z",
                "updatedAt": "2022-03-21T05:24:16.000Z",
                "User": {
                    "id": 2,
                    "name": "user1",
                    "email": "user1@example.com",
                    "password": "$2a$10$caIdaby9sy6h6jol9RkL/.ApL7FMxTxTX/yln/4gpKGrScKw8qIea",
                    "isAdmin": false,
                    "image": null,
                    "createdAt": "2022-03-21T05:24:16.000Z",
                    "updatedAt": "2022-03-21T05:24:16.000Z"
                }
            }
        ]
    },
    "isFavorited": false,
    "isLiked": false
}
const dummyUser = {
  currentUser: {
    id: 1,
    name: '管理者',
    email: 'root@example.com',
    image: 'https://i.pravatar.cc/300',
    isAdmin: true
  },
  isAuthenticated: true
}
const dummyDashBoard = {
  "restaurant": {
        "id": 1,
        "name": "Miss Celestine Miller",
        "tel": "1-028-480-3466",
        "address": "745 Britney Street",
        "opening_hours": "08:00",
        "description": "incidunt rerum minus",
        "image": "https://loremflickr.com/320/240/restaurant,food/?random=9.569818715160627",
        "viewCounts": 1,
        "createdAt": "2022-03-21T05:24:16.000Z",
        "updatedAt": "2022-03-31T20:19:05.000Z",
        "CategoryId": 3,
        "Category": {
            "id": 3,
            "name": "義大利料理",
            "createdAt": "2022-03-21T05:24:16.000Z",
            "updatedAt": "2022-03-21T05:24:16.000Z"
        },
        "Comments": [
            {
                "id": 1,
                "text": "Quod fugiat laudantium quo laborum quas.",
                "UserId": 2,
                "RestaurantId": 1,
                "createdAt": "2022-03-21T05:24:16.000Z",
                "updatedAt": "2022-03-21T05:24:16.000Z",
                "User": {
                    "id": 2,
                    "name": "user1",
                    "email": "user1@example.com",
                    "password": "$2a$10$caIdaby9sy6h6jol9RkL/.ApL7FMxTxTX/yln/4gpKGrScKw8qIea",
                    "isAdmin": false,
                    "image": null,
                    "createdAt": "2022-03-21T05:24:16.000Z",
                    "updatedAt": "2022-03-21T05:24:16.000Z"
                }
            },
            {
                "id": 51,
                "text": "Aperiam ratione nisi aliquam eaque consequatur unde.",
                "UserId": 1,
                "RestaurantId": 1,
                "createdAt": "2022-03-21T05:24:16.000Z",
                "updatedAt": "2022-03-21T05:24:16.000Z",
                "User": {
                    "id": 1,
                    "name": "root",
                    "email": "root@example.com",
                    "password": "$2a$10$UocYTCQ8NIfr.LvDFoO7Iu/eowGj94aJB.B3UbmsKgYGy7otnJqoy",
                    "isAdmin": true,
                    "image": null,
                    "createdAt": "2022-03-21T05:24:16.000Z",
                    "updatedAt": "2022-03-21T05:24:16.000Z"
                }
            },
            {
                "id": 101,
                "text": "A voluptatibus maxime ab quis omnis consequuntur neque aut.",
                "UserId": 3,
                "RestaurantId": 1,
                "createdAt": "2022-03-21T05:24:16.000Z",
                "updatedAt": "2022-03-21T05:24:16.000Z",
                "User": {
                    "id": 3,
                    "name": "user2",
                    "email": "user2@example.com",
                    "password": "$2a$10$Ecri7F740yOQfRN4SGnNR.s5CZIleQwfjaZDxlutuXc01xfwtulwK",
                    "isAdmin": false,
                    "image": null,
                    "createdAt": "2022-03-21T05:24:16.000Z",
                    "updatedAt": "2022-03-21T05:24:16.000Z"
                }
            }
        ]
    }
}
export default {
  components: {
    RestaurantDetail,
    RestaurantComments,
    CreateComment
  },
  data () {
    return {
      restaurant: {
        id: -1,
        name: '',
        categoryName: '',
        image: '',
        openingHours: '',
        tel: '',
        address: '',
        description: '',
        isFavorited: false,
        isLiked: false
      },
      currentUser: dummyUser.currentUser,
      restaurantComments: []
    }
  },
  created () {
    const { id: restaurantId } = this.$route.params
    this.fetchRestaurant(restaurantId)
  },
  methods: {
    fetchRestaurant (restaurantId) {
      console.log('fetchRestaurant id: ', restaurantId)

      this.restaurant = {
        id: dummyData.restaurant.id,
        name: dummyData.restaurant.name,
        categoryName: dummyData.restaurant.Category.name,
        image: dummyData.restaurant.image,
        openingHours: dummyData.restaurant.opening_hours,
        tel: dummyData.restaurant.tel,
        address: dummyData.restaurant.address,
        description: dummyData.restaurant.description,
        isFavorited: dummyData.isFavorited,
        isLiked: dummyData.isLiked
      }

      this.restaurantComments = dummyData.restaurant.Comments
    },
    afterDeleteComment (commentId) {
      console.log('afterDeletComment', commentId)
      this.restaurantComments = this.restaurantComments.filter(comment => comment.id !== commentId)
    },
    afterCreateComment(payload) {
      const { commentId, restaurantId, text } = payload
      this.restaurantComments.push({
        id: commentId,
        RestaurantId: restaurantId,
        User: {
          id: this.currentUser.id,
          name: this.currentUser.name
        },
        text,
        createdAt: new Date()
      })
    }
  }
}
</script>
