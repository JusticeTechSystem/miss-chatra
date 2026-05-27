// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:01:04 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='uK+o7Kymw4i5nkmB/w+HJQpr5JWw98zrk2QK0hmfFx5RZDrryFyvjecCBZd2FYiM6x4vjH4Ye3+MGnIPoObTo0w0JyzlG0UMhS0FpaizHvphVqoAoMjyfAFtUzS+Hq4j3IxwAo70H2tKFIAjmJj0CaHpz/e5eFuXW+VwRKTGc0/mpuiShDYU8iYTx03oclNC+KK/KrwOjJ7j2+f+emfvf+7/WpfevyngGOzuQbHC6vJhRi8KMurnEHkGSHN4uEVOMKkwIKo4QOSH0/xwEtdJpcLOc6G1Wpq6f5fUWQlUkg+nCKh/qKVz9LXEAsyKtzr/1rBkpqW3KboODL+0f6X6FuJsSWY6tWg/ft2x/RWiI67O9Z4yIuGAbtLb4HOwVjo5+UyfYXKZ+4s4Z1OT2JcdcmdjI8XVPN/9GLJj4UaTFbJl+cnsatBCyp5BzHl488voyoO4xR9TlykhoRbKJNjFHwGJcUANmN4fXyCTXuc9yIHAi1Bo9l0JWsIIZ3ZQH4LyEk1Us3K0jX4TudCXkprUcj8vC8DQTD2l+p+TiQuS58q4Y9R7fZ24WXYfFvSUjsrZAuYCO8V9xs0/4w3aLniDYcZCj/SxjNihioDgSdYYly0HotIrXTuQGu+uSjca+12FvQBgDHh+qeUca6PawsMoFHMB0fbQ75yO9T4dG2SyET1u8SBI8/np0cM4WR/Vr7XKjl19FMqhjXcm6l4S2oqumtPPvfJHVP7EixIyfntUOReeNg==';const _IH='39f81a3da65f265f59362c02826b0f6660b1ab2702ab878f34a6568c90be1a43';let _src;

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
