# 🍵 Spilling Tea

**Spilling Tea** is a lightweight, anonymous web app that allows users to submit and share their thoughts, stories, and notes anonymously. The interface is simple, accessible, and styled with a warm, inviting aesthetic.

## Features

- Submit anonymous posts to categorized sections: **Thoughts**, **Stories**, and **Notes**
- Posts are added instantly to the appropriate section
- Keyboard accessibility support for navigating sections (Arrow Up/Down)
- Lightweight and responsive design with HTML, CSS, and JavaScript

## Demo

> 🧪 This is a frontend-only project and does **not** store posts permanently. All posts exist only during the current browser session.

---

## 📂 Project Structure

```plaintext
.
├── index.html      # Main HTML file
├── ari.css         # Stylesheet
├── ar.js           # JavaScript functionality
└── README.md       # Project documentation

1. What accessibility challenges did you face, and how did you address them?
One challenge was ensuring that users who rely on keyboard navigation or screen readers could interact with the site fully. I addressed this by:

Using aria roles and labels on key areas like forms, sections, and buttons to support assistive technologies.

Adding aria-live="polite" regions so new posts would be announced without interrupting users.

Implementing keyboard navigation using the arrow keys to switch between post sections and ensuring headers received focus when navigating.

These updates made the experience smoother and more inclusive for all users.

2. How did you ensure that your design was responsive and accessible to all users?
To support a wide range of devices and users:

I used CSS Grid and media queries to make the layout adapt from mobile to desktop.

I prioritized color contrast, readable fonts, and clear focus outlines for accessibility.

All forms and buttons are keyboard-accessible and screen reader-friendly.

The site’s interaction model is lightweight and doesn’t rely on any external libraries, making it fast and usable even on lower-end devices.

3. What additional development challenges did you face, and how did you handle them?
In addition to accessibility, I ran into a few general development challenges:

Avoiding Duplicate Code: As the structure for each section (Thoughts, Stories, Notes) was very similar, I had to be careful not to repeat the same code unnecessarily. I considered ways to make the code more modular, though I stuck to plain HTML/JS for simplicity.

Case Sensitivity: Since HTML, CSS, and JavaScript are sometimes case-sensitive (especially in IDs, class names, and JavaScript variables), I ran into bugs when I accidentally used mismatched casing (e.g., postContent vs. postcontent). I solved this by being consistent in naming conventions and debugging carefully.

Correct Attribute Usage: It was easy to forget a for attribute on a <label> or to misplace aria-* attributes. I referenced MDN often to ensure everything was used properly.

4. What tools or resources did you find most helpful during this project?
MDN Web Docs — For syntax, accessibility, and best practices.

WebAIM — Helped guide ARIA and semantic HTML use.

Chrome DevTools & Lighthouse — Helped audit accessibility, responsiveness, and performance.

Keyboard-only testing — Helped catch usability issues early.


