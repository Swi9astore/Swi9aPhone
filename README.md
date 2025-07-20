# Swi9a Phone - Morocco's Premier iPhone Destination

A modern, multilingual full-stack web application for certified refurbished iPhones in Morocco.

## 🌟 Features

- **Multilingual Support**: Arabic (RTL), French, and English with seamless language switching
- **Modern Design**: Clean, premium, and mobile-first responsive design
- **Full-Stack Architecture**: Next.js frontend with Node.js/Express backend
- **E-commerce Ready**: Product catalog, shopping cart, and order management
- **Admin Panel**: Complete admin interface for managing products, orders, and customers
- **Payment Integration**: Ready for Moroccan payment gateways (CMI, PayPal, COD)
- **SEO Optimized**: Server-side rendering and meta optimization
- **Performance**: Fast loading with modern optimization techniques

## 🏗️ Architecture

```
swi9a-phone/
├── frontend/          # Next.js 14 with TypeScript & TailwindCSS
├── backend/           # Node.js/Express API with MongoDB
├── shared/           # Shared types and utilities
└── README.md         # This file
```

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- MongoDB (local or Atlas)
- npm or yarn

### Frontend Setup
```bash
cd frontend
npm install
npm run dev
```

### Backend Setup
```bash
cd backend
npm install
npm run dev
```

## 🌍 Internationalization

The site supports three languages:
- **English** (default): Primary business language
- **Arabic**: Right-to-left (RTL) support for local customers
- **French**: Additional language support for francophone users

## 📱 Mobile-First Design

Optimized for mobile devices with:
- Responsive breakpoints
- Touch-friendly interfaces  
- Fast loading on mobile networks
- Progressive Web App features

## 💳 Payment Integration

Ready for integration with:
- **CMI (Centre Monétique Interbancaire)**: Morocco's primary payment processor
- **PayPal**: International payment support
- **Cash on Delivery (COD)**: Local delivery option

## 🛠️ Tech Stack

### Frontend
- **Next.js 14**: React framework with App Router
- **TypeScript**: Type-safe development
- **TailwindCSS**: Utility-first CSS framework
- **next-intl**: Internationalization
- **Framer Motion**: Smooth animations
- **React Hook Form**: Form management
- **Zod**: Schema validation

### Backend
- **Node.js/Express**: Server framework
- **TypeScript**: Type-safe API development
- **MongoDB/Mongoose**: Database and ODM
- **JWT**: Authentication
- **Bcrypt**: Password hashing
- **Nodemailer**: Email services
- **Multer**: File uploads

## 📊 Key Sections

- **Hero Section**: Premium brand messaging with key value propositions
- **Featured Products**: Curated iPhone collections (15, 14, 13, 12 series)
- **Refurbishment Process**: 32-point quality inspection showcase
- **Trade-In Program**: Device upgrade incentives
- **Customer Testimonials**: Social proof and trust building
- **Contact & Support**: Multi-channel customer service

## 🔧 Development

### Environment Variables

**Frontend (.env.local):**
```
NEXT_PUBLIC_API_URL=http://localhost:5000/api
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

**Backend (.env):**
```
NODE_ENV=development
PORT=5000
MONGODB_URI=mongodb://localhost:27017/swi9a-phone
JWT_SECRET=your-secret-key
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-password
```

### Scripts

**Frontend:**
- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm run start`: Start production server
- `npm run lint`: Run ESLint

**Backend:**
- `npm run dev`: Start development server with hot reload
- `npm run build`: Compile TypeScript
- `npm run start`: Start production server

## 🚀 Deployment

### Replit Deployment

1. Import this repository to Replit
2. Configure environment variables in Replit Secrets
3. Run the project using the built-in runner

### Production Deployment

**Frontend (Vercel/Netlify):**
1. Connect your Git repository
2. Set environment variables
3. Deploy automatically on push

**Backend (Railway/Heroku):**
1. Create new application
2. Connect MongoDB Atlas
3. Set production environment variables
4. Deploy from Git repository

## 📧 Contact Information

- **Main Store**: Casablanca, Morocco
- **Phone**: +212-XXX-XXX-XXX, +1-403-383-4395
- **Email**: contact@swi9aphone.com, sales@swi9aphone.com
- **Hours**: Mon–Fri: 9:00–19:00, Sat–Sun: 10:00–18:00

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## 📄 License

This project is proprietary software for Swi9a Phone.

---

**Built with ❤️ in Morocco** - Combining cutting-edge technology with traditional Moroccan values of trust and quality.