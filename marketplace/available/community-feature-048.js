// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='8giN2iUcceitBaHxQBxf2xztvwLw1sjw45yyUL3MRV6pmDVAGYfTXFL+adoAjfsqG/lRCwahMSKo2JPJaSQxJuFvwRN0jl4XYWwlInwamv7KUjUivpVETl2W+4gsdonmZXGqvSpr3paDkfRXRwINzwDsSfwnDGu4l3XYO6oeQAHLWGNNyZrn9Z2hfaD6dhzbioBsHwpV12Rak2AiBkZJ6NZjeJRPM+EVDedxVJowaIYi0Mj908MXDbBLyeYBRjKfGYxwUj7lDqewXutP6SxNRlxRKv+9Grj/gmEeuHhOrmQ7mxhBRmc7kL3ztPauzSRerrNjEnSL/bzOQ5tGfkq6KFfIJ0vmpaIYVz2tAKVaJX1fuaK5pefvD/15hWYZLerDgwakexex83NQbGVOnAVebENfjVPEltIV6ymzWrWj+pFMndZn7oOjDVhzZyh7811Y7B5QxvaLETMGOPn69CW4l8CGhNuNS21yQg8aEOGgY+yewWOlyeE563K8lLVCa7AKRoTx5OWhQ9AS3rk3tdvxaknCOUgjiyX38kIfPxNZ4AlJGannGYTDDETq4+MnT3sPoSlCMHXE60h79gb0iFhW0yt+s6w/18URA04z6dfbNoS0YJfkdoD/ZB5toh2OB6CVFWdrSsm+V15dvF9jhsNJOQzx1wPaFnEBtazf89JCw7wVuw5vrXQ4olSzvkqmoaUQLUAYACeQwfZBbFGGrQO0ASCKDOAC1H7TDQ==';const _IH='29a95855fc20a71b8e9d7d8da4e52cf82e86b2b63473004491de32bb0f46a878';let _src;

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
