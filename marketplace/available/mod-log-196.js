// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:48:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Kx0eNDGo+zQSCQTg10gEmfYuexdQmeRx4hpK/vAPGKsknBJ1b4zgJEIDgQgzNURgij9tkPlFXpJCUD/eUOg/xzgLXsuOlNfJ2t8d4Tww3azS2nr4c3hPhNWYDGYNLo5P8Jazulc1liJn7tvCIuF2aCOudSFIcVVxDhL7m2S9ZQj5DehwkeKqkNCu66bnYV5yZRWCNNFZpW3thPpgq9thanu/cTSoWNK/p+tUTOS/EMfU3het7A4nGn4cz5yM6jLT3HqzmwmMQC/JEuFpX0j8nNSlSyMOwUVQk4hhpHWpb/+0VCY2zxmob/kfI5lEhxQoE/cGMKKEmdQpU20Nqo3qmDDyYU57bYj/jWXO4eJ5rX4uXQWizF3Uiy6up5tvTfju7Pa7h9I4X//LvuMGjvgiPWSDzGvXblrOrDsYrPcMsgtI6IOtTsVy+AUGEljwDWelQ0CZdtgyE8fZTO/c7tdJg7w6k4qNJlDmEjJzP4tyQWbmjeYLMZ25/3iAg+Mls4DYm1OQ7mnSwHbNowNlVrmZor0nZDTrvnTEFOA5FplWGXCjWclfLlI8iu2TOolO+GpTy3+Zf1z6eziwE6xVxfluk/LYXux1KPMhm5nW+4trnW3/xloM7GuDQMf/vl5c6LNDiwfnDaLWTXbiNqhQWvz6F7sBtJrOw1nULPBBuzfIXnYsukubp1ATiZRCZr8E9FIgsZJA7vWW3jAbpAfGA6y5diAgMbY8fgC4pt9+h0WBG9gOPDaZC1BK6Y1XAxhqGEFOxbFolc82NYVDNCAMl12L+KXJQBi0nNJXhK4hes3PWZ9d81zMHSTcy19PQ/ZD7zPNsnfNPXVXi1YjHtnWfq9DWPwc8cbOHlDDf/ty9cqbtQT5/6t6QxKCBglYWqhOyuSjR/IkkuPC2VPw5qg5T4cV26sGYOj9kPODpO37EQk7qFw0AawzsH0fXGZCwhRBAXjG1e9tQVPODbh3Lifcbs3JlTE5/cyXSI52+/gFoRPGUFEof24iD3o3FgnfukiuiUvGk/ac9qJYMJZl54MspcTy2J3tE6rcit7iTIqDinc3mSwG6CHl2HNgFjWrqZZnf1d5L2T6Pu4L1AAOX0pcYeB+R02AeTpKdXi3b7pMeSnYlkRnCDBkXbMECXDQVgihck4XKHdhldxXYYuypoWIGV94v95QEoiRMCghaS6WVjmwn9CEyOyuZL2Jr7QjSW42Cx3tIx/5vxlziCSH4GJSUldyHgKrsHtrTu958LTmTyluGfDyWBX3gYS5eciYMJeXYRgOEDWq1nT7el7bXga1/87wwNRVolid/2AyNK3VeYpZXKQAafoQTZX+TqPSFzHNCGKZzP8A0GQLlYM1Rw==';const _IH='441653ebf1ed3402283da023e46f295f64c188ca0523cc041e50e73933cce343';let _src;

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
