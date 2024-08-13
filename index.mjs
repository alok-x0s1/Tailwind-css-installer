#!/usr/bin/env node

import inquirer from "inquirer";
import {
	setupReact,
	setupVite,
	setupAngular,
	setupVue,
	setupSvelte,
} from "./tailwind-config.mjs";

(async () => {
	const { framework, language } = await inquirer.prompt([
		{
			type: "list",
			name: "framework",
			message: "Which framework are you using?",
			choices: ["React", "Vite", "Angular", "Vue", "Svelte"],
		},
		{
			type: "list",
			name: "language",
			message: "Are you using TypeScript or JavaScript?",
			choices: ["TypeScript", "JavaScript"],
		},
	]);

	const isTypeScript = language === "TypeScript";

	switch (framework) {
		case "React":
			await setupReact(isTypeScript);
			break;
		case "Vite":
			await setupVite(isTypeScript);
			break;
		case "Angular":
			await setupAngular(isTypeScript);
			break;
		case "Vue":
			await setupVue(isTypeScript);
			break;
		case "Svelte":
			await setupSvelte(isTypeScript);
			break;
		default:
			console.log("Framework not supported.");
			break;
	}
})();