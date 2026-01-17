import { Link } from 'bertui/router';

const posts = {
  'getting-started': {
    title: 'Getting Started with BertUI',
    date: 'Dec 15, 2025',
    readTime: '5 min read',
    category: 'Tutorial',
    color: '#3b82f6',
    content: `
BertUI makes it incredibly easy to build fast React applications. Let's walk through creating your first app.

## Installation

First, create a new BertUI app using the CLI:

\`\`\`bash
bunx create-bertui my-app
cd my-app
bun run dev
\`\`\`

That's it! Your dev server is now running at http://localhost:3000

## File-Based Routing

The magic of BertUI is in its file-based routing. Create a file in src/pages/ and you automatically get a route:

- src/pages/index.jsx → /
- src/pages/about.jsx → /about  
- src/pages/blog/index.jsx → /blog

## Dynamic Routes

Need dynamic routes? Use square brackets:

- src/pages/user/[id].jsx → /user/:id
- src/pages/blog/[slug].jsx → /blog/:slug

Access the params in your component:

\`\`\`jsx
export default function User({ params }) {
  return <div>User ID: {params.id}</div>;
}
\`\`\`

## Navigation

Use the Link component for client-side navigation:

\`\`\`jsx
import { Link } from 'bertui/router';

<Link to="/about">About</Link>
\`\`\`

## What's Next?

- Add more pages
- Style with CSS
- Deploy to production with bun run build

Happy coding!
    `
  },
  'routing-guide': {
    title: 'Mastering File-based Routing',
    date: 'Dec 14, 2024',
    readTime: '8 min read',
    category: 'Guide',
    color: '#8b5cf6',
    content: `
BertUI's routing system is inspired by Next.js but optimized for Bun's incredible speed. Let's explore everything you can do.

## Basic Routes

The file structure directly maps to your URLs:

\`\`\`
src/pages/
├── index.jsx       → /
├── about.jsx       → /about
├── contact.jsx     → /contact
└── blog/
    ├── index.jsx   → /blog
    └── post.jsx    → /blog/post
\`\`\`

## Dynamic Segments

Use [param] syntax for dynamic segments:

\`\`\`
src/pages/
├── user/[id].jsx              → /user/:id
├── blog/[slug].jsx            → /blog/:slug
└── shop/[category]/[item].jsx → /shop/:category/:item
\`\`\`

## Accessing Route Parameters

Route parameters are passed as props:

\`\`\`jsx
export default function BlogPost({ params }) {
  const { slug } = params;
  
  return (
    <article>
      <h1>Post: {slug}</h1>
    </article>
  );
}
\`\`\`

## Navigation

Two ways to navigate:

1. **Link Component** (preferred):
\`\`\`jsx
import { Link } from 'bertui/router';

<Link to="/about">About</Link>
\`\`\`

2. **Programmatic Navigation**:
\`\`\`jsx
import { useRouter } from 'bertui/router';

function LoginButton() {
  const { navigate } = useRouter();
  
  return (
    <button onClick={() => navigate('/dashboard')}>
      Login
    </button>
  );
}
\`\`\`

## Route Priority

Static routes match before dynamic ones:

- /blog matches blog.jsx (static)
- /blog/123 matches blog/[slug].jsx (dynamic)

## Performance

Every route is automatically code-split for optimal loading times. Only the code for the current page is loaded.

## What's Next?

Experiment with nested routes, build a real app, and see how fast BertUI really is!
    `
  },
  'performance': {
    title: 'Building Lightning-Fast Apps',
    date: 'Dec 13, 2024',
    readTime: '6 min read',
    category: 'Performance',
    color: '#10b981',
    content: `
BertUI is built for speed from the ground up. Here's how to make the most of it.

## Why BertUI is Fast

1. **Bun Runtime**: Native speed, instant startup
2. **Code Splitting**: Automatic per-route splitting
3. **Hot Module Replacement**: Instant updates
4. **Zero Config**: No build tool overhead

## Optimization Tips

### 1. Keep Components Small

Break down large components into smaller, reusable pieces:

\`\`\`jsx
// ❌ Bad
function HomePage() {
  // 500 lines of code
}

// ✅ Good
function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <Testimonials />
      <CTA />
    </>
  );
}
\`\`\`

### 2. Use Dynamic Imports for Heavy Components

\`\`\`jsx
import { lazy, Suspense } from 'react';

const Chart = lazy(() => import('./Chart'));

function Dashboard() {
  return (
    <Suspense fallback={<Spinner />}>
      <Chart data={data} />
    </Suspense>
  );
}
\`\`\`

### 3. Optimize Images

Keep images small and use modern formats:
- WebP for photos
- SVG for logos/icons
- Lazy load below the fold

### 4. Minimize Bundle Size

BertUI automatically:
- Tree-shakes unused code
- Minifies production builds
- Splits routes into separate chunks

## Measuring Performance

Use browser DevTools:
- Network tab for bundle sizes
- Performance tab for render times
- Lighthouse for overall score

## Production Build

\`\`\`bash
bun run build
\`\`\`

This creates optimized bundles in the dist/ folder.

## Real-World Results

With BertUI, you can expect:
- <100ms dev server startup
- <50ms hot module reload
- Sub-second production builds

## Conclusion

Focus on writing great code. BertUI handles the speed.
    `
  }
};

