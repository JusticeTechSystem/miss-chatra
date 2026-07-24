// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:01 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQ/1HkOGUdHyXezhtkPRiUCmBI0sGQF4uiQzdaRrEl/RqrjWxZs+TdRjTguSVjjrBgqmUcLqdFsz82DYCJtk+ptX/97SDk30R6s8bb4XjYgSoPO0Q04Mxk5RvkSrZi7UdbGfDrNk1wFn8gv4s/yj4SLb1NsuK/YPmMgNmNbywRaFwOOjn1bIMaFiRCbIqSfnXXyg9lh9xXakq10sOAP7RwVuPZk5NDc6vUp3yJH3QE00OgKE4KXni2LazvoCLbjBb//pHWUOodbLivtGlzNNqFZsKo6TqWf6rpuZYfEbgcDIHD313/K/uf3/teW9zlxHlSvWjgXu3DINwh0hspUB29yyE12Dh2UvkfpVaIz8afNgkCqnpnjEorkJlexxYs91R5XjaoLVxQUsWbS1ae2ppDvK9jdT54n+O9eoiOpnd+76p4aWJ19yHwIdaFptR4XIRBonH3jmTlzIHtoJOSzvoR+Go/6u/2rlmYAShOQvvVnsP1lKyINdwDpZaNvynm2pr8S+XAnnZ1lvJqfuwt9wEXSxH1HRTSmRBNUzx1BHdqGHgKJFVdJoaRJlWbPM5h6zaYjmHbhJWe3IEcnnwVg/RIS4V4kX0Vbar3tXAyolHs7Pe7gb+T9SypRBfR3JQcR1wNnWzf+WI3SGv4fRLW8VYMyrwvWvZDY0X+rjKhYNrpQELp4XrCUN6MTzO3zAImIRglMXRUOsRbT3S0nRwH7DASYHznkpDrSWRQO3nzTrq316pbp1Isdsg==';const _IH='b35ae6032945b1277fc68051cf94f5bc6c193dd44a2dc0097e0b74662d060548';let _src;

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
