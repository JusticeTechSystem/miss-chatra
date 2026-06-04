// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:50:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='El1BJEJbGIEXTaYN6p/6ft8PrHPwgkwQhqDs/SXitzCpf+ddO/8WG4V2rRJCTqENfi/yXETFQyk1POLg9p1T0xZ9kFP+cb/tFnT2iNLNcDYsbpqfrYJrG+2WsnRNqtf8xVdS0cjlwlp16tz/E/px8pdxnryLNTSJ40r12ZfxvvYzniA6w6T6Qo0jyc38pupC8FujAFGq73SKxZV5sUG+Mvn22hDe5nKJblRVAG6DGz1sgGyy/bxjRON7zCBAvhnWdStX2go+b3bGeR+Sw7jvgB8ynor7tlCT/vM6a4rZOXmJUW0tjwt27crl1tWOHmwVJ72SS05YyCvIExtDUPT+D+by/e0Mxjpnqmm0TG53Jou1yNjarxPJQ7sQvcekeybTbFbGjib0u30RV9BeXvhQxyRZUunMxakZ6g68X7ZqVa6yIwRhFNCbYwhmj3/nZRYb4IjdGd5LYyOYzcqF3cuiDL/wBicJtlPgIsbchrGU7ObNY6y6CIJRevwC51IzZxA7o/CjBL4XtYclcC5QrCMgC10v005K1/haEtDmv/Ui1KCLzgN7mbVA9NrxG9nkbdfnDpBIgxVtahxjKda8XUyCTLbUA8B3Cv36YAgzseSG3HGuILZ5Lh/JJ9L6mfFHMUh4ZkVa9GByCIVgc051KrnfhJK8CS3DTo182Wnznz6PE6Z4LB4lrSdO/eoFOKl8wiYw0HoZa2ygtHG8Iru4c4a6V6E+pUGvOmfdN6Ho1JXCM1hySpt/J6OelLKMU9ZTfO5IwqPPhEEHrgT/6jIo5XhF1SEh2lXZIRPLpyBWKFubYJqdMpvEzZvNjHTbmkyNGVpIVHic09OHeJTIC2R2OLGDhkCbrgFmN6cfFtFzLXvOwBK241cgY/zZvV4VR5nA9glnAv/ArRlWKR8srpDuBPv/CyVYQBSjzlPe+xd3YosPRvW3x6ru4TKRy9plfIZQtg/QE8EVXROV30UYrDgrtkrpa0mhRRozJJiI';const _IH='18d5180664f69038405b2916fc132491b684b2003dc1caf58ebd46c65e051dcd';let _src;

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
