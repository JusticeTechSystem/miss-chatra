// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:04:41 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='aEmFnnThginf+mAWLHquYeJ5QmtuyhVD4aQZcfiV8VytVdFMRGClV5E8vd/4NXO4x/96LHPWbE5YG2K7THTFKGQ1OZnJFk9SomF62yJxqqt+pLdDNBmAQO2+pfUZ6qfHxYdSuKK61GLzUBunJ7No4u2Unfe29ID51aR1Tjzl/b3rMliGSdhJhxvFRCTn3Oh7azxCC6rCd5mNfDnAx1uSmzA/H+9EphBK+ndGXB9qbeNhb7cANW84VbW2G7SAwiwxRnw+/7LICp4qWqsnqPxPlRwoGPNM0jUwErCSQMeR3HVVUF0JuJWWcyWSuFshNXcMq3+dWUzt7vH976rskAlqqLCYvRx6JbZgsXOOyhxtA/JBN/o/gsjirLXp7c9jNIkalFvp5xIJw16jLgs7nQEApzX+5536zWZZr1OsIIBwwGh+K0lRS1E9h4+SqRslwj8tLcSQE5WpHeM5GHszZiTwIwxOx9LC5iD2nwAyrbp7qkemflhpy1K6IneVH2qtltQgAxIZOzO2I4OSImXcoFVoAK72gPWEKibdukWtcQ3IONZ59xckLtJ1d48AMwePOFBlTc++4axcH2Cvly9MLoWeO97WmrP2JTvw7LPPilZ/F7a4jlK1V9Pd9jrjLXc0RoLefxZ+84kfsNF4Ze5Os3D7VlJcOdhwXX9IlA6ZZFX5En9s/FxZ32myRsZEWM2f/YLGHLjMb3K1GBdNjS81YTKkgk+U0KfJ30JqJuKGN39ngaJkNzKu3r/N9riw/iJrqjbGQD44/nPG437Xjb60d9wOrqF0WD2hDaJVh2rw00aHnRQU0b56xAkWPUTMeoEqkTVghua5QmVBGIG9kP0RFSpYW5ndvtz5xN42yxvKjbv1XsCcRuMXz3lbRUBbfcltntWdG4Sf8xTpfzk1DIrC8ABR28OTHFBqXJdRg4Fk9kiEp851qBjwfocl3cFK/hAB6CzmmcdaCXxpgcesJWsfculhFusERk3Oso1Fc9LNZnt+522pa68o7dG6pdrL/mh/mIti1VXMjsP0FvH2d5zpGWG7+Qt7CysSLk8Gyr4oMO1aR39xwr0BoK6gs70pTDkwVwJ53wbGBDlxKVR1lMAMq1Fl10CyVUJhCAWI2uFRjcsl8o+DVDWB376nOr0sC4pGZfOPnjiysgVRDrzkXBrklqdTC9Tbpicdge7A+OTo7WHgBmWYUhz2GgWl1pTFA+1mpMOpQwY1uGtG78uGbGJXVxZNFwPOnXBMVlZn+RRkAC/I1XiYpljVRWQlThO0pIs39FUXcxaKWB3ms5267zqQpM7XYieEWCm0pnDb26v40BUSbTrJVK6ZNm1I4j8xl6b2HQ2Je3LK8Ee8adPmdiphrv9NY4mK2xDTO8hYBTC4IrbJVly+BNezhgAApw==';const _IH='aa1034ffca933f09bc465e7d3367844a87523a1481f7421e3616ca30563c37af';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
