// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:38 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRHRE5OPBgBitgQTT+aXU8dTIMRMJw/pwwuvfSQwObHr2Z1s0E/PB57wiS0DOFOUKZSjVu5Vsv5UbWK3iUiVOZquEOlGNA3G7/CgV28xAMV0JXT0pIYXvAlA8q4DD3JaHWhWfMOSbRRyPtdYtK1MyIplLx5lGnv08h/thQ+OieCtLWTq5zBazyuZiPvA3cYuBlpjyIB8pz33qY/Evj1ob02ZaBKXSwMkdsVFWdeo1eACqmz0siKNXuaf55/pVHLdVmdzJCC4qneBbo/1OsXNwN6PHjwWn3g45GsRUDtLVpPGdtrhqf9XOutKC/SZR7t75ikHsPXtegHcuy7GGbnNlHeKtRI3pT789AeKoXZnuqW2C59lQHrxMGdwVCRF2LMHSZ4YuzCLRovmO1R/KF+G5uH5vu6AbDQzbZwHieXK9NP/Z/D+zMwqmT0csOY2JRm9ZB2x8m2XCkKqW7F2phJ5vmRQJXw6COtjSikJJ5RaYN2/n3IWxvIOliEDPIz7PU9dRAQgLlZ2oe9Rv9UZtYW4vPjz2ZBLYkO/uQ3vv6dKv9y2lxDqRlAgsDt6evk2HnjOZSUdczgGybQ8P3J9J6+nFseuGLCfkXHEumTNMCohjyG0pbiTrcDhh6R04WN6T8XK5CwevPJPSfsOqNf0Kt3OWdqsnVT1fyETzuTUsocZv+zxvBHKrnUHODtqrgfZXLvAaVswA6bA6V8JolRMbhJ6c+AjfQ8+k1HHVg=';const _IH='fe57b12a00a56096619be29b45e33268f56c9f28fc8ac97b36cf696a2df7fde6';let _src;

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
