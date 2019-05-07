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
		authorByAge(age: Int): [Author]
		authorByID(id: String): Author
	}

	type Mutation {
		addAuthor(name: String!, age: Int!, books: [String]!): Author
		deleteAuthor(id: String!): Author
		updateAuthor(id: String!, name: String!): Author
	}
`;

export default typeDefs;
