import express from "express";

const router = express.Router();

router.get("/", async (req, res) => {
	return res.render("home.html", { title: "Home", content: "Home page" });
});

router.get("/products", async (req, res) => {
	return res.render("product.html", {
		title: "Product",
		content: "Product page",
	});
});

router.get("/about", async (req, res) => {
	return res.render("about.html", { title: "About", content: "About page" });
});

router.get("/contact", async (req, res) => {
	return res.render("contact.html", {
		title: "Contact",
		content: "Contact page",
	});
});

export default router;
