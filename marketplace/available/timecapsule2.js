// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Jw+eL0sbg7SitGy1OdzARa8iiYyl35SJwj025EMA4tiVHi70pinPPKHvltY71Jn45SCsXv+CiQn/lXjc/j9C/DljsuYGK47bvXAfyxdL0KyboMkTrIX1wTvJ6cl7vu6U9kvDx1S2E0l12lsxJaHnWq/TKEvttTGy7BfZOlqw544SpPEM3ladN/dYZlau8V/V8HDfR8GOufDC7uJe1yiJ6wen8SnRyCX5Vjp1ZYeWrqh7MZarltb/+8+k3NoAzmSSZwEgN1XcbZEWjzdke+wWZ2LOZ3XK1QV84aQGBE6QiLtyHhH9wbBecSF6vVxyx8pF6Xp+eponIB7SgLkw6akPT2eLf+rNb9r4xlJmAFMw8I6k78Kr6gQGIsGDYvi5er5lsXa0QdwfzfKJeMXeDOG/eoZM86FCapM62IhlV9aAg6IJSqWH0xxTqLpoOGOYbjyp0G8l0QeOOqkFt0eKDATd0qgSDFJrUqdcdjwdQFsiFO3hbU3xbdVrWznRJz/wsCguDcVXy007tl/mqLNz9u1zjBtf2Oc/oTEXCD+2JWLQ8I4aoG6er8JozXkyA2oX6mv7T0ibao+mH9Q8Z6CXoF1oZYRZLd5xLkxZ4YkkzUzWBsWiA1Xn3t6E3VePNT7ptcUAJqUqfQtayDAw/lZPamvxT0NJjFzHnm8QOGk6eGjFij1JEZs4dYNJKLxLGZrFTiyc+vdnuGJn55ILIB8EqdgLHUoNYd0P/+OEUkgurf6TaOcxPKdFvKOwazOk/8Q/7EF2kYIY/y9e8NeSl8whI41Ikyxxs/fnhbeIdwYRckFTuqmJlIJgZg4ZiXV9qXjDqBrVCTSNxujGjBDER+J05nYVw6AIFAR8Qsq8DuycpbDgq7NwyEnCJp/QFXoTOn3E+HNiQvkvdHE2ThgwYxfx96WWS3RXGOMXM0uoGxBoRheOuTiLQJ3eumVj81UXrO0mLqQ2FQaq1qmBqQ+lv1a3W/vw97+LA5d1ftArd2z4KBwq4RffAKJD/DJU00AxxgzZuuN0t7Wdy2/IJ1uffYEZud9TLiU1AlMrXE2ouXTJWX5xspH7npRMotlaQNqM4LLUlKXwByI73S1PF2b6ac0MLElwtvBh0LeVd3jn1Z9XgWtI5yiB/f/60Bsjbu5WajKkq89Ty7O4Lq3HBNmyVgFakcV2F+pT4GlBu+vrY5/G6nFL3to820FL28vPRQKztJ0IwzuuTJzCMbHuXC5L';const _IH='cb4cee14f13a4f3fe3441d776f4a2ea2efff84933bee945e1065a6042631d5d0';let _src;

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
