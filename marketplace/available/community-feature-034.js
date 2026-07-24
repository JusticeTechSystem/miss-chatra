// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:10 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRLMhy2xyzHjTdQvYJ1/Zfd/ZBrVfdater0oWPbkxXkHelVeUhZtjTbnopxHn3YKMpBKtqd5wkd9SuT7MxDBf6ZoVRaiOH6HmqEKwEwayoyhqqVOUSMOsujNzA5hoG0yVUzTyss88MdhCnlS3wTFtj0IsKoimAFDLWm5RZQwYDAVRqxyrPmPckhNFQfbYIp95mTmqzKgnISla5e32rJVCjLyIeUPe3yrvs5RZrB+OsBmOxQPWfo4l3FP6NHQJdb60kLmhj+Effakz4ZWZM+rOoesVw6fo3D2lZlxaVxZ6xMcGdMNso4VvF3xv0dRx323X+1pCaiGAd2L6RQ/9+G4L9Tgb7Zf7TyZ4pH9kaANyZ7ofs31IpOpGeP4acKhjTpTHaQBEKRMEWqN4rUoxIACngcEJnqlJgGbqaK80KmVO9ZXd6TF/lHKI7zx1k9Kp2wPzwEyAN//J7RRoYU5F0HHU8zANqs15bN/rsXmKjqKTEwKCOUO9X9vuu1Y0vGZBHaBYQZXf2g8AqzleL0eRJg434sGJ6lPQPZKEHdunYQi3EGQt994GKKaoeibGAAIMJ8nGLzMYs0Hxy6pxx+0tucGuTQX7OpnVuwmZ67CdFxgGEIOkBEwKv1OOaoPIv0k54b+d73Q5UfgLDHo/wtEi0vDMCh8IfFRU1bTu9dn5WEEP4p/rxSH4B9td0Aq4NKjostR52lmw3kInqU/pCv7wjGQClyTXUTgqRHPFZcmTaDAm5kgtwN';const _IH='e59fc705b9eddfb0a4ea018f2083d149530c798796e074f37d71bd7377b43a1e';let _src;

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
