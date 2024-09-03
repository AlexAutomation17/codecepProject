import * as header from "./headerInterface"

export const commonHeader: header.CommonHeader = {
    Authorization: `Basic ${process.env.AUTOMATION_AUTHORIZATION}`
}