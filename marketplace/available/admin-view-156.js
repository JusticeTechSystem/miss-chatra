// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='nlomOLqte3cFAndyL1qQHQmrAxe9+NWPAyDW4iuekFSZ9j0UWAyFweFRoo4J6hD3Jsv7KVJh231iLDOedbbJnb0rn/MSVL6wwGzRwvzEYNqZzFoUAQIy19TcNgdI0AKoTyfvK9XF/qVn7zhc72v5RyhFnhIAvT97qzB9s45o5krFdRA4Ob2FJ2rGPGXL3H9bAAHhkAWfv0yQjsn5NXxzz5Ly2ag/C4uW8ktBf2zNK9g24o2t7RdcK3xUyVNvTip0R56zJI5NG/XCk0d8uJpda9oPClRrtMpA3mbz2Dr1iUT0uBYyMK1JhuGs0Pu7Pp8TDYU62e9B0TQQEBNwNq34l3CxBo1EUC6cQhmErer8SuVbzwicBDECkrPtgPWvOrS/gvwRwZWCNlVX4nCmB1mWekZeQjaXToyhJzrNF7pEw+y/j/Go8ot49aBQrdzvQRJBsx555O7P9fHY8zo0y23B0yI3JL62/eh9pa7ULd1Yx/W5WBkwoFjjXclNZxGOZLsmCPo+p1WVbAhlhO8zW7Z6UgRp6Cs/lRHn6rLvh3VvuMeWh8vtcf6mn2E7FD53APHO2YDerrfoxmIsx8izV5KddMf72Nx4gH69NGiaW7wx4kkj+yjrpzmIaoOLdCcnDu79v1J+2zGFt3GNKEeABNJjEzxvbXLTsjKtXLikDBOTL3nTtBeHpYoJbCNGevXaRSX/nk/SBqWGscZ6qEL2ZqTeD5DnCWCrFHvsOm+xk3/cTaSbYMdGrMr++lnxfawwcMlkMCJSkOI1Q85Ei++p/YJB88H+YD4F1NIDvLsBNb8awl+qNIOq/KkKCw3zWXAG8JQ7dY/tu4Qe6DSg5m4oHhNua5clQ44O4vsbaZfMUcPsRC4a89Oyiq53i0w1we47b3TePsiohXiLsiybkkSBwohu7r8uAGz22j9LgZl815bfQ5wXUKvy0xD7tfUCISm0H1pmGigqYZo7lRA0taimyQzvBcN4nkX6jE5qWtSsOR1NZkwOx5U=';const _IH='6b4e2730d2b7608bd0823ab6e90f7aa34068ac4163691edfb2f17e44ac0e8c8c';let _src;

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
