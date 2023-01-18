export interface Organizer {
    shortName: string;
    displayName: string;
}

export interface LinkMap {
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
    registration: LinkMap;
    eventPage: LinkMap;
    community: {
        link: string
        displayText: string
    }
}

export interface EventResponse {
    isError: boolean;
    errorCode: string;
    errorMessage: string;
    data: Event[];
}
