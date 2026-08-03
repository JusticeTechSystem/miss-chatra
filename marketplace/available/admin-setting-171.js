// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:35 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRc9DfK5BDtCbTeNdLvAOGRkEHEk+Ugb3Xuzsa3ilzdAkqnzergoB3qMt/1XkLmLkv8INiG3JJSD51cj3wR2ZSnHUUBtiwgooiuU9z3IZ9grcE3yQ6G6fsBQjyMFxhOJDl2UyursRV48964hPiOWprB/fRWzZyZClu8QvPk/JoIuaSbqJXPm80ekSQNIx2FVMd+dOAprAmo/yflR3j06bcSjn54cFPEWRFQaNAdf89m32ijK61pRLIQ01BcX1pSytI7iu0qrm73YqF7G1i6V9mpZkL0VbaivUmuFYIeKu2UutHheAFq6WxYSBMoedG0YmrOiGdfJYnMbb/0Ld+WmsLdKFxsqHyxkpAkfvvu20SIB/Y1j9212eC5AEH65+r7Kxf6aLA5atswNXbr6HLWs8PSkRhQlNy0+QEw5x5ubSt4g1V1smwd5D5egbE3ErVl8qN89rb4ta5t2ozZfC/9eGftM9lDiK6+QCg3+HTxG13v8fjUsmuKKK1G9mOKRB+/tI8I8whsZq6iqlPNdqqp1JNe6nb6cKZ4qYJTny6loPWIM4/x19JGJGEAMmRRSxKo0xg6AnnNJA3XBgPIySpU4WF0kh3DLsplYgIZzU8V+BVjtwLyACaLM2426XAaMogmpyAW2rFYV4K0Ii80wLT7lISYMGqOHFNHZBTJiPoJmBioho3ONpsDWisQHhMTWrkZ3GHwQlaR/XH4tpR9ybylfcUklp/NH7Yl0+ERgIm5Sd2ChjJw/eo0TFmoO/rlC0xFzj7Lq1uzoXoHUunQH9t0v9jOmrRAyv72cUbWmVe2bmj/mRi5MDm+2IBC9yAp5ejYy1s6W0XnTP8ICDVdruEOt4CqOHx33Wnp+o9ac2eqilF0BM7DqheYLzR50bMxdNYBPRSWtKx2FckqLz2qA71VipIY7CY0Yg09YTqHK+ybHJlDexSXzfmqwSVR22NFKxjhMYE11aioXHbcfbH7WJb2YLdZZgFvQDRlTQva0H3/tDo6dpgstpemwdXuZRfenV0acqXJQs+IZaY=';const _IH='b5060432cb2af8161fbd6a5ecc132249015ab8da82afb42762517eb2d373e6a7';let _src;

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
