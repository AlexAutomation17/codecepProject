const baseUrl = process.env.AUTOMATION_WEB_URL;

function getEnvironment(): {
    paylocity: string;  
  } {
      const paylocity: string = baseUrl+"/Prod/api";
      return { paylocity };
  }

const { paylocity} = getEnvironment();

export const connection = {
    paylocity : paylocity
}

export const paylocity_url = (userId?: string) =>{
    return {
        getEmployees: `${paylocity}/employees`,
        getEmployee: `${paylocity}/employees/${userId}`,
        deleteEmployee: `${paylocity}/employees/${userId}`,
        postEmployee: `${paylocity}/employees`,
        putEmployee: `${paylocity}/employees`
    }
}