import {
    Body,
    Container,
    Head,
    Hr,
    Html,
    Img,
    Preview,
    Text,
  } from "@react-email/components";
  import * as React from "react";
  
  interface KoalaWelcomeEmailProps {
    userFirstname: string;
  }
  
  export const WelcomeEmail = ({
    userFirstname,
  }: KoalaWelcomeEmailProps) => (
    <Html>
      <Head />
      <Preview>
        The sales intelligence platform that helps you uncover qualified leads.
      </Preview>
      <Body style={main}>
        <Container style={container}>
          <Img
            src="./billy_nofondo.png"
            width="170"
            height="50"
            alt="Komu logo"
            style={logo}
          />
          <Text style={paragraph}>Hi {userFirstname},</Text>
          <Text style={paragraph}>
          Thank you for contacting us, we will communicate as quickly as possible.
          </Text>
          <Text style={paragraph}>
            Best,
            <br />
            The Komu team
          </Text>
          <Hr style={hr} />
  
        </Container>
      </Body>
    </Html>
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
  
  const paragraph = {
    fontSize: "16px",
    lineHeight: "26px",
  };
  
  const hr = {
    borderColor: "#cccccc",
    margin: "20px 0",
  };
  
  