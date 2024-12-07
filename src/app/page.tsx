import { Container, Text, Link, Image } from 'kitchn'

export default function Home() {
  return (
    <Container>

      <Container>

        <Text size={"extraTitle"} weight={"extraBold"}>
          Blog.
        </Text>

      </Container>

      <Container>

        <Text size={"medium"}>
          A statically generated blog example using <Link href={"https://nextjs.org/"}><u>{"Next.js"}</u></Link> and Markdown.
        </Text>

      </Container>

      <Container  align={"center"} justify={"center"}>

        <Image
          src={"https://next-blog-starter.vercel.app/_next/image?url=%2Fassets%2Fblog%2Fdynamic-routing%2Fcover.jpg&w=1920&q=75"}
          alt={"Lorem picsum image"}
          width={1450}
          height={"auto"}
          // htmlWidth={540}
          // htmlHeight={300}
        />

      </Container>
      
    </Container>
  );
}
