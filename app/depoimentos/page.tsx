import Image from "next/image"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Star } from "lucide-react"

export default function DepoimentosPage() {
  const depoimentos = [
    {
      name: "Ana Paula Silva",
      age: 42,
      treatment: "Implantes Dentários",
      text: "Minha experiência na Clínica Marcelo Daltro foi incrível! O tratamento de implantes mudou completamente minha qualidade de vida. Toda a equipe é muito atenciosa e profissional. Agora posso sorrir e comer com confiança novamente.",
      image: "/placeholder.svg?height=100&width=100",
      rating: 5,
    },
    {
      name: "Carlos Eduardo Santos",
      age: 35,
      treatment: "Ortodontia",
      text: "Fiz o tratamento ortodôntico e o resultado superou minhas expectativas. O Dr. Marcelo e sua equipe são extremamente competentes e cuidadosos. Recomendo a todos que buscam um tratamento de qualidade!",
      image: "/placeholder.svg?height=100&width=100",
      rating: 5,
    },
    {
      name: "Juliana Oliveira",
      age: 28,
      treatment: "Lentes de Contato Dental",
      text: "Sempre tive medo de dentista, mas na Clínica Marcelo Daltro me senti completamente à vontade. O ambiente é acolhedor e os profissionais são muito gentis. Estou muito satisfeita com meu novo sorriso!",
      image: "/placeholder.svg?height=100&width=100",
      rating: 5,
    },
    {
      name: "Roberto Almeida",
      age: 45,
      treatment: "Prótese sobre Implante",
      text: "Após anos sofrendo com uma prótese removível desconfortável, finalmente tenho dentes fixos novamente. O Dr. Marcelo é um profissional excepcional, e o resultado do meu tratamento foi perfeito.",
      image: "/placeholder.svg?height=100&width=100",
      rating: 5,
    },
    {
      name: "Fernanda Costa",
      age: 32,
      treatment: "Clareamento Dental",
      text: "Fiz o clareamento dental e fiquei impressionada com o resultado. Meus dentes ficaram muito mais brancos de forma natural. O atendimento foi excelente do início ao fim.",
      image: "/placeholder.svg?height=100&width=100",
      rating: 5,
    },
    {
      name: "Marcelo Souza",
      age: 50,
      treatment: "Tratamento de Canal",
      text: "Estava com muita dor e fui atendido com urgência. O tratamento de canal foi realizado com muita habilidade e praticamente sem dor. Sou muito grato a toda equipe da clínica.",
      image: "/placeholder.svg?height=100&width=100",
      rating: 5,
    },
    {
      name: "Luciana Martins",
      age: 38,
      treatment: "Facetas de Porcelana",
      text: "As facetas transformaram completamente o meu sorriso. O Dr. Marcelo é um verdadeiro artista! O atendimento é personalizado e toda a equipe é muito profissional.",
      image: "/placeholder.svg?height=100&width=100",
      rating: 5,
    },
    {
      name: "Paulo Henrique",
      age: 40,
      treatment: "Periodontia",
      text: "Tinha problemas sérios de gengiva e após o tratamento na Clínica Marcelo Daltro, minha saúde bucal melhorou significativamente. Recomendo a todos que buscam um tratamento de qualidade.",
      image: "/placeholder.svg?height=100&width=100",
      rating: 5,
    },
    {
      name: "Mariana Vieira",
      age: 25,
      treatment: "Alinhadores Invisíveis",
      text: "Optei pelos alinhadores invisíveis e não me arrependo. O tratamento foi discreto e eficiente. A equipe da Clínica Marcelo Daltro é extremamente competente e atenciosa.",
      image: "/placeholder.svg?height=100&width=100",
      rating: 5,
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="bg-muted py-12 md:py-16 text-center border-b">
        <div className="container">
          <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl">Depoimentos</h1>
          <p className="mt-4  text-lg text-muted-foreground">
            Confira o que nossos pacientes dizem sobre os tratamentos realizados na Clínica Marcelo Daltro
          </p>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-12 md:py-16 p-10">
        <div className="container">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {depoimentos.map((depoimento, i) => (
              <Card key={i} className="flex flex-col">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="overflow-hidden rounded-full border-2">
                      <Image
                        src={depoimento.image || "/placeholder.svg"}
                        alt={depoimento.name}
                        width={60}
                        height={60}
                        className="h-14 w-14 object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-semibold">
                        {depoimento.name}, {depoimento.age}
                      </p>
                      <p className="text-sm text-muted-foreground">Tratamento: {depoimento.treatment}</p>
                      <div className="mt-1 flex items-center space-x-1">
                        {Array(depoimento.rating)
                          .fill(0)
                          .map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-ouro text-primary" />
                          ))}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="italic">{depoimento.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-12 text-primary-foreground md:py-16 p-10">
        <div className="container text-center">
          <h2 className="mb-4 text-2xl font-bold md:text-3xl">Seja o Próximo Caso de Sucesso</h2>
          <p className="mx-auto mb-0 max-w-2xl text-lg">
            Agende uma consulta e transforme seu sorriso com a Clínica Marcelo Daltro.
          </p>
        </div>
      </section>
    </>
  )
}
