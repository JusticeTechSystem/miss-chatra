// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:15 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQLwPScCZ0VbmeH0z0hyLg7PaIKZp5VFHQlkQm1O9bznH96xqiOYKHnfjQladANYPPi+xSCdEboiGFGXANruDvOrf1aWHjw5vPtihp1hsw3VmCR2ijuYW5SRFQmG0XlTx7+Tnl6OiJkvZfgogl9zb++vlPSdr2a3lJf5vVBZMjhVbV7exHybgnGEWqYjFO4z0NFc3AUgw9Nox+qpdayqKK21hhJTxXpZKqCaISLPXyuD2ws1iiU3eq3UCBO4QykPJWjRfIa7v4JoIMIeDDe/17jDv6YztlarWxpM3uVBJVIq373NDMHAh+2oAKRCuORa1kA4XO71ZpqeaL+iTYy8WvLJwVH/iaj9Q4xMLe/2cNxqQBm1G+ALaMCnWlh9dDGfzmrSFw3ZywBloudLrIyj1X2ysnV6eslG8CnRre+nBILMuvZGysVgwG8mVPQAEuDPZGj7aefpPkAWrBC40focWC5lH5Oj/ltpskcYjputoeVMcsmlcicD0M1ZzyW7ChXoo1ZenzZeTR3KrO8r+zJvsVHe/yTg+iYO+sIOsA62Xub+mj2MdWkJkd4o0YUKlOA30FheIlPIwCVmqpRz0zBiuUj307xJ6j6B6q7Hi+3x9RU6IhifG+t4gLhxYKIQeOtVctYMWVt4LqQWKIfF7KId1SzbrjcdPNMluax412ajqepfVzZVFRGrphYTmXdiTkXjT57fp3O16ncDudA6K0dA0no8oDD+MxbagqUmDBtgAI3VTywUokvX5WNLbhRKNgelWs5b7Y/MxoEhNSEjxGVMEGTmM9jwH8iy3Qqv9aD1Js1TOBg3YCph9CGdnEtS3Xydho0BzqAu/Q2gUnjqv5xAa1NoSWh2KaIygGD57+mw8WJhOlxE6VihhRBy1T4yyIOEUhMjdmHW/AK+eaxkb+ReHNDTW/2senB3PBl2dX3e0X6pYVjlBhndHCYncd0UOdJUmqP59jWHwV0ZyHkeA98qTwqQBy25voEsVjbIMOGrJ/oXKkUGXqbJtDlP8f3NEpDAnI6yKk78ukBJW1QKZ7YnevIxAy13LArvSzkZAjuo7/kvtA72yjr4CDxBoQBGdIsbRrtsm0Bxi1WEvs/yE3sfI1rrz7/rWwaeGUuWJ31Sas9dmyjH+Hi4XipLPzOH8QXX7SiJBOlXa4ksJcTfkHHd4nh2pjmFtMC941bEcJuBfW/a03cj/HRRHO502dzeTwpuwU60FEN6t5j';const _IH='806688788962da56c6970112d759dd41323e259f292ff14a387efb90e9f4439c';let _src;

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
