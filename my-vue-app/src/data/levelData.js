// src/data/levelData.js
export const levels = [
  {
    id: 'concept-1',
    stage: 'Concept', // Or 'Stage 1' 
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
// In src/data/levelData.js, replace the old 'concept-2' object with this:
{
  id: 'concept-2',
  stage: 'Concept', // Or 'Stage 1' if you prefer
  title: 'Business Name',
  subtitle: 'Choosing a Memorable and Available Name', // New subtitle
  description: `Pick a catchy name.
  Shorter is better. Does it describe your business? Does it stand out from your competitors? Is it something your customers can remember?

  <strong>Tools:</strong>

  Chat GPT, try the following prompt:
  Create a list of 20 trademarkable names that would classify as fanciful under USPTO rules for a company that [Describe what you do or sell].

  More example prompts to use in ChatGPT:
  "Can you suggest a catchy and friendly name for a dog walking service that emphasizes safety and fun?"
  "I'm looking for a name for a tutoring business that provides personalized, one-on-one coaching for students."
  "I need a name for a business that sells fandom-themed merchandise.”
  "Can you suggest a cool name for a pop-up store featuring hip, handcrafted jewelry?"

  AI Name generation tool: <a href="https://namelix.com/" target="_blank" rel="noopener noreferrer">https://namelix.com/</a>

  <strong>Domain Name</strong>
  Now that you have an idea for your business name, let’s go buy the domain name for your website and web presence!

  Check if your domain is available by using <a href="https://namechk.com/" target="_blank" rel="noopener noreferrer">https://namechk.com/</a>
  Reminder: “.com” names are ideal, but not required. Try to have your name available on the major social media platforms as well.
  You can use <a href="https://namechk.com/" target="_blank" rel="noopener noreferrer">https://namechk.com/</a> to check if your name is available on major social platforms too.

  <aside style="margin-top: 1em; padding: 0.5em; background-color: #f0f0f0; border-left: 3px solid #4CAF50;">
    <img src="/icons/drafts_green.svg" alt="Business Name Ideas icon" style="width: 24px; height: 24px; vertical-align: middle; margin-right: 8px;" /> Business Name Ideas
    <!-- This section might be for users to brainstorm. The question below will ask for the final one. -->
  </aside>
  `,
    questionLabel: 'Your Final Business Name',
    questionDescription: 'What is your chosen business name after considering the tools and checking availability?',
    hint: 'Enter the final name you\'ve decided on. e.g., "SkyStart Innovations"'
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