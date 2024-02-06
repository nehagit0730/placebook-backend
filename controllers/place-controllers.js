const DUMMY_PLACES = [
  {
    id: "1",
    title: "Dharamshala",
    address: "Dharamshala",
    image:
      "https://www.savaari.com/blog/wp-content/uploads/2023/05/Dharamshala-mountain-range-min-1-1.webp",
    description:
      "Dharamshala is a city in the Indian state of Himachal Pradesh. Surrounded by cedar forests on the edge of the Himalayas, this hillside city is home to the Dalai Lama and the Tibetan government-in-exile.",
    location: {
      lat: 32.216778,
      lng: 76.3191652,
    },
    creator: "1",
  },
  {
    id: "2",
    title: "Sidhpur",
    address: "Sidhpur",
    image:
      "https://www.savaari.com/blog/wp-content/uploads/2023/05/Dharamshala-mountain-range-min-1-1.webp",
    description:
      "Dharamshala is a city in the Indian state of Himachal Pradesh. Surrounded by cedar forests on the edge of the Himalayas, this hillside city is home to the Dalai Lama and the Tibetan government-in-exile.",
    location: {
      lat: 32.216778,
      lng: 76.3191652,
    },
    creator: "2",
  },
  {
    id: "3",
    title: "Dari",
    address: "Dari",
    image:
      "https://www.savaari.com/blog/wp-content/uploads/2023/05/Dharamshala-mountain-range-min-1-1.webp",
    description:
      "Dharamshala is a city in the Indian state of Himachal Pradesh. Surrounded by cedar forests on the edge of the Himalayas, this hillside city is home to the Dalai Lama and the Tibetan government-in-exile.",
    location: {
      lat: 28.679079,
      lng: 77.06971,
    },
    creator: "3",
  },
  {
    id: "4",
    title: "Delhi",
    address: "Delhi",
    image:
      "https://www.savaari.com/blog/wp-content/uploads/2023/05/Dharamshala-mountain-range-min-1-1.webp",
    description:
      "Dharamshala is a city in the Indian state of Himachal Pradesh. Surrounded by cedar forests on the edge of the Himalayas, this hillside city is home to the Dalai Lama and the Tibetan government-in-exile.",
    location: {
      lat: 28.679079,
      lng: 77.06971,
    },
    creator: "1",
  },
  {
    id: "5",
    title: "Kangra",
    address: "Kangra",
    image:
      "https://www.savaari.com/blog/wp-content/uploads/2023/05/Dharamshala-mountain-range-min-1-1.webp",
    description:
      "Dharamshala is a city in the Indian state of Himachal Pradesh. Surrounded by cedar forests on the edge of the Himalayas, this hillside city is home to the Dalai Lama and the Tibetan government-in-exile.",
    location: {
      lat: 32.216778,
      lng: 76.3191652,
    },
    creator: "4",
  },
];

const getPlaceByID = (req, res, next) => {
  const placeID = req.params.placeID;
  const place = DUMMY_PLACES.find((p) => p.id === placeID); /// find returns a single value
  if (!place) {
    return res.status(404).json({ error: "this place does not exist" });
  } else {
    // console.log(place);
    res.json({ place });
  }
};

const getPlaceByUserID = (req, res, next) => {
  const userID = req.params.userID;
  const place = DUMMY_PLACES.filter((p) => p.creator === userID); /// return a new array of values
  if (!place) {
    return res.status(404).json({ error: "this place user does not exist" });
  } else {
    // console.log(place);
    res.json({ place });
  }
};

exports.getPlaceByID = getPlaceByID;
exports.getPlaceByUserID = getPlaceByUserID;
