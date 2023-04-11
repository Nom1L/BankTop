import Personal from "../models/Personal.js";
import User from '../models/User.js'

// Create Post
export const createPersonal = async (req, res) => {
  try {
    const { firstname, lastname, birthday, adress, passport, work } = req.body;

    const newPersonal = new Personal({
      firstname,
      lastname,
      birthday,
      adress,
      passport,
      work,
    });

    await newPersonal.save();

		await User.findByIdAndUpdate(req.userId, {
			$push: { posts: newPostWithImage },
	})

    res.json({ newPersonal, message: "Запись создана" });
  } catch (error) {
    res.json({ message: "Что-то пошло не так." });
  }
};
