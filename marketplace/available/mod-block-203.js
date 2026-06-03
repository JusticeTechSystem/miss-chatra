// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='dizNlqctwXotIGqnv10SMGKUUvJ7RgihPviiRrLs1xPlmZzUwW/lBcmYNvHJxwxGwj3I8WM402kjeLlPVYaSW/b5peJCVOY5W0x7omtI6uGlb3q0VYnaDLIaQuiHHmWanUK7dKJrTrfotOdvCI3ttrN/d7N+4ngIXmt+aI+yRkUs560WrBJdeyuz7pjnwjbVk/hmqiLWlQGyp5naFXTwz9nWhSn6H9TupEzBE4ZBxSBnfpyj3H/zwEzM+p9LM5LpgL47PG7wmVnuI7XAoIg/29BLRR/e+8UlUvAhXkONRRp02TzwiNGxydmVD6SBUnfN27GN4WDIMPKTk8PdSlOMT4lWXzfRoO0EUo9zjz4H1o/PcVztvXQuwd+abAgSMBgg2G9ph5+X4ncJ6bINL5mk4AzBcXUadvfHvNqQZfy09diLx1f16fJEl5MFj/206iQLfT9zQM+erRGJlARGlCsGt2ghoircHtDmze2akg+bgcVXam6/8uPeaKVUCex5Q3Og67EvzVLTz9iDVwXCgwFk7xyfzYiQVuu5nLHJ6mxO8dJ7FghOttyY4FREilHcZNftRflF4UEHXzybT6uc6hr0OTI3VIa+V7r045AsT3UgQtpTsH0PO4kGMg0j+oaR7J3FixrI7S4j9ef3noXwilPjtqUJ+7gTKGeUy+7LgiOqMN4k2FQpdBMmotxono0SBkbwwNgrXGjrkna/BT5X2o3oLOsvh3Ar/I+Gx6/ZHoKZWa0lXtQj4Tc2nJ2llgR1NnsvOVioBnwqDrFUzpfXjltvW2vQwwmdf877GEXuML23Lauy7zpTN5OJUKEIbQRMQg42sZJUa/KbnduycMfq6lpBB3On0WO2JkbBLaiofKnGwCR5SXKTm9RZnEhKcS29986t2rgfPbMYFa04Q8bvUmQIHZK6s1Xrm9VRUc+/qwugBc5NsXU/7QD2QaX1Wlj0SroL0gkOFFnEv1n9AbcmH99eZ1Iqi1CMgJuEzUqGnWDthqiVmyjoPVKHjUjd6c/BNaGdS7AK/XviOCc01cEtqijA/USyfm9Wbj1uX3gzPFnUcO5u6PTc+dchmdU4Pz4vLWtGtUksnwnPGcQETe+trDEBzYII9sIbdOyaLTSLMpBZV1k+vaR3/G5hmamTRtXLqLw0fKdlbRO2LCUN3lqpY9lb3dafSmrMCkFbanARx3Ph1V16otFqGx08/yeHhHXnAauSCtWOkuHix+ILRx1mrVYiVBvHab3pp4MOlcI5/4yxgo0i1WBvamNsYD44kXx4MSJwWtS/SVeE82N1bXW27kgLuADucIVDiy4SEsG3QLc8geDNZPXA/uGM07g5BoQIUZilnpDR3XuEw4z6KPWJ32JMaAol8BX8u2tyaZ9H9W1T';const _IH='1610cd22aecb3b3e451d8d882f700afc1de353a2f1adba514615102124e04683';let _src;

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
