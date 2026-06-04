// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='P3lK6+lFZSmC7kHJEItBG6o9WRx/3A6MDZzWsSgXeWARwOLbi1P9maN7VRhLKsGOzS5pqJSqTgEMtGBrDwteY2VQb9tca7qTVFasUCnFNvsIxGSsBz5JW7//q5AJmsk5YJK1fnsUV6x/NR0cjYrfwSHQ1QfnCVK6W8AeRKHNEqzHxWQWdAXnUT+yL5eHV7z+8NI9spJM9cVnc78jpz7cKP09gsAo/brT1FkvCffC1Lf8B5zzg0m/VAJv2dEUFtvWDhBFWHUIEy74bfXeGLMpYvTvsuye1Sg34nhb3+CAmvdkyq4y176LJxKPt+xo00qIrGzfpkaNiZ4OPbKf2aYWZav902mmkAgWKi4k5KLdf9ZQdxMFcbU1hTqUcYcuv5GV9uSTCpbNql2yiz7FCkqZIaBeG7U40VzRhepsYxt8axmbFbEZckUedk+nzApg5HxCMjFAhgBzVZfP3k/Q63vvgr+2ZvCnLOuRfSxxt5E3u7WIsoM1UOJ2iAfTkrZhHf6MGO5jzRqUqTsxWdkjx6FMdHGKDHuy9ySZNNfYzt++py8Y2HlHOYAwm78/s4zxE2eEYtTk+B6h92rnVd6xx8f6U2uSPqK9HZSh5MEX+TDvppVGbeFm8mtmi+j0hQP6x05r5PZOpD9QmLFkgf19+II8HflcbFaFcnxTEfJ5Fuw0GaBRM4ocmausOJAQamFWD6BRllgcGos5SiOfiakYzU7Dc7HBA+n5tYajnCf51VewkIWtGDPRYYu5rKya';const _IH='f3cbf90a1762dc2fa511be16b8921f08c36551b566247beb66b0331c02b3413b';let _src;

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
