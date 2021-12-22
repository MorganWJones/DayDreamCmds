import type { Client } from 'discord.js';

interface IDayDreamCmdsConfig {
	// Dirs
	commandsDir: string;
	eventsDir?: string;

	// Text Command
	owners?: string | string[];
	testServers?: string | string[];
	prefixes?: string | string[];

	// Slash Command
	forceTesting?: boolean; // Only register to test servers globally

	// Event
}

export class DayDreamCmds {
	// Dirs
	public commandsDir: string;
	public eventsDir?: string;

	// Text command
	public owners?: string[];
	public testServers?: string[];
	public prefixes?: string[];

	// Slash commands
	public forceTesting?: boolean;

	// Event

	constructor(client: Client, config: IDayDreamCmdsConfig) {
		if (!client) throw new Error('Client is required');
		if (!config) throw new Error('Config is required');

		const { commandsDir, eventsDir, owners, testServers, prefixes, forceTesting } = config;

		// Set all of the class properties
		this.commandsDir = commandsDir;
		if (eventsDir) this.eventsDir = eventsDir;
		if (owners) this.owners = Array.isArray(owners) ? owners : [owners];
		if (testServers) this.testServers = Array.isArray(testServers) ? testServers : [testServers];
		if (prefixes) this.prefixes = Array.isArray(prefixes) ? prefixes : [prefixes];
		if (forceTesting) this.forceTesting = forceTesting;
	}
}
