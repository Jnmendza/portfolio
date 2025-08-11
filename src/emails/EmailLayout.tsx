import {
  Body,
  Container,
  Head,
  Html,
  Preview,
  Tailwind,
  Section,
  Text,
  Hr,
  Img,
  Link,
} from "@react-email/components";

type LayoutProps = {
  preview: string;
  title?: string; // h1 text (optional)
  color?: "dark" | "green";
  children: React.ReactNode; // page content
};

export default function EmailLayout({
  preview,
  title,
  color = "dark",
  children,
}: LayoutProps) {
  return (
    <Html>
      <Head />
      <Tailwind>
        <Body className='bg-[#161b22] font-sans'>
          <Preview>{preview}</Preview>

          <Container className='mx-auto pt-5 px-[25px] pb-12 text-white'>
            <Img
              src={`https://jonathanmendoza.dev/assets/${color}Logo.png`}
              width={50}
              height={50}
              alt='Jonathan Mendoza'
              style={{ display: "block" }}
            />

            {title && (
              <Section>
                <Text className='text-[28px] font-bold mt-12'>{title}</Text>
              </Section>
            )}

            <Section className='my-6 text-base leading-[26px]'>
              {children}
            </Section>

            <Text className='text-base leading-[26px]'>
              Best regards,
              <br />
              Jonathan Mendoza
              <br />
              Web Developer
              <br />
              <Link
                href='https://jonathanmendoza.dev'
                style={{ color: "#d5ff3f" }}
              >
                jonathanmendoza.dev
              </Link>
            </Text>

            <Hr className='border-t border-[#dddddd] mt-12' />
            <Img
              src={`https://jonathanmendoza.dev/assets/darkLogo.png`}
              width={50}
              height={50}
              alt='JM'
              style={{ display: "block", margin: "32px auto" }}
            />

            {/* footer */}
            <Container className='text-center'>
              <FooterIcons />
              <Text className='text-[#8898aa] text-xs mt-2'>
                Jonathan Mendoza
              </Text>
              <Text className='text-[#8898aa] text-xs'>
                Greater San Diego Area, California
              </Text>
            </Container>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}

function FooterIcons() {
  return (
    <Section>
      <table
        role='presentation'
        align='center'
        border={0}
        cellPadding={0}
        cellSpacing={0}
        style={{ margin: "0 auto" }}
      >
        <tbody>
          <tr>
            <td align='center' style={{ padding: "0 8px" }}>
              <Link href='https://github.com/Jnmendza'>
                <Img
                  src='https://qtmkwwvomuvavuoaqjcn.supabase.co/storage/v1/object/public/portfolio/main/github.png'
                  width={24}
                  height={24}
                  alt='GitHub'
                  style={{ display: "block" }}
                />
              </Link>
            </td>
            <td align='center' style={{ padding: "0 8px" }}>
              <Link href='https://www.linkedin.com/in/jnmendza/'>
                <Img
                  src='https://qtmkwwvomuvavuoaqjcn.supabase.co/storage/v1/object/public/portfolio/main/linkedin.png'
                  width={24}
                  height={24}
                  alt='LinkedIn'
                  style={{ display: "block" }}
                />
              </Link>
            </td>
          </tr>
        </tbody>
      </table>
    </Section>
  );
}
