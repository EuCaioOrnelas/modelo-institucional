import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CheckCircle, Star } from "lucide-react";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary to-primary/80 text-ouro bg-azulc md:p-0 p-1  ">
        <div className="container flex min-h-[500px] flex-col items-center justify-center py-12 text-center md:py-24">
          <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
            Sorria com Confiança
          </h1>
          <p className="mb-8 max-w-2xl text-lg md:text-xl">
            Na Clínica Marcelo Daltro, oferecemos tratamentos odontológicos de
            excelência para transformar seu sorriso e sua qualidade de vida.
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0 ">
            <Button
              size="lg"
              asChild
              className="border-2  hover:text-branco"
            >
              <Link href="/contato">Agendar Consulta</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className=" border-2   hover:text-branco"
            >
              <Link href="/servicos">Nossos Serviços</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Sobre Nós Preview */}
      <section className="py-16 md:py-24 p-2 " >
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2 md:gap-12 lg:items-center">
            <div>
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Clínica Marcelo Daltro"
                width={600}
                height={400}
                className="rounded-lg object-cover"
              />
            </div>
            <div>
              <h2 className="mb-6 text-3xl font-bold md:text-4xl">
                Sobre a Clínica Marcelo Daltro
              </h2>
              <p className="mb-6 text-lg text-muted-foregouroround">
                Há mais de 15 anos, a Clínica Marcelo Daltro é referência em
                tratamentos odontológicos de alta qualidade em Salvador. Nossa
                equipe de profissionais altamente qualificados está comprometida
                em proporcionar o melhor atendimento e os mais avançados
                tratamentos para nossos pacientes.
              </p>
              <ul className="mb-8 space-y-3">
                {[
                  "Equipe especializada",
                  "Tecnologia de ponta",
                  "Ambiente acolhedor",
                  "Atendimento humanizado",
                ].map((item, i) => (
                  <li key={i} className="flex items-center">
                    <CheckCircle className="mr-2 h-5 w-5 text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Button asChild className="border-2 text-ouro  hover:text-branco">
                <Link href="/sobre">Conheça Nossa História</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section className="bg-muted py-16 md:py-24 p-10 bg-azulc">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Nossos Serviços
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Oferecemos uma ampla gama de tratamentos odontológicos para cuidar
              da saúde e da beleza do seu sorriso.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Implantes Dentários",
                description:
                  "Recupere seus dentes perdidos com implantes de alta qualidade e tecnologia avançada.",
                image: "/placeholder.svg?height=200&width=300",
              },
              {
                title: "Ortodontia",
                description:
                  "Alinhamento dentário com aparelhos convencionais, estéticos e invisíveis.",
                image: "/placeholder.svg?height=200&width=300",
              },
              {
                title: "Estética Dental",
                description:
                  "Transforme seu sorriso com lentes de contato dental, clareamento e restaurações estéticas.",
                image: "/placeholder.svg?height=200&width=300",
              },
              {
                title: "Endodontia",
                description:
                  "Tratamento de canal com tecnologia e conforto para preservar seus dentes naturais.",
                image: "/placeholder.svg?height=200&width=300",
              },
              {
                title: "Odontopediatria",
                description:
                  "Cuidados especiais para a saúde bucal das crianças em um ambiente acolhedor.",
                image: "/placeholder.svg?height=200&width=300",
              },
              {
                title: "Periodontia",
                description:
                  "Tratamento e prevenção de doenças da gengiva para uma saúde bucal completa.",
                image: "/placeholder.svg?height=200&width=300",
              },
            ].map((service, i) => (
              <Card key={i} className="overflow-hidden">
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  width={300}
                  height={200}
                  className="h-48 w-full object-cover"
                />
                <CardHeader>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button asChild size="lg" className="border-2 text-ouro   hover:text-branco">
              <Link href="/servicos">Ver Todos os Serviços</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-16 md:py-24 p-10">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              O Que Nossos Pacientes Dizem
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              A satisfação dos nossos pacientes é o nosso maior orgulho. Confira
              alguns depoimentos.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "Ana Paula Silva",
                text: "Minha experiência na Clínica Marcelo Daltro foi incrível! O tratamento de implantes mudou completamente minha qualidade de vida. Toda a equipe é muito atenciosa e profissional.",
                rating: 5,
              },
              {
                name: "Carlos Eduardo Santos",
                text: "Fiz o tratamento ortodôntico e o resultado superou minhas expectativas. O Dr. Marcelo e sua equipe são extremamente competentes e cuidadosos. Recomendo a todos!",
                rating: 5,
              },
              {
                name: "Juliana Oliveira",
                text: "Sempre tive medo de dentista, mas na Clínica Marcelo Daltro me senti completamente à vontade. O ambiente é acolhedor e os profissionais são muito gentis. Estou muito satisfeita com meu novo sorriso!",
                rating: 5,
              },
            ].map((testimonial, i) => (
              <Card key={i} className="flex flex-col">
                <CardHeader>
                  <div className="flex items-center space-x-1">
                    {Array(testimonial.rating)
                      .fill(0)
                      .map((_, i) => (
                        <Star
                          key={i}
                          className="h-5 w-5 fill-ouro text-primary"
                        />
                      ))}
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="mb-4 italic">{testimonial.text}</p>
                  <p className="font-semibold">{testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button asChild variant="outline" size="lg" className="border-2 text-ouro   hover:text-branco ">
              <Link href="/depoimentos">Ver Mais Depoimentos</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16 text-primary-foreground  p-10 md:py-24">
        <div className="container text-center">
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">
            Pronto para Transformar seu Sorriso?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg">
            Agende uma consulta hoje mesmo e dê o primeiro passo para um sorriso
            mais saudável e bonito.
          </p>
          <Button
            size="lg"
            asChild
           className="border-2 text-ouro   hover:text-branco"
          >
            <Link href="/contato">Agendar Consulta</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
