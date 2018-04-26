function mySettings(prop)
{
  return(
  <Page>
      <Section
        title={<Text bold align="center">Background Color</Text>}>
  <ColorSelect
          settingsKey="myColor"
          colors={[
            {color: 'salmon'},
            {color: 'dodgerblue'},
            {color: 'gold'},
            {color: 'silver'}
          ]}
        />
      </Section>
  </Page>
);
}
registerSettingsPage(mySettings);