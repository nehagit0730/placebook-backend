const { v4: uuidv4 } = require('uuid');
let USERS = [
  {
    id: "1",
    name: "Rahul",
	email: "rahul@gmail.com",
    image:
      "https://prowebcoder.com/cdn/shop/files/60164383_1559842260826420_4387232960273711104_n.jpg?v=1656568099&width=550",
    password: "1Rahu92",
  },
  {
    id: "2",
    name: "Pankaj",
	email: "punk@gmail.com",
    image:
      "https://prowebcoder.com/cdn/shop/files/IMG_3210z_caa46c62-dfc0-49c1-ba5b-289054d7f2d3.jpg?v=1656567815&width=550",
    password: "3pan678",
  },
  {
    id: "3",
    name: "Puneet",
	email: "puni@gmail.com",
    image:
      "https://prowebcoder.com/cdn/shop/files/IMG_3210_fde067b1-1fc0-4f94-b568-94c1a164a86f.jpg?v=1656567603&width=550",
    password: "1puniiii",
  },
  {
    id: "4",
    name: "Goldi",
	email: "gold@gmail.com",
    image:
      "https://prowebcoder.com/cdn/shop/files/21617929_1715416011834217_8965152641470883333_n.jpg?v=1656567900&width=550",
    password: "Gold768@4",
  },
  {
    id: "5",
    name: "Sangeeta",
	email: "sangy@gmail.com",
    image:
      "https://prowebcoder.com/cdn/shop/files/50283401_2034335453313191_3839750296481824768_n.jpg?v=1656567946&width=550",
    password: "Sangyy674",
  },
  {
    id: "6",
    name: "Neha",
	email: "nea@gmail.com",
    image:
      "https://prowebcoder.com/cdn/shop/files/WhatsApp_Image_2022-06-30_at_10.51.16_AM.jpg?v=1656566585&width=550",
    password: "neha777",
  },
];

const getUsers = (req, res, next) => {
  //   console.log(USERS);
  res.json({ users: USERS });
};
const signup = (req, res, next) => {
  const {name,email,password} = req.body;
  const hasUser = USERS.find(user =>user.email=== email);
  if(hasUser) {
    throw new Error("user already exists");
  }
  const createUser ={
    id:uuidv4(),
    name,
    email,
    password,
  };
  USERS.push(createUser);
  res.json({users:USERS});
};



const getUserByID = (req, res, next) => {
  const userID = req.params.userID;
  const user = USERS.filter((u) => u.id === userID);
  if (!user) {
    return res.status(404).json({ error: "this user does not exist" });
  } else {
    res.json({ user });
  }
};


const login = (req, res, next) => {
  const{email,password} = req.body;
  const findUser = USERS.find(user =>user.email === email);
  if(!findUser) {
    throw new Error("sorry could not find user");
  }
  else{
    if(findUser.password === password) {
      res.json({message:"you are logged in"});
    }
else {
  throw new error("password incorrect");
}
  }
};

exports.getUsers = getUsers;
exports.login = login;
exports.signup = signup;
exports.getUserByID = getUserByID;
