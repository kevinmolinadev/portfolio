export interface Icon {
    id:       number;
    title:    string;
    category: string;
    route:    Route|string;
    url:      string;
}

interface Route {
    light: string;
    dark:  string;
}
