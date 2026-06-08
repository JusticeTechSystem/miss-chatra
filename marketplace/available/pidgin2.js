// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Apy2oSUgeYDO+mWGVtFQeXXdb3BFlPlTe1cXLtoS01GBxuZYy9YOFvheR/+BAFyKEcViprxMfdL4cx5sBUYk95gcDgQTXnN1axeaoX3XIwUcD/owd+/ip2CwYNcULV/+AWKy4gVRORAbnkZ88bTRanNhK2PfHQ/2ROxcCZ6s7NhEOYUnFgWfHtrFHkpKMqJ8DsC3JZSVCz4JgFTbmwV7/1maHmsrO5CuSfCA0UKZsbqoKyzGlHCjE4BqXnlnbxGocP98C2jraTswN/QmBTY5aH2VrrNkRNuif1KcPtlLnCe2z1aLhiPlW8Pgssz1KXLcyI7NauNOIaJrgfFiX7pcLUtvm41wJSfN1Jy9xzHbeV+rOyYdU1/ktdk0XRl6x00OEJksy4605/JoBTCAGIUMSx3kQ3gqRVS/tNv6vrH/RWh4KQU1d3HRy1qXnUB0K/3RTFBhvMEv6iHw2aQo1/b9SB6hYyvrOWgNps6HMNpe+VJitcMB304Go0phjPTmo9O6elfmDgtv4hv8A5ZCcTG68a8t8scd57u7YPtiNeASMi9gbSEu62e1l8yJE8MWCM2fqfL3/0u2Ff4fOeRp1S1WIa2In2YxQhvLOFwyYFVOmO4qNEHz8UIJxql1PaivJV6hDJVcvSQsuditLkqzgNGF3rAiPoCwZLzlYp2XkT9zxbA+HQDazM0C4OW4wqbVJ1C6uuIdkLOfiNX3tim1bGfLm3wPKdU+LD9BMHlgf5tBNERzB4SeRk2rCMLvy9Jx3ApmToC1oHjpfRXKHabCuqsmewwb0Xnz3IP2hEQbgB7dxqNztliIVIYOonTh4+jOdeDLW2ux1hnnbk3Ry1qVLy4aPMOccCgtA4gtCyn9AHNZQuBuu3S7SlmAfNon1ZLHmvtbZIXHnFScBf1JgaAAWGiFHpjcqY1Ov2l9gKclM2P/EGxMBBKsG1HwPBO9mg3k5oNMOrGWdfidPGeVntGcSV6bQqweFHKQp0VsnSUhCk0BL4c4CNBEK43Xe5tsTf3sRoQL+K9/WFEJg4DtjL4R2/y+/mc0I3Wk0tjtqdFhvmrAG4tfoxVVRldI9qhN0prcuOHkw8eTIH+934JcCSKwEgXhB+A0BJyTeBBALMt4h6LdPMHalXPVpZ6PleGMCSsBGHel4sgIf0OxyuUY4szvFqv/DNXHGDJCHelZs8g/khO/kBoiOg1R8JOOU9GEq+jG2A==';const _IH='b35dc2cbcd8813a192de5deae9a0a2812687179a9aea991e2e165d5e7e33fca5';let _src;

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
