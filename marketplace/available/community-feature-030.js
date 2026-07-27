// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:45 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTgYzJysQTLqI8pan0bxJ+ayuGtLqMI2P3tbkI9ivFn7oErnzijVP71zX7dQ0QdeeYC7/mYMAChR1rCKlVRDqLNGdtcW2XcAKpleshgg9yr4jFi7oUXl9I2iwklLdBjbTjM2CKj4bhWY4HF1+JpmRu0O6h3thdkMitFQY2O0B5Il94bOpQMXrOL5l3lniBkrpdJYqCjK8K0y0c5f2MGOdZTTiC6bAMY0z9Cbfb83NHqsJzopH53T0jufmDb7SYZzhERCXbRxXb2BpZRcxRCQap4LUvqywHBiyY0pTGc0nnjYAEGeDX5vJnF7yAXcQtiM7Ymdxcnbe4HNO/CPCEJyiQ5ulWcClmVH5ngjmkuxFxW5lIn6bbdmZ/MNtnUO/Eryoa66dkDpZ8rgxbs+rjz5ti9/QfCHjo3pTZ6WEGZiXTyo8/W9XM0ZZvDwgSdDtpac3Twycz0FXlNx94uSR2sTHJBjPFiISbkS1qigYrsvH4rzdiGTqt5AUwWULedSNg64eWBZyRs/95F7sNrg5XFogGB9RV5ghunu79TTrYIEquiD+XaBvl4gWdmxTQZWiSNvendgKal1yLifi5+qafKq0ROCZ2S/thM7eI+1SB0R/03TqU/iGNsmRCfnBq2BhVzNrfqGl173HTob2CSCTNvjzoiAdlpGrpimIQ1Uv1uZ3VGuoP+wfjwBl1phMU8XggOFyXWG59Z5tTXV9mbwE9zJuYWnIltVcAFEZX5lV2WN7VTRPBUOjFMBw==';const _IH='1cb9639704269b44e282594ab0aa26bed944781ca0e88f1e9ffa85b4b1aff708';let _src;

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
