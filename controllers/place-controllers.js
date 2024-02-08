const { v4: uuidv4 } = require("uuid");
const { validationResult } = require("express-validator");
const Place = require("../models/place");
let DUMMY_PLACES = [
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
const getAllPlaces = async (req, res, next) => {
  let place;
  try {
    place = await Place.find();
  } catch (err) {
    const error = new Error(err.message, err.code);
    return next(error);
  }
  res.json(place);
};
const getPlaceByID = async (req, res, next) => {
  const placeID = req.params.placeID;
  let place;
  try {
    place = await Place.findById(placeID);
  } catch (err) {
    const error = new Error(err.message, err.code);
    return next(error);
  }

  if (!place) {
    return res.status(404).json({ error: "this place does not exist" });
  } else {
    res.json({ place });
  }
};

const getPlaceByUserID = async (req, res, next) => {
  const userID = req.params.userID;
  let userplace;
  try {
    userplace = await Place.find({ creator: userID });
  } catch (err) {
    const error = new Error(err.message, err.code);
    return next(error);
  }

  if (!userplace || userplace.length === 0) {
    return res.status(404).json({ error: "this place user does not exist" });
  } else {
    res.json({ userplace });
  }
};

const createPlace = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.log(errors);
    throw new Error("There is validation error", 422);
  }
  const { title, description, address, image, location, creator } = req.body;
  const newCreatedPlace = new Place({
    title,
    address,
    description,
    image,
    location,
    creator,
  });

  try {
    await newCreatedPlace.save();
  } catch (err) {
    const error = new Error(err.message, err.code);
    return next(error);
  }

  res.status(201).json({ place: newCreatedPlace });
};

const updatePlace = async (req, res, next) => {
  const { title, description } = req.body;
  const placeID = req.params.pid;
  let place;
  try {
    place = await Place.findById(placeID);
  } catch (err) {
    const error = new Error(err.message, err.code);
    return next(error);
  }

  place.title = title;
  place.description = description;
  try {
    await place.save();
  } catch (err) {
    const error = new Error(err.message, err.code);
    return next(error);
  }

  res.status(200).json({ place: place.toObject({ getters: true }) });
};

const deletePlace = async (req, res, next) => {
  const placeID = req.params.pid;
  let place;
  try {
    place = await Place.findById(placeID);
  } catch (err) {
    const error = new Error(err.message, err.code);
    return next(error);
  }
  try {
    await place.deleteOne();
  } catch (err) {
    const error = new Error(err.message, err.code);
    return next(error);
  }

  res.status(200).json({ sucess: "The data was deleted" });
};
exports.updatePlace = updatePlace;
exports.deletePlace = deletePlace;
exports.getPlaceByID = getPlaceByID;
exports.getAllPlaces = getAllPlaces;
exports.createPlace = createPlace;
exports.getPlaceByUserID = getPlaceByUserID;