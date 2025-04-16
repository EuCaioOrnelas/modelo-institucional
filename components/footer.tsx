import Link from "next/link"
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-azulc p-10 text-ouro">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <h3 className="mb-4 text-lg font-bold">Clínica Marcelo Daltro</h3>
            <p className="mb-4">Odontologia de excelência para toda a família.</p>
            <div className="flex space-x-4">
              <Link href="https://facebook.com" className="hover:text-branco">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="https://instagram.com" className="hover:text-branco">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-bold">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Phone className="mr-2 h-5 w-5 shrink-0" />
                <span>(71) 9999-9999</span>
              </li>
              <li className="flex items-start">
                <Mail className="mr-2 h-5 w-5 shrink-0" />
                <span>contato@clinicamarcelodaltro.com.br</span>
              </li>
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 shrink-0" />
                <span>Av. Principal, 123 - Salvador, BA</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-bold">Horário de Funcionamento</h3>
            <ul className="space-y-2">
              <li>Segunda a Sexta: 8h às 18h</li>
              <li>Sábado: 8h às 12h</li>
              <li>Domingo: Fechado</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-primary-foreground/20 pt-6 text-center">
          <p>&copy; {new Date().getFullYear()} Clínica Marcelo Daltro. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
