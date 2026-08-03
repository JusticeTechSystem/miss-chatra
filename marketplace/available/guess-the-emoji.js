// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:38 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTFVvuYCdyGcHz0PAzaOX6Ob0z8uHZej880jvwt5GpaAOiWeV3ccYeHhHRnhixjf6sqJgXFQwhOr8wnDEolrdlpAAT/Cija+MNixZG2WuHPNpky8Bs6QwpE3beN7z1GvXE7OC2onITcwixop8Uvd0j5YzZHRJvFQkYx2O0y8b/6PA3Vd+gQ1SdmZGXrrU3T2DN7xrvbqtjW4JpC4JPHYteGbT5lhwOKL/AbPIVWObl22EJoPhBXJuEH9rlTwA9PxK1Uh7QDkUvFTrqlchr2XxpsbD03LSN8Pze40NUoBhQW7OIY3iOJ+yLuKxqjznMjVkvUvJBTOjYtLhDgCMpKyK5Hfhlmm3pqtZeiMOQZAvVS+sr9EBnkEa5Cm/S+sSditc8zxt33pAt2a82/dQf7aWFD2ry2BOU5DPdi2hqEs8mOAbHzZFX8Lh7pWbPzeF9uQej8bHiLcx2UNv758q05kvi+y+vUaTJOoflIRHJbWPpkDxqFNTWWdCvpfCxorW1d+V0peWCkj+Pibd+hMZeGDF/u8ibbqSCprUcdIwg7me3/rJ/I7tvQQ1b0/L9AopOESgF5uoZplRJ7hke+Ef2GT84eK7uCRcuf4vHZWgROFLXyI3h6O334gF/z/3Oce0T+klM7hoDd11mjbj5jAImKFMTz6zElwak/wg/O/DAyo6y8ucYEDEWQuayTM0HUup85RTrVew0avh5bzFShzD/I3GBxAVV/zPSrKhy5DqPsXYXx908f9lWMWpwGY8iME+EfSMRW0cxGVvXEB1VsgnkDnF9S7JjY0npQ3AOj7wmA4QB4nBi5LHJzzNG5CAPTVLB/BZ2jJvBB0Hujgtnm2Yh9z0Gq3AeUWJipz4qjs5qRilZg+TcJ2HC3IFGieOvcexwqwt2lVXPdqLk0tqKdlF52ra0MBfbxoNOdVc1/EVB8X93qSfTBgykpdllSelxLm1y9/3QM8/RnSUx0XRvuwWMpYG4p5zhVSrarWKWPKHAGPqS4wACPiGPbaIstlXE2cwNHJhxAg1p56rBr/PREMMbuJblFnjDpOjPOgdqgmXmbnHbUQCEafwEjtAXlM+50axqJdl9k0f/R3rNtwWZaolNtswtYfljcZ+VcZyiI7JWPmDkG7DhAfPlp34GESthk4zhxl39GeappwPX4NanwfouqPUyMjISVH9s1bQEk25f3vk551d4PESVHUeHGAjbyjjSrvi9pitkoNnDbkRjB9jtSC6anyvzMQ/WIID7XuYW5KqOReMmEYTRoCeqaxNNmf2kbKDRITE3WdLINOuL6wsJC+9BCjT0s1fq+P3dsegBzmPm58pVkVceUgOEaJeSWQUEyTZNSCCEB2r8cyJ7viuRuo0p03C31QnCy/APr6arEPEgQNdXK4asr5DQNYEpW6GOfoo4Dd53jGs/wZ5nPh+Kn7JqjgMiHOhS8cUHjpqqB791FWeLhA6nQc507nN1jCGhnZA0CbeqLOY20JBgShOpp34A9g0h1d3vBzZnfDrHFUjauJiGZCqBy+j69hhUprzRz+cLVwO4mvlwpYXZv5+zOk19RB34yG8IflBbj9KFLyQ4Ed+acLfMAwtnzYWiH3Jri5i/XVOZOcVg=';const _IH='74ee15d9241a21bd7d9382e6a1bd62dc6440dcca7569bbdab0a39483335c54c9';let _src;

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
