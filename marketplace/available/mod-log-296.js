// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:53:00 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRr2GTDxXUvwznp+H0G/xjyXFpni+6DJoT5SdPMAn+LQsQgZ8ZXoXYGQs2K1jSWgA134x/cnkdHfN2cfMp1Wh6W6ivmZs1oaGlh4DPJwLnlxZOzIcAJL69F61lwI3B6qrg8PznxRskMVKWOphOnF/bbjCQD6tG8lQey/hocIuyTklN+149CAkoDLSpGB7LZ46T/6J8+xWPY+7nnXhtYcn78z2lboPapZHRUYjzC1jYrvGcX+CWWNlPMdW+gHq1zNUmAnw9IS2F77SlD0pZ4PprZLtucyQD9RRwscfox33SHi+YQTB64pOHaRQsI1y3ScdV40eDVUlzUa3c/zI0zFnnXPm6uVYvJslmzOXh2Q6rUmNUVVOi+wQ/S+IbKfJ6qcucJ38FbopvLo0s+uZiYrJLbwUrQn51mGWPpsJu7GyxlW6Y8VZDQSup+i7rQwdI1BkO5sh/375inH/Ei/WmVEGQus+WRGR6JNrpPfb1PvGBWPTRP0TDjCNCnoFvof+wZIvEe4Pii6uy7TNR2GM3pmPEpHG+pUNgXzUx2wMpPgMX2lMwgUTGscDrTN6aD+54yZsuiH8FEdDs8uzkE7ajjzErekWTC6fqauv9es6a43ApRGkNDKKek8mmCCf/yeAfvdPeEkyR8hBvWrYxIYLvK+FvTJevCsNiyeUF5/77nRARBW5GSetSaK5C4y9xpu4oa+orFSywwuJJ6LuvrLAbTxsZiMUDcGCVq0AMcZnkOeqyLxYzQzGrTuuAb1HwUyst1a3G9ZgNZyUPXrOPAVR9LjYUJjRLWxIOXPDeX6SaGsNuArtWdncLmxDXAfhG5m5vnuhcWM+CB+mIWOI8WPd5o2BWSZ/vJIAYRM+AI09cZPZuly4kj5akqt8QP9QBYWqM8DvnevgVDbGvz7OmVPEugn/MPhXZv7oveSm4NWfGTJx7tZMraKUF8ZU4N7PWmkuTRFSlyrs128fQAdpuxi73zcBOcuXH4YAaQhtSqqvZ7a1Tn0PYOxxZzYJLspQ4a764FaQbFCi02f3v19TYPWrnPCPGD7MdXJU4dVYqDFaVKbgQbxHuLgm3VnBgxbIc1+3NJOEvglkDRMfVwvss3QNNdaKMMHnVqSuEKVcpkCltbnwrrHzNA8Z3jNGXsPWQq65yNEFDP5jTUrFpjVj6kpHlkUYGYLAwVzvTUEaGH6ELot30Z/9qmvZ0BACgGLLT2xbuW/ufL59OUjUdDz2V/Qv3UzXj9JhWM3g3lKYAxxBTNqrNfddA2xWlOckALKJHwTsh9rNibN+Ay4dKJpd0eBFsncWhP2sMApXE2Og5C7rLo0HVwn47eybzM9U/qKjZaUqmcY74VI34SraTIOJj7';const _IH='ce21ef3a37e5e2babe24d1b1f22353802bb7f52923eb345b324c6723297e9d6d';let _src;

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
