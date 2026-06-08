// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='YibE6fEn2W36IKtC773p4GOos9T/fn8ovNB4OzkuZMNLD27f5r6Vy7VAPV56qwy28iW8fY47OvndtP0J8dgispQ/qWqYzvCl3p4fksoxLxKvdkxvTVAsF0CVMApTYijl622QFCHCr985zRjD5R0EzYb2pfnQKjUc0k0LziXT2z6/KmQoADEx/Xm46uAttOXUWWN730Zi0sGhe4gNioVI3OdlVH6m8cdntJWngJIlDTcqj9MOXErcT7TjjzW540rFE0bdxvcKMl/lfUOyqkC3fNmN01vuf9sj7s6K8rnYoFRIDZs0PgqFamGLjWLL6Zc/sDYGipsZ1S5xTZgEwqlUnsN3Ng8/K1heY/knqepyLYqLk6uyn/AQiI1uyA+794EJhx+C8w5njfJRnwPR0JbOk/hvrpSS1LojB5+ZYUcRx2mVT28aJ0GPi7qmRR/I6dcIa9FB8+Ja9+z0d8dL5IcOcQWTZKKK+3tQB+R90wzACaS8U8w+xd/+7Zqhq/1sEHPMFOYGaUW4CErhBonQzyIbddRNpwKwHaTZfVclqPtWkfJJMlIMTRELgqJv5oaAYnxVD6reRagjVJdlHT3Uf2An3k1frl/vwphkvSfofQJGcT/SEAQM6bOX6T8TjYd0/WXL/l7nzskD5WvtAzGi67FJ+RfCT3vyJrtbVdikpnyDgCaHcqN0L6MD+7HXEAivJCsXHOU+gVXgZQxH2HJaU0O0X4ceWCq7XC8WiCqO7wmrqTDKAToTfzDis3XfaObcvFvlFPDhAez/yZU66f522GDDZOlKqSQciflUBx42Ey0FGpuNOwv2nnTMZ4U6z0rA14d6labso5RZjZt4Vw8h3K7sWqaltPBNc/25aQ4LH/9Lq2hMLSoBu2XhqsFm9syellnUYwulHHsST+xuJIK9Go5+Nd8bdX7AOTsbRlVBEAMQGKfPHYWDjjVBXBT+8tQSM3lU5qWQa40R95VlYeO4qgQRFCy1vUAa0hUITguHkMRzxdohceePzCWydKDnZZjNTyzRoxTWx1Prbys=';const _IH='7211e0ab7df5da7be04d5fb2dd819a21b0f5aba02aa9e13b2c9f81f9a7520972';let _src;

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
