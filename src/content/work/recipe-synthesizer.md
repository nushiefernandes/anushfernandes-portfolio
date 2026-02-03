---
title: Recipe Synthesizer
publishDate: 2025-01-05 00:00:00
img: /assets/projects/recipe-synthesizer.jpg
img_alt: Recipe research and synthesis interface
description: |
  Research-intensive recipe synthesis from 8-10+ diverse sources.
tags:
  - Claude Code
  - Web Search
  - Multi-source
---

When you ask for a recipe, this skill doesn't just give you one source—it researches 8-10+ recipes, identifies patterns, notes variations, and synthesizes a comprehensive guide.

## The Problem with Single-Source Recipes

Every recipe website has biases:
- Some optimize for SEO, not taste
- Some assume equipment you don't have
- Some skip crucial steps that "everyone knows"

## The Solution

Recipe Synthesizer aggregates multiple sources to find the signal in the noise:

1. **Research**: Searches 8-10+ diverse sources (blogs, video transcripts, forums)
2. **Pattern Recognition**: Identifies common techniques vs. unique variations
3. **Synthesis**: Combines the best approaches with clear decision points
4. **Customization**: Notes where you can adapt based on preferences

## Example Output

```
RS butter chicken

## Core Technique (consensus across 9 sources)
- Marinate chicken in yogurt + spices for 2-6 hours
- Char chicken under broiler (not pan-fry)
- Bloom spices in butter before adding tomatoes
- Finish with cream + kasuri methi

## Variations to Consider
- Cashew paste: 4/9 sources recommend for creamier texture
- Sugar: Divisive—some add 1 tsp to balance acidity
- Char level: Indian sources go darker than Western adaptations

## Equipment Notes
- Broiler strongly preferred over pan
- If no broiler: grill or very hot cast iron
```

## Triggers

- "RS [dish]"
- "[dish] recipes"
- "best way to make [dish]"
- "synthesize a recipe for [dish]"
