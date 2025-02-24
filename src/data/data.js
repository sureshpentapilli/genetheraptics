import { itemsData } from "./itemsData";

export const cardsData = [
  {
    id: 1,
    title: "Poultry",
    description:
      "Poultry products include various types of birds raised for meat and eggs.",
    bannerImg: "https://example.com/poultry-banner.jpg",
    subitems: [
      {
        id: 101,
        title: "FEED SUPPLEMENTS",
        description: "Commonly raised for meat and eggs.",
        img: "https://example.com/chicken.jpg",
        items: itemsData[101] || [], // Fetch using id

      },
      {
        id: 102,
        title: "AMINO ACIDS FEED SUPPLEMENTS", // Remove extra space
        description: "Known for its rich-flavored meat and eggs.",
        img: "https://example.com/duck.jpg",
        items: itemsData[102] || [], // Fetch using id

      },
      
      {
        id: 103,
        title: "ANTIBIOTIC FEED SUPLEMENTS",
        description: "Mostly consumed during festive occasions.",
        img: "https://example.com/turkey.jpg",
        items: itemsData[103] || [], // Fetch using id
      
      },
      {
        id: 104,
        title: "LIQUED FEED SULPEMENTS",
        description: "Mostly consumed during festive occasions.",
        img: "https://example.com/turkey.jpg",
        items: itemsData[104] || [], // Fetch using id
     
      },
      {
        id: 105,
        title: "ANTIBIOTIC FEED SULPEMENTS LIQUED",
        description: "Mostly consumed during festive occasions.",
        img: "https://example.com/turkey.jpg",
        items: itemsData[105] || [], // Fetch using id
        
      },
    ],
  },
  {
    id: 2,
    title: "Dairy Products",
    description: "Milk and milk-derived products essential for nutrition.",
    bannerImg: "https://example.com/dairy-banner.jpg",
    subitems: [
      {
        id: 201,
        title: "Milk",
        description: "A primary dairy product rich in calcium.",
        img: "https://example.com/milk.jpg",
        items: ["LIVOGEN-BH", "ENROGEN-BH", "CIPROGEN", "TAIMULINE-10% LIQ"],
      },
      {
        id: 202,
        title: "Cheese",
        description: "Made by curdling milk, available in various types.",
        img: "https://example.com/cheese.jpg",
        items: ["LIVOGEN-BH", "ENROGEN-BH", "CIPROGEN", "TAIMULINE-10% LIQ"],
      },
      {
        id: 203,
        title: "Yogurt",
        description: "A probiotic dairy product with many health benefits.",
        img: "https://example.com/yogurt.jpg",
        items: ["LIVOGEN-BH", "ENROGEN-BH", "CIPROGEN", "TAIMULINE-10% LIQ"],
      },
    ],
  },
  {
    id: 3,
    title: "Meat & Seafood",
    description: "A variety of meats and seafood products.",
    bannerImg: "https://example.com/meat-banner.jpg",
    subitems: [
      {
        id: 301,
        title: "Beef",
        description: "Rich in protein and iron, commonly consumed worldwide.",
        img: "https://example.com/beef.jpg",
      },
      {
        id: 302,
        title: "Fish",
        description: "A great source of omega-3 fatty acids.",
        img: "https://example.com/fish.jpg",
      },
      {
        id: 303,
        title: "Lamb",
        description: "A tender and flavorful meat, often used in curries.",
        img: "https://example.com/lamb.jpg",
      },
    ],
  },
];
