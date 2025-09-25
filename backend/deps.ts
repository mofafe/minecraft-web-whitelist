import {python} from 'https://deno.land/x/python/mod.ts';

export function deps(address: string, pass: string, port: string, name: string) {
    const py = python;
    const MCRcon = py.import("mcrcon").MCRcon;

    const mcr = MCRcon(address, pass, port)

    mcr.connect();
    const result = mcr.command("whitelist add" + name)

    return result;
}
