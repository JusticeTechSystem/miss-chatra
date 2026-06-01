// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:21 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQxlyi6+imPrSLfTrofAYzEprj0y1L0//U2RW8GeS1tEQn5RZU/crx3qvt3yp4bHltYXgqbXNHHvK5gVNXfACQIdjzWrFf1YRiP6tizzCSwGUgM84BYoZEc4xwnX/OBR0PAT8HCm2F+M+/zMV75ey83uwGA88yDlurbSFpbNZuScDWfc+RUDmBX793DzUX0NGUMlBSvp0S+0hMfO6L6p3WMpxWLFR4JOj3Q+wLz5NCkEkUqcxyvHy23SzAtJKEecBduJw5RwahrCWxQVDmTVxcnxn2TpZPlUOXEsXzKsi+aBcOrlo03QxNw1wW01KSMQ5z+9XaTAW3/alM0eSqJnuXeCbJbzLVK9a60omnG3fHtVWpI0QJ7rj2Rf3+gK64c1pMVc+13n0gPfIC/h1K/UBlBb7RxZn6xfncAW6aEoQ/L+EnR8bulp3ivEYUUdlESGD5bjUFoP+KwqkbnL1R2sppmW9O4VQsJG/cBC/RCo8mk2j2sYDScRwn7dt3KD3WzvhygQcDFOFURdArIoNqJPlx6mJy+GG+qpxOoraYWQ+OMhXXQ1WRJVBxtGgsiSa1pRPk8a7qH6GgixDxlkMfRFuz4Y0UtPpgOQl483kaUVrCdHLwWtjEcmNQ/qFr+YypUiLwqhwvezP0PqRXqGmp2bbOigXufg/XDNugl8vuXvrO3+EmT6aPYCMLKt43u9mVZZcu9ThgBDplHi6v3H/WVjdKeWDgkGoBE2S4wMV2aKYlCe1y8w453zQ+Whcz4FIKMpKGrq7d9fTFLMCBu4HXS62HI4jSxmGXQ8iPjdsS6MXdTnABGBJY1IxDge7Pw5ljVoMPhPZyku4s+RADFXIk4dM2ktyNgI0ID7xDdy9Fb38dnHzYVsRMMhNoZOSQy0I+SETO2js0ZaYCleHyIOL4GMk86vuIchY7g/rZxOXeAkp749nt/1w4wcx769WzPiGCllebUe5Ihjswg4td7vO/hNuh0vPI4d3lx+/DC5eRZ2CK6aWzSXcjzuEXzEpg8JHrnGak6P2A6Berme27zggU3UcC+dx6pHgOcIjcKVwQdj18ram/I8=';const _IH='9ea037fe1831df2dc35450578e66d18aa8ad399e991486c100447f0fb4b42f2d';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
