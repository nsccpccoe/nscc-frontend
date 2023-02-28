export interface CustomResult<T> {
    isError: false
    data: T
}

export interface CustomError {
    isError: true
    errorCode: string
    errorMessage: string
}
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
    featured: boolean
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

interface WebXploreSubmission {
    id: string
    screenshot: string
    title: string
    link: string
    createdAt: number
    updatedAt: number
    createdBy: string
    description: string
    likes: number
    validLikes: number
    judge: string
    lighthouse: number
    status: string
  }

export type WebXploreSubmissionResult = CustomResult<WebXploreSubmission>
export type WebXploreSubmissionsResult = CustomResult<WebXploreSubmission[]>
export type WebXploreUpvoteResult = CustomResult<undefined>
export type WebXploreLikedSubmissionsResult = CustomResult<string[]>