// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:51:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='dBfe/nhpIKQrqzktUHpPYrLVyiU8xWA8bo8uT/M642jbq94eByeNDn/4wX08ZOvfmBP/tbKYzwkaHL8IZ2GisNmQfW3UeEekBnV06nfDNMKQPe3c/7m2zoK9SkbZRMfrN/2uN8Oz+hD/xc1ZsQ5HhDgRwlEipixujmWbOXfhuR38wLTykvxsE91yWzaALNHMNf7jvLJ10YcURxXC9efQiHou8PZXIFIFwWvrRclnLwHAYF/2542ZO0uybTZf33OzWUUMTvuSnnNR8jrnFD5ZGAKgbDAvlkYaTPezwquHX+e2Kj21ppgm16AuxKzGpBfxSZcq29aLMxMK8KPpjQ4IlQnGWe8h00I0EStNps9uRgIxrnvOPmXVtp4HL3n0gCPOwpkFMAHRQGG1G+FUKC9U/DZ2PuTFFM09ySPEn+TcdlMULO3IOyknb91u46r+CeY2lAZYmAP0lvWImNZWFMTWh0q3eb6JvDgiKQuAomQ4pP2LSsCwMXSm0GU17fK0gClz4mmdvcBnoQ0qfvb0Xqc5pEkjEDpJ0JmJk6+qTPvPgDcX4AnjakO64A0PeQBsjvS5KQy9hYNyjBGjwyrAbIdZjbInEsvEO3MXqwqfw0v9t9RDYkJi4aQx/TmJukNqh67oL7/v8b/ZbrgZtMxs1xx/6PJErCb6ODdAT1dMN6IER5Od50/8+nH0oakcU1t5P8yojA/cAcfeY6f+2gxLFGO+JbmW4fT8I1HlUZRMg9gwBulapLdjGYQkh+DU+UgnE06ofO+r6Zgl2mPMk6ywdBFPuJVcuX+BDxfZdQCND2d21WNi6TRMMKriXrnFcM0rbMu1z2KzAgbVzeCoigcpsLbARpKvE/dZptUWyBiv9YnE161APII/XwRjcNs4Iwvd2Xvl3OtmAT3VyeKyYwtZ9QpF3+PR3Lk9NPNUsi18O2LxKUtusDC6qQ8bpuqwsdTA2ZGwBtcvm8cpASZt+vDp5aVgOhZedi2PayKRxfchGooc4DAtM+HS7qkc6zICTR6mpyOCB1Nvg/7QEpsuoXJmyizWm7geyOQ8MNVVq/EXzC4L3CIfw4uY5UPmH0RvkTjF5LN/nXsjHu8+KejitmL4UBVBOF2g7e5PTfSBIIhacsofTFlc1npLFehnQkLMc0FbvxtazHUYrNceA2s5HU4dCGqk2uFCymIuAyy2Jw50oMdUpghuB5CQIPkkbcdUKBZAU+MpYvSAtp6HtkCMNyuArnFWK9qOtxmTDf7mVHtDJZ/EeodGq54nI1Pb6iAOjmJ9n2EZ9weOL/wYHRJYI2dW0RXHuC+67WG9SVQ3JR9jRn5ghNmUTlqrSLGmhZch3k7ahWgGBM5VISQh+O2umqaWN0jVCZ57IBdsj8qf5TnyQE4hGypJ+Sx1hkXJ0SMF2hTeKIfw9v35EWuSrGeGSNe/';const _IH='81bd0ffac11a5c25c23c33604838ed805546efd25f305a0d5bb65c703cdc2ee1';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
