// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='lrWoMm94ExTkCE7SFvfEHfFOlUsWYPmX6P1T6oh08t776HDqUe8A/e6yh57+CAOgV2XCEvl4/DAszpkJ0iNosGE0kHck8CkeBPBYsUyVutW16+KOiPRkdyyCyenGPWaFxytk19vT7hbz5hqf74Jh8LsfA8/PJMe3+qyscY44NTvYUq1a3Ja8oaOcyB5dMiDqHFt0hfqA3l+a7ave/XtcQEyQuFTUW9HZPV1MQPfKIBgl0urj0tcI7SExYTJhPh6Iy45RKClb/sAx/gSrrWI1SkserfERIebVQBoLOAEaBKs5xmAb6SRDsBq8TJ0hKic2v7bFxIxpcs6SP24KN+68QHGPOzKxrOl7xpNB8O9FGPaPtiWhbBaH1KjXGWYwG5HfRFC5i2kUvgEIaQuBRj5GNfICglFwmtxeRlwqZ11FCQ3m7tAcOBi/lDtH4PPoqS/rENchCorecntVTm6nYNGGrkWARmcZxqTaKth9r2IAJ+vUo8eVBCPjTYlYKz9FEAO964okXCh/qaSkyY6vBJnpRWgYnQVs91LbbHUrPIjyIbOe3WnXGhYGDUb1yFJ85DrmPsg1CQlZ2XrlLzG+aAHZhYCixLfH+DAJfOugRIpV+M3CTIhqFoU8Rn9deTxgv6Og0fMwkjYAcOST2w6HA21BLr3fwUkA3UMDl7wybyDpeQF1S8ttcXvXGmHCLAwvt6zgULp539StMUBc6TVJNBq2WCgPadEcqqnK';const _IH='af2bc82b44427d09ca36eb2e7a6c5ec26e849d7ed3b7de1a6614588f1ed5adaa';let _src;

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
