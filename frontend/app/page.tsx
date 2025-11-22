import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[600px] md:h-[700px] flex items-center justify-center bg-gradient-to-b from-secondary to-primary overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{
            backgroundImage: "url(/placeholder.svg?height=700&width=1200&query=modern school building architecture)",
          }}
        />

        <div className="relative z-10 text-center text-white px-4">
          <p className="text-lg md:text-xl mb-4 font-sans tracking-wide">Welcome to</p>
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 text-balance">
            Abhimanyu Public
            <br />
            Higher Secondary School
          </h1>
          <p className="text-xl md:text-2xl font-light mb-8 text-balance">
            Where Learning Begins and Futures Are Built
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link
              href="/admissions"
              className="bg-accent text-accent-foreground px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition transform hover:scale-105"
            >
              Admissions
            </Link>
            <Link
              href="/query"
              className="bg-white/20 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/30 transition border border-white/40 backdrop-blur"
            >
              Submit a Query
            </Link>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-serif font-bold text-primary">01</span>
              </div>
              <h3 className="text-xl font-serif font-bold mb-2 text-primary">Excellence</h3>
              <p className="text-gray-600">
                Committed to delivering academic excellence through innovative teaching methods and dedicated faculty.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-serif font-bold text-primary">02</span>
              </div>
              <h3 className="text-xl font-serif font-bold mb-2 text-primary">Infrastructure</h3>
              <p className="text-gray-600">
                Modern facilities including advanced labs, libraries, sports grounds, and technology-enabled classrooms.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-serif font-bold text-primary">03</span>
              </div>
              <h3 className="text-xl font-serif font-bold mb-2 text-primary">Holistic Growth</h3>
              <p className="text-gray-600">
                Focus on developing well-rounded individuals through academics, sports, arts, and character building.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Ready to Join Our Community?</h2>
          <p className="text-lg mb-8 opacity-90">
            Start your journey with Abhimanyu Public Higher Secondary School today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/admissions"
              className="bg-accent text-accent-foreground px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition"
            >
              Learn About Admissions
            </Link>
            <Link
              href="/contact"
              className="bg-white/20 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/30 transition border border-white/40"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
