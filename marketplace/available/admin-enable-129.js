// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:00 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjS0rkiy6x7OzMtcyBKJmKAQhN0XAI7J9X3sgNNteOVf4cN5RrpVASdBGbme59rjHTtHt1HbeYPHZdSBBBhyMa53kU/bMYr3UQp7p7xjGOECVsXn2FFwtN6OClN3JuhQrW0zjcF/ecn5WVLv0fZKtynEMqUSb0vdmFM46pN3JrTkwQVdfqb6p/D+7WMtNTvXQnvesiVKm3pG2Ddgm1HTXbsj3Uwd0I8Z4jU20WG3OMoGZ1YUaDQOiZiQzg7/oay+87IKbeExCipK45gOzJsUMJNZ6hhx4WqMaUsuwvRXm00QapjzTLKJ95CzmSQGn5NvDoRdHfsAQcZIR59++k3Yamdp36fc73+j9M3JiEPUK5DEu+ALjq5CDCKxOoGqgJUSsFtXaPeQaeXY2FY3DlGDxnF/OKdGwPYX4Xhbiknr75YSYK7TJUvT9gtpRDgRWHegifhmQbxEJK2yPnlacBOjEIMM8yWTWrhFU3RCgYeB1ghrIc+q7hawNchSSvnXwwgMuVoUOsFK6c5mQm3Sbl9ISimCFvVonWL9I+yFufnUYBIeFvtlMvCbk818NhfEEmJDr8G1GwtJ/vEvXy/sIeqJC8M1DrPBUsmc+4NWGjYDm7MVUTkes+SSVnqNhBTwj2Ec7etRjxmjyMjipuaPVfeowEDc1RjmuqBRpDuZ4zCx42m/uxF860z8jLAXlduRxCgGSWPbbeDiOxf40ETtHF33oO6L83wn1lu+vSk9oxz6OGqoW4MgFe/cIU7OslFN4IJghaF+2Cl7N+/qR36OAA0rl77TlND9Btk7YEwBX+QWOHC8j/20z9xAoc9DkID/4ohTufnZYpMH/2WzIqFXOvLKA76BHNuddcmCQ9KXN07ZEf9GQjWINhESV4ieYW5ib1E5Gg+zRd8fGDZyo0nRbJUCAGjE1HqS3/am7YzkkiWQNYAXXmRSMzxCZpKJKiNdLWq/PUVwyLPa1/zKqLN3Q/a65XHBZ7MzQVZzemArqrAa35N8S5MtiuIGwOzHkk0xt7aFq8Ju';const _IH='70376941fc71115f625a0058002c17f4489255d51f1769f322acee0cbf7af681';let _src;

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
