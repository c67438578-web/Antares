/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Verifique se o seu projeto usa a pasta 'src'. Se não usar, remova o 'src/' do início.
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    // Adicione estes caminhos caso suas pastas estejam na raiz (sem o src)
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        antares: {
          dark: '#0D1B2A',
          cyan: '#00C2FF', // O seu "Verde/Ciano" de destaque
        }
      },
      fontFamily: {
        // Agora o Tailwind prioriza a variável do Next.js
        sans: ['var(--font-inter)', 'ui-sans-serif', 'system-ui'],
        heading: ['var(--font-montserrat)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
