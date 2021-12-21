import * as Yup from 'yup';

import Recipe from "../models/Recipe";

class RecipeController {

	async show(req, res) {
		const {id} = req;

		const recipe = await Recipe.findOne({
			where: {
				id: id,
			},
		});

		return res.status(200).json(recipe)
	}

	async list(req, res) {
		const {id} = req;

		const recipe = await Recipe.findAll({
			where: {
				id: id,
			},
			order: [ [ 'createdAt', 'DESC' ]],
		});

		return res.status(200).json(recipe)
	}
}

export default new RecipeController()