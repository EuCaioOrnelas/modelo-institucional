import Image from "next/image";
import { CheckCircle } from "lucide-react";

export default function SobrePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-header py-12 md:py-16 text-center border-b text-text-muted">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl">
            Sobre Nós
          </h1>
          <p className="mt-4 text-lg text-text-muted max-w-2xl mx-auto">
            Conheça a história e a equipe da Clínica Marcelo Daltro
          </p>
        </div>
      </section>

      {/* Nossa História */}
      <section className="py-12 md:py-16 p-2">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2 md:gap-12 lg:items-center">
            <div>
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Dr. Marcelo Daltro"
                width={600}
                height={500}
                className="rounded-lg object-cover"
              />
            </div>
            <div>
              <h2 className="mb-6 text-2xl font-bold md:text-3xl">
                Nossa História
              </h2>
              <p className="mb-4 text-lg text-text">
                A Clínica Marcelo Daltro foi fundada em 2008 pelo Dr. Marcelo
                Daltro, cirurgião-dentista com mais de 20 anos de experiência e
                especialização em implantodontia e estética dental.
              </p>
              <p className="mb-4 text-lg text-text">
                O que começou como um pequeno consultório, hoje é uma clínica
                completa com equipamentos de última geração e uma equipe
                multidisciplinar de profissionais altamente qualificados.
              </p>
              <p className="mb-4 text-lg text-text">
                Nossa missão é proporcionar tratamentos odontológicos de
                excelência, aliando tecnologia de ponta, conhecimento científico
                e atendimento humanizado para garantir a satisfação e o
                bem-estar dos nossos pacientes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Nossos Valores */}
      <section className="bg-muted py-12 md:py-16 ">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-center text-2xl font-bold md:text-3xl">
            Nossos Valores
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Excelência",
                description:
                  "Buscamos a excelência em todos os tratamentos e procedimentos realizados.",
              },
              {
                title: "Ética",
                description:
                  "Atuamos com transparência, honestidade e respeito em todas as relações.",
              },
              {
                title: "Inovação",
                description:
                  "Investimos constantemente em tecnologia e atualização profissional.",
              },
              {
                title: "Humanização",
                description:
                  "Tratamos cada paciente de forma única, com empatia e acolhimento.",
              },
            ].map((value, i) => (
              <div
                key={i}
                className="rounded-lg bg-background p-6 shadow-sm border-border border-1"
              >
                <h3 className="mb-3 text-xl font-bold">{value.title}</h3>
                <p className="text-text">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nossa Equipe */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-center text-2xl font-bold md:text-3xl">
            Nossa Equipe
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "Dr. Marcelo Daltro",
                role: "Cirurgião-Dentista - Especialista em Implantodontia",
                image: "/placeholder.svg?height=300&width=300",
              },
              {
                name: "Dra. Carla Mendes",
                role: "Ortodontista",
                image: "/placeholder.svg?height=300&width=300",
              },
              {
                name: "Dr. Ricardo Almeida",
                role: "Endodontista",
                image: "/placeholder.svg?height=300&width=300",
              },
              {
                name: "Dra. Patrícia Santos",
                role: "Odontopediatra",
                image: "/placeholder.svg?height=300&width=300",
              },
              {
                name: "Dra. Fernanda Lima",
                role: "Periodontista",
                image: "/placeholder.svg?height=300&width=300",
              },
              {
                name: "Dr. Bruno Costa",
                role: "Especialista em Estética Dental",
                image: "/placeholder.svg?height=300&width=300",
              },
            ].map((member, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <div className="mb-4 overflow-hidden rounded-full border-3">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    width={200}
                    height={200}
                    className="h-48 w-48 object-cover"
                  />
                </div>
                <h3 className="mb-1 text-xl font-bold">{member.name}</h3>
                <p className="text-text">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Infraestrutura */}
      <section className="bg-muted py-12 md:py-16 p-10">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2 md:gap-12 lg:items-center">
            <div>
              <h2 className="mb-6 text-2xl font-bold md:text-3xl">
                Nossa Infraestrutura
              </h2>
              <p className="mb-6 text-lg text-text">
                A Clínica Marcelo Daltro conta com instalações modernas e
                equipamentos de última geração para oferecer o que há de melhor
                em tratamentos odontológicos.
              </p>
              <ul className="space-y-3">
                {[
                  "Consultórios equipados com tecnologia de ponta",
                  "Sala de radiologia digital",
                  "Centro cirúrgico para implantes e cirurgias complexas",
                  "Sala de esterilização com protocolos rigorosos",
                  "Recepção confortável e acolhedora",
                  "Estacionamento próprio",
                ].map((item, i) => (
                  <li key={i} className="flex items-center">
                    <CheckCircle className="mr-2 h-5 w-5 text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Image
                src="/placeholder.svg?height=250&width=250"
                alt="Consultório"
                width={250}
                height={250}
                className="rounded-lg object-cover"
              />
              <Image
                src="/placeholder.svg?height=250&width=250"
                alt="Equipamentos"
                width={250}
                height={250}
                className="rounded-lg object-cover"
              />
              <Image
                src="/placeholder.svg?height=250&width=250"
                alt="Recepção"
                width={250}
                height={250}
                className="rounded-lg object-cover"
              />
              <Image
                src="/placeholder.svg?height=250&width=250"
                alt="Centro Cirúrgico"
                width={250}
                height={250}
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
