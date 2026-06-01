// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:39 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ6clIGfTbV3aBv+l0Z9eEiGTUNzDYJRadslQZ34+uBeadDIDgpxSZUFzPZ7qfP0k/8S8WqZKp9o8Ao4AEwwvDDLWoOJDULt0vV5sOf16YPCAMClhVIH2mYc61XwoMgc02PyePDAd9pc7wyUnJgdpzu/El3hAXrXbMZ/0o5o1F+DBP3T4I3H9t+NQuLr+pyvYsiCainnqs933WOEW41FCdfLtQaQJlFdqwDq2oToc3NIuxZHSetMBCtc2Ug//yoXrdgeKjJTNvDlFwL5NjpraXSOhYguIvmyTqqsJRp3opV4wZR5Hvhcu5JQ7wdN8UPWTwGqJExx1RrEdzFGsUzgM9arA8iRLEN8JsgV3mnZACYqvXeAMGju7ACexJV+HelTIyekn54T6RRKPKvj+CXpXS14LaPbIV2/0fUhE8F4riR0Eh/2tMeI2tN1xmEttNAFhXq5fakOrDB8T79Tk5EsszH1AcPr4DOeu5KgNFJj5Yr4veyRjYrSQ5ReBQj9eywwFMClpRR/A3NGVHYhmGY9ybEjgX5b9RKmo0s+y2TzXcJNehM5WvzqdBkx3FjvahbvYfCZtc1eloBvupT/fpIE+q2cni34w2N3SY7WMP6FoDYi3SQLNxHWawFTsoEatya8G4MY4WB0/';const _IH='99a90abe8c1c99dc2dc43a107cac3474fd9135f8de7852fc28071deef2c44b07';let _src;

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
