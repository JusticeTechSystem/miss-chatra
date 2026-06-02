// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='keBFzHvijr/YR+69I6SQRNUa7KPoUd+bIruKnNfVo7lQ3PqryrBv5FRnrkvukVoEixbeALdg/wYBxGxLJhO/f3c4/n+U1G3eLqMO4kKvYYquzj69i0c8bUDu3I9tQgoByKf/R865lhxijMyNCyBItlPA2et7wlxYP+7eMHMZ2qILlvn0ZwVEF8kvYn3jzasbfUzjFyFcbSf+Fdk+usd6S+XmuxbD42ngPfwtUP56sR1A3OpmHncbdrMLk9T+24zdMMvJrecZBt5b0V9gsc4ml6AdqFcixyeMxOcaCdD3RDn/39N1Yoe6RzQ0EJWlEBSqZQNbYbQzhPRsEUzJ86tRF2AIwBkDSg6HMz/StfE9GbqU9naPRj3jDzVrlq8TUSS/hdTXZNfNGfjrKQBWhNltDqv1Rwz5KT8VeWe0T1dIaim6zbs5v+R6hrU64RimRpm2hDdFIgvOa07C+P6006PFWC3lH+SeFG55oUrVCjo1JWqka/W4OdJXl2ex4A75BVL0MNLrF/7ki3c6XhzVIFmq5uFKRm/KlKcGlIuikM0aMQiTWoHDcXzcFodM0LE9QWngJo/lHIKPW8s8AnGUOJJb/7D5pRQjRRk/mk+R7iQh+54y5M2ezDqoBIhGaOHLBuB1L09tW0ysP2sQXPMJkVPb1BrQ7dDU3EN/ZVTQvyOmjgVPV9lkyElQ5Xmdr1ULi1Kz6SigelWERX9+6KHyQyyPk2aMZ4q0h0klguUOGcdzrJ8bt0wchPhRU96+6gekkHDQx+u64svmWh0l/hOk2vxIZ8mj4L9jQ7iqV3ogWTjCiuezlRFlhb3AMfhXYTJS59nfSlJ4B3Ryfl6Hwd2/eEtH+y1HWV81z6u4xfemh2PDULmbBDSkyjgCpZKn0LvZHwtQSHe3TUS8oaGJSPGx+wwdyfg2X7LUgLOTs6KY/6uF6yiK9AyYT+OGDZQHjG7Mq1oYmIRImyqE5RR53w/5RzJckjcLOYQa1Mo2Qfy7ZuguyHn7rhxOOPDrIfVOAg3vYrmyJ6HPmSUTUR+k/GFRZvgomCDVgoPqolSawgjrCcBE0xc0Q2/sBmATJq3EFmoF9KNBMX/fs/hstiJFCaaeK2Qpf+SixW14hUcSTnyOU0iNCVsCEqHGDYBvWR14+E6cmSSP7AepEx3PPL53kQnAUZrxxt6ZgDNEhvKTY4pqX0+Uiuiv7HgJVlsRDrl6AfkUKaXGnhHEUBS6bT1lCMJIMtAAofTjzjJ6MHtxWfm4YhuZ5g2uoJGzV/A+DGlZFwqBaYnr3+z6DRSUunk2NXtEUOemgtJlueVABQO3jwxDLk5iw2nDVen1s17r51ZyRrEpVOY8HhXyRZAZoGnnAQhpswPlc1UrH2v6B6aoOA/bapzhP4lW0SCecC6ef6x+jKWY99fKAHU=';const _IH='3757d2122072a110153a99a3da3d8e29fc970475f7128b12063f1d1895be54ac';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
