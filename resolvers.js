// Provide resolver functions for your schema fields
import authors from './constants';
import authorModel from './models/author';

const resolvers = {
	Query: {
		authors: () => {
			return authors;
		},
		author: (root, { age }) => {
			return authors.find((a) => a.age === age);
		}
	},

	Mutation: {
		addAuthor: (root, { name, age, books }) => {
			const author = new authorModel({ age: age, name: name, books: books });
			return author.save();
		},
		deleteAuthor: (root, { id }) => {
			return authorModel.deleteOne({ id: id });
		}
	}
};

export default resolvers;
