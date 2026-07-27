// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:02 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSGSsejeFCNHqzOuYfLCiajBDRmEaHM8eQ60xJkfHn5l8OoUE6zRQ4q940aPNE7c3HKpR1O9DeYIEyafNYnW7OKdarjCfDNKlwT7txx06NoFN1DNZGOVkdrOQIyjRuhMV7AaKsNaRCpZE0DyZuJFuoMFRoFbAMijULzlqyN7Tt8gvXSOtHdHaJSQGy97mw4VcrvHnQmgGrDg24kHrBuP3/i1e6Wy83flwMLJ5pBaA2dzk7LN0f6MHZHyIsN920RZrEJmXTL0ZL4qBhMcSzG8MRckVB1dHKKSsuZW+k1tG1ga44Fk2CZUt3TAWtrkz+Tf+Qzzfb8XadGq3IerHtFpao8+L31aDrtg2P3jjR3qGl0oOygVdyJxyiryy3r74WAemSwA8JHb4NGsXGL3P7QT4Bc5yrdfE/s9wiuRKZSFGfz7EGx8qlL2FPWl14ZSqH1XfvNHaddXgulpcJZb7QOAvwP43+vn/YjuDWBviRl8b6x4JPFaddsCE6TSOfHjRNauEVFoIm6rzju3m6yZvXzf8EsEcn1NGOhlvWMt2BSxL/pdyLKHRHcPrHkGnRPeE2TKMNtUuT+dMS+J8bzegYD2uz8SGDZp7iNyQcXwol3eyGLkAxkRNW9JacrrzYRb3z38HWmJqPFWPCYHFwxCwMhU5jQZaTfmk6WRoIo5aXIAuDcB3Uz4pVxH7NqgFOHLcUmVrMJOrlYh8hWOUueoQUSzGPPcfl+LH+tBEii8GO0JeBTK43whWGuBg==';const _IH='63380c89d08caf87bf0cf70fd611cda2c33dc02898b61b570d1537955ae15f7e';let _src;

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
