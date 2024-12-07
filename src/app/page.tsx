import { Container, Text, Link, Image } from 'kitchn'

export default function Home() {
  return (
    <Container>

      <Container row>

        <Container flex={1} margin={30}>

        <Text size={"extraTitle"} weight={"extraBold"}>Blog.</Text>

        </Container>

        <Container flex={2} align={"flex-end"} justify={"center"} margin={30}>

        <Text size={"medium"}>
          A statically generated blog example using <Link href={"https://nextjs.org/"}><u>{"Next.js"}</u></Link> and Markdown.
        </Text>

        </Container>

      </Container>

      <Container align={"center"} justify={"center"}>

        <Image
          src={"https://next-blog-starter.vercel.app/_next/image?url=%2Fassets%2Fblog%2Fdynamic-routing%2Fcover.jpg&w=1920&q=75"}
          alt={"white stairs"}
          width={1450}
          height={"auto"}
          // htmlWidth={540}
          // htmlHeight={300}
        />

      </Container>

      <Container row>

        <Container flex={1}>

          <Text size="title">Dynamic Routing and Static Generation</Text>
          <Text size="medium">March 16, 2020</Text>

        </Container>

        <Container flex={2}>

          <Text size="medium">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent elementum facilisis leo vel fringilla est ullamcorper eget. At imperdiet dui accumsan sit amet nulla facilities morbi tempus.</Text>
          <Text weight={"extraBold"}>JJ Kasper</Text>

        </Container>

      </Container>

    </Container>
  );
}
