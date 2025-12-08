# Raj Consulting - Next.js Application

A modern web application built with **Next.js 16**, featuring authentication, user profiles, and responsive UI.

##  Technology Stack

### Frontend
- **Next.js 16** - React framework
- **React 19** - UI library
- **TypeScript** - Type-safe development
- **Tailwind CSS 4** - Utility-first CSS
- **Radix UI** - Accessible components
- **Lucide React** - Icon library
- **AOS** - Scroll animations
- **Sonner** - Toast notifications

### Form & Validation
- **React Hook Form** - Form state management
- **Zod** - Schema validation

### API & State
- **Axios** - HTTP client with interceptors
- **Context API** - State management

### Styling
- **Tailwind CSS** - Responsive design
- **next-themes** - Theme support
- **Class Variance Authority** - Component variants

##  Features

### Authentication
- User registration with validation
- Secure login with JWT tokens
- Token refresh mechanism
- Persistent sessions
- Protected routes

### User Profile
- View user info (name, email, role)
- Edit profile name with localStorage persistence
- Real-time component sync
- Avatar with fallback

### UI/UX
- 404 error page
- Responsive header & dropdowns
- Toast notifications
- Smooth animations
- Accessible forms

### API Integration
- Axios with base URL config
- Request token attachment
- 401 error handling
- Automatic token refresh
- Graceful error handling

##  Project Structure

`\
src/
 app/
    layout.tsx
    page.tsx
    not-found.tsx
    profile/page.tsx
 components/
    auth/
       login-form.tsx
       register-form.tsx
    context/auth-context.tsx
    layout/
       header.tsx
       footer.tsx
       container.tsx
    ui/
    sections/
    profile-card.tsx
    user-menu.tsx
 lib/
    axios.ts
    utils.ts
 assets/
`\

##  Environment Variables

Create \.env.local\:

`\env
NEXT_PUBLIC_BASE_URL=https://fakeapi.platzi.com/en/rest/auth-jwt/
`\

##  Installation

`\ash
# Install dependencies
npm install

# Set environment variables
echo "NEXT_PUBLIC_BASE_URL=https://fakeapi.platzi.com/en/rest/auth-jwt/" > .env.local

# Run development server
npm run dev
`\

Open [http://localhost:3000](http://localhost:3000)

##  Building for Production

`\ash
npm run build
npm start
`\

##  Key Components

### Auth Context (\auth-context.tsx\)
- Global auth state management
- login(), register(), logout() functions
- Profile fetching
- Error handling

### Axios Config (\axios.ts\)
- Base URL setup
- Request interceptor (token attachment)
- Response interceptor (401 handling)
- Automatic token refresh

### Forms
- Login: email, password with toggle
- Register: name, email, password with validation
- Zod schemas
- React Hook Form integration

### Profile
- Edit name with localStorage persistence
- Component sync via events
- Avatar with initials
- Role badge

##  Security
-  Password validation (6+ chars)
-  Email validation
-  Bearer token auth
-  Token refresh
-  Password field toggle
-  Protected routes
-  localStorage tokens

##  Styling
- Tailwind CSS for responsive design
- Radix UI for accessibility
- Consistent typography & spacing
- Dark/light theme support
- AOS animations
- Custom component variants

##  Responsive
- Mobile-first approach
- Breakpoints: sm, md, lg, xl, 2xl
- Flexbox & Grid layouts
- Optimized images

##  Development
- ESLint for linting
- TypeScript for types
- Zod for validation

##  Resources

- [Next.js Docs](https://nextjs.org/docs)
- [React Docs](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Radix UI](https://radix-ui.com)
- [React Hook Form](https://react-hook-form.com)
- [Zod](https://zod.dev)
- [Axios](https://axios-http.com)

---

**Built with  using Next.js, React, and TypeScript**
