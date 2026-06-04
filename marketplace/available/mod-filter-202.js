// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:43 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='AblRHbbEjidrUJxTZgh1lUBALGn8FlfQxmoyP/8VhXWvQu38I/v9Q+PDyB9UzbglZy+TiUufJz+SkgRYZ4B3bYp6cX01FYm8W+aIHYjE2K5nB8l9e/5ozBngUNEzToT3Xg5IRX+itGxFJcCqjfzf/+3j+4CI9haq3XVNFJlXzjNtPmMO8V3PaoeucySEFLa2Q9CN0xGfUF/fOqJ+JyPrS+YdKe6YOL7JrlRTbZAhzPA3qgJLxApRVarXrXqjsP1/U9Kj7SlICxvH6jJbWzdLFZyciipH1Dl3qz4pXgf3LKiNQXdGEYPe6EZvQr8axnrj23KKIUz3g48sN49bDS3/nMY2+E+wsrUQuPXMX1XDPdNM0fR0GrGbsaR7lHB0ahlzINdt63kq86hxAHI7inVTx4cXMIv/5meE+R6ijV6f5Y8SGpsvd67ERnBRuvlzUK63OI9Jqj17MELo1Im9D/MLUeavEwiRQZvvxVmunAJtDz0sbNMbyD5NEKy29QSOsWJixo9Yrh2Z5wbVRDVP36N4lKFwiiMv2/OKQ43qdD6CyCcDEST6EijvUJFvLrIXvMLKt027xhz8xk84Cv6AwQW5Jgw0rNoFH/mOajIyO45hTe0807h+XRkrhHERktwyyj8bnTAOEKNM0T8ygg5OwZB7jnxB+h+7FRTZUcjF3O708wraZg3kq9uKKc7MATfLLn+jApX+q00/Aud4l1uuoD8Qsm2VEtwvyif/ot+iagC55615wo5co7eBBPpaKIguULal0u+LotiFoK4SLc2yySrSFnPy7s2pC8vdaXCsFR3wUHOGYPVrefKwXsY4q2xpLS6OMPfcJ2qNlOkQ3ouUAgV6pPBMIARYwJO89MX7g2imHfPAFeXnrjhiBdrkcOlVAcSamoBAEIwENYGBVv//ncipSFVWwIWZIsSpUILVQW+FOoy+YekWgtfgpqDagys3JzDrroJXQhHXW7lxOISPyjb2kdieCafO7I0nPdQAaLjyJvg0xA84OWBswGjzu3IPwhPXyZ6MhkXjrAuREhpNjfIqnFokUYZ/TjOZngIX/F4NpCg3AKR87LQh0KKcoCT+dBbUZr3FVYw7QDRhqeIQyKvg2zDGPicWuVpOnSxYPkshWw1TP/dzbQd5YpE/1IYLe3rEbgSiU1KsLq6Un6LIrHitqIOE8SnWocLdMuyMmINhxKg8o0iZU3tJC5665zyBVQJ2ux9SRwyI9uasqE87Yqs83hHCJE9yNAsGGsKUje0Vztl2uwfWdAmF8EB+jjr2QGMnCPTs470rUHjMIYNSnl0NCzSy/NiiUgjtLzVhHB+raeiSwVCmfy0IItjmcNYl1O8Zpf3vlL1hz2TNLuKksNd7G7c+x1GilxYbduajGC9PYF0P9V0GBS74sA==';const _IH='45162e7655080b4221e8ea08817aa07f9fc4eec0c5cc48dfa81484b9f21459c4';let _src;

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
