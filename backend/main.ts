import {deps} from './deps.ts';
import {serve} from 'https://deno.land/std@0.187.0/http/mod.ts'
import KeyJson from './key.json' with {type: "json"};

type KeyType = {
  ip: string;
  password: string;
  port: string;
}

const key = KeyJson as KeyType;

function main(player_name: string) {
    console.log(deps(key.ip, key.password, key.port, player_name))
}

serve(async (req) => {
  if (req.method === "POST") {
    const data = await req.text();
    console.log(main(data))
    return new Response("OK");
  }
  
  return new Response("Not Found", { status: 404 });
});
