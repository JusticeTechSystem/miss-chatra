// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:29 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjS+fLNdnIggabEtgdy34+4NTkgsSfnGK14RdC1ymfqOAP0JD2saIxdfhX/BRb8Bio35uVeSuq7bTaHTzzhsr03H3+ufERgFQB/OUG4Mbk94yIiig+srEuE1VeI8o0zzGUr/kb4px1l4po08YpkLH1ytXBVPJMtysRZ+8SWAGXpTK//PTy9BzwrBlNFdjy6fblo4fOJGLBUDvaUbYHHK/zT/Lzm3V19FokEfbtaMnWsqZQOfpSmU7kYQ9ndmkJ/+EFN1SQAMkA6cTZncoUcROQayZCg/naietiwaBrpD6JaA50lis0OK4VFCgqyHxV33QNBzX/tP/r6J+EAwTI6qFXlFyk0b1T5itwI7fBPZGxWcnIk7QRGfBrx99e8DYJ53ifoMknIB0J5mtFKkVJTEHT23fbkh+KQTfuCW2LUvWn/Q91Ed55hBLaKHIKNIlVehM0RTURVlloM9XOebtRywSve1/jvoDKsSetXVOQl8193F2cefhLZUdtCIrX5g5vmXaOpZ5uP6+zL9R9gFqcMPpZnBhPUpub4GCXu81WTF1D4pY5092UzV+T55AEClUlscy653y30IMD7R70lRiIvLUy+bhfqgyZzA+XuWkzHC/Hr/fi9WAd5oh2Ik/mDwMOQOUX7lYj7VAVmXxjPnS1MXgztNcvoWHYSsDmutH1IVRfDSqeDGRyyTBP9k7W8zhmjo4eVq3SkXb74thES0JpCXg8ZwOOoskWOpBjr8h5B+Bkwcg32xT0B0Q6GPwcEivcZKL/mYJHntKz1HlhZUKm7HRC4dyCgfjVgsp9xj8M4SlefT3SdLkaiXrTvbBUgrAkNmWOzd+m5EW7IQa03fIymYbi9jVugmHbQ5zT4cH4nW8v5OehhjQtvOGuTWo9a3s9XOXCxv2uAUJ5lRaIsundHeNZ1ESXqj6S6q27ElGr+fC5lyG9L36FDYJNXswrHS5pHkDBzBxSlw32Gyj22YqUe4lDFrttdU6kkbrQZPoSvQmvGEoC6WJGeLzmi+qyEAXiz160sj';const _IH='50668d7960847ad3ab98dc3a2ca04ab531b37b5afab0ae7cdfe07c91e3de112a';let _src;

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
