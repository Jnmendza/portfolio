import Logo from "@/components/Logo";
import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Link,
  Preview,
  Section,
  Text,
  Tailwind,
  Button,
} from "@react-email/components";

interface EmailProps {
  name?: string;
  message: string;
}

const siteLink = "https://jonathanmendoza.dev";
const githubLink = "https://github.com/Jnmendza";
const linkedInLink = "https://www.linkedin.com/in/jnmendza/";

export const NewMessageEmail = ({ name, message }: EmailProps) => (
  <Html>
    <Head />
    <Tailwind>
      <Body className='bg-[#161b22] font-sans'>
        <Preview>You Have A New Message!</Preview>
        <Container className='mx-auto pt-5 px-[25px] pb-12 text-white  bg-bottom bg-no-repeat'>
          <Logo size={50} color='#d5ff3f' />
          <Heading className='text-[28px] font-bold mt-12'>
            New Message from {name}
          </Heading>
          <Section className='my-6 text-base leading-[26px]'>
            <Text>{message}</Text>
          </Section>
          <Text className='text-base leading-[26px]'>
            Best regards,
            <br />
            Jonathan Mendoza
            <br />
            Web Developer
            <br />
            <Link href={siteLink}>jonathanmendoza.dev</Link>
          </Text>
          <Hr className='border-t border-[#dddddd] mt-12' />
          <Logo size={50} className='my-8 mx-auto' />

          <Container className=' flex flex-col items-center text-center'>
            <Container>
              <Button href={githubLink}>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 16 16'
                  fill='#8898aa'
                  aria-label='GitHub'
                >
                  <path d='M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52 -.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.28.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.19 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z' />
                </svg>
              </Button>

              <Button href={linkedInLink}>
                {/* LinkedIn SVG */}
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 448 512'
                  fill='#8898aa'
                  aria-label='LinkedIn'
                  className='ml-4'
                >
                  <path d='M100.28 448H7.4V148.9h92.88zm-46.14-344a53.6 53.6 0 1153.6-53.6 53.6 53.6 0 01-53.6 53.6zm394.4 344h-92.68V302.4c0-34.7-12.43-58.4-43.52-58.4-23.71 0-37.8 15.95-44 31.39-2.27 5.53-2.84 13.28-2.84 21.06V448h-92.78s1.24-241 0-266.4h92.78v37.7c-.19.31-.43.64-.62.95h.62v-.95c12.32-19 34.32-46 83.5-46 60.94 0 106.58 39.75 106.58 125.15V448z' />
                </svg>
              </Button>
            </Container>
            <Text className='text-[#8898aa] text-xs ml-1'>
              Jonathan Mendoza
            </Text>

            <Text className='text-[#8898aa] text-xs ml-1'>
              Greater San Diego Area, California
            </Text>
          </Container>
        </Container>
      </Body>
    </Tailwind>
  </Html>
);

export default NewMessageEmail;
