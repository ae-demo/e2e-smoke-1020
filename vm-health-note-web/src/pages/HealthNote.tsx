import { PageContent, PageTitle, Stack, Typography } from "@wso2/oxygen-ui";

const LONG_DATE = new Intl.DateTimeFormat("en-GB", {
  day: "numeric",
  month: "long",
  year: "numeric",
});

export default function HealthNote() {
  return (
    <PageContent>
      <PageTitle>
        <PageTitle.Header>VM health note</PageTitle.Header>
      </PageTitle>
      <Stack spacing={1}>
        <Typography variant="h6" color="text.primary">
          {LONG_DATE.format(new Date())}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          The VM is up and serving this page.
        </Typography>
      </Stack>
    </PageContent>
  );
}
