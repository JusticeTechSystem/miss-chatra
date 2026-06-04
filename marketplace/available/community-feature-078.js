// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:54 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='GKfMsV4zBo1l+xhfoYRZ04B2LEWBeG7fDSAKjhM0sgqCNYCdxXwADb+mX9A17DilwN8wUlTAjo5I3M16bGj78j3Myf8ualokTYQ3dLR+RUmupWw96MSOcZwwpA+w8EbunGs+46cHjVzox9mwTP824k1a5Ww5pCp2cp9sYPsxqIhpADkzLCm2f4fW363qkeNqF0c8spVXC1FupD/fmhFix32t7efYROyScMU4msYihzrqlbvrhBb62SDfqnTKmtVTFIllQvhuQXHLQZ3SopBVzNtX3bIfCZmxWutXLDpHr3zrQ1zl4TaKAmMe8iuFwttYG7g6x7xTvIAoQcuVa1kBsIeON34FPaiVtwjc5auY+cP6YGXZePxbVNizvpmNKb9DKVceCG7qelgsQnGQZDnPWGC/TGlAFqLrcUmejcFs9WHK/sKoLaASe81zTeGYkEiqUL+7iGmQoWKlLjVj0zy00Ry5X7h5xQjOuY4RWDQK5bE7w/7ecWqadJEo0ulxjgKdz/+FASKapwDYiBM+PU5puwDPTh9gPxAC7g7eToZnc/bUKmcnIMbBPGmdM2Rooy1AVTBH3rcFiA+doydIjSJ4CLtF37iKrg4NxVdPzU/2lQExqyJbbnJPKYXdzyrRO32mTztBQbcu278MWFlEffWoY+2gy8tmqNhYIHn+7gCACYN7a4iDaheQrJi2YvpkZuNtlxE2we5/Y9RNT0Zhu68wqqx3aJlOlWEF/A==';const _IH='c120c4c07425e80599e639f107b0fd84dfd21c8ea29b35cf63bafeda68397dc3';let _src;

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
