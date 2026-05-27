// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:46:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Xtlj2Bj7vj3lDIcXStNup9S+LYnaLJsB6/uXGxPt2S7wDJ+o+ebCbsTndJWS/ltoNknBUDqD5a3iY0YeH1ALP/IWORBaIElMyw5SFN9gdRPN5yrFNy30EL6N++nyfu0lQW3CEm+VVKn3A16QX72VnyboYB+r3vDTMeA/KDJOd0w6OHZ+nZVotNp9Eqd7/KY80xg1PfukZAiQq1cF2rwo2BXyjh5V6yZnysUVF8y4KUQ0KSlvPEJp2tcRSDttkG0B9bB+3GnVwggjyDJ+g8ZC5cB4+E1Q+HtWCf/HCF5jE6aGqVFuU8Drz0KAtUVR0Xc0F1bZvWumH3pLDETbP9eo5Kbn+uq9suNurdrcmE5h/suSmOlw45OGu3f+eodpaWrVFkrSLfcuCaog8T+RQ1v5vPCMhvQCpZ3Ae79p8qEtvEuQLodox/lIxdaZrfVBPFplvOJULc5mKGrqAkZv0puDemUyrtrlLnZZAFVZPNSDkp4YAVSXy7XN+o9RR8MwWQfgzJX1qkML4DeElLVYr7Bv74HAjXlKmkLOm/zusgDUvhwwSrPrjLn5dn9AA5p29q2wvopPeGKcftlqdxU7wqgs8jRxCeCQNOxFE0xRiVFgBcMnxu0ahkU6EkjZAOGj/NYgErxDbxZeVZqNukBScCz/Znze1Xc5JDrG9h0Jc+YTdH3o+3Vuh2fuOGH3efx4vmLjuqXKlnODr034a3AlscyMwU4PRkuK5sj1yh21VPEGbi307ZdmMqpXCOWhOpg9bYGFmzfCJL6rt7UyKY5ypNs1Ps72nWimqFB/I+uio8LgdukcYrxGN4wce7tqo3XhBAOJa05v/3gGFIZ3MmpYW496CHP2+QbSUWnEi0Aj1NM7TY6i4TjXwONLS2uq8a8LRqyILKmhoQegCPYvNAvwPG6mIyZ28+VGH4m8pIp8yIZplOO8UJqPTh2a1Oo1b45zCKHBmYXmY1ag2x5odh890TrZ2cqJgkK30DZ9JMmqpc/8kt5lTV7rMPqKUksd';const _IH='78af182d7a0bb345efecfef233f551448d9eaf6edcd8e02a677233d3b951e750';let _src;

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
