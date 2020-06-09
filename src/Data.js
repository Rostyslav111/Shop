const sampleProducts = [{
    id: 1,
    name: "Nike Air Presto",
    category: "Одяг та взуття",
    price: 1199,
    description: "Кроссівки Nike, чоловічі Оригінал ",
    popular: true,
    imageUrls: [
      "https://images.ua.prom.st/1894630336_w640_h640_1894630336.jpg"
    ]
  },
  {
    id: 2,
    name: "Смарт-годинник SAMSUNG Galaxy Watch 46mm Silver (SM-R800NZSASEK)",
    category: "Ювелірні вироби та годинник",
    price: 7999,
    description: "Тут має бути опис годинника))",
    popular: false,
    imageUrls: [
      "https://i1.foxtrot.com.ua/product/MediumImages/6417205_0.jpg"
    ]
  },
  {
    id: 3,
    name: "Apple Watch Series 5",
    category: "Ювелірні вироби та годинник",
    price: 14399,

    popular: false,
    imageUrls: [
      "https://i1.rozetka.ua/goods/14762956/copy_apple_mqkv2_5db842e5b5024_images_14762956742.jpg"
    ]
  },
  {
    id: 4,
    name: "Атлант розправив плечі",
    category: "Книги",
    price: 700,
    description: "«Атлант розправив плечі» – magnus opus Айн Ренд, який авторка писала впродовж 12 років, став її найгучнішим" +
      "бестселером, одним із найвпливовіших художніх творів світової літератури. Згідно з даними опитування" +
      "Бібліотеки Конгресу США, це друга після Біблії книга, яка змінила життя американських читачів. Три частини" +
      "трилогії названі відповідно до основних законів логіки: «Несуперечність», «Або-або, «А є А».",

    popular: true,
    imageUrls: [
      "https://nashformat.ua/files/products/atlant-rozpravyv-plechi-komplekt-z-troh-knyg-u-futlyari-702806.800x800.jpeg?200327203848"
    ]
  },
  {
    id: 5,
    name: "Игровой ПК на i7! ZEVS PC8980UX i7 2600 + RX 550 4GB + 120GB SSD",
    category: "Комп'ютери",
    price: 12699,
    description: "Ищете мощный, надежный игровой аппарат на базе топовых комплектующих за умеренные деньги? " +
      "Тогда ZEVS PC 8980UX станет идеальным решением! Сердцем PC 8980UX является процессор Intel core i7, " +
      "который в паре с одной из наиболее популярных видеокарт ATI Radeon RX 550 4GB позволяет в полной мере насладиться рабочим и игровым процессом," +
      "будь то простые офисные приложения, требовательные видеоигры, либо декодирование роликов, отснятых в высоком разрешении",

    popular: true,
    imageUrls: [
      "https://www.uastore.com.ua/files/products/8980Uwg700.800x600w.jpg?19748973264fe43f5e0b02f8e1b2f984",
    ]
  },

  {
    id: 7,
    name: "Apple Watch Series 5 44mm Gold Aluminum Case with Pink Sand Sport Band MWVE2GK/A",
    category: "Ювелірні вироби та годинник",
    price: 14399,
    description: "",
    popular: false,
    imageUrls: [
      "https://i.citrus.ua/uploads/shop/0/a/0a55299100d8e38fb6dd805ca97a9bfe.jpg"
    ]
  },
  {
    id: 8,
    name: "Adidas Gazelle",
    category: "Одяг та взуття",
    price: 800,
    description: "",
    popular: false,
    imageUrls: [
      "https://yessport.com.ua/rus_pl_%D0%9A%D1%80%D0%BE%D1%81%D1%81%D0%BE%D0%B2%D0%BA%D0%B8-ADIDAS-ORIGINALS-GAZELLE-BB5476-21878_1.jpg"
    ]
  },
  {
    id: 9,
    name: "Bluetooth клавіатура",
    category: "Комп'ютери",
    price: 450,
    description: "",
    popular: false,
    imageUrls: [
      "https://matrox.com.ua/prodimages/4551622/72007.jpg"
    ]
  },
  {
    id: 10,
    name: "XIAOMI Amazfit GTS Obsidian Black",
    category: "Ювелірні вироби та годинник",
    price: 3499,
    description: "",

    popular: false,
    imageUrls: [
      "https://i1.foxtrot.com.ua/product/MediumImages/6530921_0.jpg"
    ]
  },
  {
    id: 11,
    name: "Samsung LS22R350FHIXCI",
    category: "Ювелірні вироби та годинник",
    price: 3399,
    description: "",
    popular: false,
    imageUrls: [
      "https://cdn.comfy.ua/media/catalog/product/cache/5/thumbnail/395x554/9df78eab33525d08d6e5fb8d27136e95/s/m/sm-r500_003_r-perspective_green.jpg"
    ]
  },
  {
    id: 12,
    name: "Samsung Galaxy Watch Active Green (SM-R500NZGASEK)",
    category: "Ювелірні вироби та годинник",
    price: 5999,
    description: "",

    popular: false,
    imageUrls: [
      "https://i1.foxtrot.com.ua/product/MediumImages/6464157_0.jpg"
    ]
  }
];


const categories = [{
  name: "Всі категорії",
  icon: "list"
},
{
  name: "Одяг та взуття",
  icon: "group"
},
{
  name: "Ювелірні вироби та годинник",
  icon: "watch"
},
{
  name: "Книги",
  icon: "menu_book"
},
{
  name: "Комп'ютери",
  icon: "computer"
}
];



const dataForTheMenu = [{
    name: "Головна",
    url: "/",
    icon: "home",
    id: 0
  },
  {
    name: "Категорії товару",
    id: 1,
    children: categories.map((x, i) => {
      return {
        name: x.name,
        id: i,
        url: "/?category=" + x.name,
        icon: x.icon
      };
    })
  }
];

export {
  sampleProducts,
  categories,
  dataForTheMenu
};