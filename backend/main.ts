import {deps} from './deps.ts';
import {serve} from 'https://deno.land/std@0.187.0/http/mod.ts'

function main(player_name: string) {
    console.log(deps("", "", "", ""))
}

async function handler(request: Request): Promise<Response> {
    let response = new Response("ok");

    return response;
}

serve(async (req) => {
  const data = await req.text();
  main(data)
  
  return new Response("OK");
});