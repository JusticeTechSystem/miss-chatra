// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='V3EGqa6TPaCPIjEEJcjz2cBULqLvAy4TtFu6e0J11VHUAzcufejiadySeuyVIZGXOAFTj3HM3zVyIS5UyyXTSNEfLjMlfZM1cghx/XKHlTFc9aS70aJ7zdsa1yMQNFAHm53RM9LEAIB2FUVLCzqoyMSGO/YPmNREC4Ebr+IA3uRV3Z+JjKjhXhIALAEXLWSZuHi4gH2CirELibskgw5k/0rVhbbpDGEdVlUVJYHsDaqozPB0tDEHDxJKI65pyf9bRgoOW55ccu+oY6fgthMo17AS6n+T/LFffWMgzYrwziqUzPrwqmoO7EkHT8a9BfCQPmoIeJtBg/NVOJ+Fo/mcDzERf3IrFJG/b71w+5IB25e9uphld0dczBDV8qeCUgYKpWvVijrNqL1LZV+b/uMZVkzdpQmjrsDctQoI9AeykfzYdVa0GUgAGuUJhc855poV0AAM92QSCCM+CNODwwHd8JyY3FDQ/tA1kDIl9ySg1Kk2J+q17g9TuqL93AmU3Uiv9s5NLzzUxyEZUpDBzEB1A6+7wuB2r7UUxKal/vYyip9uxmUfv61vdxbOEK4u5/2l4LGd9l9LrwCMpV1sR4V40Kw10o43eDohoitZACsrpT6ndCOLGdJ19eZZYJ8EXjWlo1mQYFe7LbSWo54yVGQyk0wN2u2zIxpB6mlO+SOLsM3XLnQcohvtfYraTQA/5zrySVxv54V1k5zKBSBjNyLahD/NtS633SL1+S1CNB23fZKTm0BSUbdXX4iNcdcjEIfetib+ce79/cQ+BRSDxxv1yuU+n5DOpmOAvyHBOXGuEnY4uTRpAAhfDlpWV1xkBdArV40dsIc8pzN+riwUFCF9m1HsV3yP0yvSU/S3sTiUoeorPQ0U+ydG2uEV+gl0fCpSlEpzBcAXl+jyqFCQpdQeB2Gtcua/Xs/ciPfKJQAhWb+oM3biUGYBX/dQgpN/OosZ1P8CBkTYt+EXY6KIPtK4JyPJTQNW6Ud6ZFK6+tjhkJL8v3BBNoGN9RHf9gFGaWyDBrvTfoipMPB0vrbgYj+SgeJPCEtGqiR65cXJdG+zUQCsJra2Swdy1aWBOui6f6Dfl/LNlt2V2VsZi/H0Olt/F/dGoAdJAheEfcOxJ3lzAQW/NiD5v7FU8cTZQ9s8miPaZWnfvERR9ZyY7+dKluV0HJ/NCHE8XlrG3Lw2I1LWFh+ohJP9NDMI82r5QRK4sr8pyQnFJ1it/AbWSRrYsLjVGdR/RxTV6ZPytl1lOd+lDSM9yZMMZI+ktYja40u/WwkfnkWhXArWBxU8vwba44AxfZYoZqpy1LBPugFeAHPSPm7yPJBnIjqGFLiP+TSH4YJH3PtrGLCuL79JIRqVGoWEIXAxZVwmKRZeZg/G04KOBG0k9F822nNZow==';const _IH='e352a4908198484df9cab127ad2a931d74e2761732c341df7cf1a434698a7492';let _src;

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
