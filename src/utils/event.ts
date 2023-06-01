import { Event, EventExec, EventKeys } from "../types";
import { Client, Events } from "discord.js";

export function event<T extends EventKeys>(id: T, exec: EventExec<T>): Event<T> {
    return {
        id,
        exec,
    }
}

export function registerEvents(client: Client, events: Event<any>[]): void {
    for(const event of events)
        client.on(event.id, async (...args) => {
            //create a variable object called PROPS 
            const props = {
                client,
                log: (...args: unknown[]) => 
                    console.log(`[${event.id}]`, ...args)
            }
        
            //add a try/catch statement
            try{
                await event.exec(props, ...args)
            } catch(error){
                props.log('Uncaught Error', error)
            }  
        })
}