import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function GaleriaPage() {
  const categorias = [
    {
      id: "implantes",
      name: "Implantes",
      cases: [
        {
          title: "Caso 1 - Implante Unitário",
          before: "/placeholder.svg?height=300&width=400",
          after: "/placeholder.svg?height=300&width=400",
          description:
            "Paciente com ausência do dente incisivo lateral superior. Foi realizado implante com coroa de porcelana.",
        },
        {
          title: "Caso 2 - Implantes Múltiplos",
          before: "/placeholder.svg?height=300&width=400",
          after: "/placeholder.svg?height=300&width=400",
          description:
            "Paciente com ausência de vários dentes posteriores. Foram realizados implantes com prótese fixa.",
        },
        {
          title: "Caso 3 - Protocolo",
          before: "/placeholder.svg?height=300&width=400",
          after: "/placeholder.svg?height=300&width=400",
          description: "Paciente com perda total dos dentes superiores. Foi realizado protocolo sobre implantes.",
        },
      ],
    },
    {
      id: "estetica",
      name: "Estética Dental",
      cases: [
        {
          title: "Caso 1 - Lentes de Contato",
          before: "/placeholder.svg?height=300&width=400",
          after: "/placeholder.svg?height=300&width=400",
          description:
            "Paciente com dentes manchados e pequenas fraturas. Foram instaladas 10 lentes de contato dental.",
        },
        {
          title: "Caso 2 - Clareamento",
          before: "/placeholder.svg?height=300&width=400",
          after: "/placeholder.svg?height=300&width=400",
          description: "Paciente com dentes amarelados. Foi realizado clareamento em consultório e caseiro.",
        },
        {
          title: "Caso 3 - Restaurações Estéticas",
          before: "/placeholder.svg?height=300&width=400",
          after: "/placeholder.svg?height=300&width=400",
          description: "Paciente com dentes anteriores fraturados. Foram realizadas restaurações com resina composta.",
        },
      ],
    },
    {
      id: "ortodontia",
      name: "Ortodontia",
      cases: [
        {
          title: "Caso 1 - Aparelho Convencional",
          before: "/placeholder.svg?height=300&width=400",
          after: "/placeholder.svg?height=300&width=400",
          description: "Paciente com apinhamento severo. Tratamento com aparelho convencional por 2 anos.",
        },
        {
          title: "Caso 2 - Aparelho Estético",
          before: "/placeholder.svg?height=300&width=400",
          after: "/placeholder.svg?height=300&width=400",
          description: "Paciente com diastemas. Tratamento com aparelho estético por 18 meses.",
        },
        {
          title: "Caso 3 - Alinhadores Invisíveis",
          before: "/placeholder.svg?height=300&width=400",
          after: "/placeholder.svg?height=300&width=400",
          description: "Paciente com mordida cruzada. Tratamento com alinhadores invisíveis por 14 meses.",
        },
      ],
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="bg-muted py-12 md:py-16 text-center border-b">
        <div className="container">
          <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl">Galeria de Sorrisos</h1>
          <p className="mt-4  text-lg text-muted-foreground">
            Confira os resultados dos tratamentos realizados na Clínica Marcelo Daltro
          </p>
        </div>
      </section>

      {/* Galeria por Categoria */}
      <section className="py-12 md:py-16 p-10">
        <div className="container">
          <Tabs defaultValue="implantes" className="w-full">
            <TabsList className="mb-8 flex w-full flex-wrap justify-start gap-2">
              {categorias.map((categoria) => (
                <TabsTrigger key={categoria.id} value={categoria.id} className="text-sm md:text-base border-ouro">
                  {categoria.name}
                </TabsTrigger>
              ))}
            </TabsList>

            {categorias.map((categoria) => (
              <TabsContent key={categoria.id} value={categoria.id}>
                <div className="grid gap-12">
                  {categoria.cases.map((caso, i) => (
                    <div key={i} className="rounded-lg bg-muted p-6">
                      <h3 className="mb-4 text-xl font-bold">{caso.title}</h3>
                      <div className="grid gap-4 md:grid-cols-2">
                        <div>
                          <p className="mb-2 font-medium">Antes</p>
                          <Image
                            src={caso.before || "/placeholder.svg"}
                            alt={`Antes - ${caso.title}`}
                            width={400}
                            height={300}
                            className="rounded-lg object-cover"
                          />
                        </div>
                        <div>
                          <p className="mb-2 font-medium">Depois</p>
                          <Image
                            src={caso.after || "/placeholder.svg"}
                            alt={`Depois - ${caso.title}`}
                            width={400}
                            height={300}
                            className="rounded-lg object-cover"
                          />
                        </div>
                      </div>
                      <p className="mt-4 text-muted-foreground">{caso.description}</p>
                    </div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Informações Adicionais */}
      <section className="bg-muted py-12 md:py-16 p-10">
        <div className="container text-center">
          <h2 className="mb-4 text-2xl font-bold md:text-3xl">Transforme seu Sorriso</h2>
          <p className="mx-auto mb-0 max-w-2xl text-lg text-muted-foreground">
            Todos os casos apresentados são de pacientes reais da Clínica Marcelo Daltro. Os resultados podem variar de
            acordo com as características individuais de cada paciente.
          </p>
        </div>
      </section>
    </>
  )
}
