const axios = require("axios");
const router = require("express").Router();
const articlesController = require("../../controllers/article-controllers")

router.get("api/articles", (req, res) => {
  axios
    .get("https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=98ed63268ca14b789a63f5b1e05c8a0e", { params: {q: req.query} })
      .then(({ data: { results } }) => res.json(results))
      .catch(err => res.status(422).json(err));

  router.route("/")
    .get(articlesController.findAll)
    .post(articlesController.create);

  router
    .route("/:id")
    .get(articlesController.findById)
    .put(articlesController.update)
    .delete(articlesController.remove);
});



module.exports = router;
