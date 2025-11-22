import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"

export default function Admissions() {
  const eligibility = [
    "Candidates must meet the age requirement for the respective class",
    "Previous academic records will be reviewed for admission consideration",
    "Entrance assessment may be required for certain classes",
    "Medical fitness certificate is required during admission",
  ]

  const documents = [
    "Birth Certificate (attested copy)",
    "Proof of Residence",
    "Academic Records from Previous School",
    "Medical Examination Report",
    "Vaccination Certificate",
    "Passport-size Photographs",
    "Parent/Guardian Identity Proof",
    "Aadhar Card (if available)",
  ]

  const timeline = [
    { period: "January - February", event: "Application Window Opens" },
    { period: "March - April", event: "Entrance Examination (if applicable)" },
    { period: "May", event: "Merit List Announcement" },
    { period: "June", event: "Final Admission & Confirmation" },
    { period: "July", event: "Academic Year Begins" },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center bg-gradient-to-r from-primary to-secondary">
        <div className="text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4">Admissions</h1>
          <p className="text-xl opacity-90">Join Our Learning Community</p>
        </div>
      </section>

      {/* Eligibility Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-serif font-bold mb-8 text-primary">Eligibility Criteria</h2>
          <div className="bg-muted p-8 rounded-lg">
            <ul className="space-y-4">
              {eligibility.map((item, index) => (
                <li key={index} className="flex items-start gap-4">
                  <span className="text-accent font-bold text-xl flex-shrink-0">✓</span>
                  <span className="text-gray-700 text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Required Documents */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-serif font-bold mb-8 text-primary">Required Documents</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {documents.map((doc) => (
              <div key={doc} className="bg-white p-6 rounded-lg border border-border flex items-start gap-4">
                <span className="text-accent text-2xl flex-shrink-0">📄</span>
                <span className="text-gray-700">{doc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Admission Timeline */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-serif font-bold mb-12 text-center text-primary">Admission Timeline</h2>
          <div className="space-y-6">
            {timeline.map((item, index) => (
              <div key={index} className="flex gap-6 items-start">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                  {index < timeline.length - 1 && <div className="w-0.5 h-20 bg-primary/30 mt-4" />}
                </div>
                <div className="pt-2">
                  <p className="text-primary font-semibold text-lg">{item.period}</p>
                  <p className="text-gray-600">{item.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Ready to Apply?</h2>
          <p className="text-lg mb-8 opacity-90">
            Connect with our admissions team for more information and to start your application.
          </p>
          <Link
            href="/query"
            className="inline-block bg-accent text-accent-foreground px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition"
          >
            Submit Admission Inquiry
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
