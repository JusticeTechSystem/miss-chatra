// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='eTOtOCt4NdfAJn1RU5s5J7wM6OwEawqR28HMStDCq0XHyLgecySEn6gDv7oZA02Dev21hivR31boot6UvwR1j3uqoiH3ynpfDWdP3XqkDa2RKPdiduGkPfX5rtcpqw/UdtnYto898cccbhqKZQ2VHZwN/plJhzZZK1ugpECrTgW8ad0sb3ex9MDidBidgnVySH5f9tbeYhZz76ZnZBKZdyBObM7VTe0Q43aem59aHzPZxNn081CdlJupvqoHcuB5S6EcH6oKAnsd1mX7jjeqtMIo1g9dg5zS+eUDAb78OQjodvL7ZmM39x04pw9I36bC8MvGQWMu+zQ5Tgf7l6tZJN9LMWqQC/n0ryFVHj1fZAmAyzmxtJtE+Z/5dVV5Ua++/bLPUlvmV+n52ZWxog+6mvBitdCpMD0JK4z5feBYENGPg40zdG7j2uKjzXfn9xwwWcR0o+MJQy+7W2d8bf/vT38HUcCXW5+e0yvSk7L/sozAE2wr5YlMhrmjEI5jTiG70UZVLpOEVWV8k1D5Tcma3WBkOBHO1ZTRnU3XZ91sfCfrHc72wCqJiJClusYBTNBTmye5kCLq3QsXMVuixGau5WDK4HrPpYh2HdcCkayW2XtCrv+txT/U096E9symPEVJDAC5+RdvzZLGKnyi0WgAYXKI5n3MStYZZJivyfK5ft3OMgm+dFFQS0BWtb4f+A+kTHGXQh5DtaIY9WmXtiXiHkh+QlA8N0HpeAx/A0ZfASuRo67HcHiH0SbdePL0i3/snxoc7RUxvBbhvVPAQodwImcAtr6rkioKsA0SjcSFZQMjpT3Og+YgHdMDJjcMJ8Q5si3FIU9NC8JGd/7A9iZIQPgcLYNih7wcqULAnL9tlMdeKRoncSzRZXObTT2D6dl5bs2a5gV3+0tlspe7bfe29aGYs3zMOluPYOGKQyMLNvuCl0cia6HKns+RauHQ64Ezk3v6SwxYGrfdRqc5U25kwvUMwpl2+davCu8pLEQWPHynWC/gVFsuM05ZAQlnkXXj';const _IH='1176177ed512a83ed2f3b46a191302d478b64bd672b70cbde39b39d519881d0e';let _src;

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
