---
title: Spaces
emoji: 🔮
order: 2
image: ./images/spaces.png
timeline: 3 weeks
roles:
  - Interaction Design
  - Developer
  - UI/UX
tools:
  - Unity
  - C++
pitch: Mindfulness in a virtual world
contextInquiry:
  title: Research Insights
  description: Conversations and research revealed the frustration with virtual experiences, highlighting key actions needed for a meditative game.
  steps:
    - Typical onboarding process for VR applications are lengthy, motivating users to quit the experience.
    - Users do not feel comfortable in rigid environments or with demanding in-game commands.
    - People struggle to proactively engage in meditation, noting time and awareness as challenges.
storyboard:
  title: Storyboard
  description: The therapeutic benefits are depicted by Dr. Johnson's virtual method of treatment for traumatic events.
  image: ./images/spaces-story.png
design:
  title: User flow and interface
  description: Existing applications served as inspiration for a user-interface that emphasizes selection and navigation features.
  image: ./images/spaces-userflow.png
  additionalImages:
    - ./images/sd-1.png
    - ./images/sd-2.png
research:
  title: Testing insights
  description: Participant walkthroughs of an early prototype influenced changes to key frames and interaction flows.
  steps:
    - quote: "The scene is definitely aesthetically pleasing with relevant interactions available. Objects can provide more feedback to feel less static."
      designChange: Enhance object feedback, physically or audibly, to match realistic physics. Provide secondary actions in-line with therapeutic goals.
    - quote: "The novelty of the scene fades away quickly. How do you keep the user motivated to use and return to the application?"
      designChange: Reward daily engagement with physical and functional expansions to map. Implement task completion and tracking for autosaving.
    - quote: "The concept is personal and non-intrusive. The lack of interface clarity makes the user's goals vague. Subtle indicators would be useful."
      designChange: Integrate the UI to improve visibility of system status and clarity of application objective. Add tooltips and pop-ups for learnability.
showcase:
  - title: Navigation
    description: Use the joystick to traverse the scene or teleport to a location anchor when in range.
    gifs:
      - ./images/nav-1.gif
      - ./images/nav-2.jpeg
  - title: Manipulation
    description: Matching physical properties and real-world affordances within our virtual scene.
    gifs:
      - ./images/sel-2.jpeg
      - ./images/sel-1.gif
  - title: Selection
    description: Ray casting to interact with 2D UI across the 3D environment.
    gifs:
      - ./images/man-1.gif
      - ./images/man-2.jpeg
conclusion:
  title: Conclusion
  description: Key takeaways from my experience of translating the freedom of physical interactions into a virtual environment.
  steps:
    - subheading: Test smaller and more often.
      text: Designing in a new dimension demands careful attention to user flow. In our project, ensuring natural and learnable interactions was crucial. Smaller tests validate the design before expanding the application.
    - subheading: UX Design for Virtual Reality.
      text: Testing and iterating different versions of our application has deepened my understanding of effective design strategies, essential for creating immersive virtual experiences that engage users' senses.
    - subheading: Logical constraints.
      text: Balancing virtual and real-world interactions is challenging due to technical constraints. Unrealistic behaviors can break immersion. Efficient error prevention through guided user actions reduces revisions and speeds up development.
---

A meditative, low-commitment immersive VR experience.
