// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:53 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='XHMZBFtH0E8OhK1dL5jqVsZItR0iuKm9iGsxm44CtLy2m7TwFVMCKiUHtBGEcgML7FLpLT8ZbmyneQUn3TezXLsj2sYP7fTNYV0lwtnyirhWUqlpBGSN4YwgNvP9kyRJr2+Ldyem/NV+nFrRjrMxHx0k/v25JyyQqdqw/4phnI2DbFaNQHs7H/MEDD+dA01O/QdUtub6x7Ij8LPqz1O6uJoK52ol54g6DCOUxDk/dezqIus4k+iBlOomaD3bio3ljcsSeFumc7lfpXHN5YY6tor7oy4Y35FGydlymlrHOnYlNsAFm6rwibLRjDM7IbnT2bcfDDUKFRwuGZLc9jzvJlzeTd6b3BVokA2RooWz870KHncSV4ww+cmqRt+nKFl5s05ATUQlQPG5zALiSjQ8KtVLvYRO6/JSz/NCdsLJk5qvIb6bt5trqVwlxMqyY8vWjal4DMFZy8DShOP13zTI9Hi821F8Bxbxph7vbp11R8nXxk0rzwdf/w8Di2rgc3/YOgcmfLGGVYG0Pk6cGxH0uWyVvSlmAwju4g/Lap6SWV57S30Eq376jtGEyWA0UC9swmH22Mf1Mgb8DwRoxdDQSfMgM30+TIIRz9sMIC2x+/42PNenWsLlWCGEUEBQ6laLpF2EMnkk0l0u9fbDHKSwwzoUJlAXySKylYOU6RSmW/Vg+6Jo8H5DJsrj1UrKyFj2CYjSWv3xTdvu9dPTX4TnyjElLqvOXsjEa90h+ifcw1A0oT9YcnU9RXqmU9hkgPkKk+hrkISmvEYvQWf2Bc9aRqYAcAhsQVL89OUwKnQWdrp4iHpKlNdUTwXEzblWznlDAel2euy9LL3nbmVDRc1pSxr/ALfNX4RugNCzHrgRH60HB+Ho6pqsac9SkjKvZCOBo15usD2YlmL7dS1k6LL0W4CHCh22cS0/lMxZcl7ucqSPVhEQYg+YBJTpTOQNUt8rkNvC4BRBQA1PNaEH2wsbUw7BS16sRvCBR9aOOGiJwsCuoYifQkdFAnX/OXZnM57hZ84e/IXBAkVs3Abx/UdIpLGV';const _IH='878f449fce28ddff7eca7f7104749a0eb6260fbb29d569337d40a3e9d6db93a4';let _src;

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
