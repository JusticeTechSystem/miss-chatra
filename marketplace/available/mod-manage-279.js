// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='1/tAdBHR5zvxQ5euer2ktiP2Dy7IrgYJV5th2FF5yW2z1ZwHosYV+DNmvxt32nUQ1a5/iMU/MwgHsABLTkliM0ANC0fksH+6xkcbwWiEEdIDeMlE0Y8nxLSsjz9wYfRbMkHzlpqSeqGZad5ro3KJm2YEtCV3JvOHG40YhsrQEnpn6JA3KrRO0ainRLB8DO2UqvMVJaYxoc0I4et8dAD2lHIFkcC3B951h9qeoEjez2IFlBGOaPSCoAUpf8storM21qLkkkSRm79TAaOPyR/+msWG5otAIUGK1s2daMNmxbgq2WCL7ckFDGu+7xh7AGdWM4hcP8sCBfKrQzW5HnPF7xs01c6K5sWLVYV5W5REKqYiYUpsp7/t43i9+6dxFZJKZt05UUAnCk5ArvUPJ7avfmsOjDt/LGxtvP5/atM98mtWgL+YlPJ5OILSTs3i6xLl21MxPexXAEQyzwXMFR0Uk4irPC1nqOq3k4pNBcKQM+ESVjUVK4MHbzQQ/A6kpFn6tRqCkmF1LcBvg3l7viIBB/vnfpl+U6pIiU0umI2WUL24CYiYUm8KrsZckdtNwyV+4zrkcQiCGr2eYsWaCd8zCk10MwyATkDlWoR9YqjFMKl+qc4r5AOo8hH4YGT6E+zb2tIrNrQWE4TGvWz3Ywu74OWKKIJc+SyA49hZSD3pHswraL9hWAwd047emEFaQJYjbH2vd7yKrJouLsuzSgg7ELRcel3EKEWjBgS/nAE60Z0f3KrlkZlKnfiKWEAvaXNUol7hn+k26evysedTQrHL8n6qkPo5OX1+ZwuaO4ob9ChHxTJRMqOMTnwVH1OJenLOvWxJGjqpiqgEd/GSbpeLh/b5E5P7NOwwH3I/3iCLyM1OglvVqlXqgGq5g79BjTO1FKjXldqzz3VPy0mkteiWtQemqxZIBVsOMYr6Ph4vQ5xe7rvodh7QRSDqzed1OBa3VdXsEwX434x3ov9JvkckZggWBf1AoSl17/nhbYWvi0LqOAoYp9vyOhC5eWwvLy+pY+w1T36w5BVShQ7ayy0b8j7wF0tiXbEqLTW6Uxucj5ZyCLi5S0V1EA1GWY0YC+GGaYDtZfO8ocdZ9lP5WFFMwGZENVMTevo2/uGA+hXHVpBmQntzUhgauefekBlvty1DFlxUQBsLDszxFR34+F1WnYwz6mDPNZLcAPqAN/wQ2AOljbRnBF94DfAXhZ31GA7bvxDWWdT2b6bZGKqAnTnY3k2Bxel1Vp0cQlwkI5InTba3uro7Tbo/ZB8JI97WIj5NUiUkNyHDTvAkeI05LblZmBpDPNjI2A7pmMU9VTzxRIxwxwp4jxtVKqN6295dc2Bi5YSNgYI1uN2/1tKnahcReQ0OCiDvWCvZvOg77R3O3QmFjym9SPWrFg==';const _IH='78426cd794aa2cdf87d4db3fe48f4d895dbd970de7333914aee7238e1daf7579';let _src;

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
