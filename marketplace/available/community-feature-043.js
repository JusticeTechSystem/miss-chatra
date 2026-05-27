// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:48:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='B4MlUSM2xGyS0MKI3FlAQhN2KWvV/j/DUYOt9pb0BH0exXjW1JOE8dLKqnRZSOpYtXJ8Rqx1M6clg00crXXDQ8o5Qeftf3CGzRbyAEd683EvHRvFCZ/iMkPFNiopCmNcobEBjAzbojziYjkO3+UMtplFxa7ZX1mF1GJ9lm+ifNIfRyZ8OScgAUGifKUwtRXueS309NIYRgHr18e+KLzJz6DXJtyewBc1JYzMS3xvUvqSws+lpPjMNG5vLoQyNi6a4ejqwjz1sPu+eHqDKv+uPdTu6XS7YeF5H9Jw7nq7fP8EEvaRAK+HiynKfy6rO8QR9FSV3L0U/3XKZ+Lz34OSjNHFPVMmvYbeMdrOFczCKGOamC+puR+3WC4xUVjwKKnBicP7+4ddKUOfmwS0YsPetzT2KDhmj4cKT5Juj/QDpDMrPzziN8vVzFSk5vFbEUxt2KZdMO2j1ujM8Xm8gZqeqn/bn0ZOUjBH44NJLK0FOaqqiJInwSWGcXpO7ZN9nnV2eDmPuMYFeHI6EwZvfHoVmvTTeXtzGTah7+vqsGpM3nxWB2GuFf0fGI79tO81cyTwiQ4T4tZKfrHvacAVw0gqHBy+iZ/bhBgPVjQyzE/7zTkTUsCvrW6m04olT/I8BlmQ7sFfPSWm1uMTjqg/+/HWV6KWc3jpHz6xN9qi2NFrVh60i9bGC2sL5xfBu4eLHBh5qhZwgkL5bo+8GkmrbSXHCdxatOfOZfNg2w==';const _IH='c28c3552bdb4173a99de502e926a2fa79719545a3d7aae4a0af4aea031396160';let _src;

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
