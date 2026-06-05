// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ZEgkDfkrBMOkAbP5T7q5gcZQcMWA3RRBi06D3/yRcStAz8QIgneUckiSjSIDWzBcmfqko3CNg0gQ0EDDctl+XIZYnbrKX0EY6x9SKBmkkLfEd5gY/WctkSH9iKP981GqRSXeK0gp+dUNsYoGk2C8k/N70Xcw8EByyJHN76MwvuTk3Yet27xnd38zP7mgmFgl09xs5g8u8UhBCOkCVRpK0yVZOJTWEFnu4fkV5ZWJl3Xosey6jq9JQvxjKykn360a5cYB00UjiCZkcUFEtimB345VFcroRo5Bk/sCNIykyj/Mx2jeIFxQiQBO8AtYEaE8eVoIewZgnEKEiBC8DM0xdM6piv70Ggkshy2Ufo7hqI4aU+jIyKWSIXRdw9SqTJTYgDQ4TSwviRdtBSBdjkKbkzNkuQ55spU4rU+wTwgrSXkECAnTuBa5kTxPVTkEJrrssJJzhKimwUAlh6kMpLUID8GSZl/7MAN2JuxxztDS8p1n4KuvwkqJWrxR1bg6N4mtH873ffjCm1bB5CKgbcmNEOGZjHdstUlyWq851vUUMOM0rEt8jO2WBCqgug8nBMGgCda47Gw+R4M5w8BrVTKicLbwru3yv+2dKPkGfA1aIfMrV/lSTUAQoYBOb5hjSzY/CARHkmT4GpmD093a9DPFHHDFe+uMPakVrO3QbIIM7CaO8nw843LhYUagoS9GVuStFcz6dZLcUDaaGcXxrYUw3P4qz0TxVY7rPh3JQd6QW0q0aRkxrBZnYSdyZ5CIyjQmdRG8GdUrOot+GMMfaEG+FPPvN3sISDjGbIai86HqEW4+D5yjO4ANgt/DIJDQ5ig6gsgkxfDvajW7pyqWIckZHxgWdBwMkjNd6ovidOb5X2hYq4ZGQ8bee+RIL0E8YDPOdZ0hD32kgyZnYwNu8GEPkrdjZx8wCnfC7iFLS6z1f9HX+izJggA24yor5egG5PBh7t+mgF/tLcmUpGs+QWXOe8j7Hl/59KvKlLRVpdVVINpEn2lWc4SA4zP43/v0strxH6MzLA==';const _IH='c0ac8f33dd48249fc3db5f61d7e06908ded49cc9a82317b7302198f984ef110e';let _src;

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
