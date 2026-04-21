# 🚀 JobTrack Marketing Website

A premium, high-performance landing page for the **JobTrack Android Assistant**. Built with a modern SaaS aesthetic, this website accurately reflects the app's technical capabilities, privacy-first mission, and user journey.

![JobTrack Landing Page Preview](https://raw.githubusercontent.com/pranayharjai7/JobApplicationTracker/main/JobTrackIcon.png)

## ✨ Features Highlighted

- **Automated Gmail Sync**: Demonstrates how the app extracts job confirmations and interview invites without user intervention.
- **AI-Powered Insights**: Showcases the multi-provider LLM extraction layer (Groq, Gemini, etc.) that clarifies application details.
- **Biometric Security**: Previews the optional hardware-backed lock features (Fingerprint/Face) that protect sensitive search data.
- **Advanced Encryption**: Highlights the SQLCipher (AES-256) integration for the local Room database, ensuring data integrity.
- **Interactive Visualization**: Previews the Timeline and Heatmap features that help users visualize search intensity.
- **Privacy First**: Dedicated, high-trust pages for the Privacy Policy and Terms of Service, mirroring the Android project's legal compliance.

## 🛠️ Tech Stack

- **Core**: [Next.js 14](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Typography**: [Inter](https://fonts.google.com/specimen/Inter) (Body) & [Outfit](https://fonts.google.com/specimen/Outfit) (Headings)

## 📂 Project Structure

- `/app`: All page routes (`/features`, `/about`, `/privacy`, `/terms`).
- `/components`: High-fidelity UI components and interactive mockups.
- `/public`: Branding assets and icons.
- `tailwind.config.ts`: Customized design tokens (Indigo #5C6BC0 accent).

## 🚀 Getting Started

### Local Development

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Run the Development Server**:
   ```bash
   npm run dev
   ```

3. **Open the Site**:
   Visit [http://localhost:3000](http://localhost:3000)

### Deployment

This project is optimized for deployment on **Vercel**. For a full guide on various hosting options (Vercel, Netlify, or Static Export), please refer to our [Hosting Guide](./hosting_guide.md).

## 🎨 Design System

The website implements a **"Linear/Stripe"** inspired aesthetic:
- **Dark Mode First**: Clean `#09090B` background for a focused experience.
- **Indigo Brand Palette**: Centered around `#5C6BC0` for high-impact visual hierarchy.
- **Global Centering**: A robust `1200px` container system ensures symmetry across all viewport sizes.
- **Subtle Glassmorphism**: High-trust UI elements using backdrop blurs and micro-interactions.

## 🤝 Contributing

This website is part of the larger JobTrack ecosystem. To contribute to the Android application, please visit the [JobApplicationTracker Repository](https://github.com/pranayharjai7/JobApplicationTracker).

---

Created with ❤️ by **Pranay Harjai**
