---
name: 'Baby Council'
description: 'Lightweight multi-model conversations for quick brainstorming and debate. Claude and GPT in round-robin with shared context.'
tags: ['Claude API', 'OpenAI', 'Python']
image: '../../../public/static/baby-council.jpg'
link: 'https://github.com/anushfernandes/baby-council'
startDate: '2025-01-01'
---

# Baby Council

A simpler sibling to Council—Baby Council enables round-robin conversations between Claude and GPT with shared context and optional debate mode.

## When to Use

Perfect for when you want multiple AI perspectives without the full 5-stage pipeline:

- **Brainstorming**: Get diverse ideas on a problem
- **Trade-off analysis**: Explore pros and cons from different angles
- **Devil's advocate**: Challenge your assumptions

## Features

### Round-Robin Mode
Models take turns responding, building on each other's ideas with shared context.

### Debate Mode
Models actively challenge each other's positions, surfacing assumptions and weaknesses in arguments.

### Shared Context
Both models see the full conversation history, enabling genuine back-and-forth dialogue.

## Example

```
User: Should I use PostgreSQL or MongoDB for a food tracking app?

Claude: PostgreSQL is ideal here because your data is highly relational—meals connect to locations, people, recipes...

GPT: I'd push back slightly. While relational makes sense for core data, consider that food photos and unstructured notes might benefit from MongoDB's flexibility...

Claude: Fair point on media, but Supabase gives you PostgreSQL + Storage in one platform...
```

## Tech Stack

- Claude API + OpenAI API
- Python
- Built as a Claude Code skill
