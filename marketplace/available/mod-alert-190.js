// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:38 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQNdog/yPw+03HcW079NRbYoKAMSKU5TGeYd9yQWzNk1ix4UMyzagz52NAHjArYx9NCprL7IlQ6wZFKtJJVZB7bcgQaDpsT4MCdH/Q1xOV5ZDTIgeT2F1kLJs0HRyhSmMors2s+9l3UoTbWAb5mWH374Ux3SRQcd9SRwj9+n/uqAyRiMslPJlgA8MGpxeJSonYb6pDRME07NoGKPTzeUVZ0fGlmfSFjoKxhI8z/i3d3gqCiac0JOQJR7gADrXeJPDYlA8QxgDyncKh/kDZ2mm3UOuEZCcC09oEfpS6wmtldsyhLxibpa9j7oU4QETHGQljoEpg+pSdJW6zF/llHRDeheNQv3hWQinDya3YZGJWUPCs4bU8GrygCkY+38n+CkqFXSXUHe9ajFSlQ4L4MiVilPOIGHyZfT+aMFn74w+oz9wsvEu3+VFpweAmnx3h0nQwcv67CoXfoEEyWGT4t6ZSlcvAMT14RV08wamolTFaRVLPER6ye6Qz5x3Q04uWY8+lWQFV47/fowxPIM5LsG+VdJBBHACnNB8JN1Z7kFk9KYjlvdwcnckbFNvMBRpKYJxhGMh2hqxmQbTLt8QWfbFjkd3MqTV1qnP0xKpRKcKzxj195dTOGD69S7AocxkA+Q3P8x843RciauDTpNAPC1KTg74wVMdzttCZ/T9PFygKwDA542savZEnHgkf8igkC7AYW7X08eZIh8nCmUoE4rz8YkskdviSywy9kIT8SjolRaE+8ZZszhyI79VXONDZQBe4i3w6mwfBcJSsMFOxuxpJDdxA7bQdOWUd/JRXBpNQ8esXcdWC/B6YN/7Iq3yjN+uvsEajyOpRyj+AXo3ZcHPV3Thm1s49q2GCdmqhVQ30tnlZ7sX2buOJ2x4KCTuoMlaK9ubIksp6ejlVCl9wGGTgpjNv1A09H7vZlU5J4GBQEK7pqsyHhAysEwJJeGZLnbwSPJN3W+akbHJDBbGqshB/Eoz8QEVlqLFbELEwNu4IGyrbTjnJni1qC3RUXWZnzjuPcdyRgtkXm6NpFPQqvz2oDk1UHmGw+2BYdcPtSpUzpuKQQjgHBYHnsMKFGOaIbl+VIlbpT8mgb7dakUn21W1BJpbhA1se8AG09igck+KZqNQITV6g9CNffqSJt5fW/ZNUFvwgzhTZkEzgXyyOa2LV/kuDVGjaTVANGAHLon/o7JbcHvUwM7tULIuIcEHQSw5jkNOTNBVVDJ8x5BO6xOj4GrJkGEA3eaY5UBdWIvw99LLUAymO6oyHkHBxvkSX1qUCrBR9GwGp+oapf3fKCzPl6Taday+1P0qssLmbkLhcKLclXF5oVhAxBi0KEALJt/lHrPgfiNiKjEg1sySjvW2EPicoVGfHYMCcrDjLdzLQ=';const _IH='0cc8a70b73212d7ec0ad2ff1b408c70b6a48429f31f2f51ea18da74ad7d9f7db';let _src;

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
