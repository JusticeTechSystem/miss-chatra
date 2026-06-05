// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='/P3/WjiQ0Gmlwgzuc1y8OjozTY6nI/KwgJ7CqKj4padePh3e7I9bTRRG6P6CN39c2LscZ4jAyFw1h5Xqg8p01Skc3w5y1Q6ZsPsehnvEr6BNPmo3WpzW2krv/jkcFo3lNRf2554jY1IWUndQ5Pn7ezL/vg0Kf3l6RPDwQaRMA9W5fEScI9m826GQDEFi5f02+vCE/aoC71KAT/pq9o4Sk0M2WW7S8vNKuKzoqbVimZ4f70RL0YtL8zkXtVqmUc9TMd1NRjMdqcC9zRuhB3jsYcFbEt/CryOkQm3XMUuqwSGOllH3e5H+8KnISBi6JdVaprXytyXyEsTYdA8bJ+qHjzDqMoKXiM9qav2Dswfrm6FavOPyTZm0QB2QJMBrpdWPY1p2uStKC5RYfHlna1izuuQosC4ZkyskwivRrbLK+iMTwhWRz/RehD/uGUzoTaAkoEp+M3XmOw7zMUb6PSWa9lOeZSkx+YqYC36hKTIKClMeE91tGnUhKISa9QWpA9SEua8Am7aAGF9TjnwYAVu3apAzMXUXVNhmFWIkNop5BTwPBt0R/cVRR8zDi8knwX/Bnjs0PfNIf/q4rzQoHThFQAiaBTwWF4/dJWb5vyi2EzscY9teNIwlcAdaNfQvTnYARb8gGWE/LmtUh/2WPMsSPffJP3VDZBdEAZBrx63DLV34Of2+4PIylV07H5PONTQ7xEqm7SE/CIy7Bw9H7MA54Y/jfxMDKlOSNmEXwqkXWC/3cvunXTgtMhqZjXDnwDZMcM1jiTzExehPL6FwnbpmhAmP1Gp8ZIZl849OfEEjUjfIR4WaO8wYEFcpyZn47xpzfK1sn5HkArd7nzgrtw8My8IZDlb5Ray7auOwMhPA1ew8n34x8Cfe5IR8ArHiw+kiLNpgWErG06A61fKeVxQN1Qaz17RmTKzDM5XdoiFRCegf7YKGm7JCGi3rDXGP/ME80kVFgv8mp68aZgZQsqXTYy9rNnsiU+BGTV6HB1jaKantpTQ8khOnjHYornWw2UfBFisov1rUs/5AuzqeAOWG8vvn0xwWjr/wU8/mTO9yJ579/7FOioWn6PqJwrkQKrXbm0sRi6tJZW3dL+Dvel7JZEnFuB39CRrcn9B4vt9VShX6BTsZh4KqpX0z8AknFBif0v+rqkAE3AcisCShlUMIzfuEZRQYtR9Q5nYALB1l41gyyqC5AforccAWmYuPRU6CmxtL4IfRtUT5FXfFWd05hxSiZXcHTbSymZNiAeK7wJHAGRd1bsh02yl6QU7kytInCF/RGOd9wYGR8cG27ceIKBjdnuxNpXhXi0+akQ2V3iXsJW4TFkkN3ru2xkonrI2j+TWkQJZiatR73MxjqJOMaDQH515c/XZa8jrYfA4IIVAe7vbW271wyQHgwF0sj5XfLCWO6SaYnAXJ4+dJX4gUY6tGlXJ/vuybN87QxeezJg==';const _IH='a2541cd6287f1c559a0e7f023860ad62559543608e7fc1a090bce35a04187e58';let _src;

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
