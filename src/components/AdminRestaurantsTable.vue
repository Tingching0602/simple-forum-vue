<template>
  <table class="table">
    <thead class="thead-dark">
      <tr>
        <th scope="col">
          #
        </th>
        <th scope="col">
          Category
        </th>
        <th scope="col">
          Name
        </th>
        <th
          scope="col"
          width="300"
        >
          操作
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="restaurant in restaurants"
        :key="restaurant.id"
      >
        <th scope="row">
          {{ restaurant.id }}
        </th>
        <td>{{ restaurant.Category ? restaurant.Category.name : '未分類' }}</td>
        <td>{{ restaurant.name }}</td>
        <td class="d-flex justify-content-between">
          <a
            href="#"
            class="btn btn-link"
          >Show</a>

          <a
            href="#"
            class="btn btn-link"
          >Edit</a>

          <button
            type="button"
            class="btn btn-link"
          >
            Delete
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
/* eslint-disable*/
const dummyData = {
  // ... 請貼上 API 資料
  "restaurants": 
     [
        {
            "id": 2,
            "name": "Obie Wintheiser",
            "tel": "098-527-0731",
            "address": "745 Britney Street",
            "opening_hours": "08:00",
            "description": "sed sed eligendi",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=9.569818715160627",
            "viewCounts": 123,
            "createdAt": "2019-07-30T16:24:55.433Z",
            "updatedAt": "2019-07-30T16:24:55.433Z",
            "CategoryId": null,
            "Category": null
        },
        {
            "id": 3,
            "name": "loowoomoo",
            "tel": "098-527-9302",
            "address": "749 John Street",
            "opening_hours": "09:00",
            "description": "mom miya",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=9.569818715160627",
            "viewCounts": 355,
            "createdAt": "2019-07-30T16:24:55.433Z",
            "updatedAt": "2019-07-30T16:24:55.433Z",
            "CategoryId": null,
            "Category": null
        },
         {
            "id": 9,
            "name": "best pasta",
            "tel": "088-763-9302",
            "address": "740 cool Street",
            "opening_hours": "08:00",
            "description": "pizza is good",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=9.569818715160627",
            "viewCounts": 90,
            "createdAt": "2019-07-30T16:24:55.433Z",
            "updatedAt": "2019-07-30T16:24:55.433Z",
            "CategoryId": null,
            "Category": null
        },
        {
            "id": 8,
            "name": "banana icecream",
            "tel": "098-999-4567",
            "address": "021 foze Street",
            "opening_hours": "08:00",
            "description": "so cool it is wonderful",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=9.569818715160627",
            "viewCounts": null,
            "createdAt": "2019-07-30T16:24:55.433Z",
            "updatedAt": "2019-07-30T16:24:55.433Z",
           "CategoryId": null,
           "Category": null
        },
        {
            "id": 1,
            "name": "pizza king",
            "tel": "098-789-9089",
            "address": "022 pizza Street",
            "opening_hours": "09:00",
            "description": "it is best pizza ",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=9.569818715160627",
            "viewCounts": null,
            "createdAt": "2019-07-30T16:24:55.433Z",
            "updatedAt": "2019-07-30T16:24:55.433Z",
           "CategoryId": null,
           "Category": null
        },
        {
            "id": 34,
            "name": "coco tea",
            "tel": "098-335-7181",
            "address": "012 bobo Road",
            "opening_hours": "09:00",
            "description": "teatime",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=9.569818715160627",
            "viewCounts": null,
            "createdAt": "2019-07-30T16:24:55.433Z",
            "updatedAt": "2019-07-30T16:24:55.433Z",
           "CategoryId": null,
           "Category": null
        },
        {
            "id": 678,
            "name": "chinese tofu",
            "tel": "098-789-9089",
            "address": "087 chinatown Road",
            "opening_hours": "09:00",
            "description": "tradition food",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=9.569818715160627",
            "viewCounts": null,
            "createdAt": "2019-07-30T16:24:55.433Z",
            "updatedAt": "2019-07-30T16:24:55.433Z",
           "CategoryId": null,
           "Category": null
        },
        {
            "id": 16,
            "name": "beauty magic",
            "tel": "098-808-7722",
            "address": "077 witch Street",
            "opening_hours": "10:00",
            "description": "welcome to magic world",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=9.569818715160627",
            "viewCounts": null,
            "createdAt": "2019-07-30T16:24:55.433Z",
            "updatedAt": "2019-07-30T16:24:55.433Z",
           "CategoryId": null,
           "Category": null
        }
    ]
}

export default {
  data () {
    return {
      restaurants: []
    }
  },
  created () {
    this.fetchRestaurants()
  },
  methods: {
    fetchRestaurants () {
      this.restaurants = dummyData.restaurants
    }
  }
}
</script>
