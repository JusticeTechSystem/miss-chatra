// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:20 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTiLyYL27IIwDPbw4LltZJjfUbK5nSvq9ON1zyvRnLJMZcLtGbrtwTOkzn+OLsbb3KRelZIHFkQbz/q/NQf8JKfAn51vqDnP3agtsi5bDWfpSPzWvI7e9bCFznqNXqyCbHYkPhrpEp8UsCZW6lbBEPnbtkXHZZazL0Yefg0F8JRY55iUuqhT5SYRPPXqnLxftNiLZKU7F6y4pUXZHmZvOPGdREg5llWb8J6uI7sZiG+1B7y+cZPRCWutvcw2p6wVHI/zGCMhWjL44NHnu41e7pkEu6PH0L5iCEzLiY2QeBW10NTIt37mhZurQeeE3uku1AUHihnQwDCBDFJfT2fuPNxzhqEw2M2OkUBY+0fY7Ojzfw+OTEMhmxelIz0AOkJVy5l13ciumSThr1FjG7w5I01X6Hjt9sA/AqWQf7CUQ4fSLOhvuGgIySsYHP0oEiedtSCd1iYNExHLIzFBqwEmsADKUeJP/c+Va9VhGNWwlfyrODT+Is2VIJKnBsdTTE5VrTo1o2dFKPo/r2SiLpDm2G+neRjB3BnL/7X4oN1AMqsJQvgFDiIQlO86EPXm/rdKn6jFCundg==';const _IH='e9de7dd910d14b4c3f5eac970d2e1b9bf19dedd83e066a2ca8afad2e3918a744';let _src;

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
