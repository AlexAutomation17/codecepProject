import { faker } from "@faker-js/faker";

export let employee: Map<string, string>;

export function generateTestData() {
  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();
  const dependants = "1";
  const id = "9bcac612-4daa-47d3-bd47-32ed56a53e43"

  employee = new Map<string, string>([
    ["firstName", firstName],
    ["lastName", lastName],
    ["dependants", dependants],
    ["id", id]
  ]);
}
