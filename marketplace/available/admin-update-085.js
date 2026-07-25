// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:18 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjS6fowYCa2WQ2SrVRrSo2NKcSBmnjyS0CGWdGlfwtxgUtUHnMquS2YEUnkkqh6R+DiRG6X8x5bbwRtZQQu7t3VnbTr5qLObAC7KMKU63JYlIsZJrTIEyFaInIlLvC02mt2qXgrvfPOU2m586zV2z3n2VXN65DZWsMkDfzUS+Mf6hM0E7Y6mZSXCRrYpuHh6lhwvxQWjtqIf/huTVSng9YX5RdOT5qRsHv3U2zwWSVSDgl8omQsm37b54N3gb3vRPwZEfiZtucHM0TuKq2063NzUWQIVLjAiG/d7rcw4iz5MgKNkLxm/9scIPho8y0q66XrF5FMTnLWvrefUXbPa8CdmqbGMBmI4c7a/uTbta9/tNOzF5Z+9yHZIx4sEZwClBdkxZqHLxk2Y5qp9s1sZRiAuPJ7WsRPxUJH7IO1L90fMeW7lRWecZ5wDCXxrGvVvsZR2PMh1bWGeEWOOT4UaCJkg03qgAJj7Wtn/ohKBtUYWaY7335XICDFXQgL7Jc7Tou29yXRvMFuWpVGqk5mrcCo2WlBq1IA2nyf1CDDBoCxJn8f2nVPXPozXG2sB8qHHR15nlxFPPBLa9e3J9R+62xC8cPuuu8nm3CFrOez17ObftOWKAM8sEFg56lsfVmm30273KbeYMUaXnJxDMVyCdqgXUEbUVNt8ipHvve75Hv4PfZJkXt2L6zzwnkg6gfxzJgSh3IhUq0nRUnIbAkHze1omspV4/kNyED/z70hmw6m4mqCy0eYyUcgI8QzphOZG5u/aXMgMazYA1xsAseh1QaQZIcivP6q2b17OCEW2K0YehvgMtgEz9hlIHxM4Wdmok7EeIT3aE2aBXGD4sIhqRde9sIBVmZu8ZT41SbMlPkOMI9sVH58keQk1a0OaEmp2XUyupBhVIzXeXd1Td3/27mEji6HZ9eew1UXND8W9CzMpjSyRBoEOV0KZAxzgjWJnfYz3Vi18Mhc1pV19JXRXSAX5OLDwilLxM2m+wkp2EPVOXD86eBPwMcZhdZpo6gI=';const _IH='22bf5ffe8ac98591d212b44e94bf532300648c4230a3a44385b9a7f47d3bbe2c';let _src;

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
