export const config = {
	categories: [
		{ name: "Apparel", slug: "apparel", image: "/images/apparel.jpg" },
		{ name: "Accessories", slug: "accessories", image: "/images/accessories.jpg" },
	],

	social: {
		x: "https://x.com/yourstore",
		facebook: "https://facebook.com/yourstore",
	},

	contact: {
		email: "support@yourstore.com",
		phone: "+1 (555) 111-4567",
		address: "123 Store Street, City, Country",
	},
};

export type StoreConfig = typeof config;
export default config;
