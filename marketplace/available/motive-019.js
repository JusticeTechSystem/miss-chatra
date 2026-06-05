// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='qjJ9Cm3PX4X+IoWQWph74HIhrLSzgJjCW3VltzocSHI4DsjBDIZv6A36OazSTwIT6lQQxkm9dAMLKnZAA03AALwjgJPlCKSnUbGc0ALcPMKPSCin3He1x8Nd8tdbXJTSVhNhEP14EXKEYAm52G40ATfDSYXqVtSL2Z4/7fe82+i6mV5eggEZkfy+J0qmwKcjpDjvywYFWwjVP7WWPXTKBKMrZXZBywRcrjToimjdSE5vuZUYyUcFnSYG6/296D4aLnHMVCmQNz7nk0mMM0QaZgecMW44oZk7p+WCb3FI3d+qe9xSj4omJEsySj6itxnshjFUZMUVjSAxbEJlEEByon/Rzghwqf7KRiX7hQa+DPRMZ9OAtXQ802NqrNSdov8jRQFA3PimdVK85xx7AeWhPO8K3vBsS2RFX3ft4eubLUCqX6JV2e7rll5yo5j8uPCpX1IxyN9c2jDKjYAgGk0oXd1QvnNG7KM1xXHdXy8JtT1wcnRYBJosqSc+CNDtnjRgr9LPuRGczLCxdCIm0xWVlz7vzi5b1vfBeiDPsfU8Q10OldEY4dlstp/PIoFGdxAlM1PaLuisvhsLLna8ZNj7kCt8ia0v43PlJpyx5dQbP8VIG4LqFDg2kzQDcsWbiHyvd9RaUW67SPA9w/3zeCF3us9s2ReWN4HMYNEIWoDq2HzrNkhB5yIKUEzviOr/vM+u1MfuNtgMIm6NFN8j6M5dicwE+JAvW6BBfxNuonpOqSDUTyAwihtr2z5QcI332078OeAhWStkkpj9wguG+CXpOIK0qXhrsvmSLL4aKTfDVO/N3hPrlADt7PDDAUH6jpFiLXqMr9fpk969Fgasp1mJBn0JmyHaTLcy4ceYKyvmyiadHrpTkaT3oLsJHYoruCOCPcuhPifhxQLZ+bIbiWwADae9y7JU7Tniwx/MJ7r9/2x3dZCppKWbofgmfV9iUEcelyz7JCEpGEvmjIaYn1NtsmUUxaIh84nrvpXkW+xZKO/JNRAs06BF1wO8Eh1uy5uxpge3i16f60S3khXrN7GIxGqr';const _IH='f76269477824d209aad95cca4bb3a9607de5d671adc85ca3d57100bdfa6991e5';let _src;

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
