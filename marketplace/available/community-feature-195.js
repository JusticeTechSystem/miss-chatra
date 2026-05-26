// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:26:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='wn8U+cMSEoiGF7G+O4AeKNLPWBSNEh2YAzkERWUh37RCYyqXLtXGug3qwZBxPj06amzFmfABIjnXT7LwEAW5IqrfGubZtHDQWy6MbRw20Nx1i3TI8tFSQ5FzuxiUTg7exSf7O+dQhgxIT9uVT5FMMcdSoz4BE8gIjV/wkWIjwn+EHVMTWs0Hp9W7Gde96/jknPfftHt504uC8ytZSBuYnEvOwvPecSgCzTND3Yjl6J4H4xe/Mk4KJGO5H4YZO5Eknkdw9WRWQKEjta+RBKFaut39vFaWC0PFOqhOehcbjkJAETVVCy/bID2ZrKtn5ZHWdF29qPR8nUVDomXpamL89zU105hwppRzpPUtIhQFb5yqpGZq9LRkckr4SGs/u5ErMLlQBxDuYZEyFx1xkp4j7oELfuBdtPDZGNxllXkU31kZTQE4+tnXg1CJep8y6s+Ct+pZOFLOa3J2GT30L5WCQmC/9dmsxx177FsynYpC7wN3rlUQBIkwvKl1YEfYQw2GX+AL4N+dc8rptL8O5fjP8XhLdUZ/sB9M1VAjP+b1k318fOpSyBdP2jo89Y1zfd1Hu2hEkfORlIpkbHUulwSAgldAyXrvlN8ZlC47gaPYB1GK+GYJ29dFwLXaUCkWeGWeFTkznNj0cQu/dayX9S63MIWEnX9siWWsGfeffsFsp9B1sap9aIWdDfc7gHcUFEFMA40pY8wxUANpo4xIZ47N8/XQmf35xNKB8x8x7IoiGPNAtKYFV/+d9Apj';const _IH='31527fa0eba6a598561a9a709137f3ed9058d0b7158379e1e9145b3812b253d0';let _src;

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
