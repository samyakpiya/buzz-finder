This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

## Learnings

1. You can add a file named not_found.tsx in your app directory. This is a special file in Next.js routing system that users automatically get redirected to if the page they're trying to navigate to does not exist.
2. Setting width and height of a Next.js Image component is helpful for preventing Cumulative Layout Shift (CLS) which is one of the metrics that search engines use to rank pages.
