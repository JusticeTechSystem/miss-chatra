// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='tkrX+7MXVU7qsegJHciz1ZRpV2PEYkMM0kM/xrmJTTv3r8gQi2NcszpYyYrAfafLmC+8dN0qNTFO38PuEbdG6t8gV65VBpDlFon76w+wR7o55cnMk2zk2ot3iZUiBInseCMSbvjsj1frqeXY7HcXD9m3qpGBPbirotwlOb+T74WrBP/4VrimXwuokmYgBqx7tQnj/lybOrtxSx6ef1o3S7VVue2yvYpoDs0dV8wYhccUOkXH91ULWw70tFeO4Vb1AP16CrKgeSDb0RSf8MeCykkB0EyZMFKDHK50CJSL24Js9iXT4auwOn2T+O0AvwrLWeDcI/v4l+Jfi3ymSUyf7f3VjKA7LtUyb/rOvPy51hZjFwooVlT+GdPmw/M2dhhwikFY8CKZ6VFMoYnxt3qS+i4V2tBw/2NwLu7ItJiO4+ujzsLxMv3L7iah8MNgbQ7fsWReFc1R3PunqSrzgjQpc0bUcSb08CAbsnFJ2IGOtMJqH36nU/hHTpNLmcq7lVqoCpuyRb9ajoqC/8wunuI94KM7bekomfis09gGoncic6Sx1sGVGlyE7kBiofzM1n0FAJ9fEoxo2EIYMxZQrJbUy2VoATJR8Lo/WyO6WixteO+F7b6jF8VtpB/zzrFZS84nHLQVzV5yK3c1zgdQc4phRPwPmM+29qUJFAEe2lkgD5dgsHccVAStNjqzger8i1agkfeQBtm6Cd/ToVXmVuM+c0hsBGOtgM0UCm+wW4DpXOsIZKLakuS0I0H/Ph8W5I4B3AxdtfAcQbBNbv3HuH8rqak+AsKXQe5pFizxar4HZgkts4w4qQXIp3q0G/tEu5w727Ft08M1d3J7YoA6iY2KYk67KDFjljOadRM9xiySvqVfnTEjp1PXC9+OY8vlV8S/t/C6UbPtVQTeXHsmBEKtO8zXqDVgu0AqQqRu63rztGj7Kk1ckuzy7nWpAjUyFqOLQLhZo94ZIe25N7JpPT9KPWKvxXKOzXsgJ9OePbaS2FAY/sma81bqr5OcoGrFp5hvS64ZY4ss93Iepe9hP9wOrY/BWswltT19S1NqoXKpZ5Tn6uOGWSVqZ86NiFeqRX6d40VUB1/6sdF6pZnyiUq6g5DJb0Nio0AtRilsshhrzpXCckkYgAZWaKzvnIi1BSF8u7zogJYWPbj0KUsl230qEv2lGAC/lWXiju8TNdyEid2+UJER12DpPa38zbHXpdXgKtFkAxEke8nLtJKlQuL5+v1ybEQx1ZCB3IMOGmXNp5SqhH/fCMZQ0CIrmXcpEakHJkbbLcxgpf007w4IaIVQT3tFHlqSfxgInruEhM1spfiy6acKxKn5nPVcTnqcMmB3INaLEup6M2wHmc4sgEZtu4jpCAkrR2p1im7LAGGgiUhBjSFfN8QOd6rWAdpF9DkUSqdpX63je7FvMx0Vm0Xz8oqQxfKmAS5uCEsYrMvs5qH7oQIwSyMO6Pt/aTB4FN+U2M5ZCOsBfl1cpC4WIyaKYifIwlp4EFc4a/ltUXI1Pcr9VNBNwdy+L10GqmQIla/4bAW1kYpRznD4zVXqVBIjvNTuuGlxpPQ0g8c0N+Yi2DtTsa2AnlhLcjWd3xLlaVetTbhMpeAEpiv6O9JUh7c8j6voqPalmfrNwNivuvjdnlzWYVfajcN9rmW/olmU6GfRQ8XfWJS4WaLskHVzgG2Db1ftuPpoYesv18tUQufiktc=';const _IH='3e2057cfd1f8cc4154621ca46167b99c5a7bb7623b8afed577804b2d36d39319';let _src;

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
