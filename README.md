# Hrithik - Full Stack Engineer Portfolio

A production-ready portfolio website built with **Next.js 14**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**. Optimized for Vercel deployment with full SEO support.

## Features

✨ **Modern Tech Stack**
- Next.js 14 with App Router
- Full TypeScript support
- Tailwind CSS with custom design tokens
- Framer Motion animations
- Radix UI components
- Responsive design

🚀 **Performance & SEO**
- Static generation for fast load times
- Dynamic metadata for each project
- Sitemap and robots.txt
- Optimized images
- Mobile-first responsive design

📱 **Components**
- Reusable UI components (buttons, cards, dialogs, etc.)
- Navigation with smooth scroll
- Project showcase with case studies
- Skills and experience sections
- Contact section

## Getting Started

### Prerequisites
- Node.js 18+ or Bun
- npm, yarn, pnpm, or bun package manager

### Installation

```bash
# Install dependencies
npm install
# or
bun install
```

### Development

```bash
# Run development server
npm run dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/              # Next.js App Router
│   ├── layout.tsx    # Root layout with metadata
│   ├── page.tsx      # Home page
│   └── projects/[slug]/
│       └── page.tsx  # Dynamic project details
├── components/       # React components
│   ├── ui/          # Shadcn/Radix UI components
│   └── ...sections  # Page sections
├── data/            # Static data (projects)
├── hooks/           # Custom React hooks
├── lib/             # Utility functions
└── styles.css       # Global styles & design tokens
```

## Configuration

### Environment Variables

Create a `.env.local` file (see `.env.example`):

```bash
# Add any environment variables here
```

### Tailwind CSS

Custom design tokens are defined in `src/styles.css` using CSS variables. The theme colors use OKLCH color space for better color perception.

### Next.js Configuration

See `next.config.js` for image optimization and other settings.

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub, GitLab, or Bitbucket
2. Import your repository on [Vercel](https://vercel.com)
3. Vercel automatically detects Next.js and configures the build settings
4. Your site will be deployed and available at `your-project.vercel.app`

### Environment Variables on Vercel

1. Go to Project Settings → Environment Variables
2. Add any required environment variables
3. Redeploy

### CORS Configuration

For API requests from the frontend, ensure proper CORS headers are set on your backend API.

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- IE11 not supported

## Performance

- Lighthouse Score: 90+
- Core Web Vitals optimized
- Image optimization with Next.js Image component
- CSS-in-JS with Tailwind for minimal CSS
- Dynamic imports for code splitting

## Styling

The project uses:
- **Tailwind CSS** for utility-first styling
- **Custom CSS variables** for design tokens (colors, spacing, radius)
- **Glass morphism** effects with backdrop blur
- **Gradient utilities** for gradient backgrounds and text
- **Animation utilities** for micro-interactions

## Typography

- **Display Font**: Space Grotesk (for headings)
- **Body Font**: Inter (for body text)
- Variable font sizes for responsive typography

## Contributing

Feel free to submit issues and enhancement requests.

## License

This project is private. Unauthorized copying or distribution is not permitted.

## Contact

For inquiries, contact through the website contact form or visit [hrithik.dev](https://hrithik.dev).

---

Built with ❤️ using Next.js 14
