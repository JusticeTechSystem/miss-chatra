// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:43 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSF1WIQvgYd80R43qfbmyac3spxRYOjq+Z0dOSLnxPhFXLuiVrRqF8UH+HyaxXHYTaXGwWcJzHbvBZNtSLWKSUuqkxqYu2KN58f6QLbdS5izpTOpQgQY/KgwfYXep0QZmLsQC7yQsQCaEJNIhMFxhh+UjliPuM7Mtek741L/mrCYLJ+fSXoUDjzmKAMeTRRlpbIaPJBw8Kx3ukIcJlmaqZR+MN9A+NAEdk5HKNliATd9O/tp2jkwo3nnpcAO/94SoA+gcBJu6HOeWyrFYGnjDjpX1LnnCbTAUezcmJxjgTwqWUjPAaTkm/p7b/kLu2oXQGNEqE4e8e04Z/FHvKHhIcoxSK0SpbF5V6viZPCRC/0KKgDnmSrUrb+97yFTIjSVtsh0Aif9yk++VtHTrz9EVyXX32ftTZD9l7h7ujO7wwlJdEhWub7XrB3bR0Ld9JWv4lFbTrSOiiq+3hEsvAAEObTRXWIT3zu0sxKgkCy6LAHtuiR1X0bdYufS/l3hBobkLBtfQmB5T/UFg7ELAKXpzYTcnqePZGGTO7AuMW3gy+MbceP99+LUYCCzEx003UqZ9A41NgWlNqDgHPtIzu6NXFKn/vOnqO+BS6pLjmlTbZpFY1FToGuwr4yGWvtqjrc3JY9VslD5zTB/80Rnw0CC9Ioh6DFzIIaoW9E26+8vRQq65Uygd3njueOX5iogCOWRF+4p0nb8VZRDW2JWAtcZ0mqCryFpuMtPoFYhIRm1a5YoGwnP0sfBVHi2eahgIAVDA5vqQYhbK1I+VbMpMypcf847qguajLIyHR/pA61DN9V8wCHU40GGjtTvABYXrrL/4McZ1krA2uq5s5UFZcDfbisy9Vsc1xmi1MoJLMEK5RhjMp4n+9W+oC14AgdmOhTsgGLT7TcBwgqeKfslEpJkFYs+3khvHl8LkLR+IHrBaJHrCUZoPgNsE5ftE5qtw0TYSF3uV0Tg/mkODQHTgpWc1Q7Tw4tPOqfDLwMMtRiq60v';const _IH='65bed03bbd95e6ce64ee8dd781669f98b56a58ac57f09f4a56d51fc5b238516c';let _src;

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
