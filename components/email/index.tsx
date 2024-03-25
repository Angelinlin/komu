import {
  Body,
  Container,
  Head,
  Html,
  Img,
  Preview,
  Text,
  Tailwind,
  Link,
  Section,
  Button
} from "@react-email/components";
import * as React from "react";

type HashCapital = {
  userFirstname: string;
  referUrl: string;
};

export const WelcomeEmail = ({ userFirstname, referUrl }: HashCapital) => (
  <Tailwind
    config={{
      theme: {
        extend: {
          colors: {
            brand: "#007291",
          },
        },
      },
    }}
  >
    <Html>
      <Head />
      <Preview>
        The sales intelligence platform that helps you uncover qualified leads.
      </Preview>
      <Body style={main}>
        <Container style={container}>
          <Section className="w-full flex items-center justify-center">
            <Img
              src="logo.png"
              width={200}
              height={50}
              alt="Hash Capital Logo"
              style={logo}
            />
          </Section>
          <Text style={title} className="text-center pb-2">
            ¡Hola {userFirstname}, bienvenido/a a la familia de Hash Capital!
          </Text>

          <Text style={paragraph} className="text-center font-extralight">
            En Hash Capital, valoramos cada inversión y creemos en recompensar a nuestros inversores por su confianza en nosotros. Es por eso que nos complace informarte sobre nuestro programa de referidos, donde puedes ganar aún más al compartir la emoción de Hash Capital con tus amigos y familiares.
          </Text>

          <Text style={paragraph} className="text-center font-extralight">
            Aquí está tu enlace de referido personalizado:
          </Text>

          <Section className="w-full flex items-center justify-center text-center">
            <Link href={referUrl} style={paragraph} className="text-center">
              {referUrl}
            </Link>
          </Section>

          <Text style={paragraph} className="text-center font-extralight">
            Con este enlace, puedes invitar a otros a unirse a Hash Capital. Por cada persona que se registre y realice una compra utilizando tu enlace de referido, ¡ganarás un 20% de comisión! Es nuestra forma de agradecer tu apoyo y ayudarte a aumentar tus ganancias.
          </Text>

          <Text style={paragraph} className="text-center font-extralight">
            Gracias por unirte a nosotros en este emocionante viaje. Esperamos que disfrutes explorando todas las oportunidades que ofrece Hash Capital y que sigas siendo parte de nuestro éxito continuo.
          </Text>

          <Text style={paragraph} className="text-center font-extralight">
            Si tienes alguna pregunta o necesitas ayuda, no dudes en ponerte en contacto con nuestro equipo de soporte, siempre estamos aquí para ayudarte.
          </Text>

          <Text style={paragraph} className="text-center font-extralight">
            ¡Bienvenido a Hash Capital, donde tu inversión se convierte en oportunidad!
          </Text>

          <Text style={paragraph} className="text-center font-extralight">
            Saludos cordiales,
          </Text>

          <Text style={paragraph} className="text-center font-extralight">
            Atentamente,<br/>
            <strong className="font-bold text-lg">El equipo de Hash Capital</strong>
          </Text>

        </Container>
      </Body>
    </Html>
  </Tailwind>
);


export default WelcomeEmail;

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
};

const logo = {
  margin: "0 auto",
};

const title = {
  fontSize: "26px",
  fontWeight: "bold",

};

const paragraph = {
  fontSize: "16px",
};


