import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { buildSchema } from 'graphql';
import getEvent from './events.data';
import { FomfEvent } from './events.types';

// Construct a schema, using GraphQL schema language
const schema = buildSchema(`
  enum TicketType {
    ENTIRE_EVENT_TICKET
    DAY_TICKET
    HALF_DAY_TICKET
  }

  type Ticket {
    tickeType: TicketType!
    date: String!
    id: String!
    price: Int!
  }

  type Event {
    city: String!
    country: String!
    tickets: [Ticket!]!
    endDateTime: String!
    id: String!
    language: String!
    startDateTime: String!
    title: String!
  }

  type Query {
    events(eventId: String): [Event]
  }
`);

// The root provides a resolver function for each API endpoint
const root = {
	events: ({ eventId }: { eventId: string }): Array<FomfEvent> => {
		return [getEvent(eventId)]
	}
};

const app = express();
app.use(
	'/graphql',
	graphqlHTTP({
		schema: schema,
		rootValue: root,
		graphiql: true,
	})
);
app.listen(4000);
console.log('Running a GraphQL API server at http://localhost:4000/graphql');
