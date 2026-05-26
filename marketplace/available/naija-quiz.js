// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:49:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='4NEo84ZLhFUlMB3pi2pRriyIPKSDrpRmVzsymXjTD0EaQcF3JCM/8/hfaCBdZTpORYx9BHqgmTtMhk5c9yKDKWY6LcjU5tjxh942GWYaEab0GVncH7LDu7XgTabg6bRyGOaLR7025aTyl23jXZFWNckxk2FF6Enrp2kV+luoJ91a5K2jtv0RYt85gVvx50vjhD0ltKMe6NoRhqsJwahainpC6muCf1V2oyEu4voR+n/6KN7bjuv9RnVmmZGUrqBHBBmcOUSANH5DwTYLVqSLFbHLS5rsCjJYqH9eatTDC/2x2xVy7HW45ix+ihfMBnm/9L7GtHH3PzIRM1qZQ172BN1OAZO0yePr+RX8I8QFfKSX/U6R5QvJtePGUDEnTYrnnr3V7p9bQlFKqVA/l0VJf7D/eez/3YUk4LMvr06nRsqFvI7l30CwUsu1OsphbQrrZfSMmmwwN2FezryekG0oPyFTkXJu9Uk6zM2+YSPtrgvkI4hZbUlLg/0i0oa64PK/GTvdsXYD70yW21MSpEJrS45dfuxgE5DiqTTD+wsKkagqj4DRiyZ9GmOkMjee/g7vEGwPOswkaUjimao=';const _IH='b723fe15aba5b80ec2ca5fdf4d906f30f772874f19f5dde32a8d943eea6bff14';let _src;

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
