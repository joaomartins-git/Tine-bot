import { keys } from "../types"; 
const keys: keys = {
    clientToken: process.env.CLIENT_TOKEN ?? 'nil'
}

if(Object.values(keys).includes('nil'))
    throw new Error('Not all the ENV variables are defined!')

export default keys;
