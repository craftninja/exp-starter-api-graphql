const { buildSchema } = require('graphql');
const express = require('express');
const graphqlHTTP = require('express-graphql');
const router = express.Router();

const schema = buildSchema(`
  type Query {
    hello: String
  }
`);

const root = {
  hello: () => {
    return 'oh hai';
  },
};

router.get('/', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));

module.exports = router;
