import Link from "next/link"
import { Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-serif font-bold mb-4">Abhimanyu School</h3>
            <p className="text-sm opacity-90">
              Providing quality education with strong values and modern infrastructure.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:opacity-80 transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/infrastructure" className="hover:opacity-80 transition">
                  Infrastructure
                </Link>
              </li>
              <li>
                <Link href="/admissions" className="hover:opacity-80 transition">
                  Admissions
                </Link>
              </li>
              <li>
                <Link href="/mission-vision" className="hover:opacity-80 transition">
                  Mission & Vision
                </Link>
              </li>
            </ul>
          </div>

          {/* More Links */}
          <div>
            <h4 className="font-semibold mb-4">More</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/events" className="hover:opacity-80 transition">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:opacity-80 transition">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:opacity-80 transition">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/query" className="hover:opacity-80 transition">
                  Submit Query
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-start gap-2">
                <Mail size={16} className="mt-1 flex-shrink-0" />
                <span>info@abhimanyuschool.in</span>
              </div>
              <div className="flex items-start gap-2">
                <Phone size={16} className="mt-1 flex-shrink-0" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span>Abhimanyu Nagar, City, State</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8">
          <p className="text-sm text-center opacity-80">
            © 2025 Abhimanyu Public Higher Secondary School. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
