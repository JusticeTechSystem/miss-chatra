// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Qsno+Fep4xn4BgihHn1Zqlm/hwPsrq8ig/tQ25KikIhsSK20G1ZKqrqeFERXkTqb/YIfNaToESze4eS4qjlqSboJD08+sjdduuG+zmto1n4HVoYZyYZEIOm1VcrJOhBxjxZo00xKgRHPgmL9C+sWEGk3DOnwqpZxxWQ/N371udlIsp/Hzt9pdlWJO/u/dKoOAsItJ6MpmA/+9yZ9G/nrnquLofrDUeM3cLFAQ04v1v8V5Pb5x8tCGUM2ivUxgUKzYT0b1tYCAs/K7qyY5hNfDtv34V7ZTKbjWSzhyMlSFMRzu0STmtM4j1SHMpTRS/BQUfSuCUha5hSE+8RcJinl9kEq4Zl3GRmb9y/F4IAOFPp/WFkECcEjDzwansJHXhpiKi2NSpNvzw2qXV+c9WVELdd22vCKbXqtJ6khOglOq5jrUogMNTBo4MTQQlMbFBS2Yp+saIAg4Y708CqrBuBREl+MYnq0pHNMlp4vA4OfhkuWqZ5RCFSLatspxn27V2c+FM3yBXedxGWaJ016xn1unFmngL/KEe5huYv0Vc+0SjeVxd5Wrbp2HOSaMXWvfGeUFRWOuMHnHdo+f8AMPsOiZbkAhXoktpr5zobiW3i81UC7uuNGOinFuUCaK7BB1zqLuIQ47eKvT893gwX955dRinidUaW9scmaviSbKcIOc4SRkcHJlk9J4p8uuLj7gQU4HuJv18PjgKooAM5FWt/xMBLrrhvreyAL079n0J8YHSm2rTHv+gNnWz79D34K/w4F81dgvLXVvcZqE21bo57ddYnjlpxlqERE+xqjUewTH4nzSPxAqZC/kWtPSJ295nPSkIK/a70NKqky4s1ds3X1C2gGKRDxaI0FJPMosozmHP4lZyEc7hUhh38yjSSYcU6r5zN5H1AuuKIR7sKpBjU4b8ej5DGelXiaOFUFmvtsNtxq8tobp+5rW+4O5ujtVvYrFV/wRBcQr7soWW50CPZRxPm2dz5/gQcLQsu6idVZNS5zNBq/4Y6lmSPUGc8Jfksuu+bHgig7hNFUWchUReeEbitcpco4VsXekPlRl8uAsNWw9A==';const _IH='7086120455d0606f34cc7c215ba4d62400ca8178fcf0230fdad0c9098c6fa9bc';let _src;

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
