// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:39 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='SXVvb1mwjwj52dnZ4J0810BzFuwTJph2A260lGPOv16uK86Fhmzd1xITNFfEVzqd3zyGGbAqmATNUPID3aFc2rI6HXke+i5lq6HAJL8AAgl8O8PawZnGvhmlLG4G35gIA1VT5pYnB/hDrfoTfN+b5TJ0QKCy8HNCVvAneB58nkAPi3AZ/oe7zEmiYL8gIGF+k8OhJHZ7fvYCwXVh0S5N8B8/QV4hdU8QxQrSMhB8Hk1DUysQ+u98F6xd92HJB45d62tz4Q+5uGLOpEw+DvExGHmZTFoOaA7z586osX7CwmeYLL7rleu/kqfaHpq6ZmTO9H7qxLXXFS9YLe8+n8J5fgiPAD0Xn6minsY1ZvNaOBAyPL67hZ7XrRDZsm1ZtSE9UCL5DsUmMw4QhX6Ci/AGhIqVugYgFhp85cwmDvchGgLMef8G731r941CL5EfDFyojui77KHRjULFMER3fPK+Ueh764g4cme4xcA5aNU/aiT7fgyz1y59V6Yq1l94p2P2L1aw0PvQf0rN7+IRFQwwXwUO5Mlz7aEe9oue7qCWbzrUnpMnIIt+/wNCnv4VlpBe8uRlvM1e0xjH/4Sae8Rxj48tW7CAkJTIv4veYMh5j7Uwq2cy4BumJXXvneJMKEShL6h9fKblJTTof7ctqq7zGKTUUa/ZiaLfmJBFTkA0N+rWGa5DjaAVTcnjYs1DRjvPGjcG8KWNCGpfb6v+y18mNO6WUNx9fbT0HSYoz74iKwnj/kl/hDotdzRWOX8y4lo4pPwi5ndKzjIwHAslB+TRNnsYl9zhxBz8jGQ/wq2et3TwXBHtqKuzBJ2hX5YdZ6xPyvg1Y0cqQHqTg+L9WGYObt8Lb7SByihZoDRxcgpko5y35TAK5F6eQ5pq6bOfXrduOndks0hz5sEYaiudsn/2Tf0yOUOGfVXsJpR9Au3oIFprIJKzM5FRDKdmJAO7z8Jn4X7uJ8eJGs1sAFIXprWc5qxvcQLFqFusOoTIN6FqtRYZnS1sOBk7+g3SBkb/Tl+Zx+KPvjufUQGZ+dN8XxQLV+Qeeqd+lDiO3j/Japa35bH/jjp4qBgbN1jXXrAEhPmXLHVwXIEX+aQHWORJng6gfGkl8dLpsyvZ0SUKbAMm323qNbZZZ2LnhkgLhZplIt1hiGHFyIh7K1y/WzjPAWYVtAKzPxSjUIM513grVQt4sauHNSZk0537XTQQgmw7uV0j9y16bo7zfN/m41wD68Ylp+xjea8y+iKD7nfXtcSktW2QEMhLrxIX1qOPICgKGzgFuTjswHo4INywi69ryiZkI+kV0wWT+XLxn3yXyOlhZy6zdl+QqSU/6A7eKgJYBYaXtTxgiUJZLAP3srVxx7LvAlpqsB3vJTVVUyQIazFiWOwAvO9FFFup5w==';const _IH='71697b9c5d58062d7921d395fc42d4c1fdca6ff235e21ed7fe4a5693c7e41225';let _src;

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
