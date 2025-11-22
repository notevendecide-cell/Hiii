import Header from "@/components/header"
import Footer from "@/components/footer"

export default function MissionVision() {
  const objectives = [
    "Provide holistic education that develops academic, social, and personal competencies",
    "Create an environment that fosters creativity, critical thinking, and innovation",
    "Promote values of integrity, respect, and responsibility in students",
    "Prepare students to face global challenges with confidence and adaptability",
    "Develop leaders who contribute meaningfully to society and nation-building",
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center bg-gradient-to-r from-primary to-secondary">
        <div className="text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4">Mission & Vision</h1>
          <p className="text-xl opacity-90">Our Purpose and Direction</p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-serif font-bold text-primary mb-6">Our Mission</h2>
            <p className="text-2xl text-gray-700 leading-relaxed">
              To provide quality, inclusive education that develops well-rounded individuals equipped with knowledge,
              skills, and values to lead fulfilling lives and contribute positively to society.
            </p>
          </div>
          <div className="bg-primary/5 border-l-4 border-primary p-8 rounded">
            <p className="text-gray-700 text-lg leading-relaxed">
              We are committed to fostering an environment where every student discovers their potential, develops
              critical thinking abilities, and cultivates a lifelong passion for learning. Through rigorous academics,
              character education, and diverse co-curricular activities, we prepare our students to be responsible
              global citizens who contribute meaningfully to their communities and the world at large.
            </p>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-serif font-bold text-primary mb-6">Our Vision</h2>
            <p className="text-2xl text-gray-700 leading-relaxed">
              To be a premier institution of excellence, inspiring and empowering students to achieve their highest
              potential while instilling values of integrity, compassion, and social responsibility.
            </p>
          </div>
          <div className="bg-primary/5 border-l-4 border-primary p-8 rounded">
            <p className="text-gray-700 text-lg leading-relaxed">
              We envision a school where innovation meets tradition, where every individual is valued and supported to
              realize their dreams. Through collaborative learning, experiential education, and mentorship by
              experienced educators, we strive to create students who are not just academically excellent but also
              emotionally intelligent, culturally aware, and committed to making a positive difference in the world.
            </p>
          </div>
        </div>
      </section>

      {/* Objectives Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-serif font-bold mb-12 text-center text-primary">Our Objectives</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {objectives.map((objective, index) => (
              <div key={index} className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-accent/20">
                    <span className="text-accent font-bold">{index + 1}</span>
                  </div>
                </div>
                <div>
                  <p className="text-gray-700 text-lg leading-relaxed">{objective}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
