import Header from "@/components/header"
import Footer from "@/components/footer"

export default function Infrastructure() {
  const facilities = [
    {
      category: "Classrooms",
      description:
        "Modern, spacious classrooms equipped with smart boards and advanced audio-visual systems for interactive learning.",
    },
    {
      category: "Science Labs",
      description:
        "Well-equipped laboratories for Physics, Chemistry, and Biology with latest scientific equipment and safety standards.",
    },
    {
      category: "Library",
      description:
        "Comprehensive library with digital resources, reference books, and comfortable reading spaces for research and learning.",
    },
    {
      category: "Computer Labs",
      description:
        "State-of-the-art computer labs with high-speed internet connectivity and latest software for IT education.",
    },
    {
      category: "Sports Complex",
      description:
        "Full-sized basketball court, cricket field, tennis courts, and indoor sports facilities for physical development.",
    },
    {
      category: "Auditorium",
      description:
        "Large auditorium with professional sound and lighting for cultural programs, seminars, and assemblies.",
    },
    {
      category: "Art & Music Studio",
      description:
        "Dedicated spaces for visual arts, music lessons, and creative expression with professional equipment.",
    },
    {
      category: "Cafeteria",
      description:
        "Hygienic, well-maintained cafeteria serving nutritious meals and refreshments under strict quality control.",
    },
    {
      category: "Transportation",
      description:
        "Fleet of modern buses covering multiple routes with trained, experienced drivers prioritizing student safety.",
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center bg-gradient-to-r from-primary to-secondary">
        <div className="text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4">Infrastructure</h1>
          <p className="text-xl opacity-90">World-Class Facilities for Learning Excellence</p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-serif font-bold mb-6 text-primary">State-of-the-Art Campus</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
            Our campus is designed to provide a conducive environment for learning and personal development. We have
            invested in modern infrastructure to ensure students have access to the best facilities for their academic
            and extracurricular pursuits.
          </p>
        </div>
      </section>

      {/* Facilities Grid */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilities.map((facility) => (
              <div
                key={facility.category}
                className="bg-white p-8 rounded-lg shadow-sm border border-white hover:shadow-md transition"
              >
                <h3 className="text-xl font-serif font-bold mb-3 text-primary">{facility.category}</h3>
                <p className="text-gray-600 leading-relaxed">{facility.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Gallery Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-serif font-bold mb-12 text-center text-primary">Campus Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Main Building", query: "modern school building architecture entrance" },
              { title: "Science Lab", query: "laboratory with equipment and students" },
              { title: "Library", query: "modern school library with students reading" },
              { title: "Sports Complex", query: "basketball court and sports facilities" },
              { title: "Auditorium", query: "school auditorium stage with seating" },
              { title: "Cafeteria", query: "school cafeteria dining area" },
            ].map((gallery) => (
              <div key={gallery.title} className="relative group overflow-hidden rounded-lg h-64">
                <img
                  src={`/.jpg?height=300&width=400&query=${gallery.query}`}
                  alt={gallery.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                  <h3 className="text-white font-serif font-bold text-lg">{gallery.title}</h3>
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
