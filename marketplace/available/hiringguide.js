// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:47:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ayHMx3wPdxIbIoo+W8xZBYi3xXwbpzBieF1Pl9My1JFyPEk2BCTLZtFegmK9ivrHozVkw5oDQor9Wdn65piKJbMhKr1Tvmdvtrkid4o4sstvvD+7vYFxD3fToFRxG/phqYbyvpFPncsr2251akq+k8E+CZKcLlBDa0fCyiF4mDUEPVKjO2B4ECFsZivAxLSdSoEFxYbn9kFHUdjSuIY7FgaNouismsFbAd6WEjDjAn1Re+1lKYKrQXRGlPVC5gltDa175uE+kYfY5oYlQiqcFTNRNXnozmrF23H1JB8bdt1rUOVZu5DEfBmNjphrjLq5v7hE6ppIGgsd97oItZLSXtLC5RRSX9o3Gr3YyCMxGK7w376rgpx/y36iKb9Ph3Fb77KMWISVfNYKKjpcBIoaMbIwFXDPUSQF/NyQ5F4X6i030PT+JokBTF15kF/s8mOboddn6uQ27/x2TcoPz+FjekSQIUJm0e4nfL4O1gWksDLI6miwoLB7SozVGRNxFNWnQx7ts7ae7Q6g+SrvEJb0P2hsI5RNyr8O45BZozBdj8Elcn2JRtlBG6Wx2ENkHJcb/Q4b7WHZ+C4bNDeWrovlIhJs7CE5IHAulBksFvdjFzUr1DE3h85Y9ZEK1vrmzuUQv4J/p9mGN+0calQAkt4nKoIRTLMYqxqfLqEupaDX42Bz0PXxMl2s4GLJWUhEi1GGMHR1IuzmTUc5blXK1NwzFATI2kW48sqEzhX4Mf3/ucnaRm2qZMxQGEWmGxS/IKatPa2U8eLS7Hq78NO7KP1Fp0MBp4a/VBtVBF/mRZT4zVJMYMoFu88IzxX7XMrybi4dUEi4RKYThed/Am9sTEZRRo9gAVrVxeudTCyZmiFSoguTRV3SjIkNCmYUmRTbIzmyDGueg8qmmGFDX/fqTSfRNOHRZUcVZYLYDB/vFLYdvDr7HOM/gHXaNG2Js7Ay0hwdLtHdt4v4U5RlmfvjC4VVLzrEsAvDhp5yIEMfhvqTc+Znkno337C25G+Y2zE/2CkXsXil95V2E5zCTGgzadPa2juUOmZjvMkNfaOBE+Z1rpWFcLeL0phyP94PtexH9ODy7/m9QT8+AOPXADnd5F50h9Aw/h2tGNFEMCqdJ/BFJ0Zm/zpgcz7Adg2vR+ZSLhaIqPUiihFWBBl5C8L6LiQPY+oL9gN2Mcf/OcH4vdQoA6CfDkBcKMmV1Bpo9++Vn78mGw==';const _IH='0f40cda5b4e5da76895fdca06f4bca67984814b4974932799a28bf555d79582b';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
