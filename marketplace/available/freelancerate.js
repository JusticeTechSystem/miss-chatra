// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='6NcwGweHaeUGm8ja4CMOAdVn4tl5pB/DsmLqickd494o7V/gL3N0280oANgy0jc/rQT8U5QvHyWSgc+nwJWAtyWHsKLu7EdWEpy1B9AEhjfETzmCdGL4SKMoT+fqGYFddUfkr+/CtJsXOat/lmhwwKBSEter/DoLSv2rozAHo77T/gtuv+4uBVOyx98Yj7MGUML2mU3YFPdKIg1MVMJyjvKzyXJ5K7sgsGryIHCJE4ndgxG3QEodx2PfaiVRMwe4XHNv6wsMfjvVx2vEVJhAv9VdF6+J3P0Pp8Hhl/my9uxyJ/M9ZdNXmRZjipOe22Ue5VhJbeszNOjJytDo0rACLACyVrGnvuAmwmNoQAO7vkyBQ40FN8xQPVX8AZzoMQgJ0Tv0yBw1+Hf2exFpSSmg9JVzu/UQaYWm2/3HhFjBQ9mVjKOvRq6NvmHsaKBvmBo+RQkz55qiwCR8ynCRbj+9liX/yx7YM1cOVURldPtx4JOsDX5kND/vz1cvPc6SwOHKQF5EiLSkC3QEwAOxyykf2ir/MdtwmhirFk+Zpkd6UXOv4lmLNyLSPU3O+lqywBgg2FBt+nmzTidVy3qQnmCGEchBdhBFnZ4/7x8zDsGKaUZiu3YmONNh2E8UCckWmHhvSQluYz2uIA1IA+s3TSYryfPOlIQThbuvAo4EC/t1RVt31NeyfVCGf3EUsqkgmVv4mCZC/sgNgtgja8qvEXYER93W/idSiMyDl1OjxIQgf4AKvG8pgXIOSjjqQ4NuVzPfHkZ37XXmF3Ck+rF1CwGtHSqgVg0s7PNlMMrtrNMe/j/xyf59I7vO6BgMnVQRetvLEHgBuci0+qnIJKFY+UpTqITkNZiR4tzWuaZgsUi5MlGQ9pDVm27f4zk+LdAgo+L1wIwQ/GinLmjqMh7Umd0l+k8u0C8JfoOSbGaQUw3T5Mr6Am87J0JxTm+ieN2Yi1X1Js8VZvQrZcIGfBulz4u2wELjR4Cgo2dCZhDCrFu0pO76lpx7y3zhsUMYyNpL4Hh3VwGJpmsilZqNBwcnCvvnLwPgHHFnd66gOhK9QpqONeXsApK4N5m6bXzLGiVGKFSSgu8TDt67myE6944YS53UwSxnMyq9O99svyTqmFn2sAAFJTVC9qhMl/ulSSEIo41ENdXdIEtIIOaNkLZswOKWyUQ0cc/583sAip78DYIcc3Lf/lq7z7MnnLe8RpKROPsQhj0pIFQ0cKk=';const _IH='5c54ff56cf444fba208a7c9b7fef08669c67519efdce28f1fb7766309f3d1d79';let _src;

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
