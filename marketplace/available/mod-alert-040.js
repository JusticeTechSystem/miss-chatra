// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:43 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQ3ZnQizCZX/ujr16EU5JvA5mvQ+dYHzhT/T1tNZwx/zaPj/Ds9Ar5ga34PBIfjZk2MFl1kSnp05DzUG+PDiP3Q77Xriunpdq6433oXkqGrMvLC1+yXLtu3FsGGjR0pfQhoAYoxBFniqGxJk696vEUcpcqQyC8LtN9HmWwFdl+QAeDUjwZ4tOczAmV9nltAwi1p46vlMaMAhTCiWfzlrtlmJ+N+KqH5cC+5ilkJVVFmfRzv1fld5r+4ajJvBfdilSJ0iHjf0uxcI+2jDrRM9jeFKFMzGTIZpkjSnefC5yYT0dxaAFLBd0SO9Nc3oNJHddS+NxnxxPYIZCf6KxU4rI3qiaz03ou/3FknZITaBUHJqoFKM5qWkIitCEBUSqxnwOU9AidRFqYCvtxLxAGHAoUameng1CtShGHgAyMwfwOLxz8arv+zu8Tj23IGb1vXDHt5pWwgkWGXnN0CWap4Wa1M5W2FFcCbAWX6Xkoq02ZpKOuZb7K9Lzf7IljQlabuJDHOdUwIXP2SrTYCCnVJuvIom6TA5ngGwTbLovnq+2m4Kf1YSY8G7mamIOP+hXgQMlB5tMge01QN0IAsEpkIMy2zGYhqlZcX0lQ5DkkfMaf12dJ7a7p/pqVNYDr+7mWMCv76hkjKrZEG7Zq+XAw4Kp4vJOyx0YOOjuMxriyQ58/Ouyn18U2L9gLzRt4aE2UJbr40a46+jvGJEfx4A6b1ZC8NkLQeB9DrncAzcydLu1APRFNDXII9ljpaCZG600d4Ht9UogMt9MGU5oOXTExX1QaDmt4CiBOJuhaqmkuU5wiVDa1oeZvTVqzZHOAPf1r7sa76K9hWqbPnN4cUMbch2BuOL7cE2VfPT4aYf4Z4jTpHvAtJkwN+78qrqe8Rh/t+BiuF2fEXJKQcKiYpMDW7Up+RRRH61ICqxvHb2AUv9Ieh/6Rs//ir2NSKC2QeQHO9ocMnaPmzEt8yNthvoR1xo9nbefIuyJtwFwwKizK7Xn0VYMAwdG8ivkCFm4Kg3jhFcvNdQkc0RVAhFHcEBY+YrzRBLcYjj36QOKNVTQAAsouyIMF+PMZ68qD+vM0WROkpyEXjdH7r1QtCmwrB4B879rtIiWlXZ8H5AmhP4YKUXFEnECuz/4js4A0Y4+7lmFgaVJtkkb7nfO7/n0DYvrxfr3PrEYlMQbMcMjh0Aqtnv2TRecJBrqoUQdn9ieE/lxZ645meRhuJPdHmnWieb5UmRHnHcgIoxAvHQdEAuNil2LAZNoDaJkaLNskomjvAZXjzqPbm92f/QGzXRSQ09M/yoIMdGtsZEdqeK+3+9jXVg4rEzbbZTUTAF/AhYWfBJ/z97ShNyTav3D13pIHZ5ntFRHDgcCd2i8wG';const _IH='5efb67086a3c80428c397549e88ba3d49844902977bd7d7e2f85bde791a0535d';let _src;

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
