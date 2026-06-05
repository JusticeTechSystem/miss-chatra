// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='1DyYnduQ9yR6KqMUa2TOIE4yRa7zkozZJb6y+Z8ZAA93SeXf1+KQxg37GLKlsbAAHiYjDUiNDJ4mtvVxTrWa7dVG2cO6ZSOrzSU3Kz1QcDSjgWEGdffo0vqaR0bKUh1ACrTtW+/yNOSK8BdHKvbfr2JwqSPL2zxmRfgVgasInRvfHTS18q2hB5YsvJB0nGGfnJQtpKFiKkBQwarbPpIizcEWuY3rJO8TUJCJBBI9ECJoD+6If4HP/5/C8VyXu9aYWcN3qwMUUmfRnPInLI7As1sKGFVg+qhtDcHCw0fCjn9CslrTjRuVpH1f1cYePk4KLc69ElsuB9c/FAbJA4PuEsqaOaJp8DuDMS6lEeQ1VZcKcVXhG3AWIx8kX2KjNw2Ca/5qRf6UDA9aH2uG15zW70DLvrgbo7dyi4+RlHzvG0QNfUvDkTNLs/mhRt/oWESXuojnqqPfKF5r1LGbX38At5PxCYkOvQkoWRhsxHNPNjI5EcC7s/yYidSoZM8seqGlr0KWNTuohH9lhEchFlzZQN4Nq5Xj6k8pzWCwm3mIiRsky0+Z2N7sYw/1FPmE6wLuW3WDeu7TRgnkXh6rAqfbmqcUa0S3CqmIZhMqdAUy4nkODSVSK9jkOdl/0f6LhgBuLQb/JjPSq7wSt7Dltsi7GIvY2eHyV5OZXpKB17iKxAAyLYNVcUPxsu48QfYEK+AFtBlMaPKtEo1r7KwZ7EmOnbLM0twxmpK+6ubQjnDdGw2dq5gzozmZpdy0';const _IH='5c675500cbbc5e24d88680c15c7a8ea10fb1becabd0b501d430b85b9babc6bcc';let _src;

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
