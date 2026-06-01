// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:20 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ/2LqAyFyNhCVitTrc8/+HOGnS0w8RFIY2uNNOrbk8pX0ynmZERmxz843rkNgQrnKlDTblS9FPrCwRiv6tpbWdFrUwVjG+OmywWdWT2N9HUxg2ktJCw6WmUYwKuCQU3bFO5T8a+JGQ7+z7dwpjc+x0ZBlqZURH7AMl6bpMeVHQB2Q72Pr+lY+5PE+EqrlG6cRgi7+e2acj23LgL9fnotZGnxeVrVZ7NTowux+uAQ8nuexziPZPg5DCzZkFRz/qDLyWW/8Qv3La3uDNwsZFYB9tLeRCWEVKiJWm+9qhYzLG/+GYEbC+pzdi+WLEuuJrDElSxPrrQ4uQ9kFrN6I7EdqgpTAv5azJtPND2Y0NUoL0szJzcfHnlGTdP9UHPBNtpcpg360j2tFNpm6Nqn2BPKsxtHIwznVmVAK6o8fP6XrA4ztXXUVgyL+P7EtSWfpp4TF9R6VyViu+3kah3LrM0Lnv0gsxtowkAtm8y1i7tmELoaHk599/9h7MeLp5PaO7lJVo8XtPWv916aRve5h56OvGWMIvss8UFdDAV8h4NMtNsx16FB7FkN7D5z5nCg5iowalDZBrrfh+e/yJYU4NR+SxXvIAjCNwCOpDp6WA9pTxwhjaTUYLk31fc0wbgLREgx8I9YZ/8R0qMoxfmq70APTE02zJL3qQCRMnasFQ9c32vps2ghJSXDgP6rCluxwJN41ymuzuxGpCdHH1tYMDUTFrGmjNkCk43ZYldyuy796LWdJwMG';const _IH='2528aab356ad6515b0c76f4586a158cc458dd83148cd8f5dcfec178650ac86a2';let _src;

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
