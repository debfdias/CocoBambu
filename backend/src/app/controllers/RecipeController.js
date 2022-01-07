import * as Yup from 'yup';

import Recipe from "../models/Recipe";
import User from "../models/User";

class RecipeController {

	async show(req, res) {

		const id = req.params.id;

		const recipe = await Recipe.findOne({
			where: {
				id: id,
			},
		});

		return res.status(200).json(recipe)
	}

	async list(req, res) {
		const recipe = await Recipe.findAll();

		return res.status(200).json(recipe)
	}
}

export default new RecipeController()