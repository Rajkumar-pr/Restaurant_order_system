import Dosa from "./images/dosa.jpg";
import Chola from "./images/chhola.jpg";
import Idli from "./images/idli.jpg";
import MasalaDosa from "./images/masala.jpg";
import Paneer from "./images/paneer.jpg";
import Gujrati from "./images/gujrati.jpeg";
import Burger from "./images/Screenshot 2024-05-25 130927.png";
import Pizza from "./images/Screenshot 2024-05-25 150857.png";
import VegBiryani from "./images/Screenshot 2024-05-25 151030.png"

export const MenuList = [
  {
    name: "Dosa",
    description:  
    "Experience the crispy delight of our Dosa! Thin, golden-brown crepes made from fermented rice and lentil batter, served with a side of flavorful coconut chutney and tangy sambar. Enjoy the perfect balance of textures and flavors in every bite of this South Indian classic.",
    image: Dosa,
    price: 200,
    category: "south",
    restaurant: {
      name: "Burger Binge",
      image: "https://example.com/burgerbinge-image.jpg" // Replace with actual restaurant image URL
    }
  },
  {
    name: "Chola",
    description:
      "Indulge in the rich flavors of our Chola dish; made with tender chickpeas simmered in aromatic spices and a savory tomato-based gravy, our Chola is a hearty and satisfying culinary experience; savor the wholesome goodness and tantalizing spices that make this dish a favorite among food enthusiasts.",
    image: Chola,
    price: 250,
    category: "north", restaurant: {
      name: "Burger Binge",
      image: "https://example.com/burgerbinge-image.jpg" // Replace with actual restaurant image URL
    }

  },
  {
    name: "Idli Sambhar",
    description:
    "Delight your taste buds with our authentic Idli Sambar dish! Enjoy fluffy steamed idlis paired perfectly with flavorful lentil-based sambar, creating a harmonious blend of textures and spices that will leave you craving for more. Experience the essence of South Indian cuisine in every bite!",
    image: Idli,
    price: 300,
    category: "south",
    restaurant: {
      name: "Burger Binge",
      image: "https://example.com/burgerbinge-image.jpg" // Replace with actual restaurant image URL
    }
  },
  {
    name: "Masala Dosa",
    description:
      "Savor the aromatic flavors of our Masala Dosa! Crispy golden-brown crepes filled with a delicious spiced potato filling, served with coconut chutney and savory sambar on the side. Experience the perfect blend of crunchy exterior and flavorful interior, making every bite a delightful culinary journey",
    image: MasalaDosa,
    price: 100,
    category: "south",
    restaurant: {
      name: "Burger Binge",
      image: "https://example.com/burgerbinge-image.jpg" // Replace with actual restaurant image URL
    }
  },
  {
    name: "Paneer",
    description:
      "Indulge in the exquisite flavors of our Paneer dish! Tender cubes of paneer (Indian cottage cheese) marinated in a blend of aromatic spices, cooked to perfection in a rich and creamy tomato-based gravy. Experience the creamy texture and delightful burst of flavors that make this dish a true culinary delight. ",
    image: Paneer,
    price: 400,
    category: "south",
    restaurant: {
      name: "Burger Binge",
      image: "https://example.com/burgerbinge-image.jpg" // Replace with actual restaurant image URL
    }
  },
  {
    name: "Gujrati",
    description:
      "Experience the vibrant flavors of our Gujarati Thali! A colorful platter featuring an assortment of traditional Gujarati delicacies such as dhokla, khandvi, fafda, dal, kadhi, vegetable curry, rice, chapati, pickle, and sweet dishes like shrikhand or basundi. Delight in the harmonious blend of sweet, savory, spicy, and tangy flavors, offering a wholesome culinary journey through Gujarat's rich gastronomic heritage.",
    image: Gujrati,
    price: 500,
    category: "east",
    restaurant: {
      name: "Burger Binge",
      image: "https://example.com/burgerbinge-image.jpg" // Replace with actual restaurant image URL
    }
  },
  {
    name:"Burger",
    description:" veg burger features a patty made from ingredients like beans, lentils, vegetables, or grains, offering a delicious alternative to traditional meat burgers. Popular variations include black bean burgers, chickpea patties, and quinoa-based options, often enhanced with spices and herbs for added flavor. Interestingly, the first commercial veggie burger was created in London in 1982 by Gregory Sams, a pioneer in natural foods, marking the beginning of the plant-based burger trend.",
    image: Burger,            
    price:150,
    category: "burger",
    restaurant: {
      name: "Burger Binge",
      image: "https://example.com/burgerbinge-image.jpg" // Replace with actual restaurant image URL
    }
  },
  {
    name:"Pizza",
    description:" veg burger features a patty made from ingredients like beans, lentils, vegetables, or grains, offering a delicious alternative to traditional meat burgers. Popular variations include black bean burgers, chickpea patties, and quinoa-based options, often enhanced with spices and herbs for added flavor. Interestingly, the first commercial veggie burger was created in London in 1982 by Gregory Sams, a pioneer in natural foods, marking the beginning of the plant-based burger trend.",
    image: Pizza,            
    price:250,
    category: "pizza",
    restaurant: {
      name: "Burger Binge",
      image: "https://example.com/burgerbinge-image.jpg" // Replace with actual restaurant image URL
    }
  },
  {
    name:"VegBiryani",
    description:" veg burger features a patty made from ingredients like beans, lentils, vegetables, or grains, offering a delicious alternative to traditional meat burgers. Popular variations include black bean burgers, chickpea patties, and quinoa-based options, often enhanced with spices and herbs for added flavor. Interestingly, the first commercial veggie burger was created in London in 1982 by Gregory Sams, a pioneer in natural foods, marking the beginning of the plant-based burger trend.",
    image: VegBiryani,            
    price:300,
    category: "Biryani",
    restaurant: {
      name: "Burger Binge",
      image: "https://example.com/burgerbinge-image.jpg" // Replace with actual restaurant image URL
    }
  },
  {
    id: 1,
    image: "https://img.freepik.com/free-photo/seafood-pizza_74190-5944.jpg?w=996&t=st=1693062328~exp=1693062928~hmac=53fd9ad496580db41c6ca8066510cd89c6b0a0389de8bb6b875a78a1eda09cb5",
    name: "Onion Pizza",
    price: 150,
    description: "A delicious pizza topped with fresh onions for a delightful flavor combination. This pizza is perfect for onion lovers and offers a unique twist on the classic pizza experience. Enjoy the perfect blend of cheesy goodness and the sharp taste of onions in every bite. Whether you're sharing with friends or enjoying it all to yourself, this Onion Pizza is sure to satisfy your pizza cravings.",
    category: "pizza",
    rating: 4.5,
    restaurant: {
      name: "Burger Binge",
      image: "https://example.com/burgerbinge-image.jpg" // Replace with actual restaurant image URL
    }
  },
  {
    id: 2,
    image: "https://w7.pngwing.com/pngs/339/55/png-transparent-pizza-margherita-italian-cuisine-hot-dog-pizza-cheese-pizza-thumbnail.png",
    name: "Margherita Pizza",
    price: 130,
    description: "A classic Italian pizza topped with fresh tomatoes, mozzarella cheese, basil leaves, and a drizzle of olive oil. Simple yet bursting with flavors, this Margherita Pizza is a timeless favorite that captures the essence of Italian cuisine.",
    category: "pizza",
    rating: 4.2,
    restaurant: {
      name: "Burger Binge",
      image: "https://example.com/burgerbinge-image.jpg" // Replace with actual restaurant image URL
    }
  },
  {
    id: 3,
    image: "https://w7.pngwing.com/pngs/21/55/png-transparent-pepperoni-pizza-margarita-pizza-margherita-italian-cuisine-tomato-pizza-food-cheese-recipe-thumbnail.png",
    name: "Pepperoni Pizza",
    price: 160,
    description: "Indulge in the savory delight of this Pepperoni Pizza, loaded with slices of spicy pepperoni, melted cheese, and a tangy tomato sauce. A popular choice that's perfect for satisfying your pizza cravings.",
    category: "pizza",
    rating: 4.6,
    restaurant: {
      name: "Burger Binge",
      image: "https://example.com/burgerbinge-image.jpg" // Replace with actual restaurant image URL
    }
  },
  {
    id: 4,
    image: "https://w7.pngwing.com/pngs/569/109/png-transparent-pizza-with-vegetables-and-mushroom-toppings-sicilian-pizza-california-style-pizza-pizza-margherita-vegetarian-cuisine-pizza-food-recipe-gourmet-thumbnail.png",
    name: "Mushroom and Spinach Pizza",
    price: 140,
    description: "Experience the earthy flavors of mushrooms combined with the freshness of spinach on this delightful pizza. Topped with a blend of cheeses, this Mushroom and Spinach Pizza offers a balanced and satisfying taste.",
    category: "pizza",
    rating: 4.2,
    restaurant: {
      name: "Burger Binge",
      image: "https://example.com/burgerbinge-image.jpg" // Replace with actual restaurant image URL
    }
  },
  {
    id: 5,
    image: "https://w7.pngwing.com/pngs/843/171/png-transparent-pizza-73-restaurant-catupiry-chicken-as-food-pizza-baked-goods-food-recipe-thumbnail.png",
    name: "BBQ Chicken Pizza",
    price: 170,
    description: "Savor the smoky goodness of this BBQ Chicken Pizza, featuring tender pieces of chicken marinated in barbecue sauce, red onions, and a medley of cheeses. A fusion of flavors that's sure to delight your taste buds.",
    category: "chicken",
    rating: 4.8,
    restaurant: {
      name: "Burger Binge",
      image: "https://example.com/burgerbinge-image.jpg" // Replace with actual restaurant image URL
    }
  },
  {
    id: 6,
    image: "https://w7.pngwing.com/pngs/133/54/png-transparent-pancakes-served-on-plate-banana-pancakes-scrambled-eggs-breakfast-ihop-pancake-food-recipe-eating-thumbnail.png",
    name: "Classic Pancakes",
    price: 80,
    description: "Start your day with a stack of fluffy pancakes served with maple syrup and a dollop of butter. A timeless breakfast favorite that's sure to satisfy your morning cravings.",
    category: "cakes",
    rating: 4.5,
    restaurant: {
      name: "Burger Binge",
      image: "https://example.com/burgerbinge-image.jpg" // Replace with actual restaurant image URL
    }
  },
  {
    id: 7,
    image: "https://w7.pngwing.com/pngs/645/475/png-transparent-croissant-bread-croissant-muffin-brunch-bacon-egg-and-cheese-sandwich-bread-croissants-baked-goods-food-baking-thumbnail.png",
    name: "Egg and Bacon Croissant",
    price: 110,
    description: "Indulge in a buttery croissant filled with scrambled eggs, crispy bacon, and melted cheese. A savory and satisfying breakfast option that's perfect for on-the-go mornings.",
    category: "chicken",
    rating: 4.2,
    restaurant: {
      name: "Burger Binge",
      image: "https://example.com/burgerbinge-image.jpg" // Replace with actual restaurant image URL
    }
  },
  {
    id: 8,
    image: "https://w7.pngwing.com/pngs/683/103/png-transparent-frozen-yogurt-parfait-breakfast-yoghurt-fruit-salad-yogurt-frutti-di-bosco-food-breakfast-thumbnail.png",
    name: "Greek Yogurt Parfait",
    price: 95,
    description: "Enjoy a healthy and refreshing breakfast with layers of creamy Greek yogurt, fresh berries, honey, and granola. A balanced option that provides a burst of flavors and energy.",
    category: "greek",
    rating: 4.1,
    restaurant: {
      name: "Burger Binge",
      image: "https://example.com/burgerbinge-image.jpg" // Replace with actual restaurant image URL
    }
  },
  {
    id: 9,
    image: "https://w7.pngwing.com/pngs/400/603/png-transparent-toast-tostytosty-la-tosteria-menu-food-dish-avocado-toast-food-toast-avocado-toast-thumbnail.png",
    name: "Avocado Toast",
    price: 120,
    description: "Savor the creaminess of mashed avocado on toasted whole grain bread, topped with a sprinkle of sea salt and red pepper flakes. A trendy and nutritious breakfast choice.",
    category: "Breakfast",
    rating: 4.6,
    restaurant: {
      name: "Burger Binge",
      image: "https://example.com/burgerbinge-image.jpg" // Replace with actual restaurant image URL
    }
  },
  {
    id: 10,
    image: "https://w7.pngwing.com/pngs/20/725/png-transparent-grain-bowl-breakfast-cereal-muesli-corn-flakes-bowl-granola-food-breakfast-recipe-thumbnail.png",
    name: "Fruit and Nut Oatmeal",
    price: 85,
    description: "Warm up with a bowl of hearty oatmeal packed with mixed fruits, nuts, and a drizzle of honey. A wholesome breakfast that provides a satisfying start to your day.",
    category: "Breakfast",
    rating: 4.5,
    restaurant: {
      name: "Burger Binge",
      image: "https://example.com/burgerbinge-image.jpg" // Replace with actual restaurant image URL
    }
  },
  {
    id: 11,
    image: "https://w7.pngwing.com/pngs/875/111/png-transparent-north-fish-seafood-dish-smoked-salmon-restaurant-grilled-fish-hd-soup-food-seafood-thumbnail.png",
    name: "Grilled Salmon",
    price: 190,
    description: "Delight in a perfectly grilled salmon fillet seasoned with herbs and served with a side of roasted vegetables. A healthy and flavorful dinner option that's rich in omega-3 fatty acids.",
    category: "Dinner",
    rating: 4.5,
    restaurant: {
      name: "Burger Binge",
      image: "https://example.com/burgerbinge-image.jpg" // Replace with actual restaurant image URL
    }
  },
  {
    id: 12,
    image: "https://w7.pngwing.com/pngs/756/828/png-transparent-taglierini-carbonara-fettuccine-alfredo-chicken-pasta-chicken-fillet-thumbnail.png",
    name: "Chicken Alfredo Pasta",
    price: 160,
    description: "Indulge in creamy fettuccine Alfredo pasta with tender pieces of grilled chicken. This comforting dinner dish is a blend of pasta, rich Alfredo sauce, and savory chicken.",
    category: "chicken",
    rating: 4.8,
    restaurant: {
      name: "Burger Binge",
      image: "https://example.com/burgerbinge-image.jpg" // Replace with actual restaurant image URL
    }
  },
  {
    id: 13,
    image: "https://w7.pngwing.com/pngs/651/721/png-transparent-veggie-burger-vegetable-food-recipe-stir-frying-vegetables-frying-pan-frozen-vegetables-fruit-thumbnail.png",
    name: "Vegetable Stir-Fry",
    price: 130,
    description: "Enjoy a medley of colorful vegetables stir-fried in a flavorful sauce, served over steamed rice. A light and nutritious dinner that's both satisfying and wholesome.",
    category: "Dinner",
    rating: 4.2,
  },
  {
    id: 14,
    image: "https://w7.pngwing.com/pngs/575/331/png-transparent-burrito-taco-bell-mexican-cuisine-chipotle-mexican-grill-menu-thumbnail.png",
    name: "Grilled Chicken Burrito Bowl",
    price: 160,
    description: "Savor the flavors of a delicious burrito bowl with tender grilled chicken, black beans, rice, sautéed peppers and onions, shredded cheese, and a drizzle of zesty cilantro-lime dressing. A hearty and satisfying chicken dinner option.",
    category: "chicken",
    rating: 4.6,
    restaurant: {
      name: "Burger Binge",
      image: "https://example.com/burgerbinge-image.jpg" // Replace with actual restaurant image URL
    }
  },
  {
    id: 15,
    image: "https://w7.pngwing.com/pngs/47/171/png-transparent-chinese-noodles-hot-and-sour-soup-risotto-lomi-lamian-slippery-mushrooms-risotto-dusi-soup-food-recipe-thumbnail.png",
    name: "Mushroom Risotto",
    price: 175,
    description: "Indulge in creamy and flavorful mushroom risotto, made with Arborio rice, sautéed mushrooms, and a touch of Parmesan cheese. A comforting and sophisticated dinner choice.",
    category: "Dinner",
    rating: 4.5,
    restaurant: {
      name: "Burger Binge",
      image: "https://example.com/burgerbinge-image.jpg" // Replace with actual restaurant image URL
    }
  },
  {
    id: 16,
    image: "https://w7.pngwing.com/pngs/47/171/png-transparent-chinese-noodles-hot-and-sour-soup-risotto-lomi-lamian-slippery-mushrooms-risotto-dusi-soup-food-recipe-thumbnail.png",
    name: "Cheese and Crackers Platter",
    price: 120,
    description: "Enjoy a variety of artisan cheeses, paired with an assortment of crispy crackers and complemented by fresh fruits and nuts. A delightful snack option for sharing or indulging in on your own.",
    category: "Snacks",
    rating: 4.3,
    restaurant: {
      name: "Burger Binge",
      image: "https://example.com/burgerbinge-image.jpg" // Replace with actual restaurant image URL
    }
  },
  {
    id: 17,
    image: "https://w7.pngwing.com/pngs/204/32/png-transparent-crispy-fried-chicken-karaage-chicken-nugget-chicken-fingers-buffalo-wing-carrot-chilli-thumbnail.png",
    name: "Crispy Chicken Wings",
    price: 130,
    description: "Savor the satisfying crunch of crispy chicken wings seasoned to perfection. Choose your favorite sauce, from tangy BBQ to spicy buffalo, for a flavorful snacking experience.",
    category: "Snacks",
    rating: 4.4,
    restaurant: {
      name: "Burger Binge",
      image: "https://example.com/burgerbinge-image.jpg" // Replace with actual restaurant image URL
    }
  },
  {
    id: 18,
    image: "https://w7.pngwing.com/pngs/816/163/png-transparent-grilled-skewered-meat-bakery-paneer-tikka-indian-cuisine-vegetarian-cuisine-cake-food-baking-cake-decorating-thumbnail.png",
    name: "Paneer Tikka Skewers",
    price: 130,
    description: "Enjoy succulent pieces of marinated paneer (Indian cottage cheese) skewered and grilled to perfection. Served with mint chutney, these paneer tikka skewers offer a flavorful and aromatic Indian snack experience.",
    category: "Snacks",
    rating: 4.9,
    restaurant: {
      name: "Burger Binge",
      image: "https://example.com/burgerbinge-image.jpg" // Replace with actual restaurant image URL
    }
  },
  {
    id: 19,
    image: "https://w7.pngwing.com/pngs/356/675/png-transparent-falafel-lebanese-cuisine-take-out-mediterranean-cuisine-hummus-bed-miscellaneous-furniture-food-thumbnail.png",
    name: "Hummus and Veggie Platter",
    price: 90,
    description: "Relish the smooth and flavorful hummus accompanied by a variety of fresh vegetable sticks and pita bread. A nutritious and satisfying option for a light and refreshing snack.",
    category: "Snacks",
    rating: 4.4,
    restaurant: {
      name: "Burger Binge",
      image: "https://example.com/burgerbinge-image.jpg" // Replace with actual restaurant image URL
    }
  },
  {
    id: 20,
    image: "https://w7.pngwing.com/pngs/435/847/png-transparent-pincho-canape-skewer-fruit-others-thumbnail.png",
    name: "Fruit Skewers",
    price: 70,
    description: "Indulge in a colorful assortment of fruit skewers featuring juicy chunks of melon, berries, pineapple, and more. A sweet and refreshing snack that's both delicious and visually appealing.",
    category: "Snacks",
    rating: 4.8, restaurant: {
      name: "Burger Binge",
      image: "https://example.com/burgerbinge-image.jpg" // Replace with actual restaurant image URL
    }
  },
];