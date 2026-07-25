// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:32 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjScbkwxF1PQUIACMY3OrI/zVEq0SBhbYGXgbzqjwa+Cw0F7Hq4WsDkgs7UQi9BsMd/i5nhjf1vbyS36W2WI3XR7qGz6GzXU8MVJqkFZpLvWX63JXV2y/D4YehbmlwjBYfg/azg4HSCAFAGg4N5AWuXml3o3B4efG04CNwzqu16dckH53riy+CEiDwX+J+jpCS1aT8Jb8vSiA4QZ5dfvhonoofTS3ugsrmy3hAMXI+y0VsbRFzCvktvV//A2x5G9ZmddrFYvz4Gftu2oFmWENOFu3hc2GJ2STTSZVK5s+BaxA9n3LHxjSj5AzI421uV11XjP70LhALhbXjwZdYD88b7uzb/Ty8Jbk6oNFuC++IhA1a7OXKfN33AwqXz4Fn3pCGWGh8Eaa8tCvxZEjpL2BiqjW05aT4FM1SpKta66wgo8emzcyVzuo1i0AbvUZtlA8NbDEmBa1PvbMU67O04u0Ojm4zhzTv56Vv//eYh4uV6MmWNrGJbRxIQpVqrEN+14tTmhNxewnbmoeeKgjW0cJwPa8iU0XLiX/G+jckLOiPtseIXRS3+DBXMwynM62PPKw4m23enrArAQtge/OnIJcSKew8ZuX+hg5ohffH2Vu6JBcS5SE/R8QmWxNWrmofrLNysSqE/i+LvTuVbQ2j24DFpOOyOot6I+3guaku0+BSPVwlhQshVg8orXWEDCN3ttKwRUnoA4/atRJzwhC22OpS4ONOxR1tY1VrldM44RnXEywdEFT2uW4OjQKcL//doTahMv1SpN8wnxhj5A/2SeX4g5X56kkAb33Fx9YnRcmeUmABlqFbFSB4M5g9llmE2QmL9wyShMDlSOtgbMK5zGhtMqS8fnrHWZzrDQxOnux3stxFVJWE3UFSssMHQQQRcr1RZN/G/7kK+yDQBEo17NOr1TYPSQR8MwtKKmwv08VoMVEdIsigwY8TYeuQKWBox8Mt+G1ZnXnY5CrAi1QSOwSs8P8bi+cEWmmiJxbRsx6XePzIIiK4bBvgZLWdSJe7gAoxjUL6J4T3v99HgPDNeIB8Vkn2bL1P8EvDXsIPK/SKGjRBBtFgrpvctuKvUxlkAOL7cEsGF6NKBqgntQoxU/k968l6g/rgk2TTfGUVtYucBfVDPKDpPyx6i86wdI0v13gpIXY812dO+karjhg5x1Y8vDuO84xgadVfPPU9+Q0Bx2Kusnb7907l9FttZlaHguTqJko2yId2ZvKW+g9JkpIYYFlJBddYsj9vpge2Dx7w25aPUL2ryV4pZrsaG3CDjyucV09ha40x0neuZTFD9KKHkX/lNx0kfqr6ursYYMMVgHUKnDXQYg3ErWN2yiQ2EROKR2diZkN4waqFS1MqvMcZtuaEEDNvRWZkMI4B9mZT+WHPhpuA==';const _IH='a4d1b66dd5b2dba2c37d11a7d08658280c5a15efc3501c80057e6bb249ee8861';let _src;

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
