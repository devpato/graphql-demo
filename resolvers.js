// Provide resolver functions for your schema fields
import typeDefs from './schema';
import authors from './constants';

const resolvers = {
	Query: {
		authors: () => {
			return authors;
		},
		author: (root, { age }) => {
			return authors.find((a) => a.age === age);
		}
	}
};

export default resolvers;
