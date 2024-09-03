const { I } = inject();

import * as headerForm from "../Headers/header"
import * as ploadForm from "../Headers/payload"
import * as schemas from "../Schemas/paylocitySchemas"
import {paylocity_url} from "../../../environment/environmentUrl"
import assert from "assert";

let idEmployee

class paylocityApi {

   async getEmployeeList(){
    const header = headerForm.commonHeader
    const response = await I.sendGetRequest(paylocity_url().getEmployees, header)
   }

   async validateEmployeeResponse(){
    await I.seeResponseMatchesJsonSchema(schemas.employeesSchema)
   }

   async postEmployee(data: Map<string, string>){
    const header = await headerForm.commonHeader
    const payload = await ploadForm.postEmployee(data)
    const response = await I.sendPostRequest(paylocity_url().postEmployee, payload, header)
    idEmployee = await response.data.id
    //await I.seeResponseMatchesJsonSchema(schemas.employeeSchema)
   }

   async getEmployee(data: Map<string, string>){
    const header = headerForm.commonHeader
    const response = await I.sendGetRequest(paylocity_url(idEmployee).getEmployee, header)
    await I.seeResponseMatchesJsonSchema(schemas.employeeSchema)
   }

   async putEmployee(data: Map<string, string>){
    const header = headerForm.commonHeader
    const payload = ploadForm.putEmployee(data)
    const response = await I.sendPutRequest(paylocity_url().putEmployee, payload, header)
    idEmployee = await response.data.id
   }

   async deleteEmployee(data: Map<string, string>){
    const header = headerForm.commonHeader
    const response = await I.sendDeleteRequest(paylocity_url(idEmployee).deleteEmployee, header)
   }

   async responseCode(code: number) {
    await I.seeResponseCodeIs(code)
   }
}

export = new paylocityApi();