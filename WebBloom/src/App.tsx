import './App.css'
import { About } from './components/About'
import { CTA } from './components/CTA'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'
import { Services } from './components/Services'
import { Skills } from './components/Skills'
import { Team } from './components/Team'
import { WhyWebloom } from './components/WhyWebloom'
import { Work } from './components/Work'
import { StartProjectPage } from './components/StartProjectPage'

function HomePage() {
	return <><Hero /><About /><Work /><Services /><Skills /><WhyWebloom /><Team /><CTA /></>
}

export default function App() {
	const page = window.location.pathname.replace(/\/$/, '')
	const content = page === '' ? <HomePage /> : <StartProjectPage />

	return <main><Navbar />{content}<Footer /></main>
}
