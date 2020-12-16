export interface Job {
    company: string;
    jobTitle: string;
    fromDate: string;
    toDate: string;
    description: string;
}

export interface Education {
    name: string;
    course: string;
    fromDate: string;
    toDate: string;
}

export interface SocialMedia {
    instagram?: string;
    twitter?: string;
    linkedIn?: string;
    photography?: string;
    github?: string;
    buyMeACoffee?: string;
}

export interface PersonalDetails {
    name: string;
    location: string;
    biography: string;
    email: string;
    cvUrl: string;
}

export interface Photo {
    handle: string;
    width: number;
    height: number;
}