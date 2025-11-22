# KejaSpot 🏠

**KejaSpot** is a modern, full-stack rental marketplace tailored for Kenya. Find or list apartments, houses, vacation stays, or hourly spots in Nairobi, Mombasa, Kisumu, Nakuru, and beyond — with flexible pricing for hourly, daily, weekly, or monthly rentals.

🔗 **Live Demo**: https://kejaspot.vercel.app

[![Vercel](https://img.shields.io/badge/Vercel-Deployed-black?style=flat&logo=vercel)](https://kejaspot.vercel.app)
[![Next.js](https://img.shields.io/badge/Next.js-14.2.5-000000?style=flat&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.2.2-blue?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=flat&logo=tailwind-css)](https://tailwindcss.com/)

## ✨ Features

- Browse & filter listings by location, price, and rental duration
- Detailed property pages with images, amenities, and contact info
- Add and manage your own listings (hourly to monthly pricing)
- Secure Google OAuth login via NextAuth.js
- Image uploads powered by **Cloudinary**
- Bookmark/favorite properties
- Fully responsive, mobile-first design
- Fast search and category filters
- SEO-friendly with Next.js server-side rendering

## 🛠 Tech Stack

| Layer            | Technology                          |
|------------------|-------------------------------------|
| Framework        | Next.js 14 (App Router) + TypeScript |
| Styling          | Tailwind CSS                        |
| Database         | MongoDB + Mongoose                  |
| Authentication   | NextAuth.js (Google Provider)       |
| Image Hosting    | Cloudinary                          |
| Deployment       | Vercel                              |

## 🚀 Getting Started

### Prerequisites
- Node.js ≥ 18
- MongoDB (local or Atlas)
- Google OAuth credentials
- Cloudinary account

### 1. Clone & Install
```bash
git clone https://github.com/stephen-njiu/kejaspot.git
cd kejaspot
npm install
```

### 2. Environment Variables
Create `.env.local` in the root:

```env
# MongoDB
MONGODB_URI=mongodb+srv://<user>:<password>@cluster.mongodb.net/kejaspot

# NextAuth
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_strong_secret_here

GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

# Cloudinary
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

### 3. Run Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## 📦 Available Scripts

```bash
npm run dev     # Start development server
npm run build   # Build for production
npm run start   # Run production build
npm run lint    # Run ESLint
```

## 🚀 Deploy on Vercel

One-click deploy (all env vars auto-detected):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/stephen-njiu/kejaspot)

## 🤝 Contributing

Contributions are welcome!  
Open issues or submit pull requests to help grow KejaSpot.

1. Fork the repo
2. Create your branch (`git checkout -b feature/cool-stuff`)
3. Commit (`git commit -m 'Add cool stuff'`)
4. Push & open a Pull Request

## 📄 License

MIT License – see [LICENSE](LICENSE) for details.

## 👨‍💻 Author

**Stephen Njiu**  
GitHub: [@stephen-njiu](https://github.com/stephen-njiu)

---

**KejaSpot – Warmth & Style in Every Stay, in Every Keja.**  
Built with 💙 for Kenya 🇰🇪
```
