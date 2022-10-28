// import attachCurrentUser from '../middlewares/attachCurrentUser'
import { auth } from "../middlewares/auth";

import {
  getFavorites,
  addFavorite,
  removeFavorite,
} from "../controllers/favorites";

export default (router) => {
  router.get("/favorites", auth, getFavorites);
  router.post("/favorites/add", auth, addFavorite);
  router.delete("/favorites/delete", auth, removeFavorite);
};
