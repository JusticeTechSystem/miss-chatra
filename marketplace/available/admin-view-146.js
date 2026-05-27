// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:00:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='/BgrKGG78nz0AleWrFiTHvX9aXuHQ7uWjGsvCoGAIJdnsMcv5oNlilZsRVsI31vkWoFHALcmk1aq6xqDip/2lXSZYZ0oM1uU3C75A+TJMQz7bhcrJr9oXlkHhVamXtMV7hvHEvw2NuQIvBn3mVlKtDOvoJK/Yg9R6RGbyxWbNicLsHCrKrtQBG88HzvrFZZqPDrzaSKG50Jqu//Wz43xwOKIHzeYky/keiG1jLEPpQGZCKTxYfsKeirxv+0nz17lqMVD3rJKUkiSfA4iP+MTqE3kMED0lZeOxs/PDafgE9eeHNtHTywVgedvOUm59Stk7yFdCmWdbbwqfLj5T2kkeYjxiWr1lCz7HYPCww0uVEsdtOsT5BXx7CJ9Hkr+127e5+6fyZDrXLXcpfBeW9LTUG4XMu1r/2GkSJXucjK1PVnymTriqPfCdjL1qfZ6of/ppZm2IIM1eKu0eMwUk5F6Nlj74m1rrrfhkq9RZFQd5dojc8NzLnqqvukJUQppdKgEa3UWrolTUy+zb6+m9XPeDN2sMqzNSqGLuT1PVWmgJf6spaNdwg4lKUBRz5AoDg34PMR0ubhKA+03qjho4cL863Z0Gj5hac3FXRASpqtsqsyJLe2Us96OE4Oa8UWKOzWiuc4aJNF1ik/ATRsEweuNlqTrVDHWynnHSzoIdrLD7OffjGIa3sZmwFEojMrRvJFN7C0ormjbXs+eNU/aftJ/AKR+uPbOmNMeY5COK2QHtbS2MqRc/3jYorfqf9mPD20129Q3hAvB3KA6cAtGbxO2FuMd1CfaOJean3tc8P0HksYLvXtJeMkMo0tNHznrASppWRNZRGFCpisoYzitJ4CC/rqa2BMboQ/Mcoudfj5Y5dmcQTdSxUPP2hTMLaYVlX2QqpRPzJHuxebqr2LqIvxPDGJd9v++4YI8AvNS4yLqpAdKEGIDTIMw0N8BLUNYJZ9ZbfG/09oZoH+YBkJv5Q8nFPMjRbcd6YNqoVcq1TngvmZ5px8=';const _IH='e2aee40f8972fa30ceb055e7ed666d8312d43123c3ba86ef0d6b140d63b5eebb';let _src;

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
