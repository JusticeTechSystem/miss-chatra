// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 08:59:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='VHiV3y7xuXv5020RsUQs5jeDxKk4JG0bPysfwPQsuEyh/xvzmeDeF6b18ya9zhUOssjW9BAbrMKnM2p1vnc7bY5aqJZbeCnmUOd8PjH/rRPswSHVu1stg3lOG/Nmd5ApLt06zvlA19T3BHaytgp3xEaGxloDfnTk0HNYNbJz3ybgzgSDzK5J3VAozldSoxwSkU4VegcTSOLLpH48W9sqjdx0iLYAw4bShft1jWUX/V0NWxvb8SgPAoJfc6BoTlUHQqFoYrRo4Qy28u0MTiywWzunEhP59LWk/OUL1x172YRY4glacp7pmUy7NaxnjuJlt+e114/60oND+G1pNX7Ip36CpLfV7lvz4wuWZ+U2qwMQXaIklGKmLuipH3kDt6FT1iTTdb5WVQwMpXtngmWDbSkyvYNJpvN7of3tu0iHTq9NfusS+zFhGoUzJ7So9b7CLCocBSyDONcLQ1Mnf4Ih7bWw57Mb3q/FJoHC2pti94jhr90tKyLOGE1oBbKgnMBQV8dESDv2OYVRLz7omtIVzAcIQLT0+m3XJE0WviYESiVVonVo1bXmVmZCs6nWmX/Fk2zfQJwTDOASOS8cSsIV/vrOujTuni/QNnWxbWt0faC6mCoxBtvzZUtR1N9kK55t/ckBYrWIXR7B1l+2kNuQKzpcrxKBDiy3FCZeO6wJU6t52dMsza2W8WkpjRlDrTCh3X2qXWl2R9UN3RXPUF18iH83FD5FhRWLSdge4e3/CXKHC/Qsr5m62pxRkjCvHlq0NJfeyR4IOkfyfuUkRwiUBuOX103i/G0wOzphyGTUwR7EyZhy5jhdTXTlK3wvvgkvSok2sa6xbg9QL28dkS5saIRN1EYiBzhxbMnJluI6Kd0CWmb1hCXjEZKKko6Z0bdTX6J7/PNNCr5kq8PAqA4FxENQmCDIM4BHxyXwa0QgSsA6gHSEfayLRD1B13kx72yZglMs7MxF7qeIB3kE7WgYCcP8TdRw/X6KFSgfow==';const _IH='9b149b3db628c5be7c811ec19c6ed04443dd61bbb63aca01ac4a0b1fda325ffc';let _src;

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
