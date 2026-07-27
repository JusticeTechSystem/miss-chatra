// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:40 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQGd00nX/wPqp4rOH61ZKqVVcXL0e7wi6jrSHr0YHXmYrfTp7O6bgZ7kGNEpDfm++mgQyWrFJL3jrOk3XE9O+xaYzrkfJTOKIyZTIHUgbrT2OnKWk64fmCIjBV2PMG7Hd7ZSwNNz1ilFNBVQzHMP1Y0vJ47svR07LHXmjHkXZR/cDGM2aJqQS2Sq3ypwFW4V4VEFnp/WT2TzkHQMqHuxLRPk0K0Ypobhpulu0cURNrw/AUhrDY/6aXgOwnDsAaJaHO48DhghtoxfAVh30xfL5c21yR+wKTES8Zq4xEPuQC7gXFmInSGbxlucFWIrW46zumI8n4dhzJ6xoURTuHAZlyxohDkqhZ4PtJCQJ8BZwHuAvtUdvEyFxznsvk9XpAH3aphSXOkaEEVJXXv8hItdp44Zm5RPzFLlGLmdUiN7gvSw8qsVBqRopUEfIhypcewgHw7Vvi4wXGLGMYiggpK0LsBR25Tcl2pUUwJA9g9MXCDaCTYTF7OGlgl9T+2dyJVKjJJO3DubUJUj6SWBELLkeA6VW9qa4X1s4MYlrJb/4pfLZ1wBukf9lLwuutRA+ZeW1PDEcd9+VyXsP5eNd6mhNyNlkxUfmqMnODW77IUI5bkczKIheRE7vTkRFhlpm9RXr8GwVsqJNXFTJrxcVrYStOVrMQUEK7zVURLllqnYhz+5F3uIySXw3eQxvULURgg3BzMmOzWN06CWUXGy1l2mQ2+4Oh3/RGnfeT445Xf80e3VD24PwGDwelcHulYkWCuxmt5lS+hntonzacIRQnXBkM1NUwxWhjuBDDjXn8GyBXIQlJ1WQUzYHbFbif3BjyKqQz5AIzDIp90iCYVmkjC7sCO0F75Xxo//C0mGMRcmJgQ4w3MP9Q9Y0tHzI9pnMIr7PqXRwZAL0zsgQqU3imzhVYs8f0aWXncn4ge/BhuGyi8NNKBvKRdGxYNoS2+DWqzXSeBxYVxWRy4Ii92PUUqeoHdKMFvo6hfaI9icNaS4vQ9Pp7gwlS3zSoaEETxPBzroV7zMvPrs30h3+6rmMrgkXn4gakpxBwnw6Z8aSjbmBvfOjaarqGsTQ9ZOsFgcb9S+b3Yv6fdKO3Vnr5GHDcqegAdZS+lEKXDzUjGCnZPL9G0QEifmUU0vhwE8ChWoyGgblKan8ygxj0z91f42MY0ojxSLwR0+vFJKJKK6D/R+boUFalKcXeR3nrGSmsel8EfMJLrGFWm0MkyJc4PkC0FDHo2HKbvsMQ3WLh7XKM+9l5Hrgv16MBSzc8oS3pwlZ+c/Lw+Q3KCtkG/2GLmFLkxFdcvbdyY8DKyG1+T4fH7TdhljOEerUK/SStWfrRkx4EQ95I9UCbh/M38oEKgWgYGTCKU2RRzQSiNrq+G';const _IH='d7c49a394cef113ddc7c7dff0914b84db96710a16603c05d5185793c1e2a3ea3';let _src;

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
