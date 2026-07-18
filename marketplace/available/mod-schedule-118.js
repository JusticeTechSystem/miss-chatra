// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:44 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQy85tBQ+h6S8jH0MJ507Ei1kSk69hz5PO1LWfZQbJmsJQ2hYjBOHjgsZMW0pD5EkD/eXp7qeKN/zSx8tC+ai9h1fZAuznb8iuuhW8Ko3jHJFKd5ITIQoKvJwQecvoD/epPnmXfgpk17KgGB87qkrV4ru4LwdykT2Lkhm8aC9S+NJVZABzkHQS2hXtx71JoDfQmwIGxoXv/rUWK5EEHDGXarKjCFp6ToNats7NdwvZqlkwhestlBw6BbIZ82/rk4wqEpEG4bCrP69LgSgbY/i9c6bNqMgOBE0yToqIiY+4dwMpdXcGiyCP06qmeMKg9W+e8KhMM8In6XsvHEAFmHARW7etRwAk2oN5fQiJyeVJaqUFLrymgXCWo3LB097NaD+LnV06TIF/zMwsMlqqNypx8efWgrfUQQpyU/kDXxyPEiNVoL2K4NgisMNKIgHuhi76Ly4h9nMqNj7Kag8H88E/Nte2hjCYrKvBd59DMaEIMQlrdNGOPe4otyNjOZNz4cvhxntDozSiDoYPVK7xds7Gn9AHqFjc7O9gsjixJTOLuq0HAh5joSjEyKuwqD1EfN17US6I1N7cHG4sSoM9qD1Z7Uh4dQtKwnhNHiE2m3Ul4c6D4DLmy6fmejoFYTqW67gI63lYAOe+v64c0y5meZQXjNnfKWTJ/+ntJ0Y7x2iCP3ZUGRJZU1huEDU5n09ySOHMk3g3oVGGvC7BnygSD7Cm6R5T7yMVHvmibLvNXbWN0et3btPfXbbbuEX4F8l3Oe80IP/lXALk1ac/kLKY4reqqzUlgvA0mGZCl55VJaa8PkyU64FaOApJzugw7fyFbBiYjwprg2cyrBAZFMSf4RQAYWiGzwYWH9vN+VHpm65UBKVLqjF5jXyTShWWKVvtaMKlmLvdcQ6++Lyc8gw+zO+rvZzPuuhL/ee0I/1HxQTxmrBjiiQilz6SOLCJd4GE+8P3vCTOf91ak3mxWuKpBJIxoD7+sFw+UlvA2G3bPxz2OVf5tR8AqkYwxqeTNCQaGXGFK8yI8T3pSdssTw3HsN4Su0GVqXPewF/jFyIIruX3vU3mAKm8Xrf1+OnNKYw5Oi/KBgjTLGI6Oe13wFtwg6M3AR8uLwXGRcSKP0vY35NQLf6ZCsI2LO+V3anHel269hUVOFlboSnCWdsriseZlPtXM7BPU2iMcsn5o4Ipygx8hRnPf9oz4UNt/OyMpDZ2EOWh3fLyfppBadOMeT9broWxRTjSv0d1Ajyw7yo2XCifuhWAf1maRyTknV5FdmmY+sZO5RzmVecmko6BVQV0pLOtUmwA7C6/XXt/4zh82A2h3smOr2EOlsMFTexcMVa7z6Zq2g0VqpYJ+nsVxw/RC0eR1IkZ6oM/SX1OalHFwwLM0XApj6TezkfNh5lP21XCxg4EciNl0P8s0yFow/6k=';const _IH='2654a5e2e6b20ccdc1be99d9211cd0e6c7c5fe6d9e555b022e3859cedae6aa7c';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
