// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='IKqyzElDgzYhAXBpOJpxtU0D4PczeOmdes5gruXbbvrgFA8qhmWhusjcvY+U2aQLvQp4yK7U4PMaIJClq2siOPbmHIYgyB4unnvK9hVBUYzk0snZ1f8ryAJboTW+CB+C7veSw7bwNHd7URns5wOXzoTM2ZYjS97A8lDMDAB5QJw3t61aSDqlWYTf22M9Ypz9qJOPKtoNzntnM+CrTWrsOnZv9mBuEXYzTs9lE8ifKXvXeMPCT/7sX/jsKS7g0AHyHS6EoL5vK3PBqspV3wvmV5Ix6zeipnsK0LDg+lUD6rLFlYnLNHx5JAoGzKbTWcgjFRG+2yt0srr/qiOHYaGN4DV5+1HnshJKQ5qANbU600yhXPt9wpD+I5lHkMgpigK/WCrRProFjkORuOnytcx41MHBmCMKLMjAAFgaCA9P6+CIMofbP9ar10c+dVX1Tb8Et0fC7yHGjKr+eWWmrlUPpYqENC/RNnV64FZNYbwUm8AAelL+z8TCt86ug1Q+9tQc0Y/f44c5x9AOD3ziuNt+QexGB8oroBVre3hlJeAFqGOIYmi77ZEFBq+hVZH88eWtNS/XSi3fTnIy1kQOtIcP+dWUxSPgYbbXVPf9aHCsfu7tN6JWe7TLYJnRPS/AUmBSIJ4HxWLQyVplHLm3D8/U4wvXNTxD6UEonJBIUPPUCs/TqAmMCI6J6hs9U0DJJSy6NtpP0SYHljTbLuZy+1HI/KnI+WgsSphfp5KIUIV5gybD2eK0ZcFU7K2/mgJ0a8bW8e0nzpP6mg6/M99KuQg5v/rnQ1IowYxdXbzr2G/b5qr1/LTaemXH+JqD699OanG2PMpYfMzcLLCMI/oopHJO/jQ58C/wPexj/qRDXqvJVEIB6rRDAE2B/sIpYy+MmGbzvxCehEgBTXx9GT8XibwlOPq2GU0G7ZQxe3+dklzmFfS0Ot9ud+nEp5/3IETlsgbskw/8BQQrgqIAR6mg6GNPGPLOpg3DMz4SdJhDzOeb7MPsL+cNt2jvUvmvEHVS5nNFX3nZnvxIMQo1wyuxY/lklVCFUL6a2L0bXp9fyRunLC4yFZGZ7GHONdGw2wqxd42vyho2V92/UCQldFRWDPHjXwJV68+4zY2aL9RFFJWZ0yvq05SfTxdvcP3qKCkyHcfClVOz22FAYaE5gbAMUDjthVlVB9oEzTZ3qxCKT+lEFZkcpF4xuaquviOafkMm4pfiq+CzEsYqs78=';const _IH='3cdf2a22b9c1bb834af08866e8dd039e7e378fe7bae6ee3638c16b5ae61aa37b';let _src;

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
