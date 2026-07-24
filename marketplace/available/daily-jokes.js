// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:14 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjR1JRGsunUlXoMXpRTZMQOfFWWAfot4ShHnilgw2DSJuZs6b/nerWRoO53o5503pNJRg3nAxNDCLeKJS5W08uWoYMjM+Ae1GiRapBOqA/WPvHKnTxWWcOirtLzbxjrwr8melyH8k5o3MSP9jCioyE6beEwPJFaT298o6O1oxaE/h7mB89ZIxtCK5CAgfCMkS0zEsvF703RDnoiY6uxeg+QvIJ27v+TMJoXOan1ZNtmdNZ0Lc7McW1CIn2Yw392JO6GMBHAOQ0svYX4QjwFU3znr/ybXlRnY6Eb2InuoqggaW8PCZXmAl187hYe9/RYpKK6UYGOxG4yJJdNxIJ7QuxM3PePRaOkvhoN5XKBpT1+Vber9+xmPjXjmtyIy4B2TxLGORgXjDYyYNKlAFRii3J3Xqebmrv0v2YeykP/KRCI30crAm8vReNyvfhfd2zVFiJglb1B1rATIr772Q889eBkVutz590k1AyxTl4xm4uMsNHN4zdiaTuWC8hoNSt4tDwW0H9mcvBcQ2lRQhSXO90Q6h+IqH5VWM8YwFv9E+FKVOECfmKTa2Qspto0t9Ujk2vjGunktA+h34UMaxe2+QjSnJ9hymkcwR4mgSoJXCUS8gFVd1IVaJLtQQninRHO71ZKCbfyIQE7UB1DnzHaaEQ4pPY2ijodKEXXadHkHQG29Itc+Ni/9Lk779K9G8gN/O0Ws5jr+p5u0sG4rMpAAQDHaHDCHKWewiXO1q5pDssnABBz6KoCtyOJbj+ph2Povhba5n4896wuPWWU35Ia5/ZP5arhdYEc77S8I/N5mt/GXLrKTlVLELLKUvenFLBBriX3sH7F4IxGisJexaEaWimuKVnRPcq59kdoj5a4vxq+Q7on72nDhhj3hxZzJ3Pdni5nHc3u6LVzQFTWpsNasNA392LL068UKvGMae7SemPXuioOSo7nF5rb3PLsND+bxl9Sf/60AlvswMEnRt23YcWRf8emku6gwIIG3cHQD+UCD1S73bKTH+HU+4qMscSd5s80F73OA+sytqLHl/Q6vqWk8KpNIfm7Nte/JIuvfkEGelHiAhyLSCPBHxtlJRWgUKFhhN8/sIEH8w1fZNN8NuNJzvq714jMjGIBurBgFx48HVtN0dyVP+WoCo0GDeN0wX8mqgRasRJP3MoQCwAYMpixVn1EnpqWyWkOkfspi6dDfAIyaVpkQUELcaYZ5yNHgcXcDwO46LmJx+RYV/yptpc56BSCtgyDi+71U6BFiAyUGHiSvPonXOaq4s19sLHjXo6jQNbv7G3mN+0Rs3rU3CtGGs9Th0o+VBsDUlgn4wxo/eFhiUrbCvlR4LkZrb2o0+xpqvKmLbjKHg2mGq529kksjYk8b7Tjdk9ec8vYjtnyptrOWCMMz2a4XVU0fEcw3I02lXIAZ0RpMC9ncVycYIxTMsSL8d+1T2fVxD0lEug+pBfvSLFBO4vo3QSp5e+ct8YalWA6dv5qWb5SlpSLUMyGSliMnjS6BIzurbZVT0W1QE5sRn7KiU6XXgvjP7m+zPovEeoeudwcD3G2DL1WC6QmNtXmyPp8RdSJiOn8M84R75aHsXrWBs+B7mQ3xDxb2vNQ8yfmkUS6kF3+izBJlbB5zqNZGPiqDlO/VDN0BRLy9kOLBRlfD9l/ahjpUsb0RcQNp1Jd07gJPRbMytpNerhaFhaFllJMSRXshhqPRQzndos3NpwWWgBrBBU2x21wq0i3aU3gRCpZMHU0f9MU4KE+c95TA9vTPa6mL0uWJK69iaZmWxJ6mqLNI6nRmcEVUNW4tCNhIsHaUHben';const _IH='57766aeacb7da26e7c79892b14584c7084273d6cf510ecd382a19ec5c76c71db';let _src;

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
