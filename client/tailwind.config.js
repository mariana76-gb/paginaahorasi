export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        pastelGreen: '#16A34A', // stronger, vibrant green
        pastelPink: '#E11D48', // stronger, vibrant pink
        pastelWhite: '#FFFBF9',
        pastelText: '#0F172A', // darker text for better contrast
        pastelSoft: '#F0FFF4',
      },
      boxShadow: {
        soft: '0 20px 60px rgba(0,0,0,0.08)',
      },
    },
  },
  plugins: [],
}
