// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='XjegLsaKPYgYJvTr5J+d30mCzvFbB38HKOddyaWV1QWx7zuVxlM+uj5ED2aKMT/3u16j6qm2+/5imcDUhj9DJ+vpr6Q0Lwrc0J+ksQSbjx2dzQnOxo7IlirLYHSTWVHqXy1F9tY/sF3M6cfdUpb5XAEgEfqOnuUkWDG5cFqtWCRcG1NRpp0SJhzslHbbe6OVrjXP0ArsASyXpwXbI8ZP2bggj2pV8XEjLIoRC7C5qwFV9o6ZJkXieNohQTlvoWAqYPO8db8ZGlr8Vs08oc3IG/GBVOdG7zsPVuz01cJ8TOhHrNtHk5DyYEgZhgwYoOMEFx1kXQK/hSNc5XcGuQ2SCe1lGvp6OFR4lTXTcI87zrMX5HlqLKOBsNsCO6/OVSXp/fxhe16UUMC+rh87+UWNv+2yB0JnIC20+D8T3mFUb9+YbWXBqJyrRyljHFpPNBJ4DfrLwF/kdVj+K2DYNVczd42bXZLguEdir5T1DFOH6Si3n0TnWbyDkWPBP5QGF+geyMqQ6uWNn2Px8D1WZN2KN+JJ1nG0pgkdo8IVEqjF60kZXrTtdYF0Rjz3HJL/mtDxulgxrPKKqTWlbXFwRAmK7B3ZMBYibkE9k0/OZiDxZvs8Gk8xSplxyTQ4zRY70XGp41kNwaKrt88FJmF9wznoV1EncZzXNkK13c5chcu6CyqraO09Fxd/g2ZpzsCaE42TzpRTmBhyKVEWbfGPij0TdfGDGASzpICM/LmuBky2DFtg32eSJE19K3pXfag4d57s8RKgkngrIX6V5ctn1r8WVo8WDXk7MeywVdoi7wRc2vAKOM3db9xtXlU1tBsNzBDWmPXywEy+c2Rn62i8Fnxag9Cq0aaSroJGpZAMirq9Fx2386ANq6sczuAncKdEgzoRchs8Ui30BaJrS3d4PR4I11guTZlceS6KXlWrCZflmSAZyyFFplJgbsIVqjyw59iD9LcsykP/UQULc3F8pwo2J1HyUmXAP8To2uHOhVNOwhVKp00=';const _IH='2d8eaff5903cd29930a5dbbe7f432476b40be4eb031dbc5c8859a75ec44c6b67';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
