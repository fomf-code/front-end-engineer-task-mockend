import { FomfEvent, Ticket } from "./events.types";

const getShuffledArray = (arrayToShuffle) => {
	const arr = [...arrayToShuffle];
	for (let i = arr.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		const temp = arr[i];
		arr[i] = arr[j];
		arr[j] = temp;
	}
	return arr;
};

const event1: FomfEvent = {
	city: "berlin",
	country: "germany",
	startDateTime: "2023-01-10T12:00:00.000Z",
	endDateTime: "2023-01-13T12:00:00.000Z",
	id: "allgemein-und-innere-medizin-refresher-berlin",
	language: "de",
	title: "Allgemein - und Innere Medizin Refresher",
	tickets: [
		{
			date: "2023-01-10T12:00:00.000Z",
			id: "2ce4a464-8080-11ed-a1eb-0242ac120002",
			price: 350,
			tickeType: "ENTIRE_EVENT_TICKET",
		},
		{
			date: "2023-01-10T12:00:00.000Z",
			id: "351fbb3c-8080-11ed-a1eb-0242ac120002",
			price: 100,
			tickeType: "DAY_TICKET"
		},
		{
			date: "2023-01-10T12:00:00.000Z",
			id: "91949050-8106-11ed-a1eb-0242ac120002",
			price: 70,
			tickeType: "HALF_DAY_TICKET",
			block: 'A'
		},
		{
			date: "2023-01-10T16:00:00.000Z",
			id: "a417f24e-8106-11ed-a1eb-0242ac120002",
			price: 70,
			tickeType: "HALF_DAY_TICKET",
			block: 'B'
		},
		{
			date: "2023-01-11T09:00:00.000Z",
			id: "351fbb3c-8080-11ed-a1eb-0242ac120002",
			price: 110,
			tickeType: "DAY_TICKET"
		},
		{
			date: "2023-01-11T09:00:00.000Z",
			id: "b0b1bb7a-8106-11ed-a1eb-0242ac120002",
			price: 75,
			tickeType: "HALF_DAY_TICKET",
			block: 'A'
		},
		{
			date: "2023-01-12T11:30:00.000Z",
			id: "6f734858-8080-11ed-a1eb-0242ac120002",
			price: 100,
			tickeType: "DAY_TICKET"
		},
		{
			date: "2023-01-12T11:30:00.000Z",
			id: "d0a6a2ba-8106-11ed-a1eb-0242ac120002",
			price: 70,
			tickeType: "HALF_DAY_TICKET",
			block: 'A'
		},
		{
			date: "2023-01-12T16:30:00.000Z",
			id: "e4528a22-8106-11ed-a1eb-0242ac120002",
			price: 70,
			tickeType: "HALF_DAY_TICKET",
			block: 'B'
		}
	]
};

const event2: FomfEvent = {
	city: "frankfurt",
	country: "germany",
	startDateTime: "2023-02-01T10:00:00.000Z",
	endDateTime: "2023-02-02T10:00:00.000Z",
	id: "psychiatrie-und-psychotherapie-refresher",
	language: "de",
	title: "Psychiatrie und Psychotherapie Refresher",
	tickets: [
		{
			date: "2023-02-01T10:00:00.000Z",
			id: "0bcf40de-8109-11ed-a1eb-0242ac120002",
			price: 180,
			tickeType: "ENTIRE_EVENT_TICKET",
		},
		{
			date: "2023-02-01T10:00:00.000Z",
			id: "172bae2c-8109-11ed-a1eb-0242ac120002",
			price: 100,
			tickeType: "DAY_TICKET"
		},
		{
			date: "2023-02-01T10:00:00.000Z",
			id: "2234171e-8109-11ed-a1eb-0242ac120002",
			price: 70,
			tickeType: "HALF_DAY_TICKET",
			block: 'A'
		},
		{
			date: "2023-02-01T13:00:00.000Z",
			id: "2e0c088a-8109-11ed-a1eb-0242ac120002",
			price: 70,
			tickeType: "HALF_DAY_TICKET",
			block: 'B'
		},
		{
			date: "2023-02-02T10:00:00.000Z",
			id: "6727d194-8109-11ed-a1eb-0242ac120002",
			price: 100,
			tickeType: "DAY_TICKET"
		}
	]
};

const allEvents = [event1, event2];

const getEvent = (eventId: string): FomfEvent | null => {
	const event = allEvents.find((ev) => ev.id === eventId);
	if (event) {
		return {
			...event,
			tickets: getShuffledArray(event.tickets)
		}
	}
	return null;
};

export default getEvent;
