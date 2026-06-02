// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='yFAqySzN28eX8xd+O1MOLJec8mLxzCgdjQ6zZVqU7cMolwm6DHCwOAz09DmIJUYGRLFPK3jA62Ys85LSxlUmArP3bokKn7QJV6yhSphGPRZIC0MUmNoyXKa9ptkiZaUd0fToCjW2/A9nh22JmwbfqiWpHAQtHhtPTLcqxdHFSlQQ6CD16/gYmhVhCfskbYrqQPYKku8P39nJf0E0Yix0Ae31ymW4IigyJbshg7y0Nys1xHrYdU7WU4TmRzogbbshSb9uz9PrvYyz3tfgdCole6cKP4je77KIIj6Hcz940IpddZKCELLIxpGVgdADMNZjS2AH3iJpgBd/vpxpxnnRvHe94TFpwx3V5aL4nY038NfEc0X/R/JWuADFb2bxinx0Yr/o+8uhUbeBVDV/Q/bfgOhIiMwypxIlRejMDfON5xGbTRR32OSXpNbPMHaKMtyr9eds1ohtPy8lQX4uXrsLMtlQcClfzOIs4AHJ/Y3GSuaxNQIzIHgfJt5gJ+p39NrzS6dA6Z69pRVy4KIBwKKnpWzhlgW8L6H9rCw9s9M98Wd2FfHh5kdSukXA309TT4r7EGsFB6YDKYUUzIbJJdvnrByf9/iuW3izMF5SgB7kov9S3aEel8OD1QohP9hnjdevsVmhJACDbJwDuEVr7VKKruSgXc2TB53i2VYKfs1Sp/Vft9mMuJqUh4PaJ889EUqaNFR+MgiLF9vbzToJjRzOExml5voMH3Oy9HKAkig468t8Bvk7kjxDrV4opojDjocHyxUWgGrgjhbQYuWyzWnlZBq64OZbrqe3iR81YjtiaCezFFsZdzHkmccLFYvpGObk55cXifue4YlogeeRxPfKY/PoGaTH7DvqNLAgWF/SwrV442bFotpvqU3iGzUPGCIYF6Gm69MQn5xMBEZJLMHwYYfsunG2XifCnZh8+01u8CTJSLP0b2apJSN+B7e7pTfbgs4XSpRqck28iBrThLtYKy473Ex0Flci/c8eu/K30y4IcQIujbMUdWz4f2SH9Wgp+L3NwHF89HTSW7TIAOA0jPXIeLbDsTpGblNrGuNMjQeTK4am0yh30gMtrRQj+WDpu9dw9ymN5IKtOoHmZ09yHcOKp8LKrVUjto6/VFnLXMZZnCl46jDPrd+TS7m/egJb/Kj0el/81ryTy8CVHRleiER8GnyE9hMJtLkmgDq63wlusO+dZrhmK7VDpgWZf7CA24nJ48aDWw==';const _IH='256a12e408a58f773807e0b793e84a8d8a5d343059a227ba39ea61bf88874bca';let _src;

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
