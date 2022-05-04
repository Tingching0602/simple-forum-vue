<template>
  <div class="container py-5">
    <!-- use NavTab -->
    <NavTabs />
    <h1 class="mt-5">最新動態</h1>
    <hr />
    <div class="row">
      <div class="col-md-6">
        <h3>最新餐廳</h3>
        <NewestRestaurants :restaurants="restaurants" />
        <!-- 最新餐廳 NewestRestaurants -->
      </div>
      <div class="col-md-6">
        <!-- 最新評論 NewestComments-->
        <h3>最新評論</h3>
        <NewestComments :comments="comments" />
      </div>
    </div>
  </div>
</template>
<script>
/*eslint-disable*/
import NavTabs from "../components/NavTabs.vue";
import NewestRestaurants from "../components/NewestRestaurants.vue";
import NewestComments from "../components/NewestComments.vue";
const dummyData = {
  restaurants: [
    {
      id: 1,
      name: "Miss Celestine Miller",
      tel: "1-028-480-3466",
      address: "745 Britney Street",
      opening_hours: "08:00",
      description: "incidunt rerum minus",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=9.569818715160627",
      viewCounts: 0,
      createdAt: "2022-03-21T05:24:16.000Z",
      updatedAt: "2022-03-21T05:24:16.000Z",
      CategoryId: 3,
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2022-03-21T05:24:16.000Z",
        updatedAt: "2022-03-21T05:24:16.000Z",
      },
    },
    {
      id: 2,
      name: "Michaela Walter",
      tel: "(699) 773-3860",
      address: "9380 Lesch Tunnel",
      opening_hours: "08:00",
      description:
        "Temporibus eum odit quia cum et eligendi sit cupiditate. Quia sint dolorum optio consectetur ad modi velit. Voluptatum sed repudiandae nostrum laboriosam. Dolor ipsum est ducimus quae eius ea. Est quaerat natus nobis. Repudiandae amet iusto.\n \rNemo qui sed mollitia. Qui asperiores totam repudiandae minima soluta deserunt animi beatae molestiae. Qui asperiores voluptate. Quia est praesentium nisi. Accusantium nam repellendus eum dolor ipsum sed sint iure. Beatae incidunt possimus aut voluptas quis.\n \rAmet aut est quos autem enim et porro ipsam. Consectetur illo voluptatibus est ducimus sequi rerum porro dolores. Dicta delectus facilis voluptatibus qui. Quia alias et aliquid qui non dicta praesentium. Necessitatibus minus nostrum praesentium debitis consequatur nesciunt ea.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=84.33266028309781",
      viewCounts: 0,
      createdAt: "2022-03-21T05:24:16.000Z",
      updatedAt: "2022-03-21T05:24:16.000Z",
      CategoryId: 4,
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2022-03-21T05:24:16.000Z",
        updatedAt: "2022-03-21T05:24:16.000Z",
      },
    },
    {
      id: 3,
      name: "Gilbert Ferry",
      tel: "457-414-2784 x08581",
      address: "2195 Carlo Lane",
      opening_hours: "08:00",
      description: "magni molestiae enim",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=28.448797954870987",
      viewCounts: 0,
      createdAt: "2022-03-21T05:24:16.000Z",
      updatedAt: "2022-03-21T05:24:16.000Z",
      CategoryId: 4,
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2022-03-21T05:24:16.000Z",
        updatedAt: "2022-03-21T05:24:16.000Z",
      },
    },
    {
      id: 4,
      name: "Micah Barton",
      tel: "1-873-012-4171",
      address: "3655 Aletha Coves",
      opening_hours: "08:00",
      description:
        "Voluptatem tempora ducimus. Ea laborum saepe sit aut ex qui recusandae. Nihil dolor deserunt magnam magnam.\n \rVelit cum repudiandae at dicta provident tenetur. Quis officia et quo et. Omnis dolores recusandae fugiat porro recusandae necessitatibus. Cumque quidem est. Quo tenetur esse sed.\n \rNon laboriosam doloribus exercitationem quam autem et ducimus praesentium deserunt. Eaque amet in. Atque quisquam amet.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=56.01193159872915",
      viewCounts: 0,
      createdAt: "2022-03-21T05:24:16.000Z",
      updatedAt: "2022-03-21T05:24:16.000Z",
      CategoryId: 1,
      Category: {
        id: 1,
        name: "中式料理",
        createdAt: "2022-03-21T05:24:16.000Z",
        updatedAt: "2022-03-21T05:24:16.000Z",
      },
    },
    {
      id: 5,
      name: "Louisa Hayes I",
      tel: "665-408-5653 x4931",
      address: "1636 McKenzie Union",
      opening_hours: "08:00",
      description:
        "Necessitatibus autem non molestias. Dolorum quia excepturi magnam fuga consequatur asperiores eos. Nostrum voluptatem provident quas veniam.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=28.92582281482945",
      viewCounts: 0,
      createdAt: "2022-03-21T05:24:16.000Z",
      updatedAt: "2022-03-21T05:24:16.000Z",
      CategoryId: 3,
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2022-03-21T05:24:16.000Z",
        updatedAt: "2022-03-21T05:24:16.000Z",
      },
    },
    {
      id: 6,
      name: "Ardella Purdy MD",
      tel: "(505) 020-9640",
      address: "2254 Lockman Fall",
      opening_hours: "08:00",
      description: "odio et magnam",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=67.27778231834087",
      viewCounts: 0,
      createdAt: "2022-03-21T05:24:16.000Z",
      updatedAt: "2022-03-21T05:24:16.000Z",
      CategoryId: 4,
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2022-03-21T05:24:16.000Z",
        updatedAt: "2022-03-21T05:24:16.000Z",
      },
    },
    {
      id: 7,
      name: "Ilene Nienow",
      tel: "(833) 616-3915",
      address: "9985 Hessel Neck",
      opening_hours: "08:00",
      description:
        "Voluptatem asperiores consequatur quidem hic et odit unde.\nNon fugiat sapiente vel iusto.\nEt eligendi animi enim ullam maiores quas vel.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=18.113006304107305",
      viewCounts: 0,
      createdAt: "2022-03-21T05:24:16.000Z",
      updatedAt: "2022-03-21T05:24:16.000Z",
      CategoryId: 1,
      Category: {
        id: 1,
        name: "中式料理",
        createdAt: "2022-03-21T05:24:16.000Z",
        updatedAt: "2022-03-21T05:24:16.000Z",
      },
    },
    {
      id: 8,
      name: "Lorna Torp",
      tel: "1-621-083-3785 x67717",
      address: "87815 Towne Crossing",
      opening_hours: "08:00",
      description:
        "Ex tenetur distinctio ut excepturi. Harum molestiae molestiae aut et sed perferendis vel ex ut. Quo dolor enim possimus omnis dolores sequi voluptatibus quis ex. Delectus ipsam officia qui et dolorem deleniti consequatur maiores et.\n \rNisi voluptate quam rem. Ducimus sit sit expedita ipsa recusandae recusandae voluptatem unde sint. Non dolorum suscipit cumque ullam consequatur ad expedita possimus qui. Impedit ut possimus velit sequi quis quia sit vel. Facere asperiores minus. Repellendus ipsam maiores accusamus nostrum labore explicabo quibusdam saepe.\n \rAb qui deserunt et illum in excepturi. Perferendis ab quas. Asperiores a numquam eum inventore est sequi rem sint. Molestias aut aut provident eos architecto tempora ut nulla. Nisi itaque sunt ipsum aut fugit expedita quod. Voluptatibus et nihil ipsum modi.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=19.64214128020121",
      viewCounts: 0,
      createdAt: "2022-03-21T05:24:16.000Z",
      updatedAt: "2022-03-21T05:24:16.000Z",
      CategoryId: 2,
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2022-03-21T05:24:16.000Z",
        updatedAt: "2022-03-21T05:24:16.000Z",
      },
    },
    {
      id: 9,
      name: "Dianna Ratke",
      tel: "800-800-7370 x9682",
      address: "13956 Joan Drives",
      opening_hours: "08:00",
      description:
        "Suscipit nam est sit impedit qui. Nemo amet sit qui. Voluptatem eos a repudiandae porro pariatur. Dolorem earum labore eius tenetur culpa. Atque pariatur quia culpa magni.\n \rEarum qui beatae nisi optio. Rerum voluptas voluptas nulla doloribus commodi voluptates. Voluptatem minima ab impedit.\n \rMaxime quia quia porro nostrum ut doloribus. Quisquam sed in adipisci aperiam sed dolor et cumque necessitatibus. Atque sapiente ut aut explicabo provident voluptate ut eos. Dolores modi reiciendis inventore beatae sequi assumenda. Dolor et neque impedit nisi est. Laudantium quo et.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=82.2724775777698",
      viewCounts: 0,
      createdAt: "2022-03-21T05:24:16.000Z",
      updatedAt: "2022-03-21T05:24:16.000Z",
      CategoryId: 4,
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2022-03-21T05:24:16.000Z",
        updatedAt: "2022-03-21T05:24:16.000Z",
      },
    },
    {
      id: 10,
      name: "Bartholome Cassin",
      tel: "314-890-2819 x8989",
      address: "2022 McKenzie Brooks",
      opening_hours: "08:00",
      description:
        "Aliquam vitae iste labore repellat.\nId recusandae incidunt qui unde.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=3.145031633815143",
      viewCounts: 0,
      createdAt: "2022-03-21T05:24:16.000Z",
      updatedAt: "2022-03-21T05:24:16.000Z",
      CategoryId: 3,
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2022-03-21T05:24:16.000Z",
        updatedAt: "2022-03-21T05:24:16.000Z",
      },
    },
  ],
  comments: [
    {
      id: 1,
      text: "Quod fugiat laudantium quo laborum quas.",
      UserId: 2,
      RestaurantId: 1,
      createdAt: "2022-03-21T05:24:16.000Z",
      updatedAt: "2022-03-21T05:24:16.000Z",
      User: {
        id: 2,
        name: "user1",
        email: "user1@example.com",
        password:
          "$2a$10$caIdaby9sy6h6jol9RkL/.ApL7FMxTxTX/yln/4gpKGrScKw8qIea",
        isAdmin: false,
        image: null,
        createdAt: "2022-03-21T05:24:16.000Z",
        updatedAt: "2022-03-21T05:24:16.000Z",
      },
      Restaurant: {
        id: 1,
        name: "Miss Celestine Miller",
        tel: "1-028-480-3466",
        address: "745 Britney Street",
        opening_hours: "08:00",
        description: "incidunt rerum minus",
        image:
          "https://loremflickr.com/320/240/restaurant,food/?random=9.569818715160627",
        viewCounts: 0,
        createdAt: "2022-03-21T05:24:16.000Z",
        updatedAt: "2022-03-21T05:24:16.000Z",
        CategoryId: 3,
      },
    },
    {
      id: 2,
      text: "Voluptas perferendis quia ut totam magni harum praesentium illo libero.",
      UserId: 2,
      RestaurantId: 2,
      createdAt: "2022-03-21T05:24:16.000Z",
      updatedAt: "2022-03-21T05:24:16.000Z",
      User: {
        id: 2,
        name: "user1",
        email: "user1@example.com",
        password:
          "$2a$10$caIdaby9sy6h6jol9RkL/.ApL7FMxTxTX/yln/4gpKGrScKw8qIea",
        isAdmin: false,
        image: null,
        createdAt: "2022-03-21T05:24:16.000Z",
        updatedAt: "2022-03-21T05:24:16.000Z",
      },
      Restaurant: {
        id: 2,
        name: "Michaela Walter",
        tel: "(699) 773-3860",
        address: "9380 Lesch Tunnel",
        opening_hours: "08:00",
        description:
          "Temporibus eum odit quia cum et eligendi sit cupiditate. Quia sint dolorum optio consectetur ad modi velit. Voluptatum sed repudiandae nostrum laboriosam. Dolor ipsum est ducimus quae eius ea. Est quaerat natus nobis. Repudiandae amet iusto.\n \rNemo qui sed mollitia. Qui asperiores totam repudiandae minima soluta deserunt animi beatae molestiae. Qui asperiores voluptate. Quia est praesentium nisi. Accusantium nam repellendus eum dolor ipsum sed sint iure. Beatae incidunt possimus aut voluptas quis.\n \rAmet aut est quos autem enim et porro ipsam. Consectetur illo voluptatibus est ducimus sequi rerum porro dolores. Dicta delectus facilis voluptatibus qui. Quia alias et aliquid qui non dicta praesentium. Necessitatibus minus nostrum praesentium debitis consequatur nesciunt ea.",
        image:
          "https://loremflickr.com/320/240/restaurant,food/?random=84.33266028309781",
        viewCounts: 0,
        createdAt: "2022-03-21T05:24:16.000Z",
        updatedAt: "2022-03-21T05:24:16.000Z",
        CategoryId: 4,
      },
    },
    {
      id: 3,
      text: "Sed dolor fuga molestias exercitationem ut accusamus excepturi facere distinctio.",
      UserId: 2,
      RestaurantId: 3,
      createdAt: "2022-03-21T05:24:16.000Z",
      updatedAt: "2022-03-21T05:24:16.000Z",
      User: {
        id: 2,
        name: "user1",
        email: "user1@example.com",
        password:
          "$2a$10$caIdaby9sy6h6jol9RkL/.ApL7FMxTxTX/yln/4gpKGrScKw8qIea",
        isAdmin: false,
        image: null,
        createdAt: "2022-03-21T05:24:16.000Z",
        updatedAt: "2022-03-21T05:24:16.000Z",
      },
      Restaurant: {
        id: 3,
        name: "Gilbert Ferry",
        tel: "457-414-2784 x08581",
        address: "2195 Carlo Lane",
        opening_hours: "08:00",
        description: "magni molestiae enim",
        image:
          "https://loremflickr.com/320/240/restaurant,food/?random=28.448797954870987",
        viewCounts: 0,
        createdAt: "2022-03-21T05:24:16.000Z",
        updatedAt: "2022-03-21T05:24:16.000Z",
        CategoryId: 4,
      },
    },
    {
      id: 4,
      text: "Maxime doloremque voluptas sed cupiditate dolores commodi.",
      UserId: 3,
      RestaurantId: 4,
      createdAt: "2022-03-21T05:24:16.000Z",
      updatedAt: "2022-03-21T05:24:16.000Z",
      User: {
        id: 3,
        name: "user2",
        email: "user2@example.com",
        password:
          "$2a$10$Ecri7F740yOQfRN4SGnNR.s5CZIleQwfjaZDxlutuXc01xfwtulwK",
        isAdmin: false,
        image: null,
        createdAt: "2022-03-21T05:24:16.000Z",
        updatedAt: "2022-03-21T05:24:16.000Z",
      },
      Restaurant: {
        id: 4,
        name: "Micah Barton",
        tel: "1-873-012-4171",
        address: "3655 Aletha Coves",
        opening_hours: "08:00",
        description:
          "Voluptatem tempora ducimus. Ea laborum saepe sit aut ex qui recusandae. Nihil dolor deserunt magnam magnam.\n \rVelit cum repudiandae at dicta provident tenetur. Quis officia et quo et. Omnis dolores recusandae fugiat porro recusandae necessitatibus. Cumque quidem est. Quo tenetur esse sed.\n \rNon laboriosam doloribus exercitationem quam autem et ducimus praesentium deserunt. Eaque amet in. Atque quisquam amet.",
        image:
          "https://loremflickr.com/320/240/restaurant,food/?random=56.01193159872915",
        viewCounts: 0,
        createdAt: "2022-03-21T05:24:16.000Z",
        updatedAt: "2022-03-21T05:24:16.000Z",
        CategoryId: 1,
      },
    },
    {
      id: 5,
      text: "Sint eveniet sed sed eum maxime praesentium tempore minus aliquid.",
      UserId: 1,
      RestaurantId: 5,
      createdAt: "2022-03-21T05:24:16.000Z",
      updatedAt: "2022-03-21T05:24:16.000Z",
      User: {
        id: 1,
        name: "root",
        email: "root@example.com",
        password:
          "$2a$10$UocYTCQ8NIfr.LvDFoO7Iu/eowGj94aJB.B3UbmsKgYGy7otnJqoy",
        isAdmin: true,
        image: null,
        createdAt: "2022-03-21T05:24:16.000Z",
        updatedAt: "2022-03-21T05:24:16.000Z",
      },
      Restaurant: {
        id: 5,
        name: "Louisa Hayes I",
        tel: "665-408-5653 x4931",
        address: "1636 McKenzie Union",
        opening_hours: "08:00",
        description:
          "Necessitatibus autem non molestias. Dolorum quia excepturi magnam fuga consequatur asperiores eos. Nostrum voluptatem provident quas veniam.",
        image:
          "https://loremflickr.com/320/240/restaurant,food/?random=28.92582281482945",
        viewCounts: 0,
        createdAt: "2022-03-21T05:24:16.000Z",
        updatedAt: "2022-03-21T05:24:16.000Z",
        CategoryId: 3,
      },
    },
    {
      id: 6,
      text: "Nisi sapiente in ut corporis repellendus.",
      UserId: 1,
      RestaurantId: 6,
      createdAt: "2022-03-21T05:24:16.000Z",
      updatedAt: "2022-03-21T05:24:16.000Z",
      User: {
        id: 1,
        name: "root",
        email: "root@example.com",
        password:
          "$2a$10$UocYTCQ8NIfr.LvDFoO7Iu/eowGj94aJB.B3UbmsKgYGy7otnJqoy",
        isAdmin: true,
        image: null,
        createdAt: "2022-03-21T05:24:16.000Z",
        updatedAt: "2022-03-21T05:24:16.000Z",
      },
      Restaurant: {
        id: 6,
        name: "Ardella Purdy MD",
        tel: "(505) 020-9640",
        address: "2254 Lockman Fall",
        opening_hours: "08:00",
        description: "odio et magnam",
        image:
          "https://loremflickr.com/320/240/restaurant,food/?random=67.27778231834087",
        viewCounts: 0,
        createdAt: "2022-03-21T05:24:16.000Z",
        updatedAt: "2022-03-21T05:24:16.000Z",
        CategoryId: 4,
      },
    },
    {
      id: 7,
      text: "Porro cum mollitia.",
      UserId: 2,
      RestaurantId: 7,
      createdAt: "2022-03-21T05:24:16.000Z",
      updatedAt: "2022-03-21T05:24:16.000Z",
      User: {
        id: 2,
        name: "user1",
        email: "user1@example.com",
        password:
          "$2a$10$caIdaby9sy6h6jol9RkL/.ApL7FMxTxTX/yln/4gpKGrScKw8qIea",
        isAdmin: false,
        image: null,
        createdAt: "2022-03-21T05:24:16.000Z",
        updatedAt: "2022-03-21T05:24:16.000Z",
      },
      Restaurant: {
        id: 7,
        name: "Ilene Nienow",
        tel: "(833) 616-3915",
        address: "9985 Hessel Neck",
        opening_hours: "08:00",
        description:
          "Voluptatem asperiores consequatur quidem hic et odit unde.\nNon fugiat sapiente vel iusto.\nEt eligendi animi enim ullam maiores quas vel.",
        image:
          "https://loremflickr.com/320/240/restaurant,food/?random=18.113006304107305",
        viewCounts: 0,
        createdAt: "2022-03-21T05:24:16.000Z",
        updatedAt: "2022-03-21T05:24:16.000Z",
        CategoryId: 1,
      },
    },
    {
      id: 8,
      text: "Libero debitis consequatur quos ut voluptatem recusandae cupiditate ducimus.",
      UserId: 3,
      RestaurantId: 8,
      createdAt: "2022-03-21T05:24:16.000Z",
      updatedAt: "2022-03-21T05:24:16.000Z",
      User: {
        id: 3,
        name: "user2",
        email: "user2@example.com",
        password:
          "$2a$10$Ecri7F740yOQfRN4SGnNR.s5CZIleQwfjaZDxlutuXc01xfwtulwK",
        isAdmin: false,
        image: null,
        createdAt: "2022-03-21T05:24:16.000Z",
        updatedAt: "2022-03-21T05:24:16.000Z",
      },
      Restaurant: {
        id: 8,
        name: "Lorna Torp",
        tel: "1-621-083-3785 x67717",
        address: "87815 Towne Crossing",
        opening_hours: "08:00",
        description:
          "Ex tenetur distinctio ut excepturi. Harum molestiae molestiae aut et sed perferendis vel ex ut. Quo dolor enim possimus omnis dolores sequi voluptatibus quis ex. Delectus ipsam officia qui et dolorem deleniti consequatur maiores et.\n \rNisi voluptate quam rem. Ducimus sit sit expedita ipsa recusandae recusandae voluptatem unde sint. Non dolorum suscipit cumque ullam consequatur ad expedita possimus qui. Impedit ut possimus velit sequi quis quia sit vel. Facere asperiores minus. Repellendus ipsam maiores accusamus nostrum labore explicabo quibusdam saepe.\n \rAb qui deserunt et illum in excepturi. Perferendis ab quas. Asperiores a numquam eum inventore est sequi rem sint. Molestias aut aut provident eos architecto tempora ut nulla. Nisi itaque sunt ipsum aut fugit expedita quod. Voluptatibus et nihil ipsum modi.",
        image:
          "https://loremflickr.com/320/240/restaurant,food/?random=19.64214128020121",
        viewCounts: 0,
        createdAt: "2022-03-21T05:24:16.000Z",
        updatedAt: "2022-03-21T05:24:16.000Z",
        CategoryId: 2,
      },
    },
    {
      id: 9,
      text: "Minima id tempore dolorem sit unde.",
      UserId: 3,
      RestaurantId: 9,
      createdAt: "2022-03-21T05:24:16.000Z",
      updatedAt: "2022-03-21T05:24:16.000Z",
      User: {
        id: 3,
        name: "user2",
        email: "user2@example.com",
        password:
          "$2a$10$Ecri7F740yOQfRN4SGnNR.s5CZIleQwfjaZDxlutuXc01xfwtulwK",
        isAdmin: false,
        image: null,
        createdAt: "2022-03-21T05:24:16.000Z",
        updatedAt: "2022-03-21T05:24:16.000Z",
      },
      Restaurant: {
        id: 9,
        name: "Dianna Ratke",
        tel: "800-800-7370 x9682",
        address: "13956 Joan Drives",
        opening_hours: "08:00",
        description:
          "Suscipit nam est sit impedit qui. Nemo amet sit qui. Voluptatem eos a repudiandae porro pariatur. Dolorem earum labore eius tenetur culpa. Atque pariatur quia culpa magni.\n \rEarum qui beatae nisi optio. Rerum voluptas voluptas nulla doloribus commodi voluptates. Voluptatem minima ab impedit.\n \rMaxime quia quia porro nostrum ut doloribus. Quisquam sed in adipisci aperiam sed dolor et cumque necessitatibus. Atque sapiente ut aut explicabo provident voluptate ut eos. Dolores modi reiciendis inventore beatae sequi assumenda. Dolor et neque impedit nisi est. Laudantium quo et.",
        image:
          "https://loremflickr.com/320/240/restaurant,food/?random=82.2724775777698",
        viewCounts: 0,
        createdAt: "2022-03-21T05:24:16.000Z",
        updatedAt: "2022-03-21T05:24:16.000Z",
        CategoryId: 4,
      },
    },
    {
      id: 10,
      text: "Dolor exercitationem eligendi nostrum.",
      UserId: 3,
      RestaurantId: 10,
      createdAt: "2022-03-21T05:24:16.000Z",
      updatedAt: "2022-03-21T05:24:16.000Z",
      User: {
        id: 3,
        name: "user2",
        email: "user2@example.com",
        password:
          "$2a$10$Ecri7F740yOQfRN4SGnNR.s5CZIleQwfjaZDxlutuXc01xfwtulwK",
        isAdmin: false,
        image: null,
        createdAt: "2022-03-21T05:24:16.000Z",
        updatedAt: "2022-03-21T05:24:16.000Z",
      },
      Restaurant: {
        id: 10,
        name: "Bartholome Cassin",
        tel: "314-890-2819 x8989",
        address: "2022 McKenzie Brooks",
        opening_hours: "08:00",
        description:
          "Aliquam vitae iste labore repellat.\nId recusandae incidunt qui unde.",
        image:
          "https://loremflickr.com/320/240/restaurant,food/?random=3.145031633815143",
        viewCounts: 0,
        createdAt: "2022-03-21T05:24:16.000Z",
        updatedAt: "2022-03-21T05:24:16.000Z",
        CategoryId: 3,
      },
    },
  ],
};
export default {
  components: {
    NavTabs,
    NewestRestaurants,
    NewestComments,
  },
  data() {
    return {
      restaurants: [],
      comments: [],
    };
  },
  created() {
    this.fetchFeeds();
  },
  methods: {
    fetchFeeds() {
      const { restaurants, comments } = dummyData;
      this.restaurants = restaurants;
      this.comments = comments.filter(comment => comment.Restaurant);
    },
  },
};
</script>
