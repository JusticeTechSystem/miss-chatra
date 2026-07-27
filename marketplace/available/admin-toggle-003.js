// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:17 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSACqXHAL7/vJAxIbwbCJWzzokTfcwEOgdElGu5MXalwa+3cBg4x6xhSVhWUBYbTJA3f3NyMfDSssG/wkTOSz1RzDyuxEx7cmBXhU7AO/QuEUxQd3bevgsYYHkB56jsqY5wda2G4+aUHfwwAG0zGpFpPTUHaSXrBqWhejZt1TWzn7g5yywrILn1lWkCIDfnQ/sZrhMfYwELo9iM8t3127SUrUMTNV/ZKNUXgWkg/1cFy85luRSsKYtHP8TyJRTK0JXLUMSEnSQFTipTqJl4gSqXs3TDW7pJIdcp9LvS83hIyPcm8kXCCx+eSd1PDWIMPThcwxyTfifHsEEuB+I8S/L7gr2HLcyg+yitu+vV4v6uOyWI6HFeV5MfqzlGJuGXqgUo6moXTC/jILiHk20YUSm0FB0kunR/slHysYJHWAMlzbvL628VrQQJLELgIXNsKw+PW0yltiTAwzy+6Ek5vA+0z4mIHks/4jZLqmY+7ubwwnTKRKkb2s38xJ09RNc3CWmUL9Hj+0GpsdLngQwLetzh2vKsrcpX4ihZdO4/l19luMOsbfIHZtBjGqJ7fFSaCRgH9dL6l6V4fmTSsEBcgaIJH7BIM4Tq2XSch0967yB/nVZcYo4dmduv4dAviECdf3mataarcK5LkS0d2Iu0rKdQbqdPaUy7MsAdrVWXJ6xSG+AqYvuHi5NsiwGzcF0p7ILAZViiJiUwv7bpot05nD77B4faMetYbFW7YvhyxtJvDErYKYsuegWCOZXRaSVyI0h+uYGhJUsNDUu1yESGW4goLPyWtwDJ/V1g0GpxI4P1wF4zqxc8LG5pDXHtC2Rvc2tM8OKgIzsi2vYHJIL4kONdW+BAGLFH2iyXx8EM3G4jv3XZIpgSjTkWVez9HukN2iRuRptM/KbInT6lb/Uw/GUc70KHnq13d1VuFHXRDYYmyndMdqRxilU0fpUfSOrXVojOwGfVsIC1Me9ECh8oOgDph+kC/P/Iieox5seQpwebnPHjGwBOjI72+A==';const _IH='48137475e92a4a0074fb265cdeca0ab48d7a248a6da907724aa66db14d20a9c6';let _src;

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
