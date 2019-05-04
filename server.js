const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools';
import authors from './constants';

const typeDefs = gql`
	type Author {
		id: Int
		age: Int
		name: String
		books: [String]
	}

	type Query {
		authors: [Author]
		author(age: Int): Author
	}
`;

// Provide resolver functions for your schema fields
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

const schema = makeExecutableSchema({ typeDefs, resolvers });

//Create fake data
//addMockFunctionsToSchema({ schema });

const server = new ApolloServer({ schema });

const app = express();
server.applyMiddleware({ app });

app.listen({ port: 4000 }, () => console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`));
