import { Container, Text, Link, Image, Spacer, Icon, Button } from 'kitchn'
import { Bai_Jamjuree, Flavors } from 'next/font/google';

export default function Homepage() {
  return (
    
    <Container>

      <Container row marginTop={50} marginBottom={30}>

        <Container flex={1} margin={20}>

        <Text size={"100"} weight={"extraBold"}>Blog.</Text>

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

        <Container flex={3} marginLeft={20}>

          <Text size="45">Dynamic Routing and Static Generation</Text>
          <Spacer y={1} />
          <Text size="medium">March 16, 2020</Text>

        </Container>

        <Container flex={3} marginRight={25}>

          <Text size="medium">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent elementum facilisis leo vel fringilla est ullamcorper eget. At imperdiet dui accumsan sit amet nulla facilities morbi tempus.</Text>
          <Spacer y={1} />
          <Text size="medium" weight={"extraBold"}><Icon src={"https://next-blog-starter.vercel.app/assets/blog/authors/jj.jpeg"} size={"extraTitle"} marginRight={15} />JJ Kasper</Text>

        </Container>

      </Container>

      <Text size={"68"} weight={"extraBold"} marginLeft={20} marginTop={100}>More Stories</Text>

      <Container row marginTop={40}>

        {/* first article */}
      
        <Container flex={2} marginLeft={20}>

          <Image
          src={"https://next-blog-starter.vercel.app/_next/image?url=%2Fassets%2Fblog%2Fhello-world%2Fcover.jpg&w=1920&q=75"}
          alt={"white pattern"}
          width={680}
          height={"auto"}
          />

          <Spacer y={2} />

          <Text size="30">Learn How to Pre-render Pages Using Static Generation with Next.js</Text>

          <Spacer y={1} />

          <Text size="medium">March 16, 2020</Text>

          <Spacer y={1} />

          <Text size="medium">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent elementum facilisis leo vel fringilla est ullamcorper eget. At imperdiet dui accumsan sit amet nulla facilities morbi tempus.</Text>

          <Spacer y={1} />
          
          <Text size="medium" weight={"extraBold"}><Icon br="100%" src={"https://next-blog-starter.vercel.app/assets/blog/authors/tim.jpeg"} size={"extraTitle"} marginRight={15} />Tim Neutkens</Text>

        </Container>

        {/* second article */}

        <Container flex={2} marginRight={20} >

          <Container align="flex-end">

           <Image
           src={"https://next-blog-starter.vercel.app/_next/image?url=%2Fassets%2Fblog%2Fpreview%2Fcover.jpg&w=1920&q=75"}
           alt={"white pattern"}
           width={680}
           height={"auto"}
           />

          </Container>

          <Spacer y={2} />

          <Container marginLeft={58}>

            <Text size="30">Preview Mode for Static Generation</Text>

            <Spacer y={1} />

            <Text size="medium">March 16, 2020</Text>

            <Spacer y={1} />

            <Text size="medium">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent elementum facilisis leo vel fringilla est ullamcorper eget. At imperdiet dui accumsan sit amet nulla facilities morbi tempus.</Text>

            <Spacer y={1} />

            <Text size="medium" weight={"extraBold"}><Icon br="100%" src={"https://next-blog-starter.vercel.app/assets/blog/authors/joe.jpeg"} size={"extraTitle"} marginRight={15} />Joe Haddad</Text>

          </Container>

        </Container>

      </Container>

      <Container marginTop={120}>
      
        <Container row     
          align={'center'} 
          br={"square"}
          py={"7%"}
          bg={"#FAFAFA"}
          bc={"#EEEEEE"}
          >

           <Text marginLeft={20} size={"37"} weight={"extraBold"}>Statically Generated with Next.js.</Text>

            <Spacer x={23} />

           <Container align="center" justify={"center"}>
              <Button size={"large"} type={"light"}>Read Documentation</Button>
           </Container>

           <Spacer x={2} />

            <Text weight={"bold"}><Link href={"/"}>{"View on GitHub"}</Link></Text>

        </Container>

      </Container>

    </Container>

  );
}
