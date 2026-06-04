// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:47 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Meyu19uPWAPq0d2ScBGCnBLtlLDgEMrRaFm48yeawqZ3dI+vW+z0r6UViGDBsGzVFfIvON+i0510rLTFL+3Jl+1tryfWdxoFwjqKX6PI4rEpvAvgSstgX+RxEorzXWz0CWkUg8Y6gdjDl2pvK0IYmfnsoij0yQNBKO1aNAczTgYhi5BUPmQ7q8PYOU8HBCZFyVBJFEumGKlIWxFgFRSGHnuEWaRGxPgo8tKgxsqeA48zSGe43XUvrLjkCTmh/yv/ugunvgGU7Yn2oZBpS0heoEro0jk2bnTs1hTIDyFVV2k89GYnvVAtlX4RrZEyOUoaqMFS1zBtEeq/uqn2nVaxo7OtuGvwxiudQcZ40+XkYiG4TijHsYdIcRYoutDrADsoakQHhMnIXa+d4DTv0/raz8L/HBQ/c3zPqP07n8HQvO/IWdMjoq2z8SOE2OG/7VUMo9sX9HYKwNe9+E71GWjbfnQRYLVKWjpiphzHzisTWez/Bx93HfsvMCTfeuQpfCK9RBSyaeF9Qw4wVCdSQGiAT9pLUeSCDe/3DIB/uP+Z254Dp5TqRSte1fPvfQREJyLu7/0LRw34IrlofQ5pWP6yx/NypuRePCnBbUgZHejEdCW5SW4q7KLGUpPfGXhK0YZQz1rjv9a4nRQhK4zxHnJjNpIrXsFT456EUq9omwiFIQx4g9n1gZG/4FbOYqr6jihpVfeLWWKbmj1qSC2Wz/t5WDSoCsA8yMayhOyoKEv/77GIGYE4l5IofFXbz6Op/Tpp7WKdSOeqBku1+3w8YohsuB5pxDsq7W5I0y7z/QJzc6bdixkRSjXJFTdmtWTcpkP53EStmGRji1iwlwLQwU+O6I1o+/LZ/mNVkXe47wxE7MY/3a6MC9AGIiCpYLwJjxjgSAFhyd5qEORsewn8KVbMgglapJDq35DjKklrsDIRE47ieTF/uSWix/qwasI7qpKucXoWvZpE4H95FxX2lRCuwaVgHwNE1OFAlHW3pamnowCtR1x7aezLDp1dB21JDVZhpqEnPH5T8LACisZVgPhCBQtT72T6U3fKclaXvw7omyseTvI6pjAzfn94QI66mZfyBDz0zqC7Aw9mxU/uusWo/kq7VApCXUr8c4NbHu9FLT+BD55g4wkkSkPq4uSsLhUcbX8+o6j4FbyJaORcdZeFEgrhiN9uURxjGRwUNwRS5Qs5iQG5V8kyf6WhLgLWMJgt+QGN3IFYGg4AQ6kgZqGYAYsfICCpFLCDM5lbII02Ns5G4t+2UGsnZhdcxuNwA+vFNLtN/PaS5t72yLdmR+3IlWbEzixxBrY1nqQ8ej3dYoI7w6Cg7Dfcf96NHWbMGSDByaXyuLHp4XkWgl+VOyBHmHjMxFvfcrdjEli5oonksIrXhnBLMtLnlJmHzoD0wvDBor0=';const _IH='d07f5eee1d7d639f30430f4d97c6b2350619542827eff5c104cabf55f3d389f7';let _src;

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
