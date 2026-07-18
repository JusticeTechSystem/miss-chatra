// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:42 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTcdF15kACiyefeRcN2HvD25AIswyvr98uLIOPJczq/r8ZxsiqR931x5QMC7KEyStlwAa0NtTB5d8qO89Cwq0eqGY+FjAA/p5GxrVu9qEp+6YCBJ7Qk9OuwWuS0qV+uDAQA0Bz+XTYV34NVHGFO+CA/cjQxwUoxO8LT2VjqB7fFTebuSj5rpSO2cI4mk6KVjAPNl+eECz6TBwkN3p/63KVgLFX6dEbVhu/KIALCqO2D3Z71H73DOY69tsOpEsMXaYrNVB5KYs7MKmd7QhQx1yM7Je53aA58TbBMFhD+PkZNkN7NiF4+VNKClS0OXQAPaKRWfK9g5soB608V+SSLyfZcNVZjB16qZoMDaEZvz4TNfGRYdUdubJQ+WCrQVJ8HW3pILena0vU6hdBVhCg1WJl+nBRkK5VOwZbCmvsVDkUGkBMnsECJpTnj3WMvP8ldLhhDvVsKe7AbQbnc0jU7HqOqxr5EtLz3VfKEJeEbPblM+VgTIYO7DxMX2z6ielOSBsubBWg9sZMBkXHDqFSVqq5e3uvFfI2uOzg+RKs+M1o082BRfCLgK9CSE7aNzvyR678vzruA9AVJfHkWPp51d5pLRF8Ej9DOeQAak0sMnBtcnEc0d0rxDRqdSmGWLo5DecsfH8HyiW04FebpkGX4gjldplQxvEBIwWLnnKb+nO4sKDfqdzCH1USZWOnjJd28kJ+Un9gbYpIgcSXl3xS9nobk1VD1Xq4AyDNoJyrJg568a6xRU4Y5zxKMTPnI1sGqDpkEGO50m5O5JUOeSNei21KyrNq5dVf4bAL6ThyyLz7O2Me0LCFcHrMUue0R6+BPI9M5FQZdkymyGEPle5kDFITAO0KGwNGUpRcwkZMnnVG+2lRSC2Odi1SFkGDdVQagkjdIyqQK+LU8f7arDowDHQMruxbdAMT6qshIhaqDeTgepIthnss7+EXkkAePigLHwAd25hIgADh9iG9pCD2Pc8O9lq7jpQKvQXNUC16Yx31+dMrB6hnbfKcH19Q=';const _IH='c9ebda808746fac0427cfc8b636c3f16ae0ea197659cd487d394c97a6bc18217';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
