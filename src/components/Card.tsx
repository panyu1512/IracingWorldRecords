import { Card, CardBody, CardHeader, Image } from "@nextui-org/react";

export default function Card_({ title, subtitle, href }: { title: string, subtitle: string, href: string }) {
  return (
    <Card className="col-span-12 sm:col-span-4 h-[300px]">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-tiny uppercase font-bold">Daily Mix</p>
        <small className="text-default-500">{subtitle}</small>
        <h4 className="font-bold text-large">{title}</h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src="/images/hero-card-complete.jpeg"
          width={270}
        />
      </CardBody>
    </Card>
  );
}