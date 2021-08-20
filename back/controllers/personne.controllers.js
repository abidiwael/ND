// const Personne = require("../router/personne");

// exports.addArticle = async (req, res) => {
// 	try {
// 		const {
// 			title,
// 			text_article,
// 			poster_id,
// 			poster_name,
// 			add_to_fav_id,
// 			add_to_later_id,
// 			categorie,
// 		} = req.body;
// 		if (!title) {
// 			return res.status(400).send("Can't add an article without title");
// 		}
// 		if (!text_article) {
// 			return res.status(400).send("Can't add an article without content");
// 		}
// 		if (!categorie) {
// 			return res.status(400).send("Can't add an article without content");
// 		}
// 		const newArticle = new Article({ ...req.body });
// 		await newArticle.save();
// 		res.status(200).send({ msg: "new article is added", article: newArticle });
// 	} catch (error) {
// 		console.log(error);
// 		res.status(500).send("impossible to add new article");
// 	}
// };

exports.getAllPersonneData = (req, res) => {
	res.send("test controllers");
};

// exports.editArticle = async (req, res) => {
// 	try {
// 		const { Id } = req.params;
// 		const newArticle = await Article.findOneAndUpdate(
// 			{ _id: Id },
// 			{ $set: { ...req.body } }
// 		);
// 		res.status(200).send({ msg: "Article edited", newArticle });
// 	} catch (error) {
// 		console.log(error);
// 		res.status(500).send("impossible to edit article");
// 	}
// };

// exports.deleteArticle = async (req, res) => {
// 	try {
// 		const { Id } = req.params;
// 		await Article.findOneAndDelete({ _id: Id });
// 		res.status(200).send({ msg: "Article deleted" });
// 	} catch (error) {
// 		console.log(error);
// 		res.status(500).send("impossible to delete article");
// 	}
// };

// exports.getOneArticle = async (req, res) => {
// 	try {
// 		const { Id } = req.params;
// 		const article = await Article.findById({ _id: Id });
// 		res.status(200).send({ msg: "Article found", article });
// 	} catch (error) {
// 		console.log(error);
// 		res.status(500).send("article not found");
// 	}
// };
