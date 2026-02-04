---
name: 'Council'
description: 'A multi-model AI council that orchestrates Claude, GPT, and DeepSeek for collaborative problem-solving through a structured 5-stage pipeline.'
tags: ['CrewAI', 'Claude API', 'OpenAI', 'Python']
image: '../../../public/static/council.jpg'
link: 'https://github.com/anushfernandes/council'
startDate: '2025-01-01'
---

# Council

Council brings together three AI models in a structured 5-stage pipeline. The result is higher-quality outputs than any single model alone.

## How It Works

Each model plays a specialized role:

| Stage | Agent | Model | Focus |
|-------|-------|-------|-------|
| 1 | Architect A | Claude Opus 4.5 | Clean architecture design |
| 2 | Architect B | DeepSeek | Performance review |
| 3 | Builder | GPT-5.2 | Implementation |
| 4 | Reviewer A | Claude Opus 4.5 | Security & edge cases |
| 5 | Reviewer B | DeepSeek | Performance & efficiency |

## The Philosophy

The best AI tools feel like collaborators, not servants. They should challenge your thinking, not just execute commands.

By having models with different training and perspectives review each other's work, Council catches issues that any single model would miss.

## Tech Stack

- **Framework**: CrewAI for multi-agent orchestration
- **Models**: Claude Opus 4.5, GPT-5.2, DeepSeek (via Ollama)
- **Integration**: Built as a Claude Code skill

## Usage

```bash
/council Build a REST API for user authentication
```

The council deliberates and returns a comprehensive solution with architecture, implementation, and review notes.
