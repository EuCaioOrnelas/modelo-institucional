import Link from "next/link";
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-footer p-10 text-text-muted">
      <div className="container mx-auto py-12 md:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Sobre a clínica */}
          <section>
            <h3 className="mb-4 text-lg font-bold">Clínica Marcelo Daltro</h3>
            <p className="mb-4">
              Odontologia de excelência para toda a família.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary"
                aria-label="Facebook da Clínica Marcelo Daltro"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary"
                aria-label="Instagram da Clínica Marcelo Daltro"
              >
                <Instagram className="h-5 w-5" />
              </Link>
            </div>
          </section>

          {/* Contato */}
          <section>
            <h3 className="mb-4 text-lg font-bold">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Phone className="mr-2 h-5 w-5 shrink-0" aria-hidden="true" />
                <span>(71) 9999-9999</span>
              </li>
              <li className="flex items-start">
                <Mail className="mr-2 h-5 w-5 shrink-0" aria-hidden="true" />
                <span>contato@clinicamarcelodaltro.com.br</span>
              </li>
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 shrink-0" aria-hidden="true" />
                <span>Av. Principal, 123 - Salvador, BA</span>
              </li>
            </ul>
          </section>

          {/* Horário */}
          <section>
            <h3 className="mb-4 text-lg font-bold">Horário de Funcionamento</h3>
            <ul className="space-y-2">
              <li>Segunda a Sexta: 8h às 18h</li>
              <li>Sábado: 8h às 12h</li>
              <li>Domingo: Fechado</li>
            </ul>
          </section>
        </div>

        <div className="mt-12 border-t border-text-muted pt-6 text-center">
          <p>
            &copy; {new Date().getFullYear()} Clínica Marcelo Daltro. Todos os
            direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
