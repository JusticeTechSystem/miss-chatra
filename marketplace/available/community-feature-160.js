// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:13 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ/idb9fgjIn/dc9WVAAD/jYtjW9qp6DR5Z1HLj5sucUjKNVSOxeDSWGxYbcWNBCxjUupPpS8gQ0Fyh9ucRGObrq+KX/23qfC61NDhtXFPh4UXd3qM5uzhIOHPBp8EiWEAwGNdUGZrf313fh9xOLHBBetOvNvu3FlCvImDuW8QGK9BFykD70cdrtFWZvwTwXZh5bv4KxBliAsJQ62oX6f30TkALhifqHQ/Ag0rA/9BYFHHV1FnKyPol++ZvHzo6c+4nIsJZqTM7KwcB9ZsmJdmuV/FJRGnKvZcoP+bcNfhzZaaXOyc1B2wECaNogAwP2Bq24ItWj/RzlU2dgXarnssDSgnqJ4M898zeJHXElozUpx9zi5839+JlYP1Myxq9JrVFXxQdfD/dUVOKtJV5Hy69DHgh1qoP0nkKxYHy85R2XwrbtccTRf09yFXRYcK+hULGulycgr9C9KtD14o2Sqf18gjKdkdOg4PijmeSv6eNOWOuvgdzICI6AaqMq2lPiih5K4EkU762AL60I3oZeQMprU5RDMzsP3ird438aEjiHGWhDV9BpsZmpdIzxfcwLT8AtettGj0jCtKG67rrNi/CF8jTCTXgmeTtOqYr46P/W1OjGUxvRqjO0X0ZZ06iKmVdTSqHf3gfjA5wyw/JQ/MjPkTQxELaK1DXmCyR5IRgiS7dZAM26XkoKMsWkBzs0k6RJzj52QUdBrxk7rOZuhTaDNrFbNEraNgzuE+MgMRlvvMnrVkTz4GFFKsw==';const _IH='bdcca975e3036f0a0d19556e2a7ea2c94da8e993b2a88cd5d1b352da3ab3bc94';let _src;

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
