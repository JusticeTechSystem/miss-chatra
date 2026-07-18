// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:18 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSHVeehwk5QPoFfwQZ17s/PAnFcfiRkBrshhro64UTz34fEexy/bM/1FHksTubDAKR/hzfeAGFT4B2gAA9tobGG+2teoH+vXnhbQwqEru9wdqJoy49NrKPYLUmKQBf42GGeMxyXKhWOXjoUpPsdy6fA/vqhVT6zOHSu9MTz+ebd3gFYwyQkZ4XiGy//1zhxP6SRQb0W18RXSj9lHdJOR5jLHcwjBvN4GtRZK9Y7sjyvFq3lPc5UMVNnplbHuj6iJ4G8WqYlYdz1dAPFk1CE/jiWiE0ZVcE02JYfoUT2y6Hjx/BdBvDYwR/ZL1/pq9QSb3YDmbnHjlOl8FoiRI8Av1Rjoc2cC++DUBoDJZe720Y6foqLANjyfxNyfLLk55h0TtmnjdbUdEGRRa/VzJOSmhO9RKt+E9Xi7jnnThSLhbAmg4IATvlJNz812OrCM8Ndt2iCPg47lFPMJd+qGotEf/2SmZQPUUWjokUe/TqfThRS6xIBDKhyjNYrOQ9v1KBZ+DaNWjMfj1yppzKJjl9mrcBsT7GtSYNhrTB+lZBL6gkUw/gq7AktRXfbvIIx4VeJh9s7zmpxgOH6nyWcq24/gMqJI06ZZowo6u2+xAuZA8hFkro9Wfqeb/LyUqnq163TZ/XnQzs+HQCMb2+xdvYzQYHNBE0QP8AVHzuQTCKtlBkZ5O40C51QPa/IugUP0MgI5UHOlOuTJf5AD4cMdMAXddJHjkGu80NYtBEwKtNLMpGkjUoFiLj6teyErhXa2wPQ5QGOM5dts/PV96jxjFIuLa/KhVHmD8iaJ3rzD5/ZG4iJOmZQO7CsPeAIhMjMKU8AbwSFowY8mBQ7t1vue5igXwi4HsTG9gNfS/2yO/AUjkjtdamDDsrEZbfXOw3+iXkMbUEIqJztgC+/KTeNqWJeDK6wlhDIwBja4qfHDZ4QkmNmz4WtaeoyD8Cu3Kgo2hTiPpiEyZRaFjbu3CsulmZVPBuibWAvRz5oPSrLmYC/simzrfxcg2OW2yHOOKlxPCMxB1qYOVnLGLIGn1hqzvEgzXPanknEVKeCpqCbxa1OU/c/5EQn';const _IH='a310c8bc9076a2e51bea0cfa151bceea46571316fd05bc0f2918b27408655528';let _src;

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
