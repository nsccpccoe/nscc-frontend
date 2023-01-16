export interface Organizer {
    shortName: string;
    displayName: string;
}

export interface Registration {
    link: string;
    type: string;
}

export interface Event {
    id: string;
    subtitle: string;
    displayName: string;
    description: string;
    endAt: number;
    startAt: number;
    organizers: Organizer[];
    registration: Registration;
}

export interface EventResponse {
    isError: boolean;
    errorCode: string;
    errorMessage: string;
    data: Event[];
}
