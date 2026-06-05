// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:06 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='9D6yJf5XwgqAiXYN088IdLpTqcQadcU/juyNpZk3FIpUBjSj3fg6KzFV43kWLraz06GwRhb65/NHYKxwKwm7pe1eBQon7tKXzPpOZYgqpfoDf4Dr+5g8iwbLmIFdXR6LzzZb7ybefKeoXGC37fu8RSvp/FVIwSdC+Cl7l7NT9jMXfmjd97Q15TBhhHGP0Aat5FLkmb5hdRtZFX7moFwEgzbbuCWOMk33WeWK1/kEavSkFky2/uuMgbMo6mVisXYE6u2narprz19wWP9puZrq/ceAXZ/j54o0VddHzR3DREfL/npwm3FRx2DT/ydhhsr8mD6Gkp0CLQP+DUVEdUFamYMKYSs2dPm1g/iN/gI446hdN3FTLk8/Vl0TOD5Ke1qC2xs8FHhCFIOHZTt6gQjQefjSnJxvwNxMzXYxOsoMgDZPXX4n1ioJ6jXIHpbxf9pLMnMQpKL8KWOEJDP5Ksl8bCh/FFFuWRMO7i5gDRuX2XDbsAQ8AM+YIc3+sOGYN1qM6SIY6I7hyqHaTnW81+vyyYligwhucfkwETD4j3RqtmkqJU6OAiyQBiefADYVrVKsW07k2NdJ40NNfqsABga9XscYzbrIvBjz36dv1i1Bh3/J1pntx7i+98eJbLgfp/RWQ1mfsCvmPSQOl2hJAqpJJIbaPCgSZCXxI51n4Sa2grEQ9ibivaQh7UEYE8xRDbjRZb5GWvmeRCUTnKqouUnQseOnOFT3x8HH0Aysh8A=';const _IH='bab961dd3bc59c44082cf47e4e3cdfc7212e434b9cfbc3603ad2e1f20827034e';let _src;

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
