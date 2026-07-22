import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import PrivacyPage from './pages/PrivacyPage'
import TermsPage from './pages/TermsPage'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-pastelSoft text-pastelText">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/aviso-de-privacidad" element={<PrivacyPage />} />
          <Route path="/terminos" element={<TermsPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
