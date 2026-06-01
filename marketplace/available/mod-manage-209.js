// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:29 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ3oLHmc8YClw0f1HmT7fj4AoXEfFJWUecpZUNco2ChwnBjMP+2tJULSshNEBGVv9tYncfDr2PPrWWCXlW8Dm5UOufF96i92Xvo1GGirZ8xYH1xZzk+KMEYGTWfNpw9Mrj6ZmHEkai9uglJxvLhbot7EGUhZvZdfy+pD2SLcVTc6p1daLXWoinCAItVP9HiLdAWlHWX8o393alg3M8V29/d/heCN0mZVMzzNGCPIg6m0S08oMBm0Gn3BAL+OUc3pgIAavN4fONA7H3YiNT3LWoAjNa+Bn+TZCy0KQKMZwXjQW3ceDuraMj/ZVU2n6zrZsiLMQHval0tJDEYrYtel7WFvJPmutfKVcCeBFnSD1kdR72XcJKj/N6tM7Pzgh2uVrjIxK3pJLV5L/sorrFIMV6XSgqF2HCpbk4OK/SUtj9OtRpTbcyrLtez/B/x4HIT7cAsZLSWOBm+B/g2vbkDxhDnozhu8t0KBQs2dZ4yMVZTlEJk6tJ4+t1NAhF64ynpuGTB61VegtWuVe10rDHPLOTx45uENhPF0Vd5tfdyfvXfiCMk0EQX+605LxtnGj9mFW/7w51ZDdAu5bCtugMbpCC6+/TA9p+gs6J0LvGmNlWBoZuESlljoHQeJIs2uCum1w6jlaCV3Nufgs8IDFyUwm1RQVe32foxihBC9//CwgtK3onRUS/aSkh1NeYVebOwpRKYsvbtnR+J11V8pDZ1ug5R+VhJcX8miOsLfVnofr9FUL6ZWuCF9qdrU1Gn4eSGn+/KKBCOf4OjArV4H0fEiuii1oOiv1nMT92Unlf0TM57cvaXmY1RffqMa+jY5ZMmZmpjss42FG+pwzUt73vaeMncSfUhv1P4FZzfcgjcfDsyhM9byTn+9J8sGaqR6AmwMf1opWxJP8BC8zWVOCXlFR5JIxMoyO70wGAFV+WScLWBxFKWPm+sUaCibLOpydyX2M2bbtUDHjNu727M5HUorGLI1f3aoyh0zPzeyeT7ZpQW3G8nyZtyCd7mZxuRki63gpP2wRY//arWXV+/sDPb8Kf6/Pu1gkNfvXlqNYdAgqOR3HhZ3I2u02FepwGVrvh6+B7pNq6v1KdxBqRkiYW8TLAbivWmubnseXo5fVKy6bN2S/W2zPxk1WTKPMO9GB6DvlZjUcBZ9OToO3E0Lua+ark8vfWibjcyiHhcjWX6qhrM7sJoKlZ6oHWe9Cvd93J0y66CZVDUC30XiyF22f+RhVD3XP5364M7dsCNgap/oooTuyHio1wgO3kcanZr7h19voZZoz8it4P3yqaGxTW1WBgI7jBJ/HHDtd/TfSpkmuTYC9+99TySzoMpqk7YHxFvsYWdXyiZYLtX39gSg99kpFpor9JKUf2mz2Ukj+ZA2LpKpkwliDurxSoCg=';const _IH='6d1501a8731c5b441781c2f26609f999d38a32ffe8594dde16ecfe90275ef64a';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
