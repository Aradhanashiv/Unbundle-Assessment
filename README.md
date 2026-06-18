# Dental Landing Page

A responsive React.js + Tailwind CSS landing page built from a Figma design.

## Features

* Responsive design for Mobile and Desktop
* Hero Section
* Interactive Appointment Form
* FAQ Accordion
* Results Section with dynamic data rendering
* Loading and Error States
* Tailwind CSS Styling
* React Hooks (`useState`, `useEffect`)
* Local JSON data integration
* Accessible form controls

---

## Tech Stack

* React.js
* Vite
* Tailwind CSS
* Lucide React Icons

---

## Installation

### 1. Clone the Repository

```bash
git clone <repository-url>
cd <project-name>
```

### 2. Create a Vite React Project

```bash
npm create vite@latest
```

Select:

```text
Framework: React
Variant: JavaScript
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Install Tailwind CSS

```bash
npm install tailwindcss @tailwindcss/vite
```

Update your `vite.config.js`:

```js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
});
```

Import Tailwind in `src/index.css`:

```css
@import "tailwindcss";
```

### 5. Install Lucide React

```bash
npm install lucide-react
```

### 6. Start Development Server

```bash
npm run dev
```

---

## Project Structure



## Loading State

A loading spinner is displayed while data is being loaded.

```jsx
const [loading, setLoading] = useState(true);
```

---

## Error Handling

Errors are handled gracefully and displayed to the user.

```jsx
const [error, setError] = useState("");
```


Aradhana Shivhare

