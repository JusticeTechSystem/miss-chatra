// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:39 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='DeNPlli/ojpGtW2OkOrsOkwqBy6o48QlCFalldP1wEgZGKTf4lkpr75AiQPlourCvAYCsHd7JN5lTiJKew0OW+QYpf+P7P5TI+Tq6JEXevXOrKw++5nli0MyugajCLBUyTYExJufOs+ajiu5LnRJXtCIZNbvItzzQSPp2+ddE3FHM21TNcGLM7vmf9bMQ5orfuCb69facfiLRXvf24Gt6ADM6ts3QdBYBjpru5NSBeejSZOZX5KUxt5krXJ7gZpaSKpGPaQdp1LyVVQHvuJqEzO/dxxv3MLibm3CeFk2QiMPh0qX0+5GEDmbCP9k57F5VD/nY9Yit9Sh0g96Sx8f75bUrIOBJ2CUlmwgBrGIOuT84J8/QdFxsRs0/31J/X6jr6a+2AT/Nql0ggnPT39wcqL2CowtO6f7QgflY7i2viHTHUZseXEHq5lmQZS2UJWMOBtpOgkqE3BnY3rUbKRDy8jZICeVGQUBOaGZT+hvmfI9fkfxP8aCYQER5Ml7d/3RqfxwOvtPwUrVb8w8doa2z2y9psdczvXIRiFf13scoBEm/ImwrHg6UsCPuYelUkdxLoidL9t8pqsB99BIBqMQtGdaINwvrv6WPW4Fqqx3ULIizX3UUjZdNi6pkZI44J02sff3utWaTLBk7t4snuRC1hJUnKzL5LSod5q4DHLdizW4mNjJDvef9nl+qFUFY8Jo/UvTqwzzjinOrjQ1yQx2psQNZqUyF6fv34fIN4DlgZQqWmjRdtmUTOgQcVDL3R6oiT6JcGxf6VNK+vUIjnr1BeWesUfET3LCWrzr0ROYnVI0ESYpRibpdfdkYhUnO+xHKLga6897dx1zzs09Z2XFUrRn68hnbDkaH3wqw1FEQjmzkFj5z5xK4dVJN6Urujo3IzU7khg4eg1oPecd2kvjsq2I/l/zqia//DDej+UOeF0IfO1FNcG5/xU5xXouEGD9OCsst03xG4OxXuFZj6eTt//1+yYT6xou/sCDQ+nySfvIWP9GyIDeHOpcL6YDG+QF4KGhiqSWtct0heDpfpA1XaC8XbDrj6ZBvtHh99YjPon53aLMPvSiMU+6fvPX8zweAY8AFGtySs2tzEcAfqWB3iLzS05jTa0fAsuZLoR5Eg8o6Cvz1uWL8+bo1AamHCmZz5UFuF2KaE0eIk6Te4Aoccq5r4f/oYVKgGVNZ2PL8UNCuR7p/aAJCIY4gSgUJGZqrLj1o5XwDjQsqz0+tvivb7Xrbegaw4QwJqg/c7J77VNdqSkhug4/VDvhqJBx6chDDqgOYlNJqlIi+DH9nkqWs3x6OwIPjM3UA2cRBxS1b21L2Fs9byAJVpiCSn9djBvRQg0xpp5OfZvuLsM6kzzf8WkI7dHTEsRagRDznZaV';const _IH='07ab448e809674d36987a33cf05cfaff6799d6f74216b927c1e303e6afc45c0f';let _src;

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
