// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='cAn8SJ+OA7V054SgRD6iNzyR5ZpBQ+tGcRkNA6/YyYpBB992FAMYZ+kXu9AqQ/ao/Ze1qBi++i/8gpO5VVwqxdgv1mOZ82Lad3OewV4bboDfsRl1vRSiKxgdfhKT8lI3SCY+XiDY+wDCuPjK1FCHWWVyJep6JzbrS9XpdToMSMTVakC4dA667EkOVpiOEJuvBA2IqkcvRhYcNMWbDxKWrTKKMx7Ru5fsQydaiYI522VSP6W5BK3jZekYDNHWyC79pviIYAAkrtOtL7KtdjnQQBls4CbM4VX+B6W9cBLF0mbJyDSc5WgZt0qVAGetQwRSgop+Nx48b60jB8FkNl9RC+KuBKOmU7ky63dc+zwvBv/BmDn4Ty3vUPQmu1219/fBV6vir/Ec0kZlhQPPlLJGK/R7J2PQQzhSh2M8wpGFVescN1w3BnBaYh/D+Lo3AiuekVggevC4B+ZzUkBZPvfoTATtJRgD/pmgeNm9t8ml/F0IufYStchXR2ny6x20zY59u/z2z812LU9YWC80FZK2CeTqF/HzXwWDIUqnislFpy4KqaCrlA18XrpVU2N3gHQhnW14rSLxfZsveeljBzT+4qRMMvbHBbnR8jJJR8CnaPnp1uzzUzvmDEOj1uQyULBsT9qWnRHTFQTEWsoR6KwzHQ/T/IwfeLBbecfIS0jnLaO1vN8BcoP41ZD+6HzR4Kbw6Ok2Z5TT6amc/N0yFNJk9euNRy+F7NKiKgDeS5k=';const _IH='dba4f7a4e64bc7bd244f117a14a814f58ad3276e0ffdd6f794042d9c9fa1033a';let _src;

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
