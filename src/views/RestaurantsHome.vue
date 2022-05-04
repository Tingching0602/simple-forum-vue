<template>
  <div class="container py-5">
    <NavTabs />
    <!-- 餐廳類別標籤 RestaurantsNavPills -->
    <RestaurantsNavPills :categories="categories"/>
    <div class="row">
      <!-- 餐廳卡片 RestaurantCard-->
      <RestaurantCard v-for="restaurant in restaurants" :key="restaurant.id" :initial-restaurant="restaurant" />
    </div>

    <!-- 分頁標籤 RestaurantPagination -->
    <RestaurantsPagination
    v-if="totalPage.length > 1"
    :current-page="currentPage"
    :total-page="totalPage"
    :category-id="categoryId"
    :previous-page="previousPage"
    :next-page="nextPage"
     />
  </div>
</template>
<script>
/* eslint-disable*/
import NavTabs from '../components/NavTabs.vue'
import RestaurantCard from '../components/RestaurantCard.vue'
import RestaurantsNavPills from '../components/RestaurantsNavPills.vue'
import RestaurantsPagination from '../components/RestaurantsPagination.vue'
const dummyData = {
  restaurants: 
     [
        {
            "id": 1,
            "name": "Miss Celestine Miller",
            "tel": "1-028-480-3466",
            "address": "745 Britney Street",
            "opening_hours": "08:00",
            "description": "incidunt rerum minus",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=9.569818715160627",
            "viewCounts": 0,
            "createdAt": "2022-03-21T05:24:16.000Z",
            "updatedAt": "2022-03-21T05:24:16.000Z",
            "CategoryId": 3,
            "Category": {
                "id": 3,
                "name": "義大利料理",
                "createdAt": "2022-03-21T05:24:16.000Z",
                "updatedAt": "2022-03-21T05:24:16.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 2,
            "name": "Michaela Walter",
            "tel": "(699) 773-3860",
            "address": "9380 Lesch Tunnel",
            "opening_hours": "08:00",
            "description": "Temporibus eum odit quia cum et eligendi sit cupid",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=84.33266028309781",
            "viewCounts": 0,
            "createdAt": "2022-03-21T05:24:16.000Z",
            "updatedAt": "2022-03-21T05:24:16.000Z",
            "CategoryId": 4,
            "Category": {
                "id": 4,
                "name": "墨西哥料理",
                "createdAt": "2022-03-21T05:24:16.000Z",
                "updatedAt": "2022-03-21T05:24:16.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 3,
            "name": "Gilbert Ferry",
            "tel": "457-414-2784 x08581",
            "address": "2195 Carlo Lane",
            "opening_hours": "08:00",
            "description": "magni molestiae enim",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=28.448797954870987",
            "viewCounts": 0,
            "createdAt": "2022-03-21T05:24:16.000Z",
            "updatedAt": "2022-03-21T05:24:16.000Z",
            "CategoryId": 4,
            "Category": {
                "id": 4,
                "name": "墨西哥料理",
                "createdAt": "2022-03-21T05:24:16.000Z",
                "updatedAt": "2022-03-21T05:24:16.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 4,
            "name": "Micah Barton",
            "tel": "1-873-012-4171",
            "address": "3655 Aletha Coves",
            "opening_hours": "08:00",
            "description": "Voluptatem tempora ducimus. Ea laborum saepe sit a",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=56.01193159872915",
            "viewCounts": 0,
            "createdAt": "2022-03-21T05:24:16.000Z",
            "updatedAt": "2022-03-21T05:24:16.000Z",
            "CategoryId": 1,
            "Category": {
                "id": 1,
                "name": "中式料理",
                "createdAt": "2022-03-21T05:24:16.000Z",
                "updatedAt": "2022-03-21T05:24:16.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 5,
            "name": "Louisa Hayes I",
            "tel": "665-408-5653 x4931",
            "address": "1636 McKenzie Union",
            "opening_hours": "08:00",
            "description": "Necessitatibus autem non molestias. Dolorum quia e",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=28.92582281482945",
            "viewCounts": 0,
            "createdAt": "2022-03-21T05:24:16.000Z",
            "updatedAt": "2022-03-21T05:24:16.000Z",
            "CategoryId": 3,
            "Category": {
                "id": 3,
                "name": "義大利料理",
                "createdAt": "2022-03-21T05:24:16.000Z",
                "updatedAt": "2022-03-21T05:24:16.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 6,
            "name": "Ardella Purdy MD",
            "tel": "(505) 020-9640",
            "address": "2254 Lockman Fall",
            "opening_hours": "08:00",
            "description": "odio et magnam",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=67.27778231834087",
            "viewCounts": 0,
            "createdAt": "2022-03-21T05:24:16.000Z",
            "updatedAt": "2022-03-21T05:24:16.000Z",
            "CategoryId": 4,
            "Category": {
                "id": 4,
                "name": "墨西哥料理",
                "createdAt": "2022-03-21T05:24:16.000Z",
                "updatedAt": "2022-03-21T05:24:16.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 7,
            "name": "Ilene Nienow",
            "tel": "(833) 616-3915",
            "address": "9985 Hessel Neck",
            "opening_hours": "08:00",
            "description": "Voluptatem asperiores consequatur quidem hic et od",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=18.113006304107305",
            "viewCounts": 0,
            "createdAt": "2022-03-21T05:24:16.000Z",
            "updatedAt": "2022-03-21T05:24:16.000Z",
            "CategoryId": 1,
            "Category": {
                "id": 1,
                "name": "中式料理",
                "createdAt": "2022-03-21T05:24:16.000Z",
                "updatedAt": "2022-03-21T05:24:16.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 8,
            "name": "Lorna Torp",
            "tel": "1-621-083-3785 x67717",
            "address": "87815 Towne Crossing",
            "opening_hours": "08:00",
            "description": "Ex tenetur distinctio ut excepturi. Harum molestia",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=19.64214128020121",
            "viewCounts": 0,
            "createdAt": "2022-03-21T05:24:16.000Z",
            "updatedAt": "2022-03-21T05:24:16.000Z",
            "CategoryId": 2,
            "Category": {
                "id": 2,
                "name": "日本料理",
                "createdAt": "2022-03-21T05:24:16.000Z",
                "updatedAt": "2022-03-21T05:24:16.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 9,
            "name": "Dianna Ratke",
            "tel": "800-800-7370 x9682",
            "address": "13956 Joan Drives",
            "opening_hours": "08:00",
            "description": "Suscipit nam est sit impedit qui. Nemo amet sit qu",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=82.2724775777698",
            "viewCounts": 0,
            "createdAt": "2022-03-21T05:24:16.000Z",
            "updatedAt": "2022-03-21T05:24:16.000Z",
            "CategoryId": 4,
            "Category": {
                "id": 4,
                "name": "墨西哥料理",
                "createdAt": "2022-03-21T05:24:16.000Z",
                "updatedAt": "2022-03-21T05:24:16.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 10,
            "name": "Bartholome Cassin",
            "tel": "314-890-2819 x8989",
            "address": "2022 McKenzie Brooks",
            "opening_hours": "08:00",
            "description": "Aliquam vitae iste labore repellat.\nId recusandae ",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=3.145031633815143",
            "viewCounts": 0,
            "createdAt": "2022-03-21T05:24:16.000Z",
            "updatedAt": "2022-03-21T05:24:16.000Z",
            "CategoryId": 3,
            "Category": {
                "id": 3,
                "name": "義大利料理",
                "createdAt": "2022-03-21T05:24:16.000Z",
                "updatedAt": "2022-03-21T05:24:16.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        }
    ],
  categories: [
        {
            "id": 1,
            "name": "中式料理",
            "createdAt": "2022-03-21T05:24:16.000Z",
            "updatedAt": "2022-03-21T05:24:16.000Z"
        },
        {
            "id": 2,
            "name": "日本料理",
            "createdAt": "2022-03-21T05:24:16.000Z",
            "updatedAt": "2022-03-21T05:24:16.000Z"
        },
        {
            "id": 3,
            "name": "義大利料理",
            "createdAt": "2022-03-21T05:24:16.000Z",
            "updatedAt": "2022-03-21T05:24:16.000Z"
        },
        {
            "id": 4,
            "name": "墨西哥料理",
            "createdAt": "2022-03-21T05:24:16.000Z",
            "updatedAt": "2022-03-21T05:24:16.000Z"
        },
        {
            "id": 5,
            "name": "素食料理",
            "createdAt": "2022-03-21T05:24:16.000Z",
            "updatedAt": "2022-03-21T05:24:16.000Z"
        },
        {
            "id": 6,
            "name": "美式料理",
            "createdAt": "2022-03-21T05:24:16.000Z",
            "updatedAt": "2022-03-21T05:24:16.000Z"
        },
        {
            "id": 7,
            "name": "複合式料理",
            "createdAt": "2022-03-21T05:24:16.000Z",
            "updatedAt": "2022-03-21T05:24:16.000Z"
        }
    ],
    page: 1,
    totalPage: [1, 2, 3, 4, 5],
    prev: 1,
    next: 2,
    CategoryId: ''
}
export default {
  components: {
    NavTabs,
    RestaurantCard,
    RestaurantsNavPills,
    RestaurantsPagination
  },
  data () {
    return {
      restaurants: [],
      categories: [],
      categoryId: -1,
      currentPage: 1,
      totalPage: [],
      previousPage: -1,
      nextPage: -1
    }
  },
  created() {
    this.fetchRestaurants()
  },
  methods: {
    fetchRestaurants () {
      const {
        restaurants,
        categories,
        categoryId,
        page,
        totalPage,
        prev,
        next
      } = dummyData
      this.restaurants = restaurants
      this.categories = categories
      this.categoryId = categoryId
      this.currentPage = page
      this.totalPage = totalPage
      this.previousPage = prev
      this.nextPage = next
    }
  }
}
</script>
