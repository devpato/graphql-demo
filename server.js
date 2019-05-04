const express = require('express');
const { ApolloServer } = require('apollo-server-express');
import { makeExecutableSchema } from 'graphql-tools';
import mongoose from 'mongoose';
import typeDefs from './schema';
import resolvers from './resolvers';

mongoose.connect('mongodb+srv://pevargas:Policia9@@cluster0-us8bq.mongodb.net/test?retryWrites=true', {
	useNewUrlParser: true
});

const connection = mongoose.connection;

connection.once('open', () => {
	console.log('Connection to DB was succesfull');
});

const schema = makeExecutableSchema({ typeDefs, resolvers });
const SERVER = new ApolloServer({ schema });

const app = express();
SERVER.applyMiddleware({ app });

app.listen({ port: 4000 }, () => console.log(`🚀 Server ready at http://localhost:4000${SERVER.graphqlPath}`));
