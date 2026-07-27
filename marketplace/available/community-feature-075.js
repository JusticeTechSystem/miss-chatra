// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:25 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQ7yls0/BUnSHfB2XIVpnZ3X1/61uHNlYhCvg4YvW5rohCYV/TK+6+g4ZQVSDprR7Drx7MHk6ThRBwyqEEGp00owid4ftk69KFD/TwW+NjQQ21N5vwRhnxOQviQ7ptUAVlT/UtGbh5QOzzXCpDbHg1P/F/83PyXpvwtcrFGwldRNZpYZlGYr4VTtXLnpYZrkC1+v0LMx1kpxvS7pjqgBjeGJLTXO5Wipqv+/UUOJr7wkXfXiQUS/hY7RYuD6+5nLQdGx+B37Or8tQ8ivoYTiszSkm3KOiIN7/TUawTaP/DvLl6YJOVqM9kKXXNVDe+O04lBgNvXdCw+oxvL4Lr1qBvCynKeA9mLhu8k1gHZNQppYPPuUJAiIvIwOxy07oXUZ8xBkvBhzga2icF+oOHPhQYDdh3DE+dABLCmTUMGdZIr6c3/hv3eqEox3hAOgX5GsTmU4GYvTvhNymATZ6v6ErSpdPSt7ZVnm6C3HLqksvERN+A2uh4yIfOpCbMqlRNGLAYSe3HFThlM1sWKFTE9tN/gsfsmO34nTMy9n7Fzn7C5PiCK2KX3cRrpTHD1KEupNfpusIM3a2RzNovuLUOYyH0Sje0glSrCHrSWl3PycAZq1TFmG9Q9Ut4BzuN1c0p1v88oWS4W11WFQdOJo2iLdb1fThxapDCk+WG3nhJmkGhvIv1nzT/f0io6oeF75SmOyfNBTVOrDW+StzHrziHpFSoIkFDdYkU0eEjJRhLvKsHUSco/dMWWqA==';const _IH='402aadd47f60af69f4a2719ad64a2088ec3cb95162eea10ff26f750e1e6901e3';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
