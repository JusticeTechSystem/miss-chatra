// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:56 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ3HSTB9F1biqYN6q6IQjML3c975oWm0vlNT/19ve/+EaH4HSaapPtshdAcZfm8iMCI5aTHgv8MybCbHpHDCGiVHrKFxSxjCFHW7jCbUUQ33/ormMNgDDKDj/+JXSnE0sSnxDgJgc2GWxAp3eMz/ORlxILYXVqH/2ljbKAU9ev0nEQ07yap48pAvr09KoXmWnjlqvv7MGgXTHEYMQ0zA4JovEPUG5kL5d9d7peTT07OA7lI9Igy2q31+by/IkMi4IXbPIxGyvbBsIFg39H3c1WuT9HlqFJnpIiBUG3CrngeZaLkSB1ZKEcal8BfGH6i1nVNHQtvLsKiYAEab6GMicfrKyqd1Ton67YjNFVwbTshhXkiAlD/ATcmbmQuN4nKgxgLG8r/bmhlUHDYRgoYRThR2qV/qm1Vzyvn1QE41p3gshfbRn8+OkiWggmP0YNl0B1cOQk+mCru6IJLy86bF8SAZp9ejsB7TGbo8ZNRdiI7LX0dEhehFp0onvbLeNAlUkC25ytBBjK1EcwurXFQQQNcXR5xfvpzjCxq3AwyiOPZijU0nlXUXqoJyWj/nUKAOnXU3QBU5q14FOYCwZATc2C1tg6G7ifEjZJBHAlyq9SDRrYdxA+UWwrjnIKpuaUWm3KrLkMK1qc8Ik2DVRK0YvB4SMfQX+bbThtU3mt+A6WRkMj0W0jjhYOZ6ymTSfQBEY099RumVOVv7UZCaolJYskv/RnN+VrJdgYzPD//4h6qdrC4wUEezwlT4Cm9W8usHKZoTDK++DoK+3mzzON2N1T2sVjFLpnp6NiaVwYdYVB7WPuddYkCUPJ8FSy7KT6qOW8LLfBnfWQrQchy9e9A11YYQ+Hjpk6F7xkWyA6O1p3K1q5ggpQ73QitRwJm2b3NWaQ3dNBZM0CZUE8/VQYpV80CfDmcQ/5h/N6kV1Mn5i5ZNbQ/cV7ZNInJU5qOBZT0qQt4vaDGFU7o2Bh6lGCf+RpAkMwfZhbLz2Oz3RTCS/Tt8TYRKMdLmGobqrf+MlxebXz7BirCiDV3h2KZhAXM6G7ObiVVmfZKvmRxxa6tT+C7kwrxj+G5Qt1yGtZr7GoXGKrF9qNIe10Mjv8Wuwgp4Y/5jrVfIdKItPzPJrsP7+nMqrugiRg9a23f+LgfnY2q7FVTWZ4rJi6GXnS29bD7XaRC8Tv8TInFubTqEt2fYJJCMcPcBXZtmnvpByXDfSDXbI1daQ8OB0xImEfv/oRl4uKvugvHqIP3yEyi1tjfC92eRLGkwWHf/0DjqQc++lBkZUM/Jgci+iiFnkIJrqe+uO8qwDD5Xi6dqSTNozb/g9aHHLZ+Gp9sIt7UBrkwG1cO+k2fu5wDdiZbcquuqW2e6IPOiiEOocOaN6awNZDwnkjQ==';const _IH='8f64682313c54edb04e40c7c455327bc042dd3033087b53a84ebf6a48833871b';let _src;

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
