// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:47 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjS54G0rUHfdPHiuJi+riB2/YDLcsrvjbggEtjpOVAaRNy9Qew2iWn0uBulOb/qGWux5NcIgW/yQ8xPErJg8skXK61dPDbubtA4vBBKR0t2utw5XU7ybJqzF5gsqkz0QvLMkeMsXmfLQDokpqUBNQNAQh8WAbqOX+5YNH4zqCls+6A6MsYGrOB6M02PoNv9npmQCntJTHCCx3Fb7xQcHeSl2ZueQvc4/VYkYxsGu7laxql/QTJfk/PEeUHhQWQ174uhOkiHp6t/RXePm+jie/rmb6rC05VYr8y/OMtTvxDucWbr8RTm+xaP664tBzKtqZBjhbSMd4IIbLkdamLxrxZ6urxbXrKEnYa7hKMKolXjrskMZtR5Ubi/zB1oSlkIkW5onNBiZMQjA4lmtGRj2jfKt9LnPp8FtxQts8r39QLuJGd85CGG2TxDEAO67Xn+zkHTG+V2+GCfSb9ImBa4Zck5KWJl250HwJc+9vmM3WuITBaPIJqEOSFh7seGKBLkSL1wt817mMXnvnLq2jhYKGfWniZ+ee6XAfEqcOGpOJar+iihyAKsSC18ilq+Ni9SO+qhSGSq+CCChjfytcBuRxbOFqZMga1WkboLxTsmWXwIlYTjefRNjRAv6BIX6qBSHmMNxpbhZLJ3wOJhf26NJsApYB92Br0Q4ze7r7DSISkmDLzf1Q+2RxypT56/QzCypK/q8Ja62U5a+cFR4I8C4UyZN3V9yj9b+eqBCy5dQYRDtaWvYMPm+Rd49tUA=';const _IH='b1d90965eb87453b27966f4b964f6911c1a3e859dabeefee29789412f008b2fd';let _src;

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
