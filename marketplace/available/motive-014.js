// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='FAYKcc319tAfUjWUk0KyqkU1FReOaTymWi2wdVhrtHlSxYs1205MnVYYtf15HJLAsl+h+2xN7OczjWyNsokfIJNzaJ6zg7+e3UULItO6kgs9QgkjLDTD+0ACY+cdczm7UWjyrSYRfEyOw9DCFaRA3x2FTDMMHBSSHAJUddhH86m7XHT+BLx/k3X6iiY9d9gPa+0g1kbAtzBzLwvvxypOtOVueFtuCA/Zb26s61ZAxyh2JJG486/YXCn0A4faabUc6kBbc5F5cREhy1/rEbRnc1EXlcxsAPBbqiivzHaWJo8W35bLPSWvqtBXikhyc1AzavrWk3i9Z267fc5APr6jp643Z/8nfZdcK45f8BOyA7bo0ZiIO/MtHcCAeVufLY/UMrGh84OXAxt/JXGwyVZx10epOPHnbHf9zMZi4FyFdqpiDJap+LseqSQtMQFib9ZPkyKi4gbYuojDEI2G2ox77qaTdVdXamIqLvLqE+++ExJVpdtRmxBlZhBxPzeMo1IuxnPyOxgNyYd5D5MgJ+TzTGS2wwOCE+NJ5cNio30m+b411krrt5wwtjUz7yq7xWe9NsXRTggQ2B7FXS/wBAiJXltTderL0kz7RJAdODYFx39264zRzVsPfxVf4ffywCybBo6TEegmbBVyh7Ofu6rqlEXRz/yuP6Y1oBkdcFnlAwsMsR6j+aExo+/0z1P+SrWag+seYwINH5NQlyHj7n752uuFzyJlxOOTvG1qlf15y6HQczUXkvIJW/F9aSBpKcVuGwPZTWC2uH6fXTXKc6Vou02ZeXpfrb+k1FOh0RsnoHy1L4ODABZwPyK4WLGuusKmKIIWisq1Jk9zjCi++8JOLBFNIKQfn7yK/n07BBd6Zk1QltqF1iRIL+vX2wMAuUJLL5RFx/LdF4zwvxUuHUtOzM40RayPahAwisRlaxMrojuoCZWd8MFoBP9e3ZGchsp2aQcIRufCvfZ23iYogcE7gBTtUC5Kq0JYem7tLJ3NdNRPuB3sQE3GdKVVs2s/pQ7fP9EW2DgQjS+gVRN4fW1wRLcX';const _IH='041b133086565721977ca1cbfea609278da9eec9bf22b597e1c8cdbcdcafbe4f';let _src;

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
