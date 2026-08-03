// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:41:00 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTSpg7DLKbDLeb6E+dfQNzVq6/IrE/e7Csq8jROKyCJc8qU9BRpVGKh8zdsVwNa5BBEbntbADTeF21IQ3I216okJorlM6rU9rCRYdOgHf1UyJjsb7m76ggisyA91T9qO4LpkwukCWNB8vgRgDWhJGX3vJM01uPBYoFvXNWZLttAEslork5k5wJ7uKHTi7tAB7x7q+jcl6QDaAgwLDGAawho32JWAMd9/R5JyVi07Mnl63MKIuEPfa4cbSOjBPx9zCXwM4QGba/DctEA/HCm/iSEq0sjaE4RloIsNooUS4iZMD959DZkfJACqpcBFnLbuuIicH/DCf854/lFI2luhrl1NS3t9oHm8snEAOK99cps7Il+fVvHkuH9TuIWiTCWuCFV+X0/cyYifkfcejYD8ANhOSbsQqCLbOGb3eZYEu0BEGb8prdvvK8XL4VU9qkX2+SrnqNcT3tOyfUw6XX28JLNLGt/jEVveSYHRLy8jWaN04jRiF+RsI17geTJJliTSzOyv2hBiPZBZKKoZ8aCDn5FjJIo2lJ4Ae4Ux9InmfE+MmDzQkGT3AMGJg0x5hGu2kytvocsUGxzmHhHmwqx2xiwFpaxiJcsJtmYMaV80+goh1XbhlpMucJ/CjhL2DNfz4yizv2tZZprG5fSVo4f0rc63x6zSP8dMhzqi0uYp4PuPVjVuR2dFJRzfK9aZopBxEIBW2Qru/hoBcc7drM8veawKkekz/JXzNoDWVptNr2HuIPbqhtj6HqMGRbgDT6NyjUDX+TIDacaa4KZXZoLkeNZLUcFFoW5Sd4OxVrkuby2MPUwq90Esif86KOEeQWd5K+fP3raZKRlay0CQBGnJFaHHqbZrLYSd6MylFTvd1AsjUxpAy5c7dWMWQ/GlrOqt0QcIdKL9q7LIVwbJbGBmJJstbduQ0+g9X9cTb89bramlJw3bKs/s9AfWuxdN2EpKs3Oi9sLUcyuihUwrrRnRtUsCIxFd7QS99rrxq3QAnW8hgmfM96Jg08keneJe/s1Ew==';const _IH='0302d4dcc5d9d7c29f89253165a279b5250749a0556e30811576178edf8331e1';let _src;

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
