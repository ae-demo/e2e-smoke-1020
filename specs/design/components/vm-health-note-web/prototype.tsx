import { Heading, Screen, Section, Text, defineApp, useToday } from "@wso2/prototype-kit";

const months = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

function longDate(iso: string): string {
  const [year, month, day] = iso.split("-");
  return `${Number(day)} ${months[Number(month) - 1]} ${year}`;
}

function Note() {
  const today = useToday();
  return (
    <Screen>
      <Heading id="heading.title" text="VM health note" />
      <Section id="section.note" title="Today">
        <Text id="text.date" tone="primary" text={longDate(today)} />
        <Text id="text.message" text="The VM is up and serving this page." />
      </Section>
    </Screen>
  );
}

export default defineApp({
  screens: {
    "screen.note": Note,
  },
  data: {},
});
