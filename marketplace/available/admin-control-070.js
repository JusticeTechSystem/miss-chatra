// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:41:07 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjR0BUdaTcI20OIkEFLGx1+tgTghJBdQRHNOvQPKdyeU+bsRAcFXtFVOl8T2wGhnxchBOSq+MnxAu2Ix4RjoKMiruyvl/LAOsC+tpjE/CYDi9UiEhtmp985Wcw43oGgXeGLbglecQkv/UqsMyXsq9yVWOh4kD8bHfPyao6n+khba45HTaOtlnFl1gD+wDSDkx1MZSYjKBLqt+a82xHRlYmrn7i77Cg6Th8K4ije+TPGiudZzldWGwD8GQuj+sPS6I7YbBGhfnGzN+5TFU5fzSI1ySZejQVcsqEkOl0ir9SL0eKGXMFgORCWJ2X6bLvOB21gLVMyotkKj3RZbouTvgWUh5i2LY4S7D4zpwcBg3DrBBgm7WC8nzgk+C1k/ffjUTf3n0x8AOj6MTMyfd72InzVRxifYlRDC9ugTa+STTqS5Hxc9QvhoCA3bJmOmqJnXruteDTeo0yjJ8PRu2czZiffYINxWv5T2IKxXhtpkgJxu95YfLbtt7wg1ZdOo8htYJeRRSRUY3E9zk4z4XsNRrIxZbW5UCVY8rsYoTqIehi4OVMDajCk4gUIOzSmDGDoq8tLI+4NrJ8wMkiTqhe1qxPLh4AfLXVpoH/p38OJqPW8jheuBU1czPF59bTSXksc+bWGLiSYs44hRt8ueSiP8Wb7FgHa7t0VSeZ0rL//Msw81rt6Oc06zXm6k00zWvR5nW1XBiSvhLAYuQakfDWjBS0AMd59jL+GP4qvXcJeCPM+PmhH/XxLfFfMZpUWFIrELDOSfQg3RV6vwtnCdU9Yb/FXLpVMhGgN/uIDgCd5yuPIvg4kzf2GU9oK91e8CSFqv/EyN93qsEYeMWHN4ymkG64tdqPBD2PMaKEOxxAkiy8KxIN6KjS0hJeFOSMHX92zRuztRpjCGYo/Ith95oFHgDxNlJT/1K/jUYCkEWhuGEdLCV6CL4TgwaGV3hHiyZqN9bCABJRCvnIvhxgN/ytA0G3vF2ZXqbF3hQv8f1DnXZJKNEwswAcOavnwcAvpkf4eCRf6Q/g==';const _IH='97cf3e7a4143adf01be8fc7d78a0a7e046b3d758869eb4cb4343c5410df52818';let _src;

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
