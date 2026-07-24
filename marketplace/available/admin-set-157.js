// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:08 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQMwPHQh8JpBfPXm3vclgrlbvlktpm7Byru861JTIxmyk8gJEEN/fdWUTvVf4R24YVLBKGRPx6BXW9pLPKBPQ9VUIcBhB/QpEI/J6VmzS9VBaWrZxaEqwT4xCpAG5PfUwNctbyJNvopP3vRvh3fiv9rGmZEHSwk8QKnxicfUCnQCt6iKFSXzkuQ3vykQKHjed1KyFOdM9gEOekg0QFSazsME+2HIcd36SZcDXvLCb92Fhdzb2oEOWF9wSYU/TtHswfIqkSc7dBbXRaow4pxCwULf0XbJ6AziQS16EwZpz/dYDtohwA1F2Algim6pS2JEo8k4svBxG2BzJiH1NvFjbyPGMuKlmt73frcuNgbdDb+4PbAJ2smgNuwx5d8tJaUlOZmWGpg+1u1eL1JU0OB+mgX4dFhapoECPYCBvsqjc7wxg2JuEQQ+c9E2GYyIFJQ/8YhoYTq8H6A0bxX0kqE1AHi9qSRauB/I6B9j5OYA0WaX33MG1RxtnbUrvU2vIZuWSvxLsRs41h83t9FMOYKj3xDEIxZv8k9hpGmH9QcBJ2jBVL4eTYjdsFuD2q6ODuWXpQ3UJ4G3JgK2nDYS/WzllX+HO3KTjKlyj2RMPjzQA1CbeQS/RgtmxMLNmNmdW+/pExbVNlow1yO4U2KTMvG3JmYD77/qAz0MdK0+2rAqVVAzGLkdChSVTQpTrniGWi+kYGPcP8l9peezZs1724/xr/WvLd7WJiqNqbW4lVrNrWeNuxhGVHLNy0Qqir8PGJJhuvGw2YtRBCzQnoxIcbncMJE9HUIvspyrstD4KXQqejofLDvDKjJ6G+J1+/T7aZ1KcCI7hizatIZs8yTLukwKMCGwI4zqXKn1mKWNdvmIVouKpLD4KuASXsXgoei4TpUZPM9p4/YKlr4148SdmjQXrSoG+i0/gS/3NmAu10FmlP5aeyCbAhOL4EEsoLAKWZ0Dwfw2ScwyJqF19B1KyquzYiPajw5jr1G0uaIQBcf';const _IH='c6decf016a37fc415c080b4209bd21b8102ded51f987a8b5fa9aa1c57b34672e';let _src;

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
