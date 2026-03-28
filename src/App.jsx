import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { Star, WhatsappLogo, InstagramLogo, Phone, Wine, ForkKnife, Leaf, Fire, MapPin, Clock } from '@phosphor-icons/react'
import './App.css'

const WA = 'https://wa.me/554830674444?text=Ol%C3%A1!%20Gostaria%20de%20fazer%20uma%20reserva%20no%20Artusi%20Ristorante!'
const TEL = 'tel:+554830674444'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.6 } }),
}
const stagger = { visible: { transition: { staggerChildren: 0.1 } } }

function Navbar() {
  return (
    <nav className="nav">
      <div className="nav-logo">ARTUSI</div>
      <a href={WA} target="_blank" rel="noopener noreferrer" className="nb">
        <WhatsappLogo size={16} weight="duotone" /> Reservar Mesa
      </a>
    </nav>
  )
}

function Hero() {
  return (
    <section className="hero">
      <div className="mx hero-center">
        <motion.div className="hero-line" initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 1 }} />
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }}>
          Artusi Ristorante
        </motion.h1>
        <motion.p className="hero-tag" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
          Gastronomia Italiana de Excelência
        </motion.p>
        <motion.div className="hero-rating" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}>
          <div className="stars">{[0,1,2,3,4].map(i => <Star key={i} size={16} weight="fill" color="#C9A96E" />)}</div>
          <span>4.7 no Google • 500+ avaliações</span>
        </motion.div>
        <motion.p className="hero-sub" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}>
          No coração de Florianópolis. Ingredientes selecionados, receitas italianas autênticas e uma experiência gastronômica inesquecível.
        </motion.p>
        <motion.a href={WA} target="_blank" rel="noopener noreferrer" className="big" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2 }} whileHover={{ scale: 1.03 }}>
          <WhatsappLogo size={20} weight="duotone" /> Reservar Mesa
        </motion.a>
        <motion.a href={TEL} className="hero-tel" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4 }}>
          <Phone size={16} weight="duotone" /> (48) 3067-4444
        </motion.a>
      </div>
    </section>
  )
}

const pratos = [
  { icon: <ForkKnife size={28} weight="duotone" />, title: 'Antipasti', desc: 'Entradas clássicas italianas preparadas com ingredientes frescos e importados.' },
  { icon: <Fire size={28} weight="duotone" />, title: 'Primi Piatti', desc: 'Massas artesanais feitas diariamente. Rigatoni, tagliatelle, ravioli e muito mais.' },
  { icon: <Wine size={28} weight="duotone" />, title: 'Secondi', desc: 'Carnes e frutos do mar com o toque italiano inconfundível. Ossobuco, filetto, peixe fresco.' },
  { icon: <Leaf size={28} weight="duotone" />, title: 'Carta de Vinhos', desc: 'Seleção curada de rótulos italianos e sul-americanos para harmonizar com cada prato.' },
]

function Menu() {
  return (
    <section className="sp menu-sec" id="menu">
      <div className="mx">
        <motion.div className="sh" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <span className="stg">Il Menu</span>
          <h2>Autêntica cozinha italiana</h2>
        </motion.div>
        <motion.div className="menu-grid" variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          {pratos.map((p, i) => (
            <motion.div key={i} className="menu-card" variants={fadeUp} custom={i}>
              <div className="menu-icon">{p.icon}</div>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

const reviews = [
  { text: 'Melhor restaurante italiano de Florianópolis. Massa fresca impecável e atendimento refinado.', author: 'Ricardo M.' },
  { text: 'Uma experiência gastronômica de verdade. O ossobuco é divino. Voltaremos muitas vezes!', author: 'Camila S.' },
  { text: 'Ambiente elegante e acolhedor. Perfeito para jantares especiais. Carta de vinhos excelente.', author: 'Pedro L.' },
  { text: 'Comida italiana autêntica como deve ser. Ingredientes de qualidade superior. Top demais!', author: 'Ana R.' },
  { text: 'Já jantei em vários restaurantes italianos no Brasil e exterior. O Artusi está entre os melhores.', author: 'Marcos T.' },
  { text: 'Do antipasto ao dolce, tudo perfeito. Preço justo para a qualidade entregue. Nota 10!', author: 'Fernanda P.' },
]

function Avaliacoes() {
  return (
    <section className="sp" id="avaliacoes">
      <div className="mx">
        <motion.div className="sh" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <span className="stg">Recensioni</span>
          <h2>O que dizem nossos clientes</h2>
          <p>500+ avaliações com nota 4.7 no Google</p>
        </motion.div>
        <motion.div className="rev-grid" variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          {reviews.map((r, i) => (
            <motion.div key={i} className="rev-card" variants={fadeUp} custom={i}>
              <div className="stars">{[0,1,2,3,4].map(j => <Star key={j} size={13} weight="fill" color="#C9A96E" />)}</div>
              <p>&ldquo;{r.text}&rdquo;</p>
              <span className="rev-author">{r.author}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function Reserva() {
  return (
    <section className="cta sp">
      <div className="mx cta-center">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <h2>Faça sua reserva</h2>
          <p>Garanta sua mesa e viva uma experiência gastronômica italiana inesquecível.</p>
          <a href={WA} target="_blank" rel="noopener noreferrer" className="big">
            <WhatsappLogo size={20} weight="duotone" /> Reservar pelo WhatsApp
          </a>
          <a href={TEL} className="cta-tel">
            <Phone size={16} weight="duotone" /> Ou ligue: (48) 3067-4444
          </a>
        </motion.div>
      </div>
    </section>
  )
}

function Info() {
  return (
    <section className="sp info-sec">
      <div className="mx info-row">
        <div className="info-item"><MapPin size={20} weight="duotone" /><div><strong>Localização</strong><p>Centro, Florianópolis - SC</p></div></div>
        <div className="info-item"><Phone size={20} weight="duotone" /><div><strong>Reservas</strong><p>(48) 3067-4444</p></div></div>
        <div className="info-item"><Clock size={20} weight="duotone" /><div><strong>Horário</strong><p>Terça a Domingo</p></div></div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="mx">
        <div className="footer-brand">ARTUSI</div>
        <div className="footer-sub">Ristorante Italiano</div>
        <div className="footer-info">Centro — Florianópolis, SC • (48) 3067-4444</div>
        <div className="footer-links">
          <a href={WA} target="_blank" rel="noopener noreferrer" className="fl"><WhatsappLogo size={14} weight="duotone" /> WhatsApp</a>
          <a href={TEL} className="fl"><Phone size={14} weight="duotone" /> Telefone</a>
        </div>
        <div className="footer-copy">&copy; 2026 Artusi Ristorante. Tutti i diritti riservati.</div>
      </div>
    </footer>
  )
}

function FloatingCta() {
  return (
    <motion.a href={WA} target="_blank" rel="noopener noreferrer" className="fbtn" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.5 }} whileHover={{ scale: 1.05 }}>
      <WhatsappLogo size={18} weight="duotone" /> Reservar
    </motion.a>
  )
}

function App() {
  return (
    <>
      <Helmet>
        <title>Artusi Ristorante | Italiano Fine Dining — Florianópolis</title>
        <meta name="description" content="Artusi Ristorante - Gastronomia italiana de excelência. Centro de Florianópolis. Nota 4.7 com 500+ avaliações. Reservas pelo WhatsApp." />
      </Helmet>
      <Navbar />
      <Hero />
      <Menu />
      <Avaliacoes />
      <Info />
      <Reserva />
      <Footer />
      <FloatingCta />
    </>
  )
}

export default App
