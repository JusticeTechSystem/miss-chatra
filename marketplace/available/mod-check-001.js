// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:28:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='PXRwxHm6ymqf1FCOSa6/C/olL6c+6PnuD29kOHVgwFCnxW5pU2E1/yT9vFGjcL1rc0BGVDcsDmPC4InvzL4WC4y4oLGhlMbivDyaRC8SBEaeuZyE+yfHbyRk0VEG2QZ/s3P8GOecp+soID2vHyPRU5YRZyl0uKsZu4ptyHym0oCM/Wtk9SbmauaAIoztCfXQl/c+rNntXtKxePEev0kC2eeaoyozzQbbMPtZNOfey32D9cSWZSSir09DC4h8avaNVqCwEGBWZi/hhYcXImj7nBCExJi/zCSvQf6LSdMVnT3XUd4QD23bjy4baDwDm1RdccbGlTgoGAgm0AN+gWLOexP7M2uW5x4IGc0CrfPZ3/4qWc/ftYu2a47lxioLvCfy+v1dUrgR2dQS60uYYBgQyvWANfUrtgKycbxCBj+hFoXWNKqJE6uvjLZkK+hgGpEWzpa0wbH0fkBNRVQOidwMdAeonu1GpVMTQywvvXJWokP+ruQPsL2FWX3gK4wnMBkG9HfrTqF2swLVwWc32scTXDYEXG3RENxDZZV8bo3TlzQveqw17QyifgBjPHBGKiJ2WDztDE7MPp0njFE+I2v7IrJO9bBvUKMxof7TGAkm91oaAKg9lJo9+lQpYQo/P4otL2tMuz/5v7u0I4GY2xMK514Je9bY08jr88TyS/s2l22JAqPyTthyQ0RbYqPFAEzphTveTkFqXRtnsgzGaNT/KaWw/UzgwCTg2Z8UcC2xDIElWUNM/q0y9YMsbzu/1RhVS8IzqiSOmmlIoBVJWvSwveXGZ3QlP02x0RhCYWQYHINYi4y5huQzxRMULmS/aAPKqQUiFfmYMB39ujpB15kff5OhLqx2igm5JEFmDFcVXskDZWjU5koF75YsF+rL5ggX7dX1TMa2juIsFk39lP/+L6FJvECD400ZOzcPAhJbaH0kokGcKyeVmdnA8GXGK1xheZcaKUhCd0/1NxYWzr3VBp4AyCkU3U7J3U8tdYNPyiDQLQnLf5NOjjJH1GVCnRF2o4st9F1rIGEOq6c2+sbTeIWAUAgDKAVGZbzewJStw9njeLCLyc0WYzQa1vW2SmAPiwX28IOVaP0BfQ1+q+tS/i5n3xPifjAobsTwbtd9Z+01fRdQbYR1qE61Qs06dUrIGXIRsuJVEgUCGAAdXjHk++TDCD47jAjsFJQON8fWewMsZ9Ejf3LCgW+/yLw/s/WWL9IZ2azqQVdojtOW00lHCZux1AY6P+fZ/9NTO04ye+flz0k4WUAm/8RASvpnjCVJedfMo4RIFuRaFek5r+jEyXTyW2viSPi9ZbdMS2ft63aih4K7RVw2fqiZXTz5t+YVQ+AY1rFuh/bHevn2xrdrwCrXVFs=';const _IH='96727023805c4357499d1ec4ac38223e3b4cf7b1a1966d85152449ca8834a942';let _src;

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
