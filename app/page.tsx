"use client"

import { useState, useEffect } from "react"
import { Moon, Sun, Github, Linkedin, MessageCircle, ChevronLeft, ChevronRight, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

type Theme = "southOfMidnightDark" | "southOfMidnightLight" | "arcane"

interface Project {
  title: string
  description: string
  image: string
  link: string
  detailedDescription: string
  technologies: string[]
  features?: string[]
  category: string
  icon?: string
  video?: string
}

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [currentTheme, setCurrentTheme] = useState<Theme>("southOfMidnightDark")
  const [currentProject, setCurrentProject] = useState(0)

  const projects = [
    {
      title: "Música para todos - Spotify",
      description: "Projeto Spotify com bootstrap",
      video: "/video-spotify.mp4",
      link: "#",
      detailedDescription:
        "Clone completo do Spotify desenvolvido com Bootstrap, HTML5 e CSS3. O projeto inclui interface responsiva, player de música funcional e design moderno inspirado na plataforma original.",
      technologies: ["Bootstrap", "HTML5", "CSS3", "JavaScript"],
      category: "Web Development",
    },
    {
      title: "Imersão Alura",
      description: "Projeto Spotify com api, html e css",
      video: "/video-alura.mp4",
      link: "#",
      detailedDescription:
        "Projeto desenvolvido durante a Imersão Alura, focado em integração com APIs externas para busca e reprodução de músicas. Utiliza tecnologias web modernas para criar uma experiência fluida.",
      technologies: ["HTML5", "CSS3", "JavaScript", "API Integration"],
      features: ["Integração com API", "Busca de músicas", "Interface dinâmica", "Responsivo"],
      category: "API Integration",
    },
    {
      title: "Página Finanças",
      description: "Finanças pessoais, feito em Bootstrap",
      video: "/video-financas.mp4",
      link: "#",
      detailedDescription:
        "Aplicação web para controle de finanças pessoais com funcionalidades de cadastro de receitas, despesas e relatórios. Interface limpa e intuitiva desenvolvida com Bootstrap.",
      technologies: ["Bootstrap", "JavaScript", "HTML5", "CSS3"],
      features: ["Controle de gastos", "Relatórios", "Categorização", "Dashboard"],
      category: "Financial App",
    },
    {
      title: "Página Tamag",
      description: "Tamag gerenciamento de aluno, feito em Bootstrap",
      video: "/video-tamag.mp4",
      link: "#",
      detailedDescription:
        "Sistema completo de gerenciamento de alunos com funcionalidades de cadastro, edição, consulta e relatórios. Desenvolvido com foco na usabilidade e experiência do usuário.",
      technologies: ["Bootstrap", "PHP", "MySQL", "JavaScript"],
      features: ["Cadastro de alunos", "Sistema de busca", "Relatórios", "Interface admin"],
      category: "Management System",
    },
    {
      title: "CineStream",
      description: "App de streaming de filmes, feito em React",
      video: "/video-cinestream.mp4",
      link: "#",
      detailedDescription:
        "Sistema completo de streaming de filmes com funcionalidades de busca, reprodução e gerenciamento de usuários. Desenvolvido com foco na usabilidade e experiência do usuário.",
      technologies: ["React", "Node.js", "Next.js", "JavaScript"],
      features: ["Streaming de filmes", "Catálogo de conteúdo", "Playlists personalizadas", "Sistema de recomendações"],
      category: "Streaming Platform",
    },
  ]

  const featuredProjects = [
    {
      title: "Tamag Vans",
      description: "Sistema de gerenciamento para empresa de vans",
      image: "/placeholder.svg?height=300&width=400&text=Tamag+Vans",
      video: "/video-tamag.mp4",
      link: "https://tamagvans.rf.gd",
      detailedDescription:
        "Sistema completo de gerenciamento para empresa de transporte de vans, incluindo controle de rotas, passageiros, horários e pagamentos. Interface moderna e responsiva.",
      technologies: ["PHP", "MySQL", "Bootstrap", "JavaScript"],
      features: ["Controle de rotas", "Gestão de passageiros", "Sistema de pagamentos", "Relatórios"],
      category: "Business Management",
      icon: "🚐",
    },
    {
      title: "Agendei",
      description: "App de agendamento médico",
      image: "/agendei.png?height=300&width=400&text=Medical+App",
      link: "https://app-de-agendamento-medico.vercel.app/",
      detailedDescription:
        "Aplicação web para agendamento de consultas médicas com sistema de notificações, controle de horários e gestão de pacientes. Interface intuitiva e moderna.",
      technologies: ["React", "Node.js", "MySQL", "Bootstrap"],
      features: ["Agendamento online", "Notificações", "Gestão de pacientes", "Dashboard médico"],
      category: "Healthcare",
      icon: "📅",
    },
     {
      title: "CineStream",
      description: "Site de streaming de filmes",
      image: "/placeholder.svg?height=300&width=400&text=Movie+App",
      video: "/video-cinestream.mp4",
      link: "https://cinestream-six.vercel.app/",
      detailedDescription:
        "Aplicação web para streaming de filmes com sistema de recomendações, controle de playlists e gestão de usuários. Interface intuitiva e moderna.",
      technologies: ["React", "Node.js", "Next.js", "API REST"],
      features: ["Streaming de filmes", "Recomendações", "Gestão de usuários", "Controle de playlists"],
      category: "Entretenimento",
      icon: "🎬",
    },
    {
      title: "AppCineStream",
      description: "Aplicativo mobile de streaming de filmes",
      image: "/appCineStream.png?height=300&width=400&text=Movie+App",
      link: "https://github.com/vicortavares824/appCineStream",
      detailedDescription:
        "Aplicativo mobile desenvolvido com React Native e Expo Go para streaming de filmes. Permite recomendações personalizadas, criação de playlists, gestão de usuários e reprodução otimizada para dispositivos móveis. Interface moderna e intuitiva, focada na experiência do usuário em smartphones.",
      technologies: ["React Native", "Expo Go", "Node.js", "API REST"],
      features: ["Streaming de filmes", "Recomendações personalizadas", "Playlists", "Gestão de usuários", "Interface mobile"],
      category: "App Mobile",
      icon: "🎬",
    },
  ]

  // Skill colors are fixed for their icons, but the surrounding elements will change based on theme
  const skills = [
    { name: "Bootstrap", icon: "🅱️", experience: "5 meses - Curso Udemy", color: "from-green-600 to-emerald-700" },
    { name: "C++", icon: "⚡", experience: "1 ano 7 meses - Faculdade", color: "from-slate-600 to-green-700" },
    { name: "JavaScript", icon: "🟨", experience: "1 ano - Faculdade e Curso", color: "from-lime-600 to-green-700" },
    { name: "PHP", icon: "🐘", experience: "5 meses - Curso Udemy", color: "from-teal-600 to-green-700" },
    { name: "MySQL", icon: "🗄️", experience: "3 meses - Curso e Faculdade", color: "from-emerald-600 to-green-700" },
    { name: "Java", icon: "☕", experience: "3 meses - Faculdade", color: "from-green-700 to-emerald-800" },
    { name: "Sass", icon: "💎", experience: "Aprendendo Atualmente", color: "from-green-500 to-teal-600" },
    { name: "jQuery", icon: "📜", experience: "1 mês - Curso Udemy", color: "from-forest-600 to-green-700" },
    { name: "Node.js", icon: "🟢", experience: "4 meses - Faculdade e Office", color: "from-green-600 to-emerald-700" },
    { name: "React", icon: "⚛️", experience: "1 mês - Office", color: "from-teal-600 to-green-700" },
    { name: "React Native", icon: "📱", experience: "1 mês - Office", color: "from-emerald-600 to-green-800" },
  ]

  const openProjectModal = (project: Project) => {
    setSelectedProject(project)
  }

  const closeProjectModal = () => {
    setSelectedProject(null)
  }

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length)
  }

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length)
  }

  useEffect(() => {
    const interval = setInterval(nextProject, 5000)
    return () => clearInterval(interval)
  }, [])

  const toggleTheme = () => {
    setCurrentTheme((prevTheme) => {
      if (prevTheme === "southOfMidnightDark") {
        return "southOfMidnightLight"
      } else if (prevTheme === "southOfMidnightLight") {
        return "arcane"
      } else {
        return "southOfMidnightDark"
      }
    })
  }

  const getThemeClasses = (theme: Theme) => {
    switch (theme) {
      case "southOfMidnightDark":
        return {
          background: "bg-gradient-to-br from-gray-900 via-slate-900 to-black",
          overlay: "bg-[radial-gradient(circle_at_50%_50%,rgba(34,197,94,0.3),transparent_50%)]",
          gradientOverlay: "bg-gradient-to-t from-black/70 via-transparent to-black/40",
          particleBg: "bg-green-300 shadow-green-300/50",
          particleShadow: "0 0 10px rgba(34, 197, 94, 0.8)",
          orbBg: "bg-emerald-400",
          orbShadow: "0 0 15px rgba(16, 185, 129, 0.6)",
          navBg: "bg-black/30 border-green-500/20",
          logoBg: "bg-gradient-to-br from-green-600 to-emerald-700 text-white shadow-green-600/30 border-white/20",
          logoText: "text-green-100",
          navLink: "text-green-200 hover:text-green-100",
          buttonIcon: "text-green-200 hover:text-green-100 hover:bg-green-500/20 border-white/10",
          heroGradientText: "text-green-100 from-green-300 via-emerald-300 to-green-300",
          heroText: "text-green-200",
          heroParagraph: "text-green-300",
          aboutSectionBg: "bg-black/40 border-green-500/10",
          aboutText: "text-green-100",
          aboutParagraph: "text-green-200",
          projectsSectionBg: "bg-blue-900/40 backdrop-blur-sm border-y border-blue-500/20",
          cardBg: "bg-black/50 border-white/30 shadow-black/50",
          cardHoverBorder: "hover:border-white/50",
          cardHoverShadow: "hover:shadow-green-500/20",
          cardIconBg: "bg-gradient-to-br from-green-600 to-emerald-700 shadow-green-600/30 border-white/20",
          cardText: "text-green-100",
          cardDescription: "text-green-200",
          cardButton: "text-green-300 hover:text-green-100 border-green-300/50 hover:border-green-100/50",
          contactButton:
            "bg-gradient-to-r from-green-600 to-emerald-700 hover:from-green-700 hover:to-emerald-800 text-white shadow-green-600/30",
          footerBg: "bg-black/60 border-white/20",
          footerText: "text-green-200",
          footerSpan: "text-green-300",
          modalBg: "bg-black/80 border-white/30 shadow-black/50",
          modalCategory: "bg-green-500/20 text-green-300 border-green-500/30",
          modalTitle: "text-green-100",
          modalDescription: "text-green-200",
          modalTech: "bg-green-500/10 border-white/20 text-green-300",
          modalFeatureDot: "bg-green-400 shadow-green-400/50",
          modalFeatureText: "text-green-200",
          modalCloseButton: "bg-black/60 hover:bg-black/80 text-white border-white/20",
        }
      case "southOfMidnightLight":
        return {
          background: "bg-gradient-to-br from-blue-100 via-blue-50 to-sky-100",
          overlay: "bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.2),transparent_50%)]",
          gradientOverlay: "bg-gradient-to-t from-blue-200/30 via-transparent to-blue-100/20",
          particleBg: "bg-blue-400 shadow-blue-400/50",
          particleShadow: "0 0 10px rgba(59, 130, 246, 0.8)",
          orbBg: "bg-blue-300",
          orbShadow: "0 0 15px rgba(59, 130, 246, 0.6)",
          navBg: "bg-white/40 border-blue-400/30",
          logoBg:
            "bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-blue-500/30 border-blue-400/20",
          logoText: "text-blue-600",
          navLink: "text-blue-600 hover:text-blue-700",
          buttonIcon: "text-blue-600 hover:text-blue-700 hover:bg-blue-100/50 border-blue-400/20",
          heroGradientText: "text-gray-600 from-gray-600 via-gray-500 to-gray-600",
          heroText: "text-gray-600",
          heroParagraph: "text-gray-600",
          aboutSectionBg: "bg-blue-300/40 border-blue-400/20",
          aboutText: "text-gray-600",
          aboutParagraph: "text-gray-600",
          projectsSectionBg: "bg-blue-500/20 backdrop-blur-sm border-y border-blue-500/30",
          cardBg: "bg-white/60 border-blue-400/40 shadow-blue-400/20",
          cardHoverBorder: "hover:border-green-500/50",
          cardHoverShadow: "hover:shadow-gray-400/20",
          cardIconBg: "bg-gradient-to-br from-gray-300 via-gray-400 to-gray-300 shadow-gray-400/30 border-green-500/20",
          cardText: "text-gray-600",
          cardDescription: "text-gray-600",
          cardButton: "text-gray-600 hover:text-gray-700 border-gray-600/50 hover:border-gray-700/50",
          contactButton:
            "bg-gradient-to-r from-green-600 to-emerald-700 hover:from-green-700 hover:to-emerald-800 text-white shadow-green-600/30",
          footerBg: "bg-black/60 border-white/20", // Footer remains dark for contrast
          footerText: "text-green-200", // Footer text remains green
          footerSpan: "text-green-300", // Footer span remains green
          modalBg: "bg-black/80 border-white/30 shadow-black/50", // Modal remains dark for consistency
          modalCategory: "bg-green-500/20 text-green-300 border-green-500/30",
          modalTitle: "text-green-100",
          modalDescription: "text-green-200",
          modalTech: "bg-green-500/10 border-white/20 text-green-300",
          modalFeatureDot: "bg-green-400 shadow-green-400/50",
          modalFeatureText: "text-green-200",
          modalCloseButton: "bg-black/60 hover:bg-black/80 text-white border-white/20",
        }
      case "arcane":
        return {
          background: "bg-gradient-to-br from-blue-950 via-indigo-950 to-black",
          overlay: "bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.3),transparent_50%)]", // Blue glow
          gradientOverlay: "bg-gradient-to-t from-black/70 via-transparent to-black/40",
          particleBg: "bg-blue-400 shadow-blue-400/50", // Arcane blue particles
          particleShadow: "0 0 10px rgba(59, 130, 246, 0.8)",
          orbBg: "bg-purple-400", // Arcane purple orbs
          orbShadow: "0 0 15px rgba(168, 85, 247, 0.6)",
          navBg: "bg-gray-950/50 border-blue-700/20", // Darker, metallic feel
          logoBg: "bg-gradient-to-br from-blue-700 to-purple-800 text-white shadow-blue-700/30 border-gray-700/20",
          logoText: "text-blue-200",
          navLink: "text-blue-300 hover:text-blue-100",
          buttonIcon: "text-blue-300 hover:text-blue-100 hover:bg-blue-700/20 border-gray-700/10",
          heroGradientText: "text-blue-100 from-blue-300 via-purple-300 to-blue-300",
          heroText: "text-blue-200",
          heroParagraph: "text-blue-300",
          aboutSectionBg: "bg-gray-900/40 border-blue-700/10",
          aboutText: "text-blue-100",
          aboutParagraph: "text-blue-200",
          projectsSectionBg: "bg-blue-950/60 backdrop-blur-sm border-y border-blue-600/30",
          cardBg: "bg-gray-900/50 border-blue-700/30 shadow-gray-950/50",
          cardHoverBorder: "hover:border-blue-500/50",
          cardHoverShadow: "hover:shadow-blue-500/20",
          cardIconBg: "bg-gradient-to-br from-blue-700 to-purple-800 shadow-blue-700/30 border-gray-700/20",
          cardText: "text-blue-100",
          cardDescription: "text-blue-200",
          cardButton: "text-blue-300 hover:text-blue-100 border-blue-300/50 hover:border-blue-100/50",
          contactButton:
            "bg-gradient-to-r from-blue-700 to-purple-800 hover:from-blue-800 hover:to-purple-900 text-white shadow-blue-700/30",
          footerBg: "bg-gray-950/60 border-blue-700/20",
          footerText: "text-blue-200",
          footerSpan: "text-blue-300",
          modalBg: "bg-gray-900/80 border-blue-700/30 shadow-gray-950/50",
          modalCategory: "bg-blue-700/20 text-blue-300 border-blue-700/30",
          modalTitle: "text-blue-100",
          modalDescription: "text-blue-200",
          modalTech: "bg-blue-700/10 border-gray-700/20 text-blue-300",
          modalFeatureDot: "bg-blue-400 shadow-blue-400/50",
          modalFeatureText: "text-blue-200",
          modalCloseButton: "bg-gray-900/60 hover:bg-gray-900/80 text-white border-gray-700/20",
        }
      default:
        return {} // Fallback
    }
  }

  const themeClasses = getThemeClasses(currentTheme)

  return (
    <div className="min-h-screen transition-all duration-500">
      {/* Southern Gothic Mystical Background with Green tones */}
      <div className={`fixed inset-0 ${themeClasses.background}`}>
        {/* Green mystical overlay */}
        <div className={`absolute inset-0 opacity-20 ${themeClasses.overlay}`}></div>
        <div className="absolute inset-0 bg-[url('/fundo tema.jpg?height=1080&width=1920&text=Mystical+Forest+Texture')] bg-cover bg-center opacity-5"></div>
        <div className={`absolute inset-0 ${themeClasses.gradientOverlay}`}></div>
      </div>

      {/* Mystical Green Spirits/Fireflies Effect */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-1 h-1 rounded-full animate-pulse shadow-lg ${themeClasses.particleBg}`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
              boxShadow: themeClasses.particleShadow,
            }}
          />
        ))}
        {/* Larger mystical orbs */}
        {[...Array(8)].map((_, i) => (
          <div
            key={`orb-${i}`}
            className={`absolute w-2 h-2 rounded-full animate-pulse opacity-60 ${themeClasses.orbBg}`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${4 + Math.random() * 2}s`,
              filter: "blur(1px)",
              boxShadow: themeClasses.orbShadow,
            }}
          />
        ))}
      </div>

      <div className="relative z-10">
        {/* Teste do player Dooplay */}
        
        {/* Navigation with Southern Gothic Green feel */}
        <nav className={`fixed top-0 w-full backdrop-blur-md border-b z-50 ${themeClasses.navBg}`}>
          <div className="container mx-auto px-4 py-2 md:py-3 lg:py-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-2 md:gap-0">
              <div className="flex items-center space-x-3 md:space-x-2">
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl shadow-lg border ${themeClasses.logoBg}`}
                >
                  V
                </div>
                <span className={`font-semibold text-lg ${themeClasses.logoText}`}>Victor Tavares</span>
              </div>

              <div className="flex-1 flex justify-center md:justify-center mt-2 md:mt-0">
                <div className="flex items-center space-x-6 md:space-x-8">
                  <a href="#home" className={`${themeClasses.navLink} transition-colors font-medium text-base md:text-lg`}>
                    Home
                  </a>
                  <a href="#projects" className={`${themeClasses.navLink} transition-colors font-medium text-base md:text-lg`}>
                    Projetos
                  </a>
                  <a href="#skills" className={`${themeClasses.navLink} transition-colors font-medium text-base md:text-lg`}>
                    Skills
                  </a>
                </div>
              </div>

              <div className="flex items-center justify-end">
                <Button variant="ghost" size="icon" onClick={toggleTheme} className={`border ${themeClasses.buttonIcon}`}>
                  {currentTheme === "southOfMidnightDark" && <Moon className="h-5 w-5" />}
                  {currentTheme === "southOfMidnightLight" && <Sun className="h-5 w-5" />}
                  {currentTheme === "arcane" && <Zap className="h-5 w-5" />}
                </Button>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section with Southern Gothic Green atmosphere */}
        <section id="home" className="min-h-screen flex items-center justify-center pt-20">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-4xl mx-auto">
              <div className="mb-4 md:mb-8">
                <div className="w-24 h-24 md:w-48 md:h-48 mx-auto relative">
                  <div
                    className={`absolute inset-0 rounded-full animate-pulse shadow-2xl ${themeClasses.logoBg}`}
                  ></div>
                  <div
                    className={`absolute inset-0 border-2 rounded-full ${currentTheme === "southOfMidnightDark" ? "border-white/30" : currentTheme === "southOfMidnightLight" ? "border-green-500/30" : "border-blue-700/30"}`}
                  ></div>
                  <img
                    src="/profile.png"
                    alt="Victor Tavares"
                    className={`w-full h-full rounded-full object-cover relative z-10 border-4 ${currentTheme === "southOfMidnightDark" ? "border-white/50" : currentTheme === "southOfMidnightLight" ? "border-green-500/50" : "border-blue-700/50"}`}
                  />
                </div>
              </div>

              <h1
                className={`text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r bg-clip-text text-transparent drop-shadow-2xl ${themeClasses.heroGradientText}`}
              >
                Desenvolvedor
              </h1>
              <h2 className={`text-2xl md:text-3xl mb-8 font-light ${themeClasses.heroText}`}>Full Stack Developer</h2>
              <p className={`text-xl max-w-2xl mx-auto leading-relaxed ${themeClasses.heroParagraph}`}>
                Eu projeto e codifico coisas lindamente simples, e amo o que faço.
              </p>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className={`py-20 backdrop-blur-sm border-y ${themeClasses.aboutSectionBg}`}>
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className={`text-4xl md:text-5xl font-bold mb-8 ${themeClasses.aboutText}`}>
                Oi, eu sou o Victor. Prazer em conhecê-lo.
              </h2>
              <p className={`text-lg leading-relaxed ${themeClasses.aboutParagraph}`}>
                Desde o início da minha jornada como Desenvolvedor na faculdade, tenho realizado trabalhos remotos, consultado cursos e executado projetos pessoais e acadêmicos.<br />
                <br />
                Tecnologias: <span className="break-words">C/C++, HTML5, CSS, Bootstrap, Sass, JavaScript, Java, PHP, MySQL, jQuery, NodeJS, React, React Native</span>.<br />
                <br />
                Mantenho-me confiante e tranquilo, alimentado por uma curiosidade natural, e estou sempre em busca de aprimorar minhas habilidades constantemente.
              </p>
            </div>
          </div>
        </section>

        {/* Projects Section with conditional cards */}
        <section id="projects" className={`py-20 ${themeClasses.projectsSectionBg}`}>
          <div className="container mx-auto px-4">
            <h2 className={`text-4xl md:text-5xl font-bold text-center mb-16 ${themeClasses.cardText}`}>Projetos</h2>

            <div className="max-w-4xl mx-auto">
              <div className="relative">
                <Card className={`${themeClasses.cardBg} overflow-hidden`}>
                  <CardContent className="p-0">
                    <div className="relative">
                      <video
                        src={projects[currentProject].video}
                        className="w-full h-96 object-cover"
                        autoPlay
                        loop
                        muted
                        playsInline
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent"></div>
                      <div className="absolute bottom-0 left-0 right-0 p-8">
                        <h3 className={`text-2xl font-bold mb-2 ${themeClasses.cardText}`}>
                          {projects[currentProject].title}
                        </h3>
                        <p className={`${themeClasses.cardDescription}`}>{projects[currentProject].description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Button
                  variant="ghost"
                  size="icon"
                  onClick={prevProject}
                  className={`absolute left-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white border ${currentTheme === "arcane" ? "border-gray-700/20" : "border-white/20"}`}
                >
                  <ChevronLeft className="h-6 w-6" />
                </Button>

                <Button
                  variant="ghost"
                  size="icon"
                  onClick={nextProject}
                  className={`absolute right-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white border ${currentTheme === "arcane" ? "border-gray-700/20" : "border-white/20"}`}
                >
                  <ChevronRight className="h-6 w-6" />
                </Button>
              </div>

              <div className="flex justify-center mt-6 space-x-2">
                {projects.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentProject(index)}
                    className={`w-3 h-3 rounded-full transition-all border ${
                      index === currentProject
                        ? currentTheme === "southOfMidnightDark"
                          ? "bg-green-400 border-white/50 shadow-lg shadow-green-400/50"
                          : currentTheme === "southOfMidnightLight"
                            ? "bg-green-400 border-green-500/50 shadow-lg shadow-green-400/50"
                            : "bg-blue-400 border-blue-700/50 shadow-lg shadow-blue-400/50"
                        : currentTheme === "southOfMidnightDark"
                          ? "bg-green-400/30 border-white/20"
                          : currentTheme === "southOfMidnightLight"
                            ? "bg-green-400/30 border-green-500/20"
                            : "bg-blue-400/30 border-blue-700/20"
                    }`}
                  />
                ))}
              </div>

              {/* Featured Projects with conditional borders */}
              <div className="grid md:grid-cols-2 gap-8 mt-16">
                {featuredProjects.map((project, index) => (
                  <Card
                    key={index}
                    className={`backdrop-blur-md border-2 transition-all group shadow-xl hover:shadow-2xl ${themeClasses.cardBg} ${themeClasses.cardHoverBorder} ${themeClasses.cardHoverShadow}`}
                  >
                    <CardContent className="p-6 text-center">
                      <div
                        className={`w-16 h-16 mx-auto mb-4 rounded-lg flex items-center justify-center text-2xl shadow-lg border ${themeClasses.cardIconBg}`}
                      >
                        {project.icon}
                      </div>
                      <h3 className={`text-xl font-bold mb-2 ${themeClasses.cardText}`}>{project.title}</h3>
                      <p className={`text-sm mb-4 ${themeClasses.cardDescription}`}>{project.description}</p>
                      <button
                        onClick={() => openProjectModal(project)}
                        className={`transition-colors font-medium border-b ${themeClasses.cardButton}`}
                      >
                        Ver Projeto →
                      </button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section with conditional styling */}
        <section id="skills" className={`py-20 backdrop-blur-sm border-y ${themeClasses.aboutSectionBg}`}>
          <div className="container mx-auto px-4">
            <h2 className={`text-4xl md:text-5xl font-bold text-center mb-16 ${themeClasses.cardText}`}>
              Minhas Skills
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {skills.map((skill, index) => (
                <Card
                  key={index}
                  className={`backdrop-blur-md border-2 transition-all group hover:scale-105 shadow-xl hover:shadow-2xl ${themeClasses.cardBg} ${themeClasses.cardHoverBorder} ${themeClasses.cardHoverShadow}`}
                >
                  <CardContent className="p-6 text-center">
                    <div
                      className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${currentTheme === "arcane" ? "from-gray-700 to-gray-800" : skill.color} rounded-lg flex items-center justify-center text-2xl shadow-lg border ${currentTheme === "arcane" ? "border-blue-700/20" : currentTheme === "southOfMidnightDark" ? "border-white/20" : "border-green-500/20"}`}
                    >
                      {skill.icon}
                    </div>
                    <h3 className={`text-xl font-bold mb-2 ${themeClasses.cardText}`}>{skill.name}</h3>
                    <p className={`text-sm ${themeClasses.cardDescription}`}>{skill.experience}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-4xl mx-auto">
              <h2 className={`text-4xl md:text-5xl font-bold mb-8 ${themeClasses.cardText}`}>
                Interessado em colaborar comigo?
              </h2>
              <p className={`text-xl mb-12 ${themeClasses.cardDescription}`}>
                Estou sempre aberto a discutir trabalhos de design de produtos ou oportunidades de parceria.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <h3 className={`text-2xl font-bold ${themeClasses.cardText}`}>Entre em Contato.</h3>
                <Button asChild className={`px-8 py-3 text-lg border shadow-lg ${themeClasses.contactButton}`}>
                  <a href="https://wa.me/551999068221">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Conversar
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className={`backdrop-blur-md border-t-2 py-12 ${themeClasses.footerBg}`}>
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex items-center space-x-2">
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl shadow-lg border ${themeClasses.logoBg}`}
                >
                  V
                </div>
                <span className={`font-semibold text-lg ${themeClasses.logoText}`}>Victor Tavares</span>
              </div>

              <div className="flex items-center space-x-6">
                <a href="#home" className={`${themeClasses.navLink} transition-colors`}>
                  Home
                </a>
                <a href="#projects" className={`${themeClasses.navLink} transition-colors`}>
                  Projetos
                </a>
                <a href="#skills" className={`${themeClasses.navLink} transition-colors`}>
                  Skills
                </a>
              </div>

              <div className="flex items-center space-x-4">
                <Button variant="ghost" size="icon" asChild className={`border ${themeClasses.buttonIcon}`}>
                  <a href="https://www.linkedin.com/in/victor-tavares-1b0b3925b/">
                    <Linkedin className="h-6 w-6" />
                  </a>
                </Button>
                <Button variant="ghost" size="icon" asChild className={`border ${themeClasses.buttonIcon}`}>
                  <a href="https://github.com/vicortavares824">
                    <Github className="h-6 w-6" />
                  </a>
                </Button>
              </div>
            </div>

            <div
              className={`text-center mt-8 pt-8 border-t ${currentTheme === "arcane" ? "border-blue-700/20" : "border-white/20"}`}
            >
              <p className={`${themeClasses.footerText}`}>
                &copy; 2024. Todos os direitos reservados.{" "}
                <span className={`${themeClasses.footerSpan} font-semibold`}>Victor Tavares</span>
              </p>
            </div>
          </div>
        </footer>

        {/* Project Modal with conditional styling */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div
              className={`backdrop-blur-md border-2 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl ${themeClasses.modalBg}`}
            >
              <div className="relative">
                {/* Header com imagem (sempre exibe imagem, nunca vídeo) */}
                <div className="relative h-64 overflow-hidden rounded-t-2xl">
                  {selectedProject.video ? (
                    <video
                      src={selectedProject.video}
                      className="w-full h-full object-cover"
                      autoPlay
                      loop
                      muted
                      playsInline
                    />
                  ) : (
                    <img
                      src={selectedProject.image || "/placeholder.svg"}
                      alt={selectedProject.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent"></div>
                  <button
                    onClick={closeProjectModal}
                    className={`absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center text-white transition-colors border ${themeClasses.modalCloseButton}`}
                  >
                    ✕
                  </button>
                </div>

                {/* Conteúdo */}
                <div className="p-8">
                  <div className="mb-6">
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-4 border ${themeClasses.modalCategory}`}
                    >
                      {selectedProject.category}
                    </span>
                    <h2 className={`text-3xl font-bold mb-4 ${themeClasses.modalTitle}`}>{selectedProject.title}</h2>
                    <p className={`text-lg leading-relaxed ${themeClasses.modalDescription}`}>
                      {selectedProject.detailedDescription}
                    </p>
                  </div>

                  {/* Tecnologias */}
                  <div className="mb-6">
                    <h3 className={`text-xl font-semibold mb-3 ${themeClasses.modalTitle}`}>Tecnologias Utilizadas</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech, index) => (
                        <span key={index} className={`px-3 py-1 rounded-lg text-sm border ${themeClasses.modalTech}`}>
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Funcionalidades */}
                  {selectedProject.features && (
                    <div className="mb-8">
                      <h3 className={`text-xl font-semibold mb-3 ${themeClasses.modalTitle}`}>
                        Principais Funcionalidades
                      </h3>
                      <div className="grid md:grid-cols-2 gap-3">
                        {selectedProject.features.map((feature: string, index: number) => (
                          <div key={index} className="flex items-center space-x-2">
                            <div className={`w-2 h-2 rounded-full shadow-sm ${themeClasses.modalFeatureDot}`}></div>
                            <span className={`${themeClasses.modalFeatureText}`}>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Botões de ação */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button
                      asChild
                      className={`px-8 py-3 text-lg flex-1 border shadow-lg ${themeClasses.contactButton}`}
                    >
                      <a href={selectedProject.link} target="_blank" rel="noopener noreferrer">
                        🚀 Visitar Projeto
                      </a>
                    </Button>
                    <Button
                      variant="outline"
                      onClick={closeProjectModal}
                      className={`px-8 py-3 text-lg bg-transparent border ${currentTheme === "arcane" ? "border-blue-700/30 text-blue-300 hover:bg-blue-700/10" : "border-white/30 text-green-300 hover:bg-green-500/10"}`}
                    >
                      Fechar
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
