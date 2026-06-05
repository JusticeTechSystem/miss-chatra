// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='0bXgL3H+/fkBtJoZ44SrdIZf1nzKKJ53eLH69tYEU9BqctlC69rM24J5vNhkX2MCBpfCRigLr2mvSZYR6XiP2rn++WQCg7/6oviZC206COqetw2l5wzsBbaYo/yoHH2tF07Z6e3E8Yj1DtOkQJo8ESNDnMhCY0tfNAAYqkwR466G+Ey8Ap/8Ld+zEAq7mlFKXri3xPYWBXnyqj3V23Esd2g+/VVIcjwD4Qslb58x4qYuvIQzLZibJLsZT1SZGrkwbx973fhI0a9ad8+QUF8+gdVvThaSnVytdrJItxvzPg5RdLQqm5XGwUfOU3qpZqFq90bcWzOf0H0pich34VrIZfxxAc9xzwTkj1L1bjOfW1hxlzKccWaUtQh3w+e1+B0QRfisXgcPgXl/pg1j/PG0c8mDDpwOciw9CalGuB9oAG7+IRdk4Avrl+n8dDjsvQzEYY4UOzPWrEQvCzs0IYL6+yxXAvOhbse5/KvZqW3ruvQxCw0Xwkky4q5FKhkdbliGXVtLiSd40FUg/s1gfKVmw4DGSuoAu4jHzNrIHUaO5BIgnTUKFrGm9szEWkx9tORsWF+rMBvvoaUGVGrd6GXRY5CMEWtmcA8q0bYkHWQA7RxqDWd1gJ0RaBi0Rp0EYcqUAw+FfFDzAzEn0/6Jdzyft8KLBsvsYkmX8PKqBi3l20geIrqeL63uTvHu/BuxNwQ6XTc9lLcP/Da2efKO7RoO2S5Up89HZAPph4B5TuVEYpBgx63ZzAnyM9TTX0YNETLkiNq8BLizGyVJXU+FmFMWkNNYgi0Iuzai48Ngt9b+88eE3KSnsKRNvDX1tgbDLf1gNCEpegfW76YYlrzVf1YFVsBhUDGcQHJc560i+mz8gUqLiS5W0m0ZfmMk1s46nvfHA6HfWFb/fF5RUB/E02nyqP2OB9vS7Xx7LJUHeUqP/vATyDvpU0laKqR9E9wkzZPprofhV/0PBNw32sW0fvhKvUffR2DgjnheOx5eVRkA9A7hNL6rhsEYoOPweb6JlIn8pA==';const _IH='81801694d79b8f9d260bcc9b5e2086b4335b45e77e25369ad8717fca84418153';let _src;

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
