// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='l6ZSh9EgxHWQ6MxViPgQJhBLRw9eD+3eFFIYmb3VQgsq4+EFspwpwO0iQFiw3It9ucI4eVO20qoReQYjkh95CFFLm/B+WQ34GLFy/7Dmqb6vCS3GOQ4owlTeZyuAMntHCL1GZX6E6LHubI9db1MGZHfbVUCGimwoV3nS2JneUvd6zy2KvcysVr/Lt+0+/w7LlK9TEQb8MQR+6RezNMPk5mjuU0UpV6faBokKnm1j/fKN1WFTynGRXf+KcQZfj97vlgGKwhdMqAihXoF+tm20XdZxDa0ymNME/K5ziI7/L3mu8YO33sowOP10sTjRYk7szcjSeKGWn48kXqz2q3yxbq1qUXKDFkI4Jqsd8IMHWiGsxQbJ49j1s/PavDT4GO2afwgHVnwCRpF++VJZvNLGnFe1YyBLv/FNCcBlT53v0r47PmRg5WK7dYMYE+sPgCjnq7GoGl5ENQmtjaMQZAUY2yufGQaJJB4diDxCarVBUhHes56G73kb0wdKDSZBffhIKkg3kKd4hAL05YF2n+Kb07lA905PfUUze5KjEf1tvq9HJZO+XQ2+IPGhv0f/D6UCJE2N+q4GDXiybfcOb9rTK43ngBfq2RZsmS24fvWM4R5aAwUfW4hxPAW5zV/5i4qmBjJM6xxMqsE+DVmUcfHg';const _IH='6402ac9eae19ab15ff6c1c724140ac2f86dc284b0a9900bc1294237d96992726';let _src;

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
