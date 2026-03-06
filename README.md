# SAYE - Your Safety, Our Shadow
SAYE is a minimal, high-impact safety tool designed to get help fast. I built this focusing on one thing: speed. In an emergency, you don't have time to navigate menus, so I engineered a single-trigger interface that works instantly when every second counts.

### Key Features
* **Instant SOS Trigger:** A high-priority button that activates the emergency state the moment it's touched.
* **Visual Pulse Feedback:** I added a custom ripple animation so the user gets an immediate visual "handshake" that the alert is active.
* **Auto-Reset Logic:** The system handles its own state, automatically cooling down after 5 seconds to stay ready for the next action.
* **High-Visibility UI:** Designed with a dark "Slate & Rose" theme to make sure the SOS button is the first thing you see, even in low light.
* **Live Status Updates:** The button text changes dynamically from "SOS" to "SENDING..." to keep the user informed in real-time.

### Why I Built This
Most safety apps are too cluttered. I wanted to see how I could use React hooks to build something life-saving yet incredibly simple. I handled the state management and the CSS animations myself to ensure the app stays lightweight and responds without any lag. It's about tech serving a human purpose.

### Extended Technical Description
* **React State Handling:** Used useState to manage the alert lifecycle, ensuring the UI stays in sync with the background logic.
* **Custom Ripple Engine:** Instead of using a library, I wrote the @keyframes logic from scratch to keep the pulse animation smooth and performant.
* **Asynchronous Timing:** Implemented setTimeout to control the alert flow, simulating a real-world server handshake.
* **Clean Code Structure:** The project is kept lean with zero heavy dependencies, making it easy to scale or integrate with location services later.

### Tech Stack
* **React.js:** For the core component logic.
* **Modern CSS:** For the pulse effects and responsive layout.
* **JavaScript:** For handling the timers and event triggers.

### How to Use
* Clone the repo.
* Run **npm install** and then **npm start**.
* The app will open at **localhost:3000**, ready for testing.
