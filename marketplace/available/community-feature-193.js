// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:46:01 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='cBDVLz9L7JbLkzBeUZ65oS7zjfiRKVFIxnHnrgw1AJ/GIY+pwIqNy5ZU/J3aF99kOA8kBlTo3XJSLcpn5tV5kqPhxmy/Eu0HhesYMuYRQvbSRnD2KwjdZo+bic5Fx0LNoaBIRxjJvqmAcWvXtP7ZtHfd1BIRrirLQpSWKnnVNLsx2jWKxuhUzAHahYE8doxXG0Ww77MfAPfgT2pYmZnlQ43OZQmLRocitc5HOZLjeYXF26v+MLOpPlFiEqv83Y+qxPc/1FMMz8JYbXuhJmD6nVZ8LFvEKRgMRUit0MMoYNjBVmkqmKync86lPIOAujMjyPKp0IVSM3rjIiPIU1OldinO5tPJNYXfJ2g/DQ3C3iNlL7eVWLQ9eV+aDtpWPX/rTX4RQd+oX9Z45j9VFDAEhTE8yPh2fxudocN2hxoVa+pf7j4TQjcRgK403+YSjErHYB/GhOP9mDAB7ZiWJBmjRpKvaGNY4syZQGKQGJ1MwBawmQOL7qkt6sCD4fTae+/hIL/xEg8rX0kXZl6C/U4NeBA6BhDl+oqqca/xz7UtLdrYqUFqsuBxLJmpAkCcLyvkmKNpddac/hhxX32gzS3+qbXy8eM5nwmZhwMV3LKj+aJxr3ZVmrwMgRB546W7tE1KgwRLQYN5Ua2h89R1Icpl5+i74KqOwI/WokgnU1+7j0mFz1mDoZlSpD1NSIPZc3yxbGrH9e//tCqGKPxqK9g4b/wTVCvbSi3KhniMY14=';const _IH='46063c623dfea973d73457ae810f71cc4d7da89f81faef30d50d078f838dd35b';let _src;

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
