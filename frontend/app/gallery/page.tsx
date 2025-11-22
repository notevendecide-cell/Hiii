import Header from "@/components/header"
import Footer from "@/components/footer"

export default function Gallery() {
  const galleries = [
    { category: "Campus Life", images: 6 },
    { category: "Academic Activities", images: 6 },
    { category: "Sports & Games", images: 6 },
    { category: "Cultural Programs", images: 6 },
  ]

  const sampleImages = [
    { title: "Main Campus", src: "/a.jpeg" },
    { title: "Classroom Learning", src: "/b.jpeg" },
    { title: "Science Lab", src: "/c.jpeg" },
    { title: "Sports Event", src: "/d.jpeg" },
    { title: "Cultural Program", src: "/a.jpeg" },
    { title: "Library", src: "/b.jpeg" },
    { title: "Computer Lab", src: "/c.jpeg" },
    { title: "School Event", src: "/d.jpeg" },
    { title: "Outdoor Activity", src: "/a.jpeg" },
    { title: "Art Class", src: "/b.jpeg" },
    { title: "School Functions", src: "/c.jpeg" },
    { title: "Campus Garden", src: "/d.jpeg" },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center bg-gradient-to-r from-primary to-secondary">
        <div className="text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4">Gallery</h1>
          <p className="text-xl opacity-90">Moments from Our School Community</p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-serif font-bold mb-6 text-primary">Our Story in Images</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore the vibrant moments from our school community. From academic pursuits to cultural celebrations, our
            gallery captures the essence of life at Abhimanyu Public Higher Secondary School.
          </p>
        </div>
      </section>

      {/* Image Grid Gallery */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sampleImages.map((image, index) => (
              <div key={index} className="group relative overflow-hidden rounded-lg h-64 cursor-pointer">
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex items-end p-6">
                  <h3 className="text-white font-serif font-bold text-lg">{image.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Categories Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-serif font-bold mb-12 text-center text-primary">Photo Collections</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {galleries.map((gallery) => (
              <div key={gallery.category} className="text-center">
                <div className="bg-primary/10 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-4 text-4xl">
                  📷
                </div>
                <h3 className="text-xl font-serif font-bold mb-2 text-primary">{gallery.category}</h3>
                <p className="text-gray-600">{gallery.images} Photos</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
