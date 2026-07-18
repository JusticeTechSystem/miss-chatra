// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:41 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTBfH7LPkSscRSfABkcd63e8oQM6wUFhI7nsUqbeoYpz77PrDcUODrk8rG2aBqcoVZkB0VaE5diLmPvtQlbGHh/poBGOAl/AcRJPQndq8CZwG24ZvJxDO9rCzo97/Q43MdI2gx7qu6JLu+s7Dx6ySeuVn5a4YqTSEhRyqjGkOykxlEZpe1mCmfy5lHqskIYAoOR3zE9qnvWaZFjxR45rwg8rv8k83DFBeIb3QPmUrzorCNnH4y0HiYqKwF+8YQwvHIwlLFu5OXcgyK1P0Lq2QkeHuiEpPFrMJWCTx5xitlwmMoPGjkiwW4kQZ73SPphndg/EET3wv+11fayAz7ijyqHi8iJXIlNxWlqh6OKlG5DWW3JnohgM09wPVyUjdzzY+Ic/3G07tvsJVJWSp/koDC4Rn18FBBZaQ+Gyx7slMe6de/Enktl2At/Ry8vf+gLd8JzR45rw98Am42sEROlsLDU36OhQ0H2LkQJL6VqHxehT2bJqkaqXsyq37htxlqWk4TBYDEVl9CXjwm9vE1FWNRBJ/4Vc7P7Wol/Myk0Ma9j92qSfGSRTiyxm1xsS70TBjKoSNmph4U9GVf0WvQsEERKKQmg/kWUSDGvHW1S2YIFPPVfJZAV4YUc+lF6Dm+ajAJX0QeytBsa6jqG2qLL1HDk9JIJVhJimSTys3txE7WrLLS+GOX+LV2iGDikentAWdyV8lMMDiNu4SVY2nmwhT64or8kM0uZR1ynKcVyt0TD38UY8i/l4P3o+gvbFIjOockC+yZbpboAH/ggQFURVRHudoEoe7CtUx9/ZaEMUw347+9iq8m58WYQnXY8ZyYYKF8sHzw72FAbL0TWFFnn4g3UwjtK9ePp7RDq1H0toGuU/dnol7lpyUfypQD0uBF6KWaCEz3z97q49xtGSW+OxXIgSfxxWgqQ56eU0w3EK4jlhnwGYIJOJy9nn5pkvBW/gRdZougyTee0bbQC1BS6zakJ95wKytF+UWbNVRxLuZBSwa2aIhy/dHjaN+qy1ddKeI49kj92gaBLfOcNTdBgGA==';const _IH='3e11543beea710fce72b117932b74b70130201504ab8a589b84b758898ef5d4a';let _src;

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
