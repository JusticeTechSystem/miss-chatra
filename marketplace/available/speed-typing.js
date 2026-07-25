// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:38 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRDChqg9CF/fJiWZlvDq1ovElGJUeqtL6x4fVN5e+KzjUFneVDHcxvpm2nrKytgON2LP1SwHAEsaA7eR+ukQxALMazRp2+OTx4+/X9mEZT+OzZoEh2+CkX9cwkNMu0aDaWZrtFO8YDYRS0AlhWqpYnwj1k9XTClBxWAhuapot/B5WPaEPandmylX3WMsbivebujM+YlLtd1fsG6WmWr1xQOIymRMkTMczP2VEs0QFReKZPCcjQSm7zuhotFqvXmnf5/mPqfi0Zm/eSOjZdmbR54/4NlTCZv8YrC5XYkTgfG5z8+qrDn00lNWwFqql7iZZjuh4iT1q6ZGwzV+6q3jQ5HTxPKPpqrU6BnhWqypd8rpVoY6fZToLd1f5QH/RYfUqWehRrmq9qqyeQEZpCtbbwp/0shKm1oLLbCvM76LtV2KWGYt6LEVZycvS5fekltE/w6Hp5o+7XptP0V5DyIRQh2G2QZUSjrSQ==';const _IH='927b605a2de5649d37f9b2b42e68d506933cbed6a09ce13fadca5c3cff4fac69';let _src;

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
