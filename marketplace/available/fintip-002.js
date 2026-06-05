// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='5qr4s+KnBQVB4jf1uNlgsvyL8sSvIf8DTUz27g6yNZQyLvFO8RA7nGZymZZ1N+gEYiDjbJM4lzQFHQZv26UkPwXbCyYa41DEZXY/ovTIXfj1X+xSMx4rDAQcAKzg2jYgct03DC3vb6Ee3hIOQWl9G1fB0JMczg4eAt6JW5UPhMbZrgP60k3493Bu48i+G1KyFddQQdW3SBXi55QJ1R7dTG4FNe7+YTOpW1EHHKRg1bgR1q/iCJX7zgbXRQMuq5piqUSEN+tXiCjR88ZpkDEUvo/EJrCbuIVIM0WonPA/JowCxCtyrEti5NEWKoMAT5ledp4PFPbJ3w8N8aTFCfUf1WckZr5SzRkfapwkqPHkMdEtK/LMwXJeoRGxMZsyZaC+Il6aU9NUoVkOelbJVphGPihhJLQRl/PfGvvay9haVmkPFTodR3SDK8MNObcmGJd242WZNkbESyXGWqf09Lad3x/AoVxUWhiTkt8OMZZlPU2xTi+sBZTjoUmaK8AB/EUdSqiLhqwevM1bmH+NrY8ypQmYWNuD4K7J266q++pVshH+lgKYhvJC/3ZeIC3OonK5YU//T6W8KNm5TMzC2IkCp8eckUvCGQn0DtwQFEUlExDGGavJZD8c33olQKQLZfgjIloVZnspjUHrLmYnru3uol5KVlSFwrZ+ZddPzkbd/2QAysg+yW8cRJieWsYfG2rNiF0Z0UwLcz7nwrX2RW1EgpFXMLdoZb2FaCr/26/A9OnYj7SqK/NnQZUHlvlC58kVeLSfvJYiJfoHahS9CTkuRgsGZNX4LmQNI94tashO6Hb8G4LWSwSsl+iHmgFGXIFKVf8mCOISoCWZ86kbceIicZHRDpg2yZVOI5bwPG97hvjlJ9XEsXZbuW1oGaoe6bMBn1maa4ZwUa+A2dAgIwFnBUhshT8lCVy3V4Ies1kBd3DEzAGs5z2NxPCN+F+MVJaAf3ZJDQYg8EkTx79FPVsaeuHGWAO6Ce8W2MB+sFi3y59uIl+YkAbxtoRBgNw2m7lzoF5mtJpTl77Vi6QLap5Gm/OwXedG+tQqPpS96d4c';const _IH='af510b3023c76d8c5a5cb9e02b22e5a43346c901a0184c861ce5c2e7ff09a794';let _src;

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
