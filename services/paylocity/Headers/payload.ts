import * as payload from "./payloadInterface"

export function postEmployee(data: Map<string, string>): payload.postEmployee {
    const payload: payload.postEmployee = {
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
      dependants: Number(data.get("dependants")),
    };
    return payload;
  }

export function putEmployee(data: Map<string, string>): payload.putEmployee {
  const payload: payload.putEmployee = {
    id: data.get("id"),
    firstName: data.get("firstName"),
    lastName: data.get("lastName"),
    dependants: Number(data.get("dependants")),
  };
  return payload;
}
