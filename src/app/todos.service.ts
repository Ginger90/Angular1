import { TodoComponent } from "./todo/todo.component";

export async function gettodos():Promise<TodoComponent[]>{
  return await(await fetch('assets/db.json')).json()
}

