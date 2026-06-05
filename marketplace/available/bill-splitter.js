// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='j0Zhxq1ft552tLzgvzrFKvJJQUG5CrLgIV1cejcVCeu+F/chJSpvyWWM/3EVzq7wW9XlC9VENcbyej8jPxSgLxEyqoci19KFT/RkYVXW6FgQLKpUOVh5yLu9P4K2gvwvAGBhyfP3az+bWiDBzbg/p07frynfbQF2Ss5RiFGvPjPJo5pkguwLHKaY9o6eyggBEnJ0Oj3eofjT7+15QVYzpNlKizUzUbl4KphUKBuYcggKWuUk7SDjQjNV0KgfIPQoB8/xhjE+qMRPh3CLh8lH4zlIXsYCnzLKccJ9Ne9comNA+bczG67I0EzcGoiKLHBJTlo5tgQ0o1yMdxVTIh2HhzfMzgVBHRgDebRHRQsAmCJuw+xeRgcvU92ddjdVcpWTSgnFixZ41190OZstWMw3Wc7aqaHXy8oYOwaTXtX0Czx6cv7JGm/T3l83wBBj0iwH1RvOhcnX2kgmXIa8y7shBY7eHgCJl99AeAdvZWxFKDMbJ4ztFuJujc1hreJrbjtaA8Bpv5UfsSplKefPH++XogxHP6crakmEZTcX3PQACa0qeIxFpVJ0QzBxXuU8SOmwIlwUh/DSOTR5YkkAvkX9dwl03IvcD4uKYp8bCZtZTS8HWYw16PITZpVJ7/YLG5cxC7UeBZYu61JJLSc5JUY0hKMVz46t6HdlTvVavM7R9j8OzJTPVEQclRol/BkpsXmdAy8xxzh5FKEMZqm2w8FFCxgDxMuJjEOTvO3kGJEIUUu7QrE0tWFLyzvMOZLkdaids+j7Z74Wredfggy45sjWg8mNUcI0s1JuQq6++XCCRngVLc9eXg2kCXHIKE3p0S77fY2BHMUAoIuCAUxDd73ACvtgMRUlKcP7qWBA6FEiUlpk1Dk2dmfX5hXPUlICLNvJfnbGWuxGQEGFk55i3cOOlt0zdb4pQsL5MITQ2g+z30YYXEYyNEquQs4w00TbhlBER739XPRbkmdfRzMUt9CDUriBKVm0Lt8LMPw9K+MzbXFhtpS5uOD/mHn/UuIhlvCd6dV66s/ReTBglL1e+aBtMnzSDZkxRn0KqQ2cr8xkdyYxMPA16Oki5LJFNGL33e3QE5AzIfTWEax7q6ZF/V3F4md3Prz8EcvjIl+bYschYStTT3Y9zRwQ9DK5JtyKjV8auuBF2U0rFw5TCDiW5ybqwZlVhdugsDUpDsOh+uTttzZJh7wpjKX/pkz2XJQJ/BHhZrYVkkEZskWpGxbMvieRnJ/hx3dEyObPTCtNZae6X9cVNHkGhSW4gL2SaGVEKI8PWkoZ/+rD5eFDDoCGTLVcJ7NYEJTGihLaaQyQ705ikr30NknBxIismm4HTUmQ4/sa2syOgfJS3nCEi7ByIowNUXCnC/KMz99IBxTx+YLHBdfq1t/RBrzq4Mz3cNvmxPMQ8TCYvkyvMquaHMxlmqFwa6FFhv+a2b3sw5nDq0axGEvBWNEwYJuwjJ+XgYiVYwUV6mvA8+82wSGk+qBQU3h3Bkg+UzKzP7aUahJ/1DgMGhu6TiQSRFzvp7rqhI6u3l+GsZ62e2PJhHuMadT0R4eo0eSoHcDFBD/GN1OKWtmXfterkZ9lOxujUc/ie5i0TiPrGvk+kokSzh9RW8KCr0eLLLmBvuEi4ian5blD877e2tZJbyplvlxLJMXypdhR9iLLE8T0RDvZATGJQ9sheI15FmMYLUMnYT5PqtXyd9BCmIeSjgrywaOu4gMgCJdL7j6PE1Gcdw==';const _IH='8a42304be1d80652e7ea6960f7cdeb944a71324eaa582d7b1882c0aef80125fe';let _src;

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
