const { ApolloServer, gql } = require('apollo-server');

// The GraphQL schema
const typeDefs = gql`
  type Query {
    "A simple type for getting started!"
    hello: String
  }
`;

// A map of functions which return data for the schema.
const resolvers = {
	Query: {
		hello: () => 'world'
	}
};

const SERVER = new ApolloServer({
	typeDefs,
	resolvers
});

SERVER.listen().then(({ url }) => {
	console.log(`🚀 Server ready at ${url}`);
});
