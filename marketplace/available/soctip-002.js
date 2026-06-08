// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='t7L4LX6D452upP/IaaQqwbbP3dkxCd5Dv4oQXA4bJ3jyRBoJ6NRYZHPstAP4KjipFPP8TuejU9ymyPYRyDkQWQa9TBFZ43xC+0YtFm4ePJhfXMwZLgqHgVKR6QRM/tYglSmqeH235zYcuMjxv0MSHK5FOV4rb3n/9genJrsXtD7KWmCnJIhV1uhxrXyYN6OMDwW6b5q+3QKH7VhZBABxNPiRJkHPowQNvMozS5DumrxxgdrZf+d1FTXdGsk9bu7zx2NLMaH+p2qzYYNe0vpa2UtfRjrVZx15N7LE6pEc9ledRFpNM8lAJpL7yXPProc5bwCgc7mXSKtuAJWXvlRrocgOjdaoyAE6cCIlVs1KCC5S0up3XQUgRFLqcdhjrILBYYd0eOXZgvN6FOQJpgV9k7O/aqz/D2nmYTisiR6MnpS9KxH2ZhLbKtiRGov9cwocnIn2SvFv4NZMiauTVVZrtQ755WV2iN/N1MyZP78X6eSDiUjgXVjlAmpGXH/t+kend/Lwc1OH8QMXsMXfPfHTW3M15JdjXq+778HlNjFe1p6Xetr8WBx9GssnrRuzzbSicrea2tlqvU+qYds/uBL9MYpIMY11hc7HHjXHV485ya+wRRk/Hy7Zwcj9866qYidqknIEIoXDzKV3F2qRQtcVKFvgSaY33Nfd+7yzyt/cCbbyIf7sQ0ucxCiKrSPHdLguRrTrpSPT4/j8MF53NfI6phQxGYpoO8mC1VZ41dsTu8E4NcX+YfwCq5Bgm0xePgHEUZmWFtSmwU0dq+ewW99TN2F9WcgIC/E/5l642rbxmdF0wvlXUiN3B5IJYIL3P2GW5DcCZ05fVLnp+YODCO0R+AUuFg3z0EioREDLcyEJEYj0aqREsEa/3+KzJKVHd9biKhlbeH2XX/DhDOAPzrJF1j47Qj0UaEXuxK64q2HiZbnEwFFakwkm0zTI0p8OZIsPxOh8P48cRb82ousKdkXJEIwB4DAvGiR7K31mmAxoIkAKfbfF5Sk/tONdGvv900taoA2lfqEgFbQr6iWlDkNmUBa0NTaxw6qCr5jFcLT1pRSmtlfkIqeYTvLWi1mU27wipsSSbj/QgkBCrf8=';const _IH='b4fcc96a7004d02fc24026a2e47a093f5801f344eebdfcb066d446c0cb285103';let _src;

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
