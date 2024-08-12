import { Repository } from "@/interfaces/repository.interface";
import { User } from "@/interfaces/user.interface";

const API_HOST = process.env.NEXT_PUBLIC_API_HOST;
const USER = process.env.NEXT_PUBLIC_USER;
const REPOS = process.env.NEXT_PUBLIC_REPOS;
const KEYWORD = process.env.NEXT_PUBLIC_KEYWORD;


export const Api = {
    getUserData: async (): Promise<User> => {
        const [information, socialAccounts] = await Promise.all([
            fetch(`${API_HOST}/${USER}`).then(res => res.json()) as Promise<User["user"]>,
            fetch(`${API_HOST}/${USER}/social_accounts`).then(res => res.json())
        ])
        return {
            user: information,
            socialAccounts: [...socialAccounts, { provider: "github", url: information.html_url }],
        }
    },
    getRepositories: async (): Promise<Repository[]> => {
        const repositories: Repository[] = await fetch(`${API_HOST}/${USER}/repos`).then(res => res.json())
        const repositoriesFilter = repositories.filter(item => item.topics.includes(`${KEYWORD}`));
        return repositoriesFilter.sort((first, second) => Date.parse(second.created_at) - Date.parse(first.created_at));
    },
    getReadme: async (repository: string): Promise<string> => {
        return fetch(`${API_HOST}/${REPOS}/${repository}/readme`)
            .then(res => {
                if (!res.ok) throw "FAILED TO FETCH";
                return res.json()
            })
            .then(res => fetch(res.download_url))
            .then(res => res.text())
    }
}