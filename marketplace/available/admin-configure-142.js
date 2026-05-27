// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:46:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Ptd9hCOEMAHWjW4L7+48V9X0yWOB5hII1LNo2a88FG8n2JIX2oCVvP3fQFU7d5fxuC5I5TI3AOeohkJHkUM2ACw6J/IFwAA0jLG3aIxY4sdXtrRvOE6ht1mpPsmSCFOXSjnyTUEz0zNAAGKaosqAxdwYdAcTLF6M/DoADpP9DYpP6H2TRKEk5cDuJM0qm/issfPuf/ANFkb1iyK+J262QDMpCrmBdHM50MuKUo6TKQVAlpC6vieKnq16mEL3q9MHPiv7HrVjqY4+wwwYq7fu4VvjsUC3ao12MDh/LQPjOiHkeR33rM4BYQa+akJ2ZjEnu+BygEo1mAl3Aldxs35HlV5LXzLZBuDH2pvenHtY2D1f4sFtqhoYKGAla06Q5b8lMtofShVc7pjWuGrYh0GLz/nBuoKprfYSLUrxNYrUiL7aO7P5fUJOZ/ZW2NIwPcWrT5J505SWT1KHVcbbq2gjgEMwy0C4Aroi3J5rjhbzn8bVr3JaQXwB+0h6FoATaEzleOAyjYo/3eK5BRS1BxSSWBk0z4THCgV1ZbrRYw3oI072oF/XlPmukvDV3l70qhnfzcBLUK/Go2A5BKK2CelrNILnci8Nlwo/W3AXap4lmBCPOzcYQy2iZu/mwo4Pie2MJmpiP9YznHs56p0giP4K+9KcUQFLBv78hjps1fQJVZ0dlwSOy4zKbEMX6qDt/P0mT2FkseT2/1TodUEh+uPCLqyH51HnMKwck9xdu+rFPDeJxwVL1R/yL3L08dB6KWP2LX4dAUCuJTZ/y8y6QiOjS7glTCRr28A5pebPAOcuQxTkwUgiSW8TslKBwWFV3Crv/W+XKwldZZ4Yej7XnNCMPN/tnR/3/OW6F5P/be8p6kb4QiBx/Nc/MqjAcN1HQKtNByoZtM0N9VLtz77SmKYQCIYsRlrxJbAbrmP13ZBGOKREBsvhLsOXs8P+MqxH9Fx4JVypdZeEC+KvY2I5Jk7dVqhwFABg5vNsnRMfyfNsfGLnpO3U1hqnIUBgdNSpyYKPTw1V8bIW6lV5Sm70vYQocLbsYAjUrw==';const _IH='0314f02aea509e1a73f14f7f3358c7aa488cf109d7123aacae5c4dc3c1132dac';let _src;

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
