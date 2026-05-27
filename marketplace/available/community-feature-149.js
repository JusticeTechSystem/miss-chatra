// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:48:41 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='J9md/3knpsC5+b+PPjloFPIn0yKw1EDpqtvU60x4CcfUPhtp4JGVA8Y5q2CqFW7Ur7NPSK431B4lYqmozLFkh9PM5ibGmc6ScUA8OqnUPeVUH9LB6vQdRj0nuvw83yZYdVwSQ9lRP9omLgpGuw6sqrtytXW5LoGxT6P016pMyk1u5ONqINpXuOMZSMV6pW0ptNlNthwD/YX5oo6PT7dFDy0caBPYE0KFM3Uoxo5kOfPff0chxvG2Q6RpugCcebROwMdtPDjgag+dB32fufK0z7K2JvuDqsTbODoLkn42VpjYcGE44kJ1Y9TxSuwZwfXlx9uqsABxSxCwA4+N8EiiyIriEpKSxhfzH4Kms6/AWIzbI/mDGtr9NG2V0ojfFayZu/Mt3YkT5oZD00xJT0uloc3ZMYaSALa1nJ8BDTYdMtVZzpVeHK16hpwzxM5whqEsUA9ln/DRG2RqUYeCET3bx+zYh8VL1RMou+Edjhs1uvGr2HvpbGHL1HvhwbQeMDMlAPrExoEulqZX/YoGooVK6Wg9xoXcm9ta9mAyMgVpJZLZrxvcri7KjjbFJFdN8Ln5e/5+AkPRvn3rQk7pWtgNIQhTRXXQq6om0+pSlX6UH1wu6p304GQeECTqKEZdN8gbU09/YzlB3N1PaNyVKzgWoDRwyj9aIrJApptEN0oRxHaEsD0YLwbChMDRW2TKOLe/EqMpTsf81LVqUqUZj6JmZpatQO4OvEuI+/oFWXqqcRqgvAOjvTA=';const _IH='ebf98ed297fa1ff21ecbafe2e8bf95b775c8a868e09c0afead0f791bf90b0a1b';let _src;

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
