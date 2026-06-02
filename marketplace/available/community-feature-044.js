// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='WaK83UdoDLPoD2OYexOUvTHKsDBO53P2es9+0Xmddxn0v2uDWMRKmJdLvZw9v33bXLDxwqh6BpnG+2mH25E60xs1f0mYhE0QD85IROAbsb6HZyc/jRLHWLEQir8b9ucciXr9MaKzsTtgkMatTxpo2pX4qdINhbwxXA1WbeETppBlGBB4euxWsfwr1qvyM7H5qdwqFHQhes7nS8H/xpCKdIYPPoXEDC1bZpoJ96YMZyNRN50PtmVQ8rXz9ErStmoCS5rE9k81ZB7NSFrMkWDTnvrLx5p6wOlQbdkDcCNUa/111mNRSPugTVUOzU3DuzdEK5PtdUZoui6uVaO0CSl9D59DwJmpN5T/PTyESqv9RqX4PpYC7PZ8M4UQO5pQGri6vSxtS3rcTWCaA92Zl47LuBAxM38kP7XYD55Xcwof7X6Z39AbOBldfZzRCSomeHUTVj14wdy1dqIgGQpSeqB93NBlnLvy2/F7RJ+t85UFNDSHx8i9SDZ5UJbRi6W7O7Jlw0VRhurYUeSaFbfJ9nl8xDg9t6bOFayy9NH+0FqM2tNtN7m1UescPF9cLOa8Ksh7lh8cOSj7QGoqcgD4DQEfmnTdYzTYtllKyLPswqbYNc0NPsx2aiavlVqqnDXNqLhnW/e10AzEjwhjBZNzECa2pv2ZUhzqR1/zTkwMbVsmBShk1vPTyZg4PCaNSTckzXjXooXPmeC+uEbGt4dbF+2tvQnD6PACOPRx9fDt1BrHYwW11A==';const _IH='8c2fa2cf6ba071d97305340a2524b04a482bf7478f878550c551943bfe2c0ead';let _src;

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
