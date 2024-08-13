import { Icon } from "@/interfaces/icon.interface";

const API_URL = process.env.NEXT_PUBLIC_ICONS_API_URL;

export const ApiIcons = {
    getIconByName: async (name: string): Promise<Icon> => {
        const response: Icon[] = await fetch(`${API_URL}?search=${name}`).then(res => res.json());
        return response[0];
    }
}