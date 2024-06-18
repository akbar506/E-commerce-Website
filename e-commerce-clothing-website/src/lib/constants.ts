export const Logo = {
  url: "/Logo.webp",
  width: 140,
  height: 25,
  alt: "Logo",
};

export const Header = {
  url: "/header.webp",
  alt: "HeroImg",
};

export const cartIcon = {
  url: "/cart_icon.png",
  alt: "Show Now",
};

export const sponsers: {
  sponser1: {
    url: string;
    alt: string;
  };
  sponser2: {
    url: string;
    alt: string;
  };
  sponser3: {
    url: string;
    alt: string;
  };
  sponser4: {
    url: string;
    alt: string;
  };
} = {
  sponser1: {
    url: "/sponser1.webp",
    alt: "Sponser 1",
  },
  sponser2: {
    url: "/sponser2.webp",
    alt: "Sponser 2",
  },
  sponser3: {
    url: "/sponser3.webp",
    alt: "Sponser 3",
  },
  sponser4: {
    url: "/sponser4.webp",
    alt: "Sponser 4",
  },
};

interface Event {
  url: string;
  alt: string;
}

export const Events: {
  [key: string]: Event;
} = {
  event1: {
    url: "/event1.webp",
    alt: "Event 1 Image",
  },
  event2: {
    url: "/event2.webp",
    alt: "Event 2 Image",
  },
  event3: {
    url: "/event3.webp",
    alt: "Event 3 Image",
  },
};

export type Product = {
  productName: string;
  productType: string;
  productPrice: number;
  productCare: string;
  productCategory: string;
  productURL: string;
  productALT: string;
};

export const Products: {
  [key: string]: Product;
} = {
  product1: {
    productName: "Brushed Raglan SweatShirt",
    productType: "Sweater",
    productPrice: 195,
    productCare:
      "Hand wash using cold water. Do not using bleach. Hang it to dry. Iron on low temperature.",
    productCategory: "female",
    productURL: "/All Products/Product1 (woman).png",
    productALT: "Brushed Raglan Sweatshirt",
  },
  product2: {
    productName: "Flex Sweatshirt",
    productType: "Dress",
    productPrice: 545,
    productCare: "Lorem ipsum dolor sit amet. consectetur adipiscing elit",
    productCategory: "female",
    productURL: "/All Products/Product2 (woman).png",
    productALT: "Cameryn Sash Tie Dress",
  },
  product3: {
    productName: "Brushed Raglan Sweatshirt",
    productType: "Sweater",
    productPrice: 175,
    productCare:
      "Hand wash using cold water. Do not using bleach. Hang it to dry. Iron on low temperature.",
    productCategory: "female",
    productURL: "/All Products/Product3 (woman).png",
    productALT: "Brushed Raglan Sweatshirt",
  },
  product4: {
    productName: "Flex Sweatpants",
    productType: "Pants",
    productPrice: 175,
    productCare:
      "Hand wash using cold water. Do not using bleach. Hang it to dry. Iron on low temperature.",
    productCategory: "female",
    productURL: "/All Products/Product4 (woman).png",
    productALT: "Flex Sweatpants",
  },
  product5: {
    productName: "Pink Fleece Sweatpants",
    productType: "Pants",
    productPrice: 195,
    productCare:
      "Hand wash using cold water. Do not using bleach. Hang it to dry. Iron on low temperature.",
    productCategory: "female",
    productURL: "/All Products/Product5 (woman).png",
    productALT: "Pink Fleece Sweatpants",
  },
  product6: {
    productName: "Lite Sweatpants",
    productType: "Pants",
    productPrice: 150,
    productCare:
      "Hand wash using cold water. Do not using bleach. Hang it to dry. Iron on low temperature.",
    productCategory: "female",
    productURL: "/All Products/Product6 (woman).png",
    productALT: "Lite Sweatpants",
  },
  product7: {
    productName: "Imperial Alpaca Hoodie",
    productType: "Jackets",
    productPrice: 525,
    productCare:
      "Hand wash using cold water. Do not using bleach. Hang it to dry. Iron on low temperature.",
    productCategory: "female",
    productURL: "/All Products/Product7 (woman).png",
    productALT: "Imperial Alpaca Hoodie",
  },
  product8: {
    productName: "Flex Push Button Bomber",
    productType: "Jackets",
    productPrice: 225,
    productCare:
      "Hand wash using cold water. Do not using bleach. Hang it to dry. Iron on low temperature.",
    productCategory: "male",
    productURL: "/All Products/Product8 (man).png",
    productALT: "Flex Push Button Bomber",
  },
  product9: {
    productName: "Muscle Tank",
    productType: "T Shirts",
    productPrice: 75,
    productCare:
      "Hand wash using cold water. Do not using bleach. Hang it to dry. Iron on low temperature.",
    productCategory: "female",
    productURL: "/All Products/Product9 (woman).png",
    productALT: "Muscle Tank",
  },
  product10: {
    productName: "Brushed Bomber",
    productType: "Jackets",
    productPrice: 225,
    productCare:
      "Hand wash using cold water. Do not using bleach. Hang it to dry. Iron on low temperature.",
    productCategory: "female",
    productURL: "/All Products/Product10 (woman).png",
    productALT: "Brushed Bomber",
  },
  product11: {
    productName: "Raglan Sweatshirt",
    productType: "Sweater",
    productPrice: 195,
    productCare:
      "Hand wash using cold water. Do not using bleach. Hang it to dry. Iron on low temperature.",
    productCategory: "male",
    productURL: "/All Products/Product11 (man).png",
    productALT: "Brushed Raglan Sweatshirt",
  },
};
