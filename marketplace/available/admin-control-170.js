// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:43:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='PBkU9EDPZqxhF8GNG63atbdDsderUJ8ib4ga7VolPd3OD4GhabHKDc6Rlk1GO6YHH1ZZ0+L06k8qyADDchCxk1XB8DtVUlg4ywaj8KWgaswI4vMhSYDQLikPtEg7JIyPnEt+Uqwr0l6wkXdqm2FShIAUE16khea/4VEQEyUbsn/ScqbYze5b5MRuAEkUkxdwRrycYCx/3d1hWyR2Sxhw91oOsdbBWxra9ZCk6kQcSoqbBObbvEwJ21MpO+D1tgni/DjWRJ73SYVWQ+tyAZ0KONR/FPe2kuQCJ769TymsgM8qS30TGNXjliHL2ddP7B4hYH/j26T89aP95wh1oXGODPBX65QBJ/5JMeEBA3D4AGswix6Yny2+GcDb1pebDdSd/yaE1sZqxQ6MH59Ihu9lXqXnhmtfE/kZ2Ok/ZzUeBHinwQyeEOsN6HSYNvo4XKIzbh/PmIl5tnYzq+6htOeeKWG7I1a+ITWzwqMI2Z8ELrp6CNsSmgDK9FSJH35EIDwoNeY90oXMiuCZeeOEwa+uLmbUFwkcPlddtHZrd05OlH72Mvq28ziosrCsPouIQmt0RHRuK7bscUQW6KyPu9oFVrklrtS7TOmrRV2tVTLMekdFVkRbhPnl52LAvhVmIOrYQJVLU6Fh421BHkC46rlOyOuteUKOgJeCJaD8q3I+nrzaw3r8m0g7ED9nn5kanPY5ucJUmNfXibd9Sz1YcWlyuEI21pcXTnLY16jd87ki65tmGCyIN83NXais0H//LdG4lEyZK+PPllRYC0BoFIm1T3I4IFugwgo0ro5+psyTACB1EkjcO22Lk7YLp9hyl/PiDKKm7IK0AyeO+Oyf/qVgfm8lo3FBCSslt4xnxuJQ1tV3w0Jh3bQeC3FNRd9KY07osd7aT3k30wNdD2z2smg0Yc8PE/JUFuwJ+6qSYGdA3qUDfdneUATEWzR9KHtEDDdlhg90z0+G8n1GPlX2wTJTGz/7aRtu2rHBLLWE6AcGAHvEC9AnJ01TybN8iTGNWwNN49QHBGrA3j0=';const _IH='ff99d406975e5af3166a3029c62a4d91a0c041a905198055d4dde07f7528478d';let _src;

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
