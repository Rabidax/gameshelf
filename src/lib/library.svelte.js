export const statusMap = new Map([
	[1, "Unplayed"],
	[2, "Unfinished"],
	[4, "Beaten"],
	[8, "Completed"],
	[16, "None"],
])
class Library {
	games = $state([])
	constructor(...games) {
		this.games = games
	}
	push(game) {
		// TODO: don't allow for pushing a game we already have
		this.games.push(game)
	}
}
const shelf = new Library()
export default shelf