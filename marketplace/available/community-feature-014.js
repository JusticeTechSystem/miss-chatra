// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='lBDDsUg87WyVEE92xLOjjQvYvYVKRIVqKDG+wq/OMHFEgK5GTcxcAgo/9jhJVVyL1I56ac3CV+mp1jKiKfR0l2WeYGpXRSy5PHdWCbbtc2nq+klP42OEmUXh2sGnDf6UIFW+DSCCjttQcpR5ueRy7KU2zwkcc5JZzmxnjHMVe1iKQo0QHnshWsBZpsDV0bD0SPFPBjpjnFNss5mlzEfbfJ21oYX0prqfe7RrVRoumNl033tPf1m2cpJpKrUMav79rLxq/c9TXwfAgt/bBVm469Q4sTuz93MNuW2Kfrm4QHMDWxDjn7LJlqw054n1xJgEyu0xIw0cGQmzsQO+z5QnTB851x1H8Hp3PvVaCyEKHT3eX8skJk2VAs7JBezke9gD36lTUOZyPYE1lBPzMQ5Bd3Vj+LCHYoPZoSRK2fmBoaGVmvaRjA+7rVHBoKyT5KXfQfG+JPMr1jyMI0XZnnzoPYbdjCz/dBLDM9F2o657xiA6RPPWqYqxq+oWK/IZLZyiAq962eu8uK2lnPwXd2Gxwz+OqoPRzlrX305KrJNcdC9PiSIrr1weQyiPMmbpecodT+b54zIHlzw8FHxXCMCyltY256q6hR/9vpUL4wm7hPr0KNrjpXE8ZwRJ5pX9R7YkBrjua7tAY6D78kTZInNPV6bMQ5aIDcFBuFUCYOjYKTH/JaFQHrhdyx4fxg9cXiRdh8k5ppuYChGXp4YV3oGDDjQq11OjPNTZhq5DPqfMbL6s/w==';const _IH='7f54c1623839a9fe47c15d174aeec9e4a4f416b8a4c2c46344850a3e3a1fdc9f';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=50000;
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i],sl=_d.slice(0,16),iv=_d.slice(16,28),ct=_d.slice(28);
    const tg=ct.slice(ct.length-16),cd=ct.slice(0,ct.length-16);
    const kk=_c2.pbkdf2Sync(pw,sl,_ITS,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);dc.setAuthTag(tg);
    _d=Buffer.concat([dc.update(cd),dc.final()]);
  }
  _src=_d.toString('utf8');

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
