// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:27:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='5PO3Y+BntVSP5tvRPpH+jONjpCZ/YfKTaBzG0HC+N8yTWmvIqP9wEpzfKY3h4YpB4vgJLAH/5PJa6RcgeWUNbsEDpvK4smli2MrFKvOzICPBXZK5+FSv+JgkArL3u5ASOu55uo1ilrsadYvWy8pBwbCSBc4p211UnN6PQoJNVmhcDjRY724fG0UpKcqEwqgSFJ2WsgsxzUM1iShug9X7lIJi/UCVoVVAx5c/y1HHYETvcSNXJ83vxBL+pEAwFFHrYsD0EZKGjaxmzBL4PBR26nyAv0l+G7ngMudYQsjkAMl5SK6aRxjZBMEE0tiN+miVZsVGopz9iZ9VrOPLNAsHQrlJElWeO+yn75rZx4ohiCkKDoBkvMd3OQgRBrUwjd44pg/K+selRPUUMxRMdPuduFxdP4kVbvV7Ph0tRlSkDc8pxkPU0v3/GImOwCqnQmktuIG6MkvgRqjBtJDlC6iPEvIOERm23ti4weXWz2F37GiBL6EBM7Bc6iGYB+M/dpSqLlDmgF/Ohb9WD5mTcZrIuAA19wfmIYVmYHCBJEIhOCsbAqlM3Bo7XRcSJXUxjN2SJ8WgU1FE2urzMCtut5iWp3SQt+/cBd6iG4XVxnVvJyz4lYrqAZtVV+yX26H4USv4RGBkZ495TL60NNiAdV3rpR9w3y+L9MqNKvKOktU5i4nTp3Nsedhwom0EP3Y7bqHff4U/r81/mzv0BffCaSmgVjMWXbdehlwpCCiwSx2/Hk6QvgsKX+D3LhjY2ahKNhdxyRvb+MAqANjY/PVpw20x+HB5IYQuAc8GrcXDl4WJglM25AGnCrIgtVY+mbWtViGYJvNcJqyQsIdu8mQN0zOVriWZ41nIbj748oY+FrcI6FYOcBTIbR0wptyscS/kjHcejWwHJXAwEPGZZGxckO0vDVNVXGqO0Sih04eSxhqX3i/5xz1QF47LHoOLWDFC72jGe9K/uOi2U7CyjOmHhZa+VEM6a4Mcr1U3nSpLR+3ABQ7zPie0BCBHpp51LRrSauQHk7rS/OMCanMYwOZaLk305FadlS5A9g0mGuqtvr1kHjO/3arDev2IAXbV9ASV356+AkJc+z3uHMFpaePq0jdqCb1Y5l/m65OcAS3qBASrYGCUpOAcaCSKEyOp/FWHHRkCvlNWpz/iidig4tZRu7fBtlNI70ZnzeGWipSsYJKp3DkV8iObzgZKqTCFTpue93mGxaeztW9cQjvG';const _IH='5ecc101216a273f40ca2252cb802d59aed512601cb87104dbefe2bb88ac3d123';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
