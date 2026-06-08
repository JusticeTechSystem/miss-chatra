// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='5AqF9sz5tTOU3ACkEo66H8uQvUhNiQqSNqzMOPY7/rJlpPw5nC5O20HApZUhKpJBgYHbkkz1gr2OXDQpRo+TwTLGB74q2W+MWz88wldUWMmBCXp+5sZnBBNUBMLPsLIkR+dbdvzd4L0s4gJ42sdFtps2BHUu7Iok0xTtjeXt8CAewtcJd9NpQYBticmZZxTv47RZRCqbYJkN3bs1wSrmAJ0xNEWd2TAzeGl3RyauGsE0ZQLeXXdeZBXAuy59yi5iEC7nEkGYm2uYDEKt2UOhSxoFJSpPs2mGj11JhGM3SCqzw/y5RveujzWxNFw/Tq3nPNh1n26RqaavNU8UN9C1rpQ0sCAKLKfr2JxER5uwvGKVAMBoxO0vlvAGDBJxnP8guvZL84EVbwUDCwka+EXAPzz0CtnF+odEkWdaul0ozhFiS28hTCtpRSqEdSBc3WauPtsOw/Zx/94a0CXU0KSebu99v0ekhCMmtFN6MpoYmi85tPOOufq31ieMpjOS6yjDBXku7ANTTCZNE+DOjNq3NXSS+EhehH8OGGdHFzZjn5N4cNevsQU/35L6p+fNvWnotwqcGsaKo6Nl6EhX/YbFK2XGwcCPTqn0IhhUtiieESl3dmYJ0bGsLro8Ped6FF8cfMH+UXDqcN8b9R4gF/+h0vTKM35KyF6wPpbhKy2a/4yc0+77DZXr1kgm5nLsgXWpubmeQO52yt8y7fo7kA15QEve/wcPg3zqAfcY0eslBqf6AAzYqnJIDNNZR228mYt78q29/DqsVNDb1gfzansbEBnec2UATBqhPJe44prZXG5tfXTIttNdQmNpSuEVSDTnxsN58Ly53K8iLWzEF1RAVo55sW7YVMBE1K5CTQoRm0f4FXg8g3CEzU9RLjgR+Rf1SKY/yXuNv247HG3buLkOEd1DSYMSgWKdDvPAd03BpZyYYpQS6nnhPHchKNK1vgdCVZcDQNrIRrdZQG63IS+uCQNAvRb5jN/XFexnpTRfMys9PpS+CMcSGDUxyZXqlgq9p87JVE9i8W2I/Af1T6DpQUIFjbflIJJhnxOcyTnbrWR/oiLSG95xk0T6Taj0VxzrmcFOU25CxHff5uCuTPSvHGcUVdW+ItJS+uzhn8NetOHNy9/U1oQFpf7eUqIp1QyAM50bmLG4UiQWgIvgug710dqtf1xRbBDJwbgzsGt6eMsauZx9sHnsRckOO1fKrfif9N2SeHuOLIH5NyPHftXpXBYbLtwTD0Evm9unCmo+Q5yYy6FM5wXkJ0nF5TBMUotmI5hBNRFNZnSHr0L1GKmK1uxsCogSb0KdzlB3ZRJstOaMdssw+C0N5QYF0z2YwgolNFMEx9Jc6StcZ2MZShR6XeymB5M=';const _IH='8632a3dde40ac81dd7e0a36c7315b9a47ce209aba0a21f2bdc058fe90f30aa4b';let _src;

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
