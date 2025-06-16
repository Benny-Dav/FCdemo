SCRIBE Development Plan – Football Academy + Public Gym Website

🟠 S – Situation
You're building a multi-page, responsive website for a Football Academy with a public gym. It should be high-energy, credible, and stylish, using orange as the primary brand color. You've already set up the Vite project and Tailwind CSS manually.

🟠 C – Context
You want to structure the website with multiple linked pages:

Home (landing)

About

Programs

Gallery

Testimonials

Contact

You’ll use:

React Router v6 for routing

Tailwind CSS for styling

This layout reference as your UI direction

Orange (#FF6F00) as the primary color, supported by deep darks and soft light text

🟠 R – Role
As the Frontend Developer, you're responsible for:

Structuring pages and components

Designing responsive, aesthetic UIs

Handling navigation and interactivity

Creating reusable, clean code

🟠 I – Implementation Plan (by Phase)
🚧 Phase 1: Add Routing & Page Layout
✅ Goal: Establish the page structure and routing

Install React Router DOM

bash
Copy
Edit
npm install react-router-dom
Create folders:

src/pages/: for each route-based page

src/components/: for shared UI elements (e.g., Navbar, Footer)

Create pages:

Home.jsx

About.jsx

Programs.jsx

Gallery.jsx

Testimonials.jsx

Contact.jsx

Setup Router in main.jsx:

jsx
Copy
Edit
import { BrowserRouter } from 'react-router-dom';

<React.StrictMode>
  <BrowserRouter>
    <App />
  </BrowserRouter>
</React.StrictMode>
Define routes in App.jsx using react-router-dom:

jsx
Copy
Edit
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Programs from './pages/Programs';
import Gallery from './pages/Gallery';
import Testimonials from './pages/Testimonials';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}
🎨 Phase 2: Navbar, Footer & Base Styles
✅ Goal: Build persistent layout elements and apply consistent styling

Navbar:

Sticky top

Links to all 6 pages

CTA button (e.g., “Join Now”)

Mobile menu toggle (hamburger)

Footer:

Contact info

Location

Social icons

Tailwind Theme Setup in tailwind.config.js:

js
Copy
Edit
colors: {
  primary: '#FF6F00',
  dark: '#1A1A1A',
  lightText: '#F9F9F9',
  grayText: '#A1A1A1',
}
📄 Phase 3: Build Each Page
✅ Goal: Fill each route with content components, styled cleanly

✅ Home.jsx
Hero section (image/video + headline + CTA)

Programs preview

Gallery preview

Testimonials preview

CTA banners

✅ About.jsx
Academy mission and story

Team/coaches profiles

Vision & values

Timeline or origin story

Embedded video or gallery carousel

✅ Programs.jsx
Football academy details (age groups, training times)

Public gym info (equipment, pricing)

Registration CTA (button or modal)

✅ Gallery.jsx
Grid of images (matches, gym, events)

Category filters (e.g., “Academy”, “Gym”)

Modal/lightbox for image preview

✅ Testimonials.jsx
Cards or carousel of testimonials

Option to submit testimonial (optional form)

✅ Contact.jsx
Embedded Google Map

Contact form (name, email, message)

WhatsApp / phone / email details

🧪 Phase 4: Responsiveness & Interactivity
✅ Goal: Make the site dynamic and mobile-friendly

Add mobile breakpoints using Tailwind (sm:, md:, lg:)

Animate on scroll using AOS or Framer Motion

Add hover/focus transitions to buttons and links

Optional: form submission logic with EmailJS or dummy handler

🚀 Phase 5: Polish and Final Touches
✅ Goal: Add finishing UI details

Set page title/meta tags with react-helmet

Add favicon, logo

404 page for unmatched routes

Optional: add lazy loading or image optimizations

🟠 B – Behaviour
You are expected to:

Write modular, reusable components

Follow mobile-first responsive design

Use consistent spacing, font sizes, and colors

Stick to the reference layout’s clean visual structure

🟠 E – End Result
You will have:

A visually impressive, multi-page website

Smooth navigation and structure

Clear presentation of the academy and gym offerings

A production-ready layout you can deploy or showcase