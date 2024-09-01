const { I } = inject();
// Add in your custom step files

Given("I have a defined step", async () => {
  const test = await I.sendGetRequest("/people")
  console.log(test.data)
  await I.seeResponseCodeIsSuccessful();
});
