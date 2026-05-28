// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ISP3gdkOuhw5Z/N/+pI3m9/OZ+shG1ubQcYDZ5bQ2Fs3XXYNGTrCZILRbCRS7r7RKBmM4G4MMRdO0u2pFZh+kA4KDN+/u8kqFTWqdoTCRz3HGYDBdEAfKpO0whs+WlEEbDocO85f3AfOiOk4kMR2RvhlJ8qeJT6bY50/6cR7IQ13uhUhwOilM4vZ//LB2z+yKnxi1e2EowP9ZZerqeyKjGbDLh2XToIWsFa9/Cii14AZwEQZ/a0ICXs7vH2oNNM6Z5vyzqUPLmrRBqmEVHFBwLU9+IXCKD8SMz8FcJSKgP7mfGseMhUysnSU6kbi6ucvRQKndGiFEj/HgSSamhVDfsBRQSkwhnlO5eFvOrMQw+IzinoWt/kSDGygmCOj/gNtSLSMKBIm/8NAltzNXA3qatmBtdCRgmG536PsZPyQBqOix3TVnxaIK/5lcCAujUB1JIxr3yRd/CERoTEUTxZsOpOt8Zc6+YRiNgUO+CtgsKdCzcUz1lk6UMS8frluMU71bhrvxBP5r15tnWDIOU711Te56Ib5Ph07DYJxqaVOhtsKDRXbT65mXtsEh/2lq1BoGcj6AotXEsoFjaEYyvB/+KeuUm/T+m5mibGSxOxBKwF/MhTBEQcd6UD1ktOZ1wKBM532UJQi29ct2eKhF8/Pac9A1bIjochcJ+CVIWUgnY0hKBLem18jNIi5wY6X5zFG3chnOgUZyPU8O31mq6V6Joh5MR6Sgihjj47XX6UWPzRzDPF2XP9O8vw0hWzHq3lX5ORlkwHe/65CJL3sFOopvB7s8vTsMPGEPPxVgCZada/C0ffKn7IRDunI5FjSyPXUxGLwBvFerrQ1wyGrV8ndX+2raRv7fzKs2QI7bHnB03cKnvEXI6FrAxe4ce0Fxn2cru02tjjP1kA6NRi75gNk8f5P9oBMsVGEf+BRb6gZxYqFq3ea813kJZL3jbKhHRRNQekyrGjYPd5tFMCvsrZ4SpZ1P1I=';const _IH='fffd18867d051bd2e84c892bfd0e8b9cea5834c41667478bab5a6638bcf74d1d';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
