// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:27:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='nNqXpPvLfA2QsjMFrkVEGrg6xMPDW7mLctzxjeGyuwFi5NBY3ZZocoZ9FUZsKo3DWZ3+Tc8ZCkXIq0DYuVA2wNXIFK9Lw/odMQbnU1kFzZC4sVRWYl5R296Ojw330Ca59olKim+9rjkizvwPj35vC8XbwU1mHkv3TMs3AJCGdWuN+z0qGL1qrJJvtlftxUqt4g3m42gCozuo8rSuqU2i1iKMck6/QglhmlEV8cMWu4Fvdm2rBPf2aeVj/WDvEmHw5oLfw3oxsD0SyphPGSJYHyj78WF0aqxZ5v95LJTS3S9T7CxkgyboAp/P9pb2tS0uIUZbvTMnCTntSnRjpuOl4T8gYhi9V7M1odcCkhrRkhZEUsCyAzwgcQrZMfGcnRJZpT4wQbaPlVmEaLKKo5E7A099caer6LLzxkf/cG6lI8UQdMuDCEQ795FXQa/GAqzO8auGn5AgtI8FkPbrsSlhayGfhC/yTXxdinm6gdOIvivkiydN6EizgU2ekfUNkxQ4icLcU2DftvdOuRJM3nQoo4tj5RulTWDQQADlfwKTJMvek/wrttyODfiVTPqeivjmGxYiL3jBnjbPR6UsPHIaCBB3W3h9WU7//HyVrBxU64gl+ugvq0vPRjajitsUKZHrQXhqVJOPBumxZEKT1sINm1snsuQMZjxmQrSJhdejF4TQU12isYAMQSCZhl8ul2DJvI0CVO9kESo3mdGFJOGSeeOPx4JKWXVHLeJFY4uM/Mkh12sHV56dw87ebCZvESdCWKnv09pg8lBvwPb8970zl0PQ6QByXMpJI+TwFovd6BD7ItCbBJCdsbsdiKVym+Ci2V79o6B6EstRI0X50F9LWVSKNS7VA5uV6c8w2YSEJ/8+piPVv8POJvm+EMTBi08XoSIk+tPsI0Gj1pGcyUmYzLo+pV+PghdyLTDpDrCCrXGCkv76hJo4cEkw9w8AzSGA2btFcmemLcyRJoprYoVIHJ2cZacUOFOSpzPLQomXQQ/oXi372l7AUt/bzHxCbSRUmZgq2qJWSWdjv32x5RYeoLYOlsr1EuFDH0o6HH7xU0g+Bg9LLHMhEPNpSZPil6POP7tnYJJBAJ4agO/2JkOEUN1ORkJHbpuJUr+IE9Jsi57X6gupMAIxkA1x34vEtBGOrMmGIZgqaSMI+rr1i6v8fXVuo1djGMOljMXp2jofK18tq6FboXi38GQYVp9EluOUR6bl7ljVU5r2kWmg7OT8rxna4PqYT9U1GCwi6I1eqbqZcUMuZkl4o91ZNXjjyK76GEUytfN+fTBraj6dIDofBboXbrm1kFFIhjd78l/B1jdiLlYNH9EncWQMk5Th1IJ77/6DRya7HOfb+H8aT40wNubq0i3g723gBApMGjBi';const _IH='83c01555d5cfcd69409ad46d47902f10f77440b24de5ed4241261e45807bff35';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
