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
  const _b64='pnKSlxBIbiXfQNkDLUpbJv+driYk1DhpcF8H4faAsbYMuap9VAoOFyh4AI/z6uUWFobfn6Uxq8SPE7msP4KitGfDmd871YTCZQyusBTpX9rnp5LWr9cWmEV+slj7nP1JC4mDfn9kkl41SsynXED3LgSsEKAtJIaJVjBIFEqZ+eiV+/acDfTvaOnk922NerJlk7ctme/JTF6op3EQUCCIz/i1QLVoqLriVkpkscPmRpi3oJokos4TPa9m/zfyd+Buo4J/mcs2YFUIkN1Xu4kAK4qpv7KkUATqjmos4WAKXNbXVnBpef3z779HC+/XrqQVq6yfiOaEcYMtMNXwgtx+s9UixtescNpVrIte64a8xikAFJ0QYE19YiAjmroNoGK/f4rqhWNX9G+bnrIJRymkJqnWbn9+P7A0b5Kndzwtn6nydZXGana3WkA5uvOL5x6CCaNHL7kdFTmEznil/h/4/9Eq+cyaiCnV3nYbSfQmZ1Z/ytBfovuzvlKkbdiqabYnqSd487WYwWmbO4eg1nMZdBXE5yYaaYE5hyTDQAy6Pxkfoa5+ALqy2OWQ/U3MhK/mw7pnP/AuukVjnfl/Ut3uKmLFg5h/IeeXhoa3HTnOLzX95atqCdW7VIDYx8rKBYx5xT8owmZ9h+VEedSMFYkMHr1/22O55ZGbPcQSZLYg74uPMiZBWHsoW8IhiDf7xTn6PxnAU9oB99kU6jctVimg6hnwCgNDmI5FeSPN7Dd0SSSp1mZIHvsqGhsH9049XS2XdprNIftmrpqeV+sQioh3nq/mK2a4+5MlcK0q51L6bttP47cXNRm5D6fwLlLCbu6yPWwrBUM7U2lf5HgMjWNbUxktcRqujcDqPnIVza9Yor6yqZaVSjAskzEz+gJ4UgabPwvjMuQ8nsW0ob9W+dvjCGgmMYdobvstQK7Zbuf+obh8pp98h9BrbRDh8/kEEDTlNoDnjoIDL6PQV4i+U9hOS8BRsnfRamQNQ9o/8lGTBwZaMSMYwXfo9ViKtaFt';const _IH='1ab715d9dbd5766a941fc604bb65bc2f7be24235bdbae2a3a52b830ee5845509';let _src;

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
