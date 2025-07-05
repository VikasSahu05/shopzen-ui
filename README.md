# ShopZen UI

A modern React-based e-commerce dashboard built with Vite, featuring order management, analytics, and a clean user interface.


## 🛠️ Tech Stack

- **React 19** - Modern React with latest features
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **React Icons** - Beautiful icon library
- **Date-fns** - Modern date utility library
- **Phosphor React** - Icon library for React
- **React Date Range** - Date range picker component

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (version 18 or higher)
- **npm** (comes with Node.js) or **yarn**

To check your Node.js version, run:
```bash
node --version
```

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/VikasSahu05/shopzen-ui.git
cd shopzen-ui
```

### 2. Install Dependencies

Using npm:
```bash
npm install
```

Or using yarn:
```bash
yarn install
```

### 3. Start the Development Server

```bash
npm run dev
```

Or using yarn:
```bash
yarn dev
```

The application will be available at `http://localhost:5173` (or another port if 5173 is busy).

### 4. Open in Browser

Open your browser and navigate to `http://localhost:5173` to see the application running.

## 📜 Available Scripts

In the project directory, you can run:

### `npm run dev`
Starts the development server with hot reload enabled.

### `npm run build`
Builds the app for production in the `dist` folder.

### `npm run preview`
Locally preview the production build.

### `npm run lint`
Runs ESLint to check for code quality and potential issues.

## 🏗️ Project Structure

```
shopzen-ui/
├── public/                 # Static assets
│   ├── components/         # React components
│   │   ├── CreateOrderModal.jsx
│   │   ├── Navbar.jsx
│   │   ├── OrdersTable.jsx
│   │   ├── Sidebar.jsx
│   │   └── SummaryCards.jsx
│   ├── assets/            # Images and other assets
│   ├── App.jsx           # Main application component
│   ├── App.css           # Application styles
│   ├── index.css         # Global styles
│   └── main.jsx          # Application entry point
├── package.json          # Dependencies and scripts
├── vite.config.js        # Vite configuration
└── eslint.config.js      # ESLint configuration
```

## 🎨 Key Components

- **Sidebar**: Navigation sidebar with menu items
- **Navbar**: Top navigation bar with user info and actions
- **SummaryCards**: Dashboard cards showing key metrics
- **OrdersTable**: Comprehensive table for order management
- **CreateOrderModal**: Modal for creating new orders

## 🔧 Development

### Code Quality

The project uses ESLint for code quality. Run the linter to check for issues:

```bash
npm run lint
```

### Building for Production

To create a production build:

```bash
npm run build
```

The build files will be created in the `dist` directory.

### Preview Production Build

To preview the production build locally:

```bash
npm run preview
```

## 🌐 Browser Support

The application supports all modern browsers:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License.

## 🆘 Troubleshooting

### Port Already in Use
If port 5173 is already in use, Vite will automatically use the next available port. Check the terminal output for the correct URL.

### Node Version Issues
Make sure you're using Node.js version 18 or higher. You can use `nvm` to manage Node.js versions:

```bash
nvm install 18
nvm use 18
```

### Dependency Issues
If you encounter dependency issues, try clearing the cache:

```bash
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

## 📞 Support

If you encounter any issues or have questions, please open an issue in the repository.
