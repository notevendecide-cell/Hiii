import Header from "@/components/header"
import Footer from "@/components/footer"

export default function Events() {
  const upcomingEvents = [
    {
      title: "Annual Sports Day",
      date: "March 15-16, 2025",
      description: "Inter-house competition featuring athletics, team sports, and athletic meet.",
    },
    {
      title: "Science Exhibition",
      date: "April 5, 2025",
      description: "Student projects showcasing innovation and scientific research.",
    },
    {
      title: "Cultural Fest",
      date: "April 20-22, 2025",
      description: "Celebration of arts, music, dance, and cultural performances.",
    },
    {
      title: "Founder's Day",
      date: "May 2, 2025",
      description: "Annual celebration of the school's founding and achievements.",
    },
    {
      title: "Academic Excellence Awards",
      date: "May 25, 2025",
      description: "Recognition ceremony for students excelling in academics and co-curriculars.",
    },
    {
      title: "Graduation Ceremony",
      date: "June 1, 2025",
      description: "Celebratory event for graduating students and their families.",
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center bg-gradient-to-r from-primary to-secondary">
        <div className="text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4">Events</h1>
          <p className="text-xl opacity-90">Celebrations and Activities</p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-serif font-bold mb-6 text-primary">School Calendar 2024-25</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Throughout the year, Abhimanyu School organizes a variety of events that nurture students' talents, build
            character, and create memorable experiences. From academic competitions to cultural celebrations, our events
            foster a vibrant learning community.
          </p>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-2xl font-serif font-bold mb-8 text-primary">Upcoming Events</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {upcomingEvents.map((event) => (
              <div
                key={event.title}
                className="bg-white p-8 rounded-lg border border-border hover:shadow-lg transition"
              >
                <div className="flex items-start gap-4 mb-4">
                  <span className="text-accent text-3xl flex-shrink-0">📅</span>
                  <div>
                    <h3 className="text-xl font-serif font-bold text-primary">{event.title}</h3>
                    <p className="text-sm text-secondary font-semibold">{event.date}</p>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed">{event.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Activity Types Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-serif font-bold mb-12 text-center text-primary">What We Celebrate</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { type: "Academic Events", emoji: "🏆", desc: "Competitions, exhibitions, and learning festivals" },
              { type: "Cultural Programs", emoji: "🎭", desc: "Music, dance, drama, and art showcases" },
              { type: "Sports Activities", emoji: "⚽", desc: "Inter-house competitions and athletic meets" },
              { type: "Social Service", emoji: "🤝", desc: "Community outreach and awareness programs" },
              { type: "Workshops & Seminars", emoji: "🎓", desc: "Expert-led sessions and skill development" },
              { type: "Celebrations", emoji: "🎉", desc: "National days, festivals, and milestones" },
            ].map((activity) => (
              <div key={activity.type} className="text-center">
                <div className="text-6xl mb-4">{activity.emoji}</div>
                <h3 className="text-xl font-serif font-bold mb-2 text-primary">{activity.type}</h3>
                <p className="text-gray-600">{activity.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
