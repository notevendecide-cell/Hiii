import Header from "@/components/header"
import Footer from "@/components/footer"

export default function About() {
  const values = [
    {
      title: "Integrity",
      description: "We believe in honesty and strong moral principles in all our actions.",
    },
    {
      title: "Excellence",
      description: "Striving for the highest standards in academics and personal development.",
    },
    {
      title: "Innovation",
      description: "Embracing modern teaching methods and technology in education.",
    },
    {
      title: "Inclusivity",
      description: "Creating a welcoming environment for all students regardless of background.",
    },
    {
      title: "Community",
      description: "Building strong relationships between school, students, and families.",
    },
    {
      title: "Growth",
      description: "Fostering continuous improvement and personal development.",
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center bg-gradient-to-r from-primary to-secondary">
        <div className="text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4">About Us</h1>
          <p className="text-xl opacity-90">Discover Our Story and Mission</p>
        </div>
      </section>

      {/* History Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-serif font-bold mb-6 text-primary">Our History</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Abhimanyu Public Higher Secondary School was founded with a vision to provide quality education that
                combines traditional values with modern methodology. Over the years, we have grown to become one of the
                premier educational institutions in the region.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Our commitment to academic excellence, holistic development, and character building has made us the
                school of choice for thousands of families. We take pride in our legacy of producing accomplished
                students who excel in various fields.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Today, with state-of-the-art infrastructure and a team of dedicated educators, we continue to shape
                young minds and prepare them for a dynamic future.
              </p>
            </div>
            <div className="relative h-96 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg overflow-hidden">
              <img src="/school-building-entrance-with-students.jpg" alt="School Building" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-serif font-bold mb-12 text-center text-primary">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value) => (
              <div key={value.title} className="bg-white p-8 rounded-lg shadow-sm border border-muted">
                <h3 className="text-2xl font-serif font-bold mb-3 text-primary">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Philosophy */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-serif font-bold mb-6 text-primary text-center">Academic Philosophy</h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto text-lg">
            We believe in fostering critical thinking and creativity alongside traditional academics.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-accent/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">📚</span>
              </div>
              <h3 className="text-xl font-serif font-bold mb-2">Subject Mastery</h3>
              <p className="text-gray-600">
                In-depth understanding of core subjects with emphasis on application and real-world relevance.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-accent/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🧠</span>
              </div>
              <h3 className="text-xl font-serif font-bold mb-2">Critical Thinking</h3>
              <p className="text-gray-600">
                Developing analytical skills and encouraging students to question, explore, and innovate.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-accent/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🌟</span>
              </div>
              <h3 className="text-xl font-serif font-bold mb-2">Personal Growth</h3>
              <p className="text-gray-600">
                Building confidence, leadership, and social responsibility alongside academic achievements.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
