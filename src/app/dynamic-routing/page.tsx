"use client"

import { Container, Text, Link, Image, Spacer, Icon, Button } from 'kitchn'
import { Bai_Jamjuree, Flavors } from 'next/font/google';
import { useState } from 'react';

export default function PostPage() {

  const [titleIsUnderline, setTitleIsUnderline] = useState<boolean>(false);
  
  const mouseOver = () =>{
    setTitleIsUnderline(true);
  }

  const mouseOut = () =>{
    setTitleIsUnderline(false);
  }

  return (
    
    <Container>

      <Container row marginTop={50} marginBottom={30}>

        <Container flex={1} margin={20}>

        <Link href={"/"}>

          <Text size="35" weight={"extraBold"} onMouseOver={ mouseOver } onMouseOut={ mouseOut }>
              {
                titleIsUnderline ? <u>Blog.</u> : <>Blog.</>
              }  
          </Text>
        
        </Link>

        <Spacer y={4} />

        <Text size={"95"} weight={"extraBold"}>Dynamic Routing and Static Generation</Text>
 
        <Spacer y={2} />

        <Text size="medium" weight={"extraBold"}><Icon src={"https://next-blog-starter.vercel.app/assets/blog/authors/jj.jpeg"} size={"extraTitle"} marginRight={15} />JJ Kasper</Text>

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

      <Container marginTop={40}>

        {/* first article */}
      
        <Container marginLeft={420} marginRight={420}>

          <Spacer y={1.5} />

          <Text size="medium">March 16, 2020</Text>

          <Spacer y={2} />

          <Text size="medium">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent elementum facilisis leo vel fringilla est ullamcorper eget. At imperdiet dui accumsan sit amet nulla facilities morbi tempus. Praesent elementum facilisis leo vel fringilla. Congue mauris rhoncus aenean vel. Egestas sed tempus urna et pharetra pharetra massa massa ultricies.</Text>
          <Spacer y={2} />
          <Text size="medium">Venenatis cras sed felis eget velit. Consectetur libero id faucibus nisl tincidunt. Gravida in fermentum et sollicitudin ac orci phasellus egestas tellus. Volutpat consequat mauris nunc congue nisi vitae. Id aliquet risus feugiat in ante metus dictum at tempor. Sed blandit libero volutpat sed cras. Sed odio morbi quis commodo odio aenean sed adipiscing. Velit euismod in pellentesque massa placerat. Mi bibendum neque egestas congue quisque egestas diam in arcu. Nisi lacus sed viverra tellus in. Nibh cras pulvinar mattis nunc sed. Luctus accumsan tortor posuere ac ut consequat semper viverra. Fringilla ut morbi tincidunt augue interdum velit euismod.</Text>

          <Spacer y={1} />

        </Container>

        {/* second article */}

        <Container >

          <Spacer y={2.5} />

          <Container marginLeft={420} marginRight={420}>

            <Text size="30">Lorem Ipsum</Text>

            <Spacer y={2} />

            <Text size="medium">Tristique senectus et netus et malesuada fames ac turpis. Ridiculous mus mauris vitae ultricies leo integer malesuada nunc vel. In mollis nunc sed id semper. Egestas tellus rutrum tellus pellentesque. Phasellus vestibulum lorem sed risus ultricies tristique nulla. Quis blandit turpis cursus in hac habitasse platea dictumst quisque. Eros donec ac odio tempor orci dapibus ultrices. Aliquam sem et tortor consequat id porta nibh. Adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla. Diam vulputate ut pharetra sit amet. Ut tellus elementum sagittis vitae et leo. Arcu non odio euismod lacinia at quis risus sed vulputate.</Text>

            <Spacer y={1} />

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

            <Text weight={"bold"}><Link href={"https://github.com/vercel/next.js/tree/canary/examples/blog-starter"}>{"View on GitHub"}</Link></Text>

        </Container>

      </Container>

    </Container>

  );
}


