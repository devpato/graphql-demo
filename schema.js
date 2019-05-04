const { gql } = require('apollo-server-express');
const typeDefs = gql`
	type Author {
		id: String
		age: Int
		name: String
		books: [String]
	}

	type Query {
		authors: [Author]
		author(age: Int): Author
	}

	type Mutation {
		addAuthor(name: String!, age: Int!, books: [String]!): Author
		deleteAuthor(id: String!): Author
	}
`;

export default typeDefs;
