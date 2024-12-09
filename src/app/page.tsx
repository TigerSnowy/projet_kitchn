import { Container, Text, Link, Image, Spacer, Icon } from 'kitchn'
import { Bai_Jamjuree, Flavors } from 'next/font/google';

export default function Home() {
  return (
    <Container>

      <Container row marginTop={50} marginBottom={30}>

        <Container flex={1} margin={20}>

        <Text size={"extraTitle"} weight={"extraBold"}>Blog.</Text>

        </Container>

        <Container flex={2} align={"flex-end"} justify={"center"} margin={20}>

        <Text size={"medium"}>
          A statically generated blog example using <Link href={"https://nextjs.org/"}><u>{"Next.js"}</u></Link> and Markdown.</Text>

        </Container>

      </Container>

      <Container align={"center"} justify={"center"}>

        <Image
          src={"https://next-blog-starter.vercel.app/_next/image?url=%2Fassets%2Fblog%2Fdynamic-routing%2Fcover.jpg&w=1920&q=75"}
          alt={"white stairs"}
          width={1480}
          height={"auto"}
          // htmlWidth={1450}
          // htmlHeight={"auto"}
        />

      </Container>

      <Container row marginTop={45}>

        <Container flex={1} marginLeft={20}>

          <Text size="title">Dynamic Routing and Static Generation</Text>
          <Spacer y={1} />
          <Text size="medium">March 16, 2020</Text>

        </Container>

          <Spacer x={25} />

        <Container flex={2} marginRight={25}>

          <Text size="medium">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent elementum facilisis leo vel fringilla est ullamcorper eget. At imperdiet dui accumsan sit amet nulla facilities morbi tempus.</Text>
          <Spacer y={1} />
          <Text size="medium" weight={"extraBold"}><Icon src={"https://next-blog-starter.vercel.app/assets/blog/authors/jj.jpeg"} size={"extraTitle"} marginRight={15} />JJ Kasper</Text>

        </Container>

      </Container>

      <Container>
      
        <Container flex={1} marginLeft={20}>

          <Text size={"extraTitle"} weight={"extraBold"}>More Stories</Text>

          <Image
          src={"https://next-blog-starter.vercel.app/_next/image?url=%2Fassets%2Fblog%2Fhello-world%2Fcover.jpg&w=1920&q=75"}
          alt={"white pattern"}
          width={700}
          height={"auto"}
          // htmlWidth={1450}
          // htmlHeight={"auto"}
        />

          <Text size="title">Learn How to Pre-render Pages Using Static Generation with Next.js</Text>
          <Spacer y={1} />
          <Text size="medium">March 16, 2020</Text>

        </Container>

      </Container>




    </Container>
  );
}
