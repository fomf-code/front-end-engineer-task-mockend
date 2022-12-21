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

  enum BlockType {
    A
    B
  }

  type Ticket {
    tickeType: TicketType!
    date: String!
    id: String!
    price: Int!
	block: BlockType
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


const root = {
	/**
	 * There are two events with the following identifiers:
	 * - "allgemein-und-innere-medizin-refresher-berlin"
	 * - "psychiatrie-und-psychotherapie-refresher"
	 *
	 * @param eventId
	 * @returns a list of events.
	 */
	events: ({ eventId }: { eventId: string }): Array<FomfEvent> => {
		const event = getEvent(eventId);
		if (!event) {
			return [];
		}
		return [event];
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
