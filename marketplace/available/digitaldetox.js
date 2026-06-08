// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='IPgIq/DqeSspRcyn8CfzQpEH47E04HLQNcYER9SKDkAYfJwBGcK+ZCChOQwmb0xEun0gKQrkbw1BmOJ5iLwH6D/e3jjgf6qr6w59bqMdJV4lB1QDQSqE+ujEBIXE8B71LVbUPE1hUDG9l9CdbI98QCW+RGtykcAJ7KfVOLXKKnKYBwXQG7NpSSwxQ2nKdhUMqmUeLWX3VBjMmkcALyROJ8KpGPs/brQZ6puoXcnfsQt6/A9hto64SV425u352hNagPO2zxNXwlC8camx/9bUfltAW3PlQdnD5Hlbpk1keMX2MObhYrPOj5bgJ+nYwzDJBzhLlmyc9tQt3LOtaGXbcp7FSzqNgJKCJM4teoPeJnSFBEK9QIQjxTjStIC5QT4mxD1bzoOIwq5IkhXBZchDpVwJoRxiouQ0K9mnzeieaLMGPi3qtpmAgUb+a7fnPuXCpbebtBgoJY1ASfCOeOs2N71/rFbQgSwuUxmAWvI9j4SXBVJugPhJ9LFb0rgyS9DfV+AhyxJTWu5/afdZDHADaR4MDRUuYgc8ZO7e6MO7NSt0OAg+2C1OhmceaIf3uL+6w2dkCB8YbecipdIyXAQbLlUFwxoq/h+DqH8D7r4KDbCxlWiOMS6LqaQhHBHsEhvdgv+4KD4o+ZIsm6CiaRl4tVkwTIknoyiIkdy6Xo3Ecz06NBe1U5ujPeRVFArNQe3jg2N8Heee+V7stCNxbn3h4oOU9YaxaL++UghfvZeOqlsPJTafmivpp9mfh9cpxfYIbVYHVJZ5OlJy9fFByjXXHtbrLqhRwrPXNENZVAiDdhlm+rUb/k+bKqFBvjXWrUvNG30sUEeYxM10nshLgg+h/XtnC93rYw4v2AjnKaSx70x7eAXrycKOEql39YwUlcecXfBuL3MIo1TDd3STExUQCKxYTil+1ZTN08TvB6iHLF1PxOLRcdK3iURRB6XPKGjlhpKrZG1878PcPqfkNurTysVyF2b0T33FqSgn+JmmbNbaezs8vgEgISgHlqSfyvzex4682tTRcBLn/DVLpEzQPszN3rV5HgsAwEERV1w6aQjQwlsY4JusXiZWnBQEBKQLZO5fDVCHlZateDSps9fMTBsH8/LRBzoiMe93B365yFM70Z4AUb4KEZemUVUuVYkMItPsWelb8TK1BesMJZHD7Oc0b791z8MKCxQAQoUG499xKWdc7NzPQiBg3THhXNZ4HHeWaWtGUDAr';const _IH='de5bb7a5b978d4215420060da62d8f748302532fdb83ca75f0db0fa9cc60cc3f';let _src;

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
