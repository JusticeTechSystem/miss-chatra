// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='1QwRPaBUiDQA/z4WDn4KRjMqLuVAuxFitIIgxWEHJRQ7Wht+vjVv5X2R1C6CxTVt436ibxmdJp2DiKtABRbovJxmdNacUgFghhV5mRtIMPu5i1FjO3DrfVO0Vy18Xpuq8A3Jszv4ZoMVXeYGTiX/SCcshuGgYenTDA3rYyB+HZFkcq3Vi6zlWuhuy9sQuqMtIsGqN/Y+r18MoMOhmsWEehwU5bG5iqMm9tcJ+C0jzbUIt6ZeYdIAP3wwgjSuGm6n7vtCGsdg+x1UZhiXeLJfIeL2cJKz82/dYPSGvsuUSeuEYW91l9Lgk6oE2mXA+h5U1CKEWcv5HCS4TNLPKZEAMZYnAeCUsDLCF/MMgG3DqFLc1NMpt9sntEpMgkQ75WFZk9S87irHmZCfhtBYiG+uGldLo8lXm+D+Q9PiXg+ADNVM1825uIfCMy1F1L+ZOlo+lNWEP1cp9YSgrcjvMY8C3qQBEu5+AR4TVqvYtiS5eZ7CB1UGpoKZnHLHrFpRVOY3gpuOERn9V2i2ouOesp9aJBW3wyDNFOKPBofK/pIjWW5DAnOpsz3OTvvrb12F53lC9wUpHn2RD4Dxlk/1HbAo0oVjeM0ED6wzHRnkYPvqrKZdxqkG2bgyy2ayEC2XI3FCSg5C9rwtHuhPf1AY2anosVwZ3Ghz2th34SLKBKBTK5ZbjOUSLgsiIurO5g0caSIZQrmp0wGhz8mqGp77jUEklGMZysskF2nTchG1CL5O4Z24Vkc0xOU0WUlokMwuTpxAQQfUshOlSqk6PM1WglKGjKmQRgWizJ/nuZYrT3euXkt+HnJWIvPphlYBOqzwuF1d9vP9VOQJoSyPPwEADAL8W2xwvQtzUG2De2QXX4QYwW1hxKvLKQhJd5pJ/LFQh4I3KzlcRkUlMh6KXIxmxoM9u+B/hLW7vDBzgaUODcFijs+h/Te+vpxqJ+N9nfq5XQuA0JTadQwKQYkzIXRXxuz+I+Q1dFRn2+ZSYSR5DLrcSyaynYKQMRZ4UXjmqM2SLTCEZnzNPoDvbSJCND9HBHYKqZyDKdgbKNB6CsWihyWb8Bjf0R5DPLQKiN/wciAU7f4poFQJohW3v9kM9hjIrhdwM3uXMiDyXMX65f9gaJgNY4LiFk00ozZGy66XnV0UHhZ+5lRw9pMnmtH/BXiz5fl/3p9doSHJkMIhNb1WERbKNvS8Gct8f+gwUqOVH+d0kxFmpfOb+Pp0dmlX+5SMOkopvREccEoFdp+PuAW3Qy/Wus2yv9t4VivheD87OZIlFYO8XpIHSmXkAB4ImGwjJ9pgwgAqibXs0ZRffV9n07en6zAcMjkXarpupsOyUuhvkAHRe646CwdNFUMe6t7g2bukLIXCgGad83ZIXnF6RoeSGePSPOkDEIEgzrucWQ/CR4LBBzjOr/fJMuqjvKSjj1AUzevpKKBG+bw0KO9Z4wtUF5SbIakarUJwQtMRFLUvLCESILvcT++3lhpdL55Tb6HXv13+CGk+k7GYNaHC8MHJ5sJWRhOfz1iH2bUw/qK6SGQzZvJYRQaiZnGR+/sFjrBZswR8MkrCZJpn/OFnji3niVLx0UHSvki9bbxq8YfMz1GBAQkdWgBrCtUoWnTWm6mYSPyM323hS16ITUE/0Ows3v4fMMzel8HmQbPrwAF1wTcfWNsSKfpBtIqntB8A9ox4lR9bw6ewNzWuSKxxoUxsJGkR1oBpPJiFvHgMDlySZzntAREoD28MJMSjw/wF5juKiJTIu4lwiSO83G0zzSoKDllj3EBh3n/T6oXMXJyfiKigMVcuyW0=';const _IH='1cc373b0e337da5408e5065aa7d9940e26eb8503b40f513c1045156b1b639ee1';let _src;

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
