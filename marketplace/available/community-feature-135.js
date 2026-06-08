// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='0fGXFX4zQ2f7mtTMk8wzIDcHG47b3mX+H8lybC14xURHySW8QEOpXAV6uq8OH8ZqDR8Uj9cYB+sgwoxMAS3z4k5/nbNh3tcWL5rOGRLWKTtHjEVm+MZtoJTZCNAMk/ux27GQA5tjX2TnaCtGWwGcVAvoJAQm3q2FQN6bVklCRxsmZJ9jFG9WjQb8A88ZyvuWYxEIXcGx5rnlBjxprHcF3iu4c/0ajBFa31jRbfilDRBm9yDW0ISmeuT4wp0vHpKifEV5C8RItXV3lY4FE6oqCecRW90iEONwmFxt+ru1HneZ7qQyiTszkedTRsTKKTaNJbyhmVfBKgB3Xojz8Vzw+CmOqvVRu2OjzVZC7IqYoCul2qpLLJcj5YwPtbPDHJcKdbjLF1swrHjKrdFaqJ13HFZwNVNnbWmbm0N/cPaeNaIHL9XNL8cAed7gKM1B4lmUuePhDYW19/nKm8X7sOEmeo87peizM3fzRMpF+2sQ9Q5ivSw2lCbI+GgRbP04AkRb5AItz12TZI4EZbvwMCNT8Pw3Bof972VsJODVBxlNi7winKfDTlf9Umo4fzI6zGShzYFCCU/3sT2SOGail4wPucWfpjREG/soBY4zF4K3uh3b7HQNYLPpFE/0WSz24FU4sR981E6yLlSWi4jx9R1r0Pd9k2Kcm/Pbwu2qbkTwhZRokdzSjMPkNo6gQAWLhgVLqNkD8Q3DHNJlDO50VX3RktmpYUMRxGiE5mc6zKX+dLIKWTQLkPkSIVHu';const _IH='54cf690e8231f3b66cf4bcc2cf1f940962d06e9dce12c3e0769062d8f501d6c9';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
