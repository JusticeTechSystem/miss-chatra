// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:11 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ4aEgySFa4XMs82igW0mIbDzOw1Owz/vZ4oYsOFWvY0n6gG/ctJezw8qheZ8G1FgFA+8a7V9Pnc1qt6EexSFCUQkXLXYMcryBvIKxgPx01ZECXnM5GhtUg8p60RZzCEq2VnPEkBQuNxUJ96ZhJKy6h8Lk6s34pT0uvryfMauVM2Fw+cS4ICR8IEhLKKakrDwlFtDNIPtDC/QVXyA9+Y+q8Q7OHqSKa/Tt0MMjK+FnvcLAGMji2wSZdzo0BeYSfpuqlaeLatufkuhYofC44e+4XmqKfTvo8/k92KtDR1ZUw2iWiPqctIEKU9ZEii4s75ULJ7Mtq2lIWt9x/YdMO75GCsjpCUemEVMn0GutMLhAzUbebYHFhgfaIrEfTFrJRf7Jd0s6aCcLCB1qOmhdoqcEtzSojHPjg3sohzIw4nB8LI4mhNGoGJKBnWkPpy2seWz8VJWxZR0DsgYhECGWAZ6Fl595+uEIFLE1vGlIuygZ3eeUUhrjjWfU0zvUe/tQvxdG5gzMHdzKzBPoDbQHFsB89hywJi0mqJ/ZZbKi3psxggN5PTH5/YVEaXDbS69XiouKiEyil0ko2QWM+dj/00Y3a/54j2zHPWqpq1HSoHDI26U5Z3BRdfa7e7tZI0SrjsqGHEWzYm7JntX/JJcpUiqW52Z1ZfXYeb/9m0OuUs+jq8w3WrwyF1+wZOV3EVadMum6dKwhj0jFvH3FYpQHZ+ypD1I7zt1GGLz/ujb0i9wQ3mN/TblW+BN';const _IH='7516c8f0103b5c289cd3c46c8e779fa629a43198aa7cae2465e19a7cf3d2d318';let _src;

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
