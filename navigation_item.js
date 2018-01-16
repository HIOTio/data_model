var NavigationItemSchema = new Schema({
	title: String,
	navType: String,
	icon: String,
	url: String,
	badgeTitle: String,
	badgeBg: String,
	badgeFg: String,

}
})
module.exports = mongoose.model("NavigationItem", NavigationItemSchema);
