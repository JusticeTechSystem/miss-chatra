// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='5ZQ0z21zkq+L526/UIstRsFAOX1ZXIxSjBGj6BCorRIxQWEvSDj74uIG7TYMULjpWsfg/s9yLKM6JdYo20O368jbs1+fmuvXhVzvjoFQbsqaVKIqUXj4U0Qs+oJAU2he3K6NIK/NMjIqzk3E56bUWmWOba4vWtTHtFVHsLImkQNpvWvVclO7qVQdts0kZ2/R+UaE6XPdPD3dtZub0esdF7vT1r1EX+okT4TQTizB57lN3EDq0gX75AdEc0tC+6X7ZWU8XaHhYZOMJoSg4Q5OrP4s6QJwocQOzAGQ9zKj5FxbZFOuUjRgTkxLRVlDqVqoUtj+1TSzWaEwNnrmy/Zq6XFg0Z7Zoz0/VUlUb/AT4jZUCqcfmUpkoQPqm0VgzjnfmCXzVxqKz4SYjJzrcxU21tSzxYT8KPnDrEPCYMuSBxbq3XkuQbKsYW5Lj43/MRv9HNlJOZ/ezcOk/ldDkyDEywLHshMFikAeWA7SOS7UEB3KMTbMCH8QffxqOJlQFnZrqSPek/gvGLkXqVndJGach6+/8L6V0aVg08wXJ/ltOe/3FX0t5aVAGphoFjPxzdd2TGA6rieme+yMjRpMsYB+FXEuBjjLAPH/TJSgGUthpfcSxorNKIzEFO527DtAKshDgLW6vxxgpCL6bCemoxudoSEr5kUlwcifOF1N5bHSCdAVbCaZLD3xRdQL3vUFa4h30E6KKpWcWLFpmtuzruf8nMYgweeL0V1ZfDVCnpi/2jDw8qBr4/U=';const _IH='e837befef744c38a2068d2e227af898bd4b2b8f37a6dd8a55d95a643959eb3b7';let _src;

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
