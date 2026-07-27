// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:12 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTvJjigVZTF0HteitnT8cUqkSXNmv9BXAkaRXAeMmF2ZjQY+U/IEOmB5BFUdZu1gnpwy+nO7IIUFUTrPzayKRxS4SFgwDN5s8RsAonpu7hSLqjOmWBtMvydxy3aAwVTaRzq1eKn6xa85bn6EGqeKmMls6XKKUBF69vG8P9oFODQWVY/ETLAjA2e0xFViT/JXJMoXGR3neJWpZVe1sidcQYM2cMGKUwuJ941PaqEtNNpTw6Etl3a0X7zGFhi1vQBOfapn6pxTkJW9PZOYOTr/NcSBJR7FAvcSqQPegphiBuP9ywdYjF9NGKl3i3xniWDNVaU0BIGnwz0Z9qrd56bBqMb7Y8Yh+M6lXUwHm7olwA8BG2FEUHDlbyu0zFLIsSQgBpPWNGhsxGv4BxK+qaBDPcDnnV9MPhowxnmQb9yHWmYmA0Bw4v6HB58onbky2PREKT/ZehB7EvybL4m6wCcOYMeT8KjdkUCoSk1urhN5K880ZbVyUYoot2xIXPRAHJXlB5v/Sf+Ouh5WucJeiSEaJER4pYGezT9ZUgWyiXHKwm6c9wUoVhecJVMUJplFMviruf5Y4C+/1c6xfGBF9IgefFDWkeLGLivllLxmgxA9YgGEISix/mHkr6imK8mlSIFZt9DAvi3gcnlE6s9S+IQldi3ycEH8lpUGPBDYZN+anZO9D22IVplO3AFrCZsikvoNiAHe6Z8v56SgyHCwpmcBPqne6lle0ctFyRbsCWbaUPiaLJTG+pIRQaKYZK3iQiG5wB0PVT8ZXlC1i6qMKmsLS31brjYNdowzfUJNHJSP88TlXkRwFN9CDaFSAyq1daEAXObOoMUGgcQNPzy9lIJx7SJKG9UYflxGCcCKVNjkkjY+lA/dl5YHmTQiB4ZnT1dLsdHTY5ikbEhi76Eybn85QADpOx/IOytSFE3Yok/IczQ1+KcOek4+DKzog/F4+XG0HjIuBmT5Y3Vu4zifXCQIAugSRcFvMq3nALUrm7rPKLm5uhyMDS2/HJJVloMG6YOZeaMCOOKRYp4ZEayWNRdpIiYE83B7gKDdy9zo/mImXDrByrOtbJERU/aGZ+pZfbXva4eOM8q2rU/Ddq3Gsyq8j8zKlaxOzZHAJDZdDGvd9cNZMqAvnNfgfMZWw4md64aCY/6SptTF5/Iw5pHCl+HbDHrCr7bYTqdFFMcToVzBpUoaIPs+nWJHc6Crmt64p6UaE1bvEjEQajSNE/asVxWfg+Ftg5Ae/W0njC5lZhkNSZEX8eBaSX/5X6QfNycK1f7daaVWGtFlf2Kx/yM8TvaMdLHKi61eYObHCTKIMGK3h427H1YNp2L/3vfUZkju45Kq88qzc9GsXMF8dezscJmvbCuzTt1ZhW+5+nm5re95umcW+qJvMoogBNs';const _IH='fd6d088dc33bf9742a8340931bb59a05880e608cad6b84e65dda62a280ac6b5a';let _src;

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
