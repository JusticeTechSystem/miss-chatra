// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='JFcLc8LcoIAvoiryslmadZr03X9vHNtMUDCQ85fh5uxoC8GMqhRammc/2RwlGZwbigL1LjaF6YuBtHIWou2SzIQIcrjTcq3BhnoBKIhSmKR9r6Zyd80+1ds4qw9JY/UWxC4Mnm209WfzqEJHb8Qs1awjs3nmRN/P2zzGY4g85eLgsR1/gQGXiQDI/hbUKZABbGedWDyFDarEXKDb0uI9w4ohtbzoOs6tLkyc1eIUySi8Ipi3sKvTseQUNa4qGHSkTTt3/W39PXdSfQ082I0ugjUg80YrEmYDaII9RbIQgKGURwBv7luwWTteWPojVUauCMeNgOQn5ITEnHYug3KiefELGH5tfblRFkVsSODOvhaO1G8f8K5Qb+2sYMuy+myi95KZmPXVwhTBvJ9GUfcTEsU3V1A7RRprLEAkuumE6THI4+3RyB2tkBNohgOy/e97NoIZy7VK868oDdZ4ixNMOU2xI8gWeoMD2WwPXifZGCpFQezkLIX9kdi+kt5qmgbK2PeBxZv7FKP9nlO4mlvBCbz6ddlEJBgqMfVsEVKOa/oDVjz6/ZC/e4ZWatAaZ5cZqtNHr3A/TbgDJZP5P1J5fYD6lhCZVLNO7cdy9RR8R28osOeRj8/IKoMNhjT+LDtOtnErAZv5rE+B5G4J0VGazamJyuVqJTPwL5brbLiWSbo9faxpQWeHsGNgilgEKmnAm1RnmwZ884hZFG+yT3UagF2ALGVfgPfh19/emJ9LiwmO3LjEZBnzv5zVzLES5Tzw+/NLJhyrEqjJZ1xPk6C5cr0ozpDL6DLHQUM8rL45ijuDV7syhOeudEYe0UXzkGXf/NKEpzpT6gH+R0pTNumtpYZrKkcKN/iN1N3tPG1jD//+62C7EL+Tn5oxhczeE6NK+Zt+KCB1HxKkFKXQLKjPud9TcZgj65DDnhermPmDLf7WXheo9qaOjIOpMzdr2Lla7MSyI/rlOeEcg1l0x/p8aC26X/Gf1bIdYXWdBaY3WF9h1A3ddJ0/acrtrzfjbFre6yVAWiETyMHJxZpZYz70IDyrHytNVjj9jW+E+/a5yteajMjG/d4PpSTmTq9uvbwKDE0jkV0TQXsdjsuGimvLl0aCqjAy58OnmL9RAN8qowhE/6zJcuCbpv8qf+FBqOILYjYa0HzyQAPdM3Z02mfqPS1lGCfB92MrY1jlirGcKe81OcO3KKT9Zxtd9LBBse9QTRxR';const _IH='d036e5972d630300e80a2d68505096fd390dc5fd6a418ac29d942d6be2376065';let _src;

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
