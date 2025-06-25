# Monorepo Template

This is a sample monorepo setup that includes:

* A **Next.js** frontend
* Two backend services using **Hono** and **Express**
* A shared UI package using **shadcn/ui**

Feel free to use this as a starting point for your own projects. Suggestions and improvements are always welcome.

## Getting Started

Clone the repository and install dependencies:

```bash
git clone https://github.com/9is-z/monorepo.git
cd monorepo
pnpm install
```

> **Note:** After cloning, you can safely delete the `.git` folder and initialize your own

## Development

To start all apps in development mode:

```bash
pnpm dev
```

This runs the frontend and both backends concurrently.

## Build

To build the entire project (frontend + both backends), run:

```bash
pnpm build
```

## Using `shadcn/ui` Components

The UI components from `shadcn/ui` are organized as a separate package inside the monorepo. To add new components:

```bash
cd packages/ui
pnpm dlx shadcn@latest add button
```

You can add more components the same way. This setup keeps your design system modular and reusable.

## Contributing

Pull requests are welcome!
Feel free to open an issue for bugs, questions, or feature requests.

---