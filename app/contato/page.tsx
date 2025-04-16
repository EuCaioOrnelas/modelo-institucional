"use client";

import type React from "react";

import { useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";

export default function ContatoPage() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    assunto: "",
    mensagem: "",
    tipoContato: "consulta",
    servico: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui seria implementada a lógica de envio do formulário
    console.log(formData);
    toast({
      title: "Mensagem enviada",
      description: "Entraremos em contato em breve!",
    });
    // Resetar formulário
    setFormData({
      nome: "",
      email: "",
      telefone: "",
      assunto: "",
      mensagem: "",
      tipoContato: "consulta",
      servico: "",
    });
  };

  return (
    <>
      {/* Hero Section */}
      <section className="bg-muted py-12 md:py-16 text-center border-b">
        <div className="container">
          <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl">
            Contato
          </h1>
          <p className="mt-4  text-lg text-muted-foreground">
            Entre em contato conosco para agendar uma consulta ou tirar suas
            dúvidas
          </p>
        </div>
      </section>

      {/* Informações de Contato e Formulário */}
      <section className="py-12 md:py-16 md:p-10 p-2">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
            {/* Informações de Contato */}
            <div>
              <h2 className="mb-6 text-2xl font-bold">
                Informações de Contato
              </h2>

              <div className="mb-8 space-y-6">
                <Card>
                  <CardContent className="flex items-start space-x-4 p-6">
                    <Phone className="h-6 w-6 text-primary" />
                    <div>
                      <h3 className="font-semibold">Telefone</h3>
                      <p className="text-muted-foreground">(71) 9999-9999</p>
                      <p className="text-muted-foreground">(71) 8888-8888</p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="flex items-start space-x-4 p-6">
                    <Mail className="h-6 w-6 text-primary" />
                    <div>
                      <h3 className="font-semibold">E-mail</h3>
                      <p className="text-muted-foreground">
                        contato@clinicamarcelodaltro.com.br
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="flex items-start space-x-4 p-6">
                    <MapPin className="h-6 w-6 text-primary" />
                    <div>
                      <h3 className="font-semibold">Endereço</h3>
                      <p className="text-muted-foreground">
                        Av. Principal, 123 - Salvador, BA
                      </p>
                      <p className="text-muted-foreground">CEP: 40000-000</p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <h3 className="mb-4 text-xl font-semibold">
                Horário de Funcionamento
              </h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>Segunda a Sexta: 8h às 18h</li>
                <li>Sábado: 8h às 12h</li>
                <li>Domingo: Fechado</li>
              </ul>
            </div>

            {/* Formulário de Contato */}
            <div>
              <h2 className="mb-6 text-2xl font-bold">Envie uma Mensagem</h2>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="nome">Nome Completo</Label>
                    <Input
                      id="nome"
                      name="nome"
                      value={formData.nome}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">E-mail</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="telefone">Telefone</Label>
                  <Input
                    id="telefone"
                    name="telefone"
                    value={formData.telefone}
                    onChange={handleChange}
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="border-2 text-ouro  w-full hover:cursor-pointer  hover:text-branco"
                >
                  Enviar Mensagem
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Mapa */}
      <section className="py-12 md:py-16 p-10">
        <div className="container">
          <h2 className="mb-6 text-2xl font-bold text-center">Como Chegar</h2>
          <div className="aspect-video w-full overflow-hidden rounded-lg bg-muted">
            <div className="flex h-full w-full items-center justify-center ">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1083.6739098358084!2d-49.271983430559715!3d-16.70540337245899!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935ef11822f5990b%3A0xca8b1e646dc89a22!2sCL%C3%8DNICA%20MARCELO%20DALTRO!5e0!3m2!1spt-BR!2sbr!4v1744775371052!5m2!1spt-BR!2sbr"
                width="800"
                height="600"
                loading="lazy"
                className="rounded-3xl"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
