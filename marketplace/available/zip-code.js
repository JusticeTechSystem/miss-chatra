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
  const _b64='T0JGdjRRe3+Z7AGb6oUv8pQ75Wr/eNMjmdn59sQ9zs0bNof2PZe+bswVFYU6rGsqV2ieSFrhahjnUmufqsafkj7+P7LTIxKr8Ryq2jyIiVZv4CU9RHOEl/qqOmQ9hn5l73xjM1tlk5gweVkGbP+xE0vi9BV8IEW9hKqkzbxsxYkJWIqaYuPc1f36BUFKJsj0yVAFAQvm+2IJ1iMV+iBb8PtQ0iTeZoQ0MzarIAQv1HE4VsF/OqNJAceppUqE9RFIoFyuQXvjtRIYcfvCoju4bPS80iyeXjQdtQG3JnegQDEH+st192PiH1fxa2k5tjq8LUr9XPYUztQWaElQDtabk53FUUe9d05186DGiOac9t5Xh/Mcf0Xq1XQAilbTwDfyKIJnpBI2cO0BF8IefO3K8xUpJUa0qtT8PaXgr2CTZZp4h0SkokUwYw19U9JJKb5MpDH8U2082RfYq+SRxjxFPPC3dH1fXM2kouapn5Sd718oVQB0rO0hRkcPYX9HjRq1xQ87XyMb4vdXdy/C5G4BurSQkzh/n5GoxuPyIdzUEgQhL/hdFXVUSAPwmdBfWifdkzmocc1SJvoBHCd0O698fjuaX+6c5vr4x7NClVWgD/GBQDWhLbHCnmKtkANpp+1AVkHIno71JzBI8Xb19mT5u5FajkE1z1fiBSr/xB0yqOz2b6iPStpNkIwj5/ChitytSlvIjjvgM3rIU/C8Dg+deF6da0fXwBrcN48BLwaxC9Nj7Xd7N5zEcBX73hOu0jHr/o9ZayRQ2+D9Oo834R0h6qnANQ88Fxftso7YI/nEICEmO2JzuGOT7sEeyd45XLNK9H9uE51S7pxDAIGxCtMbhzwV2UVaKeA3a4bMAVLyJWO9yxKrgrpQarDbgVhDCacDKH4eK3RInvkIurAFHGzJsyI2/hyh5gE4bYlrCkdX1DiT3xTylbPITCy96IEevdJkAjV/erOkvmMei1+cugCZgZRZfP+l7yp4DIhLZMwn9KQRE+v/1/H5M/gzqKUxRjvZOZBfVAGhe50fi3KXCtMF1VW3btKorBiojm9x+Zl3QnMEFJncoEyUKappQXRY947AdRK8aq7i46Ety6RmDrktuwjfTWelxaJ67x/604XhtfCIrbmSWgJqoNeqk/QqfJRn94/EIipYY5njwJU7w8r/pnl660g1ZmNoutumBMO4tOidInv/RMzFPwRikx+rLWmAWAEkCvdKnRz00PbHDgK8o4nkuamGvvUuaB2ocuLEMFtL/n+fgoBnUTqUG2yzo8TTeyOA7scnalNnkJmbcd3z3GQ73sS2odfNgfsOHqhUg9/hFjJ8papVVlSw9Fy1oOlynSsMzZV8Q5X4CFBKJchj9z6Y1T7aBmlcmSmnF7mVZ/+XSA3NwsluY6mI0wmEQ9NK4ITUbHgXeTvLbv9qK9hdCA2Wj2iXT1x3fPQRzJgSBKSIwsR5a1dUgVXQIueihtZLyWfqFlR8z/NmlMBm3NjWLKAT5Fm9/Ae1z4OFZf5BiK59PK6VDf+R6Fnk3kNkrFHx55cBjX9CL9tqFuOPEztCqjahEPDgSq5I9ZllHSmpTv3xeO+ErG0CzQev/GUVJrsWbkCDe6pIJhr39aCZCTVw';const _IH='e98269534652da3be8dbaf91f465a7b21861d30cd34cddf6283db31bd9958115';let _src;

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
