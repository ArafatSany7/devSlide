# devSlide

> **Organize Your Slide Collections**
> Modern Presentation Management for Academic Environments



## 📖 Overview

**devSlide** is a streamlined presentation management platform designed specifically for academic environments. It simplifies the workflow for both students and instructors by allowing users to create secure, password-protected collections for class presentations. With instant setup, real-time updates, and an intuitive interface, devSlide makes organizing and submitting slides easier than ever.

## ✨ Key Features

- **Quick Setup:** Create slide collections in under 30 seconds with an intuitive interface.
- **No Registration:** Simple password-based access eliminates the need for complex registration processes.
- **Live Updates:** See submissions as they come in with real-time updates and notifications.
- **Auto Cleanup:** Collections are automatically deleted after 24 hours to keep the platform clean and organized.
- **Secure Access:** Password-protected presentation collections ensure privacy and security.

## 🚀 Technologies Used

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router)
- **Library:** [React 19](https://react.dev/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Database:** PostgreSQL
- **ORM:** [Prisma](https://www.prisma.io/)
- **Icons:** [Lucide React](https://lucide.dev/)

## 📦 Project Dependencies

- `@prisma/client`
- `dotenv`
- `lucide-react`
- `next`
- `react` & `react-dom`
- `tailwindcss` (Dev)
- `eslint` (Dev)
- `typescript` (Dev)

## 🛠️ How to Run Locally

Follow these instructions to set up and run devSlide on your local machine.

### Prerequisites

- Node.js (v18 or higher)
- npm, pnpm, or yarn
- PostgreSQL database

### Installation Steps

1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   cd devSlide
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   Create a `.env` file in the root directory and add your database connection string:
   ```env
   DATABASE_URL="postgresql://user:password@localhost:5432/devslide?schema=public"
   ```

4. **Run database migrations:**
   ```bash
   npx prisma generate
   npx prisma db push
   ```
   *(Alternatively, run `npx prisma migrate dev` if you are using migrations)*

5. **Start the development server:**
   ```bash
   npm run dev
   ```

6. **Open the application:**
   Visit [http://localhost:3000](http://localhost:3000) in your browser to see devSlide in action.

## 🔗 Links

- **Live Demo:** [https://devslide-jet.vercel.app/](https://devslide-jet.vercel.app/) 
- **Repository:** [GitHub](https://github.com/ArafatSany7/devSlide)
- **Issue Tracker:** [Report a Bug](https://github.com/ArafatSany7/devSlide/issues)

---

