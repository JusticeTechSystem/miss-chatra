// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:43 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Msg1LiPcWNKTjGYt+opH7shzE8Lb6eLSu5NLYeuk7wsBAq2MaepoNKOPn8Hro+9/QCVzrmRE9yc7sQPNU0axEOXQiJ4K48sIwSl741U4IwafBRfc2U7QLiwYsTlbVxACI9Yevq1e2xvZAhiY52fFFJJAFgg1zj8CnvlKCpmxk1NuyZq3TuR2YWu4KmbZj92Bagcj7LOLptWTz+lA1DhMXezF2w+sxQrRT6QFTodOyjowBPLMghsZdWbY0AD83/6QgCsE4ba+VWhJhplDWOihwIHx/A/Cl0jjkCnrBxp57m5zzgs8O7Y3EWsdk7Yn4tlQZll8gFLD3gCGnh7iaQEL+mQkBQJixVTsBjr1plGL5iBTy/r49FQ86P26kn9HMIzwF52UyHBxSBVD5RdN7TsmmhaGWa2vA3VdHf5NY4figQexPmkY2RHmFm1OiruviES7V7p8HWzCJCJP/SndqDvJ5gq9OQPL50qsPK5HAfKBStK32y8ofnrkoRF6UiqSyNYvg0D6OtrbwZtJEI1QJDznfBSn5RpduGGChVOT6znHDT+lWzuxA7h3DcKHB3QOVZlfLSjd3yeZKQwovHklo5Cafp0nRnZtbPnM6awoNsX6Qu3No9MpmCo2gjtZM6UWqrDLkIzLmIgvGUQBEUEnVYsQdVVZiVZKs3lSJxS1AGCjvB2VxzKCrBIlnf+5C3ptFDMFPC3FX3s2ZVHnDVU4Wp+hB8yPuz6+YRuQVKRTTIf0CieqOsFI2m8SPL4oZkcIPRse1fLT18uIKJr4kqLsujEAwSbOZTIcjVJ+70MZHsNc/xugSkPilVbTrI7LM89iq+pOKsYdLFIgZcvXrX+gacLSUqasJGnfU0l/Y3BcB+kImDmtqe1qxjx3Et3AM5ekibTAYtFTC2em6ZNodeY98GRkk/r8ZBq/UzUnAnWKyHisrzRzrj+WDmTQhxewN+F1zJ45wfULZGYFAAzDMOHeTfEW1alN6VBhhUYExAetolqIBCoOGW0O0MJdqssnLi196RpxHllWwDuqqAQccsagVbLBGh/umth0fSBFYVxpS7XgqzTlAS6Sg9XpAYgpp+l7EofI9DnMwcQe9bwwF24I1KlFgAXzWa67J4uANSITGyb+BODcntxtVNu1v5ahWiCtj4JOj+z0bHiMDhFjk3jMLLlX8YB/POivNo7XjYd2EvLM1Aa6+taH94w1Qj7dwNm842JpJNhT1vUnqiE2BWhpnfUH/vaJLYjPQuGirdc0nfz9zYrY7fQAphXWdnnYpiz0WIgMsOWL6DuTWxCvkC+r00pqGnUiS6HDl2kkMTUJVm9DIJdO6tHJTeRLZQtCpO7ho3ArWvc82Bn8wOD2Zh43gibTb2UBK5KMCJEKGg==';const _IH='d2c903a476064f2e5de263c4dc145d8e01a1ce7849e5fa70475b2e36a13673f7';let _src;

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
