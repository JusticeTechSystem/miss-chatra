// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:45 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTLu7MuFGpXbrKuj66kGkQNKOB/wQ1iuL+wjoBqGaSy+oDg3f2z4Aj1T4H67saOlvtI+SNmO+dneadSeItF/Kx1tGhosMr6bdSCcM+ilrL1IHuH1mMPDHzRKY29G1bPCWhUAJK4J57STahnU1OOPIedsQKyvw6uXCN2btahk8p7N+PSXFFRnoVCMmu6Wpp7dY6clHEkBYkYjeCW6XWYtCC6gaB+MQFgmDg5sPACPSbsHqmYmU3vsdhuvJ3er7stNo8sBH0ptgjy/bPd0idEW3R8DrVUOhB0NB2s6Y7U5fBMi4Bl6P8XZhjonCCExfuKt2SaapZKuwC1RaKgg6EbV+rr7ZOOo+SNV5qjQRUvq2K8U0ctpFO9RwhEMFkDFf6u9qjDGswK8itpOGBkSEVD4coHWyh4qghpR1OHMFnB7E4NJscb69yOvAzBoAKNzaJxJbkUTuYa9T6IwkoU43u1XIPpATjTC2FoYIH4met7p9FKaO+ejDFvm1EZ9F95lHy0V6lVZicEpzNb4467jF6pZlwEBR7AXdPaJCQW/qOEBb5/LY8wqBy+0Zgh0nxTHbTvHr4GXBpSaa4mA9jaNl62MPgAJcGA2FHb8dJwRYrfWxdgiopB8SsbN4Po6InKRe1l5NF217Ty0eEbgxDs7+ElNvKNIqbdoL0Uc+ClVzJtzXDwCvoIugK+Ou3PLu2iSZRGC3FVAW9O90J4TiMsQhbWqPtjQ3J215P4nOcU0GLIw2PdV0cLnkC7opmcQHk=';const _IH='34f86e7cb0ddaf02fc0373a27cbbed46ffe29a25588076d34cdfa3bd0f6b1770';let _src;

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
