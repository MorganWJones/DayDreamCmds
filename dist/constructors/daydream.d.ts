import type { Client } from 'discord.js';
interface IDayDreamCmdsConfig {
    commandsDir: string;
    eventsDir?: string;
    owners?: string | string[];
    testServers?: string | string[];
    prefixes?: string | string[];
    forceTesting?: boolean;
}
export declare class DayDreamCmds {
    commandsDir: string;
    eventsDir?: string;
    owners?: string[];
    testServers?: string[];
    prefixes?: string[];
    forceTesting?: boolean;
    constructor(client: Client, config: IDayDreamCmdsConfig);
}
export {};
