// src/data/levelData.js
export const levels = [
  {
    id: 'concept-1',
    stage: 'Concept', // Or 'Stage 1' as you mentioned
    title: 'Introduction', // Changed from "What is a startup?"
    subtitle: 'Your Guide to Launching a Business in a Day', // New subtitle
    description: `Welcome to the SkyStart Workshop! This workbook is your guide to launching a business in a day. Here’s how to make the most of it:

How to Use This Workbook
Embrace Speed: We’re here to help you make decisions fast and get your business off the ground. Don’t overthink – just dive in.
Let Creativity Flow: Follow the steps, and let your ideas take shape naturally. You’ll be amazed at what you can come up with!
Build and Improve: What you create today is just the beginning. There’s always room to expand and refine your business ideas later.

Where to Start?
Already Have an Idea? Great! Feel free to skip to the sections that help you most, whether it’s building your website or crafting promotional materials.
Starting from Scratch? No worries. This workbook is perfect for you. Consider kicking off with something straightforward like a service (think tutoring or dog walking) or a product (like a unique t-shirt line). We’ll guide you through each step to bring your business to life.

Remember, this journey is about exploring and learning. Let’s get started!`, // New content
    questionLabel: 'Your Initial Thoughts', // Adjusted question label
    questionDescription: 'What are you hoping to achieve or learn by the end of this workshop?', // Adjusted question
    hint: 'Think about your personal goals or a specific idea you might want to explore.' // Adjusted hint
  },
  {
    id: 'concept-2',
    stage: 'Concept',
    title: 'Your Big Idea',
    subtitle: 'Think Big',
    description: 'Generate a meaningful idea that solves a problem.',
    questionLabel: 'Your Turn',
    questionDescription: 'Write your idea in 1-2 sentences.',
    hint: 'Focus on pain points.'
  },
  {
    id: 'identity-1',
    stage: 'Identity',
    title: 'Logo Basics',
    subtitle: 'Visual Branding',
    description: 'Learn the role of logos in branding.',
    questionLabel: 'Apply It',
    questionDescription: 'Describe a logo you like and why.',
    hint: 'Think about color, simplicity, meaning.'
  },
  {
    id: 'identity-2',
    stage: 'Identity',
    title: 'Choosing Colors',
    subtitle: 'Color Psychology',
    description: 'Pick brand colors that reflect your values.',
    questionLabel: 'Practice',
    questionDescription: 'Pick 2 colors and explain them.',
    hint: 'Use emotion and tone.'
  },
  {
    id: 'product-1',
    stage: 'Product',
    title: 'Prototypes',
    subtitle: 'Testing Before Building',
    description: 'What is a prototype and why is it helpful?',
    questionLabel: 'Write It',
    questionDescription: 'What is a prototype in your words?',
    hint: 'Mention testing and feedback.'
  },
  {
    id: 'product-2',
    stage: 'Product',
    title: 'Your MVP',
    subtitle: 'Start Small',
    description: 'Define your Minimum Viable Product.',
    questionLabel: 'Plan It',
    questionDescription: 'Describe your MVP in 2-3 sentences.',
    hint: 'Just the core — no extras.'
  }
  // ... any other levels would follow
];