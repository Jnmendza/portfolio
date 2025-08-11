import EmailLayout from "./EmailLayout";
import { Text } from "@react-email/components";

export function NewMessageEmail({
  name,
  message,
}: {
  name?: string;
  message: string;
}) {
  return (
    <EmailLayout
      preview='You Have A New Message!'
      title={`New Message from ${name}`}
      color='green'
    >
      <Text className='text-white'>{message}</Text>
    </EmailLayout>
  );
}
export default NewMessageEmail;
