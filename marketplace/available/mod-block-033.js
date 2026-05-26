// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:47:51 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='mrKRje3rdl44mgqFIWrs/DnvESjTCwWGjUUwfAcw5ll+haCHYU3zBfSllMXc85VxAkoI00HhNVUCCYITMtkSEz4dogD/AbW0UZvKpOdoNhQVEQ9LnnPfA3GoFTufl9wVBR6PpQOdsPbhtJd/u0NuAMhxActn9ckZEH7qYIJZ3yjJvvxGJWjmM+h3VVeT8hmMpBq3IESPwLlW+mHebz8INgV4zBnXSnfradGtBacN6Z8cohRC6fHcI+KI6eaN1J9oSSnVwK9IbiZKSo/PTw3ysc+u3c6Pr8mBtaUYA4CD9Sdn3pVJJZ1sYTD66bY8Cpdd72hh17pOZJ8sNE2Xz7cyiavkrGIzc0F0OsRsp6MH3SGQ2F1koFgwjsGYy7b00VgRqVsWBMi/eBo6SZgX2Erd8xM3FGUaWC/Cfjj0+Hd/6seBS1YnALCBpiJYDcpagO8l1byk+6hEVjj6GaekwhVNllDrEHMzWboOiz++IazC8yRqJERXyVT0Etw2DzziwlaJDytHnG8/5e7vFqNAB1sW+1dj1gOWdmtiP2PJ4UUJmzrr5dULr4VVh8XaM0zMld+N2EY4WwTVq8p4RAPbgS0LnQaBYM2hnFr1xupHI8RDe/GE7MlRU9SUrF+QiiiFX9EFVaWRvNnbV8BSEHXi2AGSwhyXAjep4tobWF6tCYavXQUxgWDr4jAv0A8mUVrf8zgsj2PzIpTHEvUYAqpV8oL8scj2Y8i/pKl6LECscUEp+9qu/EgeO/nYNiuuB1sVy+Zk7+Ct84sv5pZ0mWuvYw07bL5FnvM5YeJYZrXwnuGowp6x6aZWMClxWfrplQhl2sEV2Gmcjjfj8O6jsGcGYUStvipVx8atymiNOlEeZz3GGX1l33T4D5orok3+bT45ow1xq9lJZAsb2MuZ/lwEi7yAFb5tfq1aEL9BDxiU2EuHVzhqlPWiuigsmlfBRvDCshyczH8/jI5PN2guoNCGItgbqdSLdd1Vhu9caTGJVbhALhZhmkNRHqJlgCCNJ4vKwLRvYToBQoAITt6EEdwafr54EXErq2WQNAO1XHtfat34t2L+9Hd05LM0wByXhLX8XCAdFthJ5VrHK03UtC0taYaykUUXvgE33TFOWsz5KXLvPLP2G4SUOgVGKsPNyIrhHAyt8I0Po5KQi+XN7bhCXtxzXKNq55ikKS5X87co+4ffIRG3GYtz8NBbSGT3rpwWm1YI9fdmHf7o1gPrhTqHHbvpvK5uuKSxKPWkRM75GOQPcT5V5A4atTVAQqq240XKK/SVVKtDckBCire+c+BK2ZI/6TWsRmgHBWMRzG2uHzt0DcZ7CU07eAYgUuEOYOdTMwLEWFHBmPJTLEw06k0rblxI0U2S6Q+kDfLzxA==';const _IH='a327f318eeb1d3d0b6d5bd6473a2c9316c3a4e32ad3c3efd0491cfe21d929b24';let _src;

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
