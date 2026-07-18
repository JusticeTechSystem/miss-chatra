// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:29 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSAojXaW1dlvpYCAQ/6eXNJI5ZzvVNlfc95yjq4a+Nkn+ssFyHmqKGhUGsZuKoz33kE/qbONAw3eIOxHNYFy4cdhP09UgK/OjTMh9xq/Jf0MvXxf/RoikQvhHL6udq5o2U6Pjvm80OqKJRUp4DIZSAjEJijnsiP0dGskb8ns6oRyDjzPUI14fHZu9CBXKHrRGcTCTVXPGtA0ByoEFEgw+4UT/x2CVne11/GxF7FuVWV28TPop3bgVui3r2okVYAew97W/3rwIXa6dtdZ2nezqIJXWyl5ED/jsQRFGsMxdJP9C+PWJOdOP9eXkjHaudaZZLtZI8+7Rf3pjF3aLrP1U1a2I5FDCnKjTY7/ei/+6dlcdQqgzSvN8VRbzNufOpThGTS13Tsu5abxT+1ACtiXjHQqJTxGVrOvd+cP0rrYnw+SK+HEpvg8p9v0Ng6fZHWJRg9QsfbtqpXBRqfG1Lqo6mvDvF3DxYrNsu6aqs8x1EeoFRFH0kG4cJ8JMQh3TNRk4rlhLtnpmYawwUL5ZPOxfRLpcjO+SGPyErirGEGZ7CPfM4LAM83Gk8ldZLWGCRVCoKT8g80+M04qsif2OyUmOpbVnS9vjvYsTvsyWNnkrQfruRPaQSBvzXgr9LT+hcuntM7m8qDI+M34T3ksh81SkgPBTGLedfS8ZgjyZ3x/GM6MhRU3gDn3FpJsJvTsRDE5sOK6i1rBmPWMTgDeVvw8mdC+XxBdx3Ui+wwD8Zl1GvGKs+9d89Z7lNBiJZLiQcWGo/sCknRA0T5smUhADRgJpXSZ8HLgd/qHaLPmTbnSNphgIIMknoetOzoiZ5jKfSd6CnzDDY72Gj/nc5TR2cy4i6/SrRsSy3r2y0wqA32n4o4J1Rp6S+vf+5rbkRyC1XUCJrzTiuGnQt6b9az4MAVaGlN6hwH7v37goxyavchTHPG1iaGl4zE3f9i1rRfWGlrXUelSPrg0W1HMP0Zeyq0UFKh+ZYQfXhxpqYCe4aLchcq8d4GvOemC4gmpuGjYVJHKd3QofRy5hDutC2caCV+fTiUQ585197JiJ5R9050HjVQLmgNRu2bWCfx6WI18yjrLxRvXSlmyRe8O1b5BGnOSY/qYv8hKNPrY2sVZovXfLM07jtcbessfmhBaaHMiHvwP8/I/6zppIWnFnIkrR7uI4OeVGiNTae0ForOLvl8SyRhS+lJyz1zENWZepRHuvUOfk+gALS6jnvEu3xjEC1VWfv84tVOzc4qY9aHT3NadC56gMtewu6Ctx7pheUp9sCdV5R5XuD/QIcQjcQIthWTtS/C4m3cQWegEZUeZBWdNjdSCL9b8pdDoyaigMSUVEOxwEX8A70C7vwmPm0YQR2fROgNKZQym3wdlkHcWbreNUqBFWj2j7SSOlrZ';const _IH='8f4a522cd203952f0c8c48b0d23f185ccdf04156dc9d36f78bbdd296758f1fce';let _src;

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
