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
 // Add this new object to your 'levels' array in src/data/levelData.js
// In src/data/levelData.js
{
  id: 'setup-1',
  stage: 'Setup',
  title: 'Meet Your Collaborators',
  levelType: 'credentials', // Special type to render our table
  subtitle: 'Setting Up Your Key Tools: ChatGPT and Canva',
  description: `<p>In this entrepreneurial journey, ChatGPT will be your go-to collaborator. Think of it as a dynamic, Artificial Intelligence-powered partner that's ready to assist you at every turn. Here's how ChatGPT can play a pivotal role in shaping your business:</p>
<ul>
  <li><strong>Idea Generation:</strong> Stuck for ideas? ChatGPT is a brainstorming powerhouse. Ask it for business ideas, innovative solutions, or unique angles to approach common problems.</li>
  <li><strong>Expanding Concepts:</strong> If you have a seed of an idea, ChatGPT can help it grow. It can offer ways to enhance your concept, suggest different perspectives, or add layers to your initial thought.</li>
  <li><strong>Problem-Solving:</strong> Encountering challenges? ChatGPT can provide creative problem-solving techniques, offer advice based on similar cases, or guide you through complex decisions.</li>
  <li><strong>Research and Information:</strong> Need quick info or insights? ChatGPT can fetch relevant data, share industry trends, and provide background information to inform your decisions.</li>
  <li><strong>Creative Collaboration:</strong> Use ChatGPT to refine your marketing strategies, design product features, or even craft compelling narratives for your brand.</li>
</ul>
<p><em>Remember, the more specific your questions and requests, the more tailored ChatGPT's assistance will be. So don't hold back – ask, explore, and let ChatGPT help you navigate through the thrilling process of building your startup. Treat ChatGPT as your conversational partner, it works better if you continue the conversation with your GPT.</em></p>
<hr style="border: 0; border-top: 1px solid #eee; margin: 1em 0;">
<p>Canva is an intuitive online design tool that we will be using in this workshop to create compelling logos and visual elements, helping you bring your business ideas to life.</p>
`,
  // No question fields needed, as the interaction is the custom table.
  questionLabel: '',
  questionDescription: '',
  hint: '',
  requiresInput: false // Input is handled by the custom 'credentials' type
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