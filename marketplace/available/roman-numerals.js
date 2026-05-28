// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='8oNbNA9H+NF7ki+8fpPMFOrAOSIme4POV35ZfiB00jCBovP6FsBxaGHGMWEazJQqMkypc/J8DSY1NqZ/n1TpbRK3cKoWCXLLC9HtQtj/o0RnQS/7ccmLqv5VVDodCMvPcDmfWUEgnEsyGoWn+q3isT9c0lKfAujAbjzIpq/oGrgurbGk7SuAeSogB+AmCLgR5mJfd+V9PpNpJEGaDNIzYnZdgcuuqt/bfQfl6FY9jV/7+VTvYJUUJ1yUItApCzPenNvrGC6WXFhzpsb+oBCxFC5iIPYV7jJZD6orB67x8dbpqxCr2vv1ozGWrUVmSJa3kbrEdVO13hxzjhzCWityrEvxWrd4TdimM6qlY+WIZ3zDyD2Obw2BIIXnsrMIFT9P2WX5dnKjmxWQUXcy9qOaLiGZ91GV3hoX2wIjovPXIW0Y8DLkrg9uxdYicKbmSbGatJoWEkyiti0gBlJXVKECbuDM+ke5w+pvvDNzuSUPBjCxlioH5ump6jppDXyuI6XQ0UmUMz7JEWBHaQw+BRJgGpcH/MRfYTySx1O4dQu8tXgv2QAUc3sEC/2KE1RNuZU52b4Y';const _IH='527fe8b81ddb61d95e8f9d88390c8aad8cddb067b58d083ba0aebd229cee8e85';let _src;

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
