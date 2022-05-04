<template>
  <div class="container py-5">
    <NavTabs />
    <h1 class="mt-5">
      人氣餐廳
    </h1>

    <hr>
    <div
      v-for="restaurant in restaurants"
      :key="restaurant.id"
      class="card mb-3"
      style="max-width: 540px;margin: auto;"
    >
      <div class="row no-gutters">
        <div class="col-md-4">
          <a href="#">
            <img
              class="card-img"
              :src="restaurant.image"
            >
          </a>
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">
              {{ restaurant.name }}
            </h5>
            <span class="badge badge-secondary">收藏數：{{ restaurant.FavoriteCount }}</span>
            <p class="card-text">
              {{ restaurant.description }}
            </p>
            <a
              href="#"
              class="btn btn-primary mr-2"
            >Show</a>

            <button
              v-if="restaurant.isFavorited"
              @click.stop.prevent="deleteFavorited(restaurant.id)"
              type="button"
              class="btn btn-danger mr-2"
            >
              移除最愛
            </button>
            <button
              v-else
              @click.stop.prevent="addFavorited(restaurant.id)"
              type="button"
              class="btn btn-primary"
            >
              加到最愛
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
/* eslint-disable*/
import NavTabs from '../components/NavTabs.vue'
const dummyTops = {
  "restaurants": [
        {
            "id": 50,
            "name": "Julianne Johnston",
            "tel": "(855) 540-2494 x4624",
            "address": "60444 Mraz Trace",
            "opening_hours": "08:00",
            "description": "sint",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=49.03724840402026",
            "viewCounts": 0,
            "createdAt": "2022-03-21T05:24:16.000Z",
            "updatedAt": "2022-03-21T05:24:16.000Z",
            "CategoryId": 1,
            "FavoritedUsers": [],
            "isFavorited": false,
            "FavoriteCount": 0
        },
        {
            "id": 49,
            "name": "Jerome Bradtke",
            "tel": "1-728-273-6449",
            "address": "80746 Farrell Inlet",
            "opening_hours": "08:00",
            "description": "Voluptatibus suscipit dolor eaque iusto est molest",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=69.2338462381229",
            "viewCounts": 0,
            "createdAt": "2022-03-21T05:24:16.000Z",
            "updatedAt": "2022-03-21T05:24:16.000Z",
            "CategoryId": 2,
            "FavoritedUsers": [],
            "isFavorited": false,
            "FavoriteCount": 0
        },
        {
            "id": 48,
            "name": "Alvena Kovacek",
            "tel": "1-662-184-9124 x68559",
            "address": "2170 Orpha Summit",
            "opening_hours": "08:00",
            "description": "Occaecati architecto ducimus maxime magnam fugiat.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=72.83710701045496",
            "viewCounts": 0,
            "createdAt": "2022-03-21T05:24:16.000Z",
            "updatedAt": "2022-03-21T05:24:16.000Z",
            "CategoryId": 5,
            "FavoritedUsers": [],
            "isFavorited": false,
            "FavoriteCount": 0
        },
        {
            "id": 47,
            "name": "Jasmin Greenholt III",
            "tel": "(053) 374-1681",
            "address": "07905 Chloe Alley",
            "opening_hours": "08:00",
            "description": "Et accusamus fugit quasi facere aliquid esse reici",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=9.761615666188362",
            "viewCounts": 0,
            "createdAt": "2022-03-21T05:24:16.000Z",
            "updatedAt": "2022-03-21T05:24:16.000Z",
            "CategoryId": 4,
            "FavoritedUsers": [],
            "isFavorited": false,
            "FavoriteCount": 0
        },
        {
            "id": 46,
            "name": "Nick McKenzie",
            "tel": "1-634-148-1892",
            "address": "31455 Littel Crest",
            "opening_hours": "08:00",
            "description": "Eos soluta corporis omnis voluptates ea itaque por",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=89.56072012200214",
            "viewCounts": 0,
            "createdAt": "2022-03-21T05:24:16.000Z",
            "updatedAt": "2022-03-21T05:24:16.000Z",
            "CategoryId": 2,
            "FavoritedUsers": [],
            "isFavorited": false,
            "FavoriteCount": 0
        },
        {
            "id": 45,
            "name": "Troy Crist",
            "tel": "737-259-2325",
            "address": "80488 Glover Ranch",
            "opening_hours": "08:00",
            "description": "Non nisi et. Amet ab voluptas maiores porro. Omnis",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=10.608244420682556",
            "viewCounts": 0,
            "createdAt": "2022-03-21T05:24:16.000Z",
            "updatedAt": "2022-03-21T05:24:16.000Z",
            "CategoryId": 2,
            "FavoritedUsers": [],
            "isFavorited": false,
            "FavoriteCount": 0
        },
        {
            "id": 44,
            "name": "Alysa Kertzmann",
            "tel": "1-615-086-8921",
            "address": "93474 Abshire Trace",
            "opening_hours": "08:00",
            "description": "Quia quia consequatur error nihil corporis. Ex ut ",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=10.809928049161277",
            "viewCounts": 0,
            "createdAt": "2022-03-21T05:24:16.000Z",
            "updatedAt": "2022-03-21T05:24:16.000Z",
            "CategoryId": 1,
            "FavoritedUsers": [],
            "isFavorited": false,
            "FavoriteCount": 0
        },
        {
            "id": 43,
            "name": "Sonia McClure",
            "tel": "298.677.8917 x3648",
            "address": "1843 Taurean Key",
            "opening_hours": "08:00",
            "description": "Eos sit voluptates. Dolor facere enim. Sed sed eum",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=21.16470190451054",
            "viewCounts": 0,
            "createdAt": "2022-03-21T05:24:16.000Z",
            "updatedAt": "2022-03-21T05:24:16.000Z",
            "CategoryId": 2,
            "FavoritedUsers": [],
            "isFavorited": false,
            "FavoriteCount": 0
        },
        {
            "id": 42,
            "name": "Osbaldo Goldner",
            "tel": "(218) 133-8594",
            "address": "838 King Plains",
            "opening_hours": "08:00",
            "description": "Perspiciatis praesentium aut corrupti aliquid pari",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=34.62812656807919",
            "viewCounts": 0,
            "createdAt": "2022-03-21T05:24:16.000Z",
            "updatedAt": "2022-03-21T05:24:16.000Z",
            "CategoryId": 3,
            "FavoritedUsers": [],
            "isFavorited": false,
            "FavoriteCount": 0
        },
        {
            "id": 41,
            "name": "Jaiden Rippin",
            "tel": "1-312-237-1298 x91320",
            "address": "893 Darion Hollow",
            "opening_hours": "08:00",
            "description": "Velit quas voluptatum ipsam eligendi ex qui id del",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=88.63638477551473",
            "viewCounts": 0,
            "createdAt": "2022-03-21T05:24:16.000Z",
            "updatedAt": "2022-03-21T05:24:16.000Z",
            "CategoryId": 3,
            "FavoritedUsers": [],
            "isFavorited": false,
            "FavoriteCount": 0
        }
    ]
}
export default {
  components: {
    NavTabs,
  },
  data () {
return {
  restaurants: [],
    }
   },
   created () {
     this.fetchTopRestaurants()
   },
   methods: {
     fetchTopRestaurants() {
       const restaurant = dummyTops
       console.log(restaurant)
       this.restaurants = restaurant.restaurants.map((restaurant) => ({
         id: restaurant.id,
         name: restaurant.name,
         image: restaurant.image,
         description: restaurant.description,
         FavoriteCount: restaurant.FavoriteCount,
         isFavorited: restaurant.isFavorited
       })
       )
     },
    deleteFavorited() {
      this.restaurants = this.restaurants.mpa(restaurant => { if (restaurant.id !== restaurantId ) { return restaurant }
      return {
         ...this.restaurant,
         FavoriteCount: restaurant.FavoriteCount - 1,
        isFavorited: false
      }})
    },
    addFavorited() {
      this.restaurants = {
        ...this.restaurants,
        isFavorited: true
     }
    }
   }
  }
</script>