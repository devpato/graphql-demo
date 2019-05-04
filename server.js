const express = require('express');
const { ApolloServer } = require('apollo-server-express');
import { makeExecutableSchema } from 'graphql-tools';
import typeDefs from './schema';
import resolvers from './resolvers';

const schema = makeExecutableSchema({ typeDefs, resolvers });
const SERVER = new ApolloServer({ schema });

const app = express();
SERVER.applyMiddleware({ app });

app.listen({ port: 4000 }, () => console.log(`🚀 Server ready at http://localhost:4000${SERVER.graphqlPath}`));
