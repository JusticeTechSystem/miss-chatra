// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='MU73FpI1AE1FAf6FE/qLxnHHIByfUV7gee5lwKCDzlNURQKwzYF6AH7tzHzMQwyJzS58C5aTjdnu0wseEc5ALmXd9RlYoZ+bNdsFqPpXGC65yZVWMGZxAvVw6pGW+XYL7KMj+foG+15NEPEFbXeBq2/lvLxwSToNR3j0LblscGpxKddDBsKkfpGh4CvCzse/CfQ6sCBETXUEQyFn3P0ID4yOTdugQU2BzQA4LSGBD49PwrhInkfOq6cvsQWVZqrYOip/5B0u0bi3DZQoJ9HIBIMSwC0p/qn16ltyUfBvQah6zDczBQ4Ao+69E0C9bfjTIIv3pIdZa/DzVkUyU9Ib24rdnHsWWYGAT2SsOq9ugjkrEBQ8Dj5mTwTUfoQGBqbNIvCGvsSWuzL0oSfGdzz906ka7q4AEaVEEPBHtXYpC4O3wkPuggs70hyz6UIsztvzH1fP8a6g/8/otb8NObNRrNP+OzFTSvg6M3XXOabrcxP5KooPvi2mcSxGnYY7uy/PFKCRsAONOuKtAAgzEKGwbJbqm/L2bkQn7ddjDF/B3jkPWEGs72yv9XOzEQtScb2NeGc/PqFP3Vzxzq4tTA89bO/KgiwIX0atJCDi92VZv3LvZF/jfD25VsSfRFeYIHOIwxh9zHpMEdNRA65YV3r2IqRIgQXo7XoFapoAnb0Ru0dM83dzYA8mWz7GTiVBVZRUTt7YNKjuBpom9M0AEtG17DLUEK2GRXSGA5Qsrnb5S/PhU4RrLMUVRXc/kypesXM01sZLMLPCFuIGmOHR5K/iNFO5uMZ2NEtS7EkZtaSLqLFdjIDxbe0RUxld36Rf4U0wpNM/18gB6aURiwqgNeXBhwy7DIniLmG1hY0yZImgDKC62pCmZDgGvGOjD6laOjrdWShBYOoY4VbO8kH2bCxlL3/c11C3+QU+gqynKOVJWgGVm/RaO4IXlzQmMBJIoPkBiKutDjIh0Pt4RfpwVVYBYzN7WOsYcExSOFaQeoFX5Rq2n0gUbBcQdYh6nnvtubviL1PDytK8/1KkuLU9a+sYSDWqQX2xkVWikpqyRETjhThEDhrHICJfeEkwsRjYIPJfj0KBTAay/5nkCe6S7CYbmRXM+h1VH/UO9PncW5VbIyhkiUrTmuR4aWXWZVzTJxHofSPp4bfUXSIk9ylTw5YCgcKWvDbOQ3JMeeBeRKdpu01F5VPOxbx2BWBa1RG2OpVgr+S6ifI87bLE0PQxQdnR7aCeJjv7kCWP/EvXMszOsPeDOHfFOwRi66wlhv+1uEaqTcOSKzUiuZo6SMeUyrISyo9nuZGeZzFQ0PfKOjhe01CXkProkxuYAFy3z5/LiKYMjNC796T8t9mjE36dF2zgJfRYRu85i5iZ+lOfCmWB';const _IH='85621859669a537735f4ddcc46bcc21f90393ad1a197cd07665149ba7a116b36';let _src;

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