export default function BlogPost({ params }) {
  const post = posts[params.slug];
  
  if (!post) {
    return (
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
        fontFamily: 'system-ui',
        padding: '2rem'
      }}>
        <div style={{
          background: 'white',
          borderRadius: '20px',
          padding: '4rem',
          textAlign: 'center',
          boxShadow: '0 20px 60px rgba(0, 0, 0, 0.2)'
        }}>
          <h1 style={{ fontSize: '4rem', margin: 0, color: '#333' }}>404</h1>
          <p style={{ fontSize: '1.25rem', color: '#666', marginBottom: '2rem' }}>
            Post not found
          </p>
          <Link to="/blog" style={{
            padding: '1rem 2rem',
            background: '#4facfe',
            color: 'white',
            borderRadius: '50px',
            textDecoration: 'none',
            fontWeight: '600',
            display: 'inline-block'
          }}>
            ← Back to Blog
          </Link>
        </div>
      </div>
    );
  }
  
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      <nav style={{
        padding: '1.5rem 2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        background: 'rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(10px)'
      }}>
        <Link to="/" style={{ color: 'white', textDecoration: 'none', fontSize: '1.5rem', fontWeight: 'bold' }}>
          ⚡ BertUI
        </Link>
        <Link to="/blog" style={{
          color: 'white',
          textDecoration: 'none',
          fontWeight: '500',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem'
        }}>
          ← Back to Blog
        </Link>
      </nav>

      <article style={{
        maxWidth: '800px',
        margin: '0 auto',
        padding: '3rem 2rem'
      }}>
        <header style={{
          background: 'rgba(255, 255, 255, 0.95)',
          borderRadius: '20px',
          padding: '3rem',
          marginBottom: '2rem',
          boxShadow: '0 20px 60px rgba(0, 0, 0, 0.15)'
        }}>
          <div style={{ marginBottom: '1rem' }}>
            <span style={{
              padding: '0.5rem 1rem',
              background: post.color,
              color: 'white',
              borderRadius: '20px',
              fontSize: '0.9rem',
              fontWeight: '600'
            }}>
              {post.category}
            </span>
          </div>

          <h1 style={{
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            marginBottom: '1rem',
            color: '#1a1a1a',
            fontWeight: '900',
            lineHeight: '1.2'
          }}>
            {post.title}
          </h1>

          <div style={{
            display: 'flex',
            gap: '1.5rem',
            color: '#666',
            fontSize: '0.95rem'
          }}>
            <span>📅 {post.date}</span>
            <span>⏱️ {post.readTime}</span>
          </div>
        </header>

        <div style={{
          background: 'rgba(255, 255, 255, 0.95)',
          borderRadius: '20px',
          padding: '3rem',
          boxShadow: '0 20px 60px rgba(0, 0, 0, 0.15)',
          lineHeight: '1.8',
          fontSize: '1.05rem',
          color: '#333'
        }}>
          {post.content.split('\n\n').map((paragraph, i) => {
            if (paragraph.startsWith('## ')) {
              return (
                <h2 key={i} style={{
                  fontSize: '1.75rem',
                  marginTop: '2rem',
                  marginBottom: '1rem',
                  color: '#1a1a1a',
                  fontWeight: '700'
                }}>
                  {paragraph.replace('## ', '')}
                </h2>
              );
            }
            
            if (paragraph.startsWith('```')) {
              const code = paragraph.replace(/```\w*\n?|\n?```/g, '');
              return (
                <pre key={i} style={{
                  background: '#1a1a1a',
                  color: '#4ade80',
                  padding: '1.5rem',
                  borderRadius: '10px',
                  overflow: 'auto',
                  fontSize: '0.95rem',
                  marginTop: '1.5rem',
                  marginBottom: '1.5rem'
                }}>
                  <code>{code}</code>
                </pre>
              );
            }
            
            return (
              <p key={i} style={{ marginBottom: '1.5rem' }}>
                {paragraph}
              </p>
            );
          })}
        </div>

        <div style={{
          marginTop: '3rem',
          textAlign: 'center',
          padding: '3rem',
          background: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(10px)',
          borderRadius: '20px',
          border: '1px solid rgba(255, 255, 255, 0.2)'
        }}>
          <p style={{ color: 'white', fontSize: '1.1rem', marginBottom: '1.5rem' }}>
            Enjoyed this article?
          </p>
          <Link to="/blog" style={{
            padding: '1rem 2rem',
            background: 'white',
            color: post.color,
            borderRadius: '50px',
            textDecoration: 'none',
            fontWeight: '600',
            fontSize: '1.1rem',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
            display: 'inline-block'
          }}>
            Read More Articles
          </Link>
        </div>
      </article>
    </div>
  );
}