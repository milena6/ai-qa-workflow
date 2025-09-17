
# AI-assisted QA Workflow

This project demonstrates how Model Context Protocols (MCPs) can enhance and streamline Quality Assurance (QA) workflows. It provides practical examples and test automation using Playwright, focusing on improving efficiency, reliability, and scalability in QA processes.

## Features
- Automated end-to-end testing process: docs → tickets → manual tests → automated tests (incl. PRs) → bug reports
- Integration with MCPs to optimize test execution and reporting
- Example configurations for scalable QA environments
- Playwright reports and trace files for test analysis

## Getting Started

### Prerequisites
- Node.js (v16 or higher recommended)
- npm 

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/milena6/ai-qa-workflow.git
   cd ai-qa-workflow
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

### Running Tests
To execute all Playwright tests:
```bash
npm playwright test
```

Test results and reports will be available in the `playwright-report/` and `test-results/` directories.

## Project Structure
- `playwright.config.ts` — Playwright configuration
- `test-results/` — Output from test runs
- `playwright-report/` — HTML reports and trace files
- `eslint.config.mjs` — ESLint configuration
- `tsconfig.json` — TypeScript configuration
 - `.github/chatmodes` — Contains chat mode configurations for MCP-powered QA workflows
 - `.github/prompts` — Stores custom prompt templates to guide MCP interactions during automated testing

## About MCPs
Model Context Protocols (MCPs) are designed to provide context-aware automation, improving the accuracy and efficiency of QA workflows. By leveraging MCPs, this project showcases:
- Smarter test orchestration
- Enhanced reporting and traceability
- Scalable and maintainable QA practices

## Contributing
Contributions are welcome! Please open issues or submit pull requests for improvements or new features.

>>>>>>> scale-origin/main
