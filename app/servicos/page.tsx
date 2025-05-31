import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function ServicosPage() {
  const servicosCategories = [
    {
      id: "estetica",
      name: "Estética Dental",
      services: [
        {
          title: "Lentes de Contato Dental",
          description:
            "Lâminas ultrafinas de porcelana que são coladas sobre os dentes para corrigir forma, cor e pequenos desalinhamentos.",
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          title: "Clareamento Dental",
          description:
            "Procedimento que remove manchas e pigmentações dos dentes, deixando-os mais brancos e brilhantes.",
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          title: "Restaurações Estéticas",
          description:
            "Restaurações com resina composta que imitam a cor natural dos dentes, devolvendo forma e função.",
          image: "/placeholder.svg?height=200&width=300",
        },
      ],
    },
    {
      id: "reabilitacao",
      name: "Reabilitação Oral",
      services: [
        {
          title: "Implantes Dentários",
          description:
            "Substitutos artificiais para as raízes dos dentes, permitindo a reposição de dentes perdidos de forma fixa e duradoura.",
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          title: "Próteses Fixas",
          description:
            "Coroas e pontes que substituem dentes ausentes ou danificados, devolvendo estética e função mastigatória.",
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          title: "Próteses Removíveis",
          description:
            "Soluções práticas e econômicas para substituir múltiplos dentes ausentes com conforto e naturalidade.",
          image: "/placeholder.svg?height=200&width=300",
        },
      ],
    },
    {
      id: "ortodontia",
      name: "Ortodontia",
      services: [
        {
          title: "Aparelho Convencional",
          description:
            "Tratamento com braquetes metálicos para correção de problemas de alinhamento e oclusão.",
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          title: "Aparelho Estético",
          description:
            "Braquetes transparentes ou da cor do dente, proporcionando um tratamento mais discreto.",
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          title: "Alinhadores Invisíveis",
          description:
            "Placas transparentes e removíveis que alinham os dentes de forma praticamente imperceptível.",
          image: "/placeholder.svg?height=200&width=300",
        },
      ],
    },
    {
      id: "tratamentos",
      name: "Tratamentos Especializados",
      services: [
        {
          title: "Endodontia (Tratamento de Canal)",
          description:
            "Remoção do nervo inflamado ou infectado, preservando o dente natural e aliviando a dor.",
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          title: "Periodontia",
          description:
            "Tratamento das doenças da gengiva e do osso que sustenta os dentes, prevenindo a perda dentária.",
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          title: "Odontopediatria",
          description:
            "Cuidados especializados para a saúde bucal das crianças, com foco na prevenção e tratamentos adequados.",
          image: "/placeholder.svg?height=200&width=300",
        },
      ],
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-header py-12 md:py-16 text-center border-b text-text-muted">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl">
            Nossos Serviços
          </h1>
          <p className="mt-4 text-lg">
            Conheça os tratamentos odontológicos oferecidos pela Clínica Marcelo
            Daltro
          </p>
        </div>
      </section>

      {/* Serviços por Categoria */}
      <section className="py-12 md:py-16 p-10">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="estetica" className="w-full">
            <TabsList className="mb-8 flex w-full flex-wrap justify-start gap-2">
              {servicosCategories.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className="text-sm md:text-base text-primary border border-primary px-4 py-2 rounded 
                 hover:bg-primary hover:text-white 
                 data-[state=active]:bg-primary data-[state=active]:text-white"
                >
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>

            {servicosCategories.map((category) => (
              <TabsContent key={category.id} value={category.id}>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {category.services.map((service, i) => (
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
                      <CardFooter>
                        <Button
                          size="sm"
                          asChild
                          className=" text-text-muted border-primary bg-primary hover:border-primary hover:text-on-primary hover:cursor-pointer"
                        >
                          <Link href="/contato">Agendar Consulta</Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="bg-surface py-12 md:py-16 p-10">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-center text-2xl font-bold md:text-3xl">
            Nossos Diferenciais
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Tecnologia Avançada",
                description:
                  "Utilizamos equipamentos de última geração para diagnósticos precisos e tratamentos mais eficientes.",
              },
              {
                title: "Equipe Especializada",
                description:
                  "Nossa equipe é formada por profissionais especializados em diversas áreas da odontologia.",
              },
              {
                title: "Ambiente Confortável",
                description:
                  "Clínica moderna e acolhedora, projetada para proporcionar o máximo conforto durante os tratamentos.",
              },
              {
                title: "Atendimento Personalizado",
                description:
                  "Cada paciente recebe um plano de tratamento individualizado de acordo com suas necessidades.",
              },
            ].map((diferencial, i) => (
              <div
                key={i}
                className="rounded-lg bg-surface p-6 shadow-sm border-border border-1"
              >
                <h3 className="mb-3 text-xl font-bold">{diferencial.title}</h3>
                <p className="text-text">{diferencial.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-16 p-10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-6 text-2xl font-bold md:text-3xl">
            Agende sua Consulta
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-text">
            Entre em contato conosco para agendar uma avaliação e conhecer mais
            sobre nossos tratamentos.
          </p>
          <Button
            size="lg"
            asChild
            className="text-text-muted   hover:text-on-primary"
          >
            <Link href="/contato">Agendar Consulta</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
