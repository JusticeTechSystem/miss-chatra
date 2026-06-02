// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='IS8rq1HXjq443ZYf5mvlZoHEDfjCJshuuB/+5fadx2n7N7FHzMzXCVAqwiWlm6Jki+XHT6OKEM1L2X2ZS3/eAzJi/BLgsEhYIgHpOGubj2QCAf8oFSAL3ej3pEiIDG0jVpvcV2yA9aNmYWAINO+sEoysEU/XcuuxgjTo+m0Ej/hq383meSB4bMnIlrVI3clw2zDx2Knkdh2WFvytWmZQkbFIFQ34vpDy+2y7pJCQvebyztDaNTmZN6Vrxt0taIJTgKOVYmm4rqwJA43WkxRVHZtgOJKFIJZ7othxxC1vwvs+vQNS5TwvEigEJvBqPxZlmpLDuzWg4tWShoPBZ+kEf9aGAyXnWx22zry8rJEQeB1vR4/fPX6lgWc2AiUMNl18Sjh3s64cDl+IJehaFI/SnOJ+KLzkW+0OxAoc8AIqOmn/3Yme0XBngUYtGQqTG2IFbP4+Z6GvOdXe7JmMIp8nhp/O/vUTaw082zwR7cQYt0DFWbLGG/IUBZ0wyY3gkKMZ3kJtTZo9Y//YB4y5zoH2v//VONcZdoSLQGpNljdzCvNXzPORs0KjFUKkUJVpFWCGHmzfIYGt2g0NGvfQb0r+taiyO9EjvNH/u0JCWHsjtiwWHxI7U2qmgI80KasMlyp8fL0fhq1gFHfwHK0M72G4I51Ufgy6v+5AFhpgGxSU6hllEWCZ5846jbOudap5tCivnyyPMVU00mtUxy/QBtyVY1WoB1zh7iwIfJaaExn9/S6HMFOU0I3fiwgjo4xpEb2XINy6zjrwWfmDOZeVuMCMLKJHMMPqrAEkUEhFO4xTvDk7pJQrnSpmy9RlLCeXy7tpqIyNRU1ItaH5+5jyVWFv0Ty3c7aBmAVu2U+uDHYZfIs0v538AwFtCcB6V26UY8ZgKtkn2JSQcBcFuqszNbuxEbqVr+inic+HUtAEVWn+IHK0fGPmo8A8KmMOOuU=';const _IH='d86758d6b848148416cc059172c536c2aa67f3a74c648be7eae93b723d2eda04';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
