"use client";

import Image from "next/image";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Header from "@/components/header";
import { productsData } from "@/constants/data";
import { cn } from "../lib/utils";

export default function Home() {
  function handleBuy(product: string) {
    const productName = product.replace(/\s/g, "%20");
    window.open(
      `https://api.whatsapp.com/send?phone=5511973698754&text=Observei%20a%20${productName}%20no%20seu%20site%20e%20gostaria%20de%20saber%20mais%20informa%C3%A7%C3%B5es`,
      "_blank"
    );
  }
  const products = productsData;
  return (
    <div className="flex min-h-[100dvh] flex-col ">
      <Header />
      <main className="flex-1">
        <section className="w-full pt-12 md:pt-24 lg:pt-32 flex flex-col items-center justify-center">
          <div className="flex justify-center items-center flex-col gap-y-4">
            <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem] text-center">
              Registre momentos com{" "}
              <span className="text-primary">Memórias Impressas</span>
            </h1>

            <p className="text-center">
              Conosco você pode registrar todos os seus momentos especiais, com
              alta qualidade e em poucos dias você já poderá usufruir de uma
              lembrança impecável.
            </p>

            <a
              className={cn("rounded-xl bg-primary text-white px-4 py-2")}
              href="#catalogo"
            >
              Ver nosso Catálogo
            </a>

            <img
              src="/caneca1.jpg"
              alt="Hero"
              className="overflow-hidden rounded-t-xl object-fill pb-24 w-2/3  lg:w-1/3"
            />
          </div>
        </section>

        <section
          id="pricing"
          className="w-full py-12 md:py-24 lg:py-32 bg-slate-950"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                  Catálogo
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Confira nossos produtos
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Você pode escolher o produto que melhor se adapta às suas
                  necessidades, impecáveis e com alta qualidade.
                </p>
              </div>
            </div>
            <div
              className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12"
              id="catalogo"
            >
              {products.map((product) => (
                <Card className="flex flex-col h-full" key={product.id}>
                  <CardHeader>
                    <CardTitle>{product.name}</CardTitle>
                    <CardDescription>{product.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex flex-col items-center justify-center gap-4 py-8 h-full">
                    <Image
                      src={product.image ?? "/caneca-branca.jpg"}
                      alt={product.name}
                      width={200}
                      height={200}
                      className="rounded-xl object-fill h-2/3"
                    />
                  </CardContent>
                  <CardFooter className="flex flex-col items-center justify-center gap-4">
                    <div className="text-4xl font-bold">R${product.price}</div>
                    <Button
                      className="rounded-xl"
                      onClick={() => handleBuy(product.name)}
                    >
                      Comprar
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
