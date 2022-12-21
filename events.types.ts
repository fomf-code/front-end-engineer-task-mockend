export type TicketType = 'ENTIRE_EVENT_TICKET' | 'DAY_TICKET' | 'HALF_DAY_TICKET';

export type Ticket = {
	tickeType: TicketType;
	date: string;
	id: string;
	price: number;
	block?: 'A' | 'B';
};

export type FomfEvent = {
	city: string;
	country: string;
	tickets: Array<Ticket>;
	endDateTime: string;
	id: string;
	language: string;
	startDateTime: string;
	title: string;
};