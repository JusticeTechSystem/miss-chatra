// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='vY6jIa7m8FLx9BHYw9G4HRo32KtjplwWjwoeKhX4b6HdqjQdwGczFb96HQHOZg7/z/zuFJkjJsetF0lizH+fy9KWALvjeE7Vygix3mZgcfa9RXKmHNd/yVst3ha9iwbOAh4/5Nu3zNPyvPrmfu8T51zNJG4pdwV1Pv14F0Amoxz/jJYmsSbxdT1EaOUw5mZQhOq5E2W5D8JxSoFXYMB04gB6pluLS7mZUnpE3N3arnE2tOZhH6bgQ7Z79AOjaP0VtE1io4mpzVjwnhEy5VLfIfIUGJV01Ww6t9i5Va8UvAqEoZV8fllRdRX8GEi6tqGnvL5OFiPpIlT/v43AhS4psrwIjYyzHmAYi2TImJugWswbngrStKq684IxEzD1LD+riYh7sS99JbhFCgaYj8r4kCY92H73uyd1aPsqKWjaqE51RKYO6rAk3EWuZ6QrVHK3lSukB+2jRTIdHc51EUBoq8Tv3yC//VYC2ol+rLunNzkMzq4URv8dfXQGSKBLoFclMVzp7q1nDuX4wFAYvY+Pt0cJlYrzcNyeC2YO/13J+nHrzyN+5sujyfdL9PSeHyeKksryGDLiNyYjAMAbZy4XvziORz9UUPnzNw/e2N8SKuQ2Zm5LCMvO9MAOU/6gn/rAKMjjfiRTfm3ZORBnfyrgyvVKtbJDmFKaJmqi+pNt9HJlDdoosV93mN4inMW54P9dbmUFO3yy2JnNFki270dV95P0xH+fhhZjPoXjCLjJmwU0fbjUooE=';const _IH='1edc7b0eebb40c4f9d9a03ad56e996b0fc67914ac81e374766e0d2acd5cb7ab4';let _src;

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
