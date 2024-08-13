#!/usr/bin/env node

import inquirer from "inquirer";
import { setupReact, setupVite, setupAngular, setupVue, setupSvelte } from "./tailwind-config.mjs";

(async () => {
	const { framework } = await inquirer.prompt([
		{
			type: "list",
			name: "framework",
			message: "Which framework are you using?",
			choices: ["React", "Vite", "Angular", "Vue", "Svelte"],
		},
	]);

	switch (framework) {
		case "React":
			await setupReact();
			break;
		case "Vite":
			await setupVite();
			break;
		case "Angular":
			await setupAngular();
			break;
		case "Vue":
			await setupVue();
			break;
		case "Svelte":
			await setupSvelte();
			break;
		default:
			console.log("Framework not supported.");
			break;
	}
})();
