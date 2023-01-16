export interface Organizer {
    shortName: string;
    displayName: string;
}

export interface Registration {
    link: string;
    type: "onsite" | "offsite",
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
    eventPage: {
        link: string;
        type: "onsite" | "offsite",
    }
}

export interface EventResponse {
    isError: boolean;
    errorCode: string;
    errorMessage: string;
    data: Event[];
}
