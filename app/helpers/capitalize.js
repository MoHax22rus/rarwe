import Ember from 'ember';

export function capitalize(input) {
	let words = input.toString().split(/\s+/).map(word => {
		return word.toLowerCase().capitalize();
	});
	return words.join(' ');
}

export default Ember.Helper.helper(capitalize);
