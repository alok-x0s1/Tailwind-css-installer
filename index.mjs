#!/usr/bin/env node

import inquirer from "inquirer";
import { execa } from "execa"; // Use named import for execa
import { setupReact, setupVite } from "./tailwind-config.mjs";

(async () => {
	const { framework } = await inquirer.prompt([
		{
			type: "list",
			name: "framework",
			message: "Which framework are you using?",
			choices: ["React", "Vite"],
		},
	]);

	switch (framework) {
		case "React":
			await setupReact();
			break;
		case "Vite":
			await setupVite();
			break;
		default:
			console.log("Framework not supported.");
			break;
	}
})();