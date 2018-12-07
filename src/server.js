import dotenv from 'dotenv';
import { GraphQLServer } from 'graphql-yoga';
import gqlServerConfig from './api';
import connectToDB from './db';

dotenv.config();
connectToDB();

const serverOptions = {
  port: 5000,
  endpoint: '/graphql',
  playground: '/docs',
  tracing: true,
  debug: true
};

const server = new GraphQLServer(gqlServerConfig);
server.start(serverOptions, ({ port }) => console.log(`Server on port ${port}`));
