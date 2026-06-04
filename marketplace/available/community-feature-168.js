// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='aw/Ec4SKse/G+HgdyRKSXc2sAcAkKr8v+tjGT8d0WwF0hMaYPHbpQt11t6NNgP5iEdrfjs624vkpESLLIT64LK/U0Go5EPZq1FKGKqm1g0EXwY/Y2+lHuwd2pi69/ALBzweIIOSMipAWontcuyE/GImV68TS+RVEl23AxVf+7Q8qGUmy8kTcRw/22vDZ5CZqowv8MGDKJ9Mw/fBiCTh0ba8wol+q1qXjYyCQ00aIV6ZJ0q9ZRV/ITyzfSXQ2ULj3caetZGDnbQqRYiXzJ92qagRnrV1mlLvI3eeqbVONLgmo8E4jj32pCkRncUQoCFhyuIV5KiZWHjjvmKKci5f4i3nBCPi0Awo08+2zpY6S4wFmxHxoHlTl0bqsCJrBzqClruCR1rW2fGC5KZUz7ilKRLkDKraOY+xu+a4xDizjs9gjCxY5aXjjDsdiezlTWWUPOzVWHBzlphHqAYHg+g8M+F0iyLB2gHYGldpomJruLialARFbiFVMDZqeo0lgDWRmiZIiqp5Dg+qR0NbNgsfzO1KkHzLNQnn5eCZbfhX7FdFkqb14w75ICWi5vkdlmJT/r3NizVlbEByg2oND00Iqf3P5vPCVsOKkqse0K9wBNvK0qE0R7mOyPWuonou8yA4uCP6bUJPe2y0MmNAc52t5PRFZ5NUn5/k4iIRNBT7gaZy+G7fJma74NpWYQbK6P38hJEfScZsIppTwFIjDNGMrZ1yC3plg0Fv6i1nye5w=';const _IH='d7f25000d35426c3c0dbf3523385d96c254048c4fb65d89c813aab5995e7c67d';let _src;

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
