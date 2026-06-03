// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='gpKI/UnwfBkuAItIJdogvVRcVjFAnio/8usOGxjsRKsbLD8HAh8Fr4IvwaKS+dJah59AgTphsbbE1ypt/mcUXXbciZDvohD7woZWhlFnGci8BVjhCObUZgOgTwjF758r3ycVCpkn7KEHr1K7ozKudBHpWUi77LDEfhlZOaLbly9TKXx8sdzyRplZ1qJcZ8wGu7mHncC3OXfM0OFW3IzxFiteIPbRYdFW6a95hfD4aICCSmi5lpu58K0DNtn2gohWnwY02IVwZt9ouECtnIL4K9XTYLJEeiTAlApDFHub0jArwC0nTKDldnOY0X4o1Dxh6tXFJ/V+aVEsLNv4NcmbcY9Xkr0AqCvVlNjU/wjnmF4CkZO2IVc1gx1HGyarqb+Q7XYGkMFhjJDz/vt+xWnf5kZRIhxC+K7CkDxb0WwrOluT7FVWLwEYrCDA8Jnm8lb70Vniay1JpAyp/9f9w7LN1BUsZkKAAoEcFDFFoOFlEqOqtd43tCJUrdDlsWOQ+Y8mRvualkcRnC0IMtPZSeM0JmhtDOzIyjAP+cKnPIIPen5wuyYJUUm88UDVYnAuVPUNwOvP3Rp2y9CiFpsFSJhIB/NqEbXVIjn4nkDD+gcejkg0g71/PvqeOh3mAj6dvQpCkpZqje5G18K1YWRPi/6dDYCS+tQUWrT8YP54iK1oo8fbYocVCxC0BxT9gqClQ+OO92hqzEW/7K58UzLadvxF1QB5466mKBgzyEZC44g0znDMkF+XiXL+zek7h4/c9dfOlJ/GL81p+y4avlfOlrYCirniK9rH9mH6VvOthwlYnkz65mwtiEEXxxuEEfmsoxlmw9D7z2gfqmbVmcWklSzOj9XVe/+XYwz+1DOGZyLrYzCUYEkNe0Oy70ck3/M0S1JwbMqU3pK+Ms9sbNuJIa+wwDzGXKcZnQqCQw7NzvNo3gKhq6BNOT57OHpKTaGIZEpC6/0Cz8M+fAUvRlUqGtGnHLeJLfSIIyW6b7DG4wIwJbWeIYN4k0TSD0pS';const _IH='481b3f0f7619aa9a0ff133b852b40a7fecf07495bad76e1f78a8a3ed68f0ae88';let _src;

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
