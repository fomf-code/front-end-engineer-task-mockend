import { FomfEvent, Ticket } from "./events.types";

const entireEventTicket: Ticket = {
	date: "2023-01-10T12:00:00.000Z",
	id: "2ce4a464-8080-11ed-a1eb-0242ac120002",
	price: 350,
	tickeType: "ENTIRE_EVENT_TICKET",
};

const day1Ticket: Ticket = {
	date: "2023-01-10T12:00:00.000Z",
	id: "351fbb3c-8080-11ed-a1eb-0242ac120002",
	price: 100,
	tickeType: "DAY_TICKET",
};

const day2Ticket: Ticket = {
	date: "2023-01-11T09:00:00.000Z",
	id: "351fbb3c-8080-11ed-a1eb-0242ac120002",
	price: 110,
	tickeType: "DAY_TICKET",
};

const day3Ticket: Ticket = {
	date: "2023-01-12T11:30:00.000Z",
	id: "6f734858-8080-11ed-a1eb-0242ac120002",
	price: 100,
	tickeType: "DAY_TICKET",
};

const getEvent = (eventId: string): FomfEvent => ({
	city: "berlin",
	country: "germany",
	startDateTime: "2023-01-10T12:00:00.000Z",
	endDateTime: "2023-01-13T12:00:00.000Z",
	id: eventId,
	language: "de",
	title: "Allgemein - und Innere Medizin Refresher",
	tickets: [entireEventTicket, day1Ticket, day2Ticket, day3Ticket],
});

export default getEvent;
