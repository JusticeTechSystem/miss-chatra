// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:46:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='SYZGowbX4T+HJE+qk+rNFY3XjF730KoJoP9GUsZ1sERUz7rLabmmWMij3qLcUdD+0cDGfuKnP5z2aJxKx3Fn5XhiKKwx2KudCJ7dzdSoCzkxLvHBgzBaXm7dAR81CDVgUPLSc+EyyGTadfjbpkDgjRMDftAyagzyyxIwhQ4DDNzhvIDS8I4DswvU6LNTDKn23Elf4bKgr/bnBVvSIWDxkCjQaB1BHiKCEnovbyJrjPYYXPvOBLrA7X/4KI4S1BtaIzcowifR+I14wuRCl3PBxxP0g2lCqR8FqryfXGDOTIqTHC6OQ1PDmgH9h5289+5fn6uUwveGIdJWmeFNRxzyExV+NEZDsPVlLqHQlZjBBiLb+sDcXU0hfIU3Dx+MvcYL6w/B85+35VddfY+DveNMCsHv+LYO9ejAEUJWKdL6Tf2MWlN0/PC6EFrXU1uDmUxdFWZovLoksZzVCVrnWyE8MzKsTKXWADzjLAQft6DC1y974zUqGJFLtRUdy/PCHTprYQrbElKjeLKgPRurI+FQOUBXcS0lPPqxzros/584RFK88mPwLmV2RN2JhfM5HsxilpMWlXZA0JUrVD2Fb8xCR1E8iyxkR5sWaUBL+JULCF5p5Mk4FJ0eGKYMllZumWFmyI0cPNqaWvqyFr7mG/qYZzCPG67pCgaBplixt3cGIIQoxeAdu9IetHAq6+p/2MExkb+eo37yeIWVJR4W+XQvAkwH2tMnRY6N1zggHfA8Owb/6SmB8mOcjQuoIe6FN4M/XClMvlL9ozpBtnrnrFrv0LpXqzrJcygyuOXsP67+u1fFk1+6zGmBjLLGjSZIhEqyc0NJo6ykB9Dpmzon/jzerW271I5aLHBYLRsmQZ3I0JiD7urVNqX5DbydsR3r+SRA6j7ukxL3ZBNv1UjgIeZTAtNDekMS16lylaOn6/GcAlwYuwXVCyl8qN/g5Mgfe9iQ8Epml9OhrGwQYkAhrijgla3LVSQobNJuAO+Tn5Qg/ZcShdnPdMCk4hiSa5dmks6HGTmhlc2aYZpdlyM5JpGGpG+FQzmwwkcDxWJvpdwg6NDSRLHDoyHZi2bjKNklaGihzLFwN+j7TAchcfFzVUYzzcwjHlAgMnKnhfLMs3UX+HcfWKmpMfWReO847kTgTdFO2dNh4Sttj4/HTK8E1E27zgrIGXDCy7KaN9KgPwqhBE9/UL1lwdxjcwIMF1JZUuQxBesJ2FCmlO+InloM03RXjNqHtdrmjwxxhtKWLbiugBN0Csm7FfeWg9aH/yV8y/9zGMD3QcI6Z4dh6IGS3eKdUV8lGmV0iQqUK4kyg/Cmxk6UloMUkintBG9qdNkVTkHblc1n/HOWKpPr3CGQt1BTGKiUQmN6sLgEQVgN2ME+M5bRcF1fdpeQ5bB1FGt8QFEVMvYu6jIeCb8X/r5v3VZVd37ntovXLT0=';const _IH='c0e0bb6d6ac91f66bddf9ab449ab2634623dbd8b8e782621c3e306b4b85a61e1';let _src;

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
