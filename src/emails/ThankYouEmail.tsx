import EmailLayout from "./EmailLayout";
import { Button, Section, Text } from "@react-email/components";

export function ThankYouEmail({ name }: { name?: string }) {
  return (
    <EmailLayout
      preview='Thanks for Reaching Out!'
      title='Thanks for Reaching Out!'
      color='green'
    >
      <Text>Hello {name},</Text>
      <Text>
        Thanks for getting in touch via my portfolio site. I&apos;ll review your
        inquiry ASAP.
      </Text>
      <Text>Meanwhile, check out my latest projects:</Text>

      <Section style={{ marginTop: 24, textAlign: "center" }}>
        <table
          role='presentation'
          align='center'
          border={0}
          cellPadding={0}
          cellSpacing={0}
        >
          <tbody>
            <tr>
              <td align='center'>
                <Button
                  href='https://www.jonathanmendoza.dev/projects'
                  style={{
                    display: "inline-block",
                    backgroundColor: "#d5ff3f",
                    color: "#161b22",
                    padding: "12px 20px",
                    borderRadius: "8px",
                    fontWeight: 600,
                    textDecoration: "none",
                  }}
                >
                  Projects
                </Button>
              </td>
            </tr>
          </tbody>
        </table>
      </Section>
    </EmailLayout>
  );
}
export default ThankYouEmail;
