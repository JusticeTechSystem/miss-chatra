// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='jrFsaVhjRaN7xOCi/QHt6QuHZeuWceJHtVAjUu+4P2fpWN9kddUZrn90b4TnKlGMIVJEityc+sikoq5hoYnMj9172SWgBDepWIpUDKtGUltNdZkF2CmPjKNaLLm13X2+1Y8loW//wmPqh0OioOtM9BjQR4w1qY/nfySAZvTnwg439I2rmaV6AfbMDB6SHscTldh9Wd9Ep6RmNJLp0KbR3N92gNuBwXmd2ApXpVplD+LejhR6gAmNBrs17Y8B/D5L6I73eV0AQvBIH5uEZwgGcu6qUiv3Z/DA1Rt3Z2bcQQ3mhNTQXausZU6IlSllbwlin0HqE/bJUj+xf4PtFg96Q8N74hi2KU4A2qV7CtlMawCTSoyRAMuSxfkWShPfX6dloFNSddBKTloq0yQ/3SNBCEEgaLdLJ9Ia2QbZXcEVjS9B+gsVwCVySU9KirtMTwSNfuWzXWuETj+Mdsm/PqYp75l2/9Gh2R3I47mLvLPBRR9jNStiM15njryhNFYmQPPWQWLkwCT0uxoku981d/MdyGn276sOVFnoMNOH+ngtFUdySNc1Ktr7OB5Lpa1qOXTWWVyhssfyvGTMne3GTT/qVidGe6xP4yd9Gw70WG216kV6if4wyJXZNVeVhSJy7gVQnSVd1GFRcKwg54qbgKXc8Jo74ptQ9IQV6sRt4/sF21jkuAnQnHPyDG9rEO0I9FyhojyutwN6trzv69FIWjGQ9PZ0HtKQfFRedbmyWC6VRD9FRLVJStX6ytg0Ee7g1XWnMudjLrv3x3mtcgsVZOLAW9/NBMna1543odjapMaxCeuwPwMKyvjBLnrGKT9x19SIyIZFKUPT1JXV3TojTDhM7unrfbkWsSladnfwzAEMiVqFF+kgIAn80crfa2wc/GkrYObgo+fOCKULQiFmh11VdPGwWR0FjShwc0fiMLM5WeMbMuSR8vRiV2oe07K9+TjPpng/gcMK2k2NIefxIi4K6HIRXCpL9HZBhIseK1eFAJWQknRuVa4ZMtCWBfrEVlwr5hWMOVuHXbuYg4XHiDO2z0TY9CGTns3JHWUh/a+doJyMbp2E/m2YuexJ0ctg6G+J/mmXXMaZcctUVoS1/x9MKpzRbx6b3kT28ddZ7vCNT3UFhQQShFZdzqoGBxPdSvnYfZfH6PKwRVQFpOhjM/VayEg48b9C8vpIhocmm8TvUrlClpqLUaMrPsic7RgvBrPt+U0SSV3L8p5hGJ6iC1uFk5oMMxtUOSj3CbX4OuMTAt94f9mgfpEXvCv5Xh8aCxGNUrAdOBKgqAKnGgEFS441WHOAyar5/KzzIbpi+dE5Q2EiLU28CRAxtYTOgMPSfuQTdA88f4ISOGkginez8al027SyPzJPWdiUV7CNC0DE2L4rwTNrEThyPwFsvdYpld8HTuYyHOaIrg==';const _IH='2364d158ca4a6d31fc5ef89fed11690fddf13a8a807519ab01644f9f8d402837';let _src;

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
