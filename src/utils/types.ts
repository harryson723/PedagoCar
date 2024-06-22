export type ActivityType = {
    id: string;
    title: string;
    category: string;
    keywords: string;
    purpose: string;
    description: string;
    materials: string[];
    variables: string;
    psycomotor: {
        title: string;
        description: string;
    }[];
    extraInfo: {
        title: string;
        description: string;
    }[];
    img: string;
};