// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:34 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTQkxONs/Sl/FGneeaNY3GDuew/FeQuQ8mWDlWlX+MVM2yIEoJV9Wb6Wl6SQ/35X5Za71gXN+Pi4dYBaOXjkqsYgMt+7L2l5xydbyaZF/MJg33ti/gVLaf43pnrx4gomrD3oqmdw0w+nUG4Yc6MxMtcPTTIHVg0FzzRK2U3Ry7Zs0YtPjcinvqlyatY7TT7eTUWpZaI+zcVPEGM/6m8alPxvg1PJG9lUwTT7Fjt0aflRgP7+6XoHy1phruq6OywyAJWdy5Nzx7msl0/yyorsE+rnZInU3aBNUtkntrIF+zIHZ7up3exk3KuFR2XGLyFHWTCCT8ILM4rQM61gHVNcyioFMCbqsW/dJYFXWT4oj48PYA4SV4ibI5SAdGYawAfhJr42kX3w34cz5Od3oCY7G8i5OUhKUYREvXVoqGYk3I4rW1Oa6HqDiWpLtp0eib9cs2thdUBy/s87SN1tAsAY0DFhJg2I9H0NxY6giDhdMgRNDbSccNybvOik0HfG+6CkwvKlYt1uxn7zRPKrew9RfSOQ2bgpMvcNFpScFE1R2YOhO3Lpf/NRC1gF1aibBKPufceAGOs0mgs4EZ9v5yy5gzc7FdPLlM1yn4BGjx1VXhwxo4cFGKjur9dvR+xtGXfVjUbuQ37Sh2fACBFjwp4K7rmL2HhuNgxtqOtsK7k36PzzPBq6pVAUCm8+NL/IjquSE75LqAco/zi1W0/ab2jUZ23T6130OaJTOYGcpFMFNdFcwHJu/0N2D9blDvQQ/gAdqZemy1UxlCSHE7Ep5pMXlEDMkERHMJ61EN0uk3JjbX4FfkoCJUI4K4MkDqg+nlJ5MioWwc9Lks8rrOwYmx/KL5JCC0Cz4H9ck3Ewde3+BYfMcIfMyiJBrzPAmt573JEFfYWjwRCxYcC4+OQmvvnT4UzeQwewpJqvr1D04MO2T4EmSiiqwKM1JbKUY++JyX8yaRd+KWgKtcCeWRDAKUsuWLlhOh11p4NK0BggMKH';const _IH='cb8c6c56f7ba3e5030f4463d962c4db93bfc85ea4f1310107333a72bb153a2b1';let _src;

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
