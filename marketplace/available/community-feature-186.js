// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:29 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ7faaT+cS52lU2pLZMfbAnN8GiSn0Y1ailTPo+CBhLT7jH0rUaqR/AQRO64CKT5RmYbSjgAA6bxv6dwLrwthSVNtXWEOe0AhcFQXzvnCUPzLCOJBISfzclkYZusvOlPSj3iFihlkIGX+4xCfFWbgXGuHXvvArgP++6B7o4DT1Xn3qrGoWB5KhwVzFmjH+/bg4ZMzjSwGLWQx1ycjHiQXHe1Gqb7deAuHzh+okGJ9GdfBSq3kVb8LuBUSrPOeJ/4VxUJIKiiF2ac6Y2aqnB+Uqe+ueVELxzVB7RZM2wtu0tD3k162eyFMI6MUaoKX1YjQGi7/00cy0QyEmV9GVriHtmFhxp9mSsNqrKvO0ihJwR0Qy9bD07OCGb/GxhKa3r9rYMIzU3oDkL6eOJ9j9JbZoYvbmr6AG4x3GgbLJJ/n8uzkKM3gLHeNC9RryLy0YZrVnUwsgG5bzxwZNihEkBo4EZ4plWIdGspJGBbJmzmepEQ2dLLWF+HgFmc+7HuPEztHD2Ow+J4P0KAayoc2hM718x20LJN6JlNKizm+WgeRNBvTMRbqJmiWw3r8MtOFIvZmvUCki9FWQP8mR7pugKGKgnc9GLLJ1PSs4kTdO1qoSj8vx/G58SNsImT9n1Nn/g4VUtFjsq2+sPJ94tJgBZ8VavrAdfMhQsMNAlcXdJZb6lRJyqddmYKKS5qA10jqeR8YntTOKPJs7XlUyFED7Ox0YHnamQVj0E8Ndw==';const _IH='c6427da0e97b082c8f3065552d11018818f4de9335c9969585bf3e07dcd6309f';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
