import { Icon } from "./icon.interface";

export interface User {
    user: Information;
    socialAccounts: SocialAccount[];
}

interface Information {
    login: string;
    avatar_url: string;
    html_url: string;
    name: string | null;
    company: string | null;
    blog: string | null;
    email: string | null;
    bio: string | null;
    twitter_username?: string | null;
    followers: number;
    created_at: string;
    updated_at: string;
}

interface SocialAccount {
    provider: string;
    url: string;
    icon: string;
}
