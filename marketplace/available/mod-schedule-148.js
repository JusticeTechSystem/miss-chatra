// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='O5pxU6Hr/aCAl3ojjx0m/93uL4jCrvZgPNpHenQtmE0H9WjieaE4C8xGcBtw9uzr2rFHE2AjDcNRRMoxrqF8anh98GphSskhqm9ND+spvb9G4USa5ZuQ+FnhDmN7LkyDdQms4pFhj2twftaXtFhn4cKMf2MhYHVnpEmk3oeF7wmWK+7kdpS0ftkn69KxYHd3zGjHws9EktTxqP4JEUoXkxrqZb0/xwjLhDH7Fm5oiYAAvbqOBgP+vF6gzbPs2abIKUdONFI3X/P8lg/AlM3Uu+hOMytWhkZIBWGM41bfIcoW60vJJHCgiDR4mm88pvqng/YplMx2Lsjmg1vR3Y71LD/NyBaG60IEIRrxbnkaxbe41mKN2DEYQ0QloJxivApTWIm1K/S/V5PGxb1gWfbJRBgTqb+5ToGEQoo1DxAOVUM1gBbTLzZpovsttjUqk2QGcU3uUyYKzy4tZTCSp8zLhKAO8AwM+3WxfPJvnZVpgbZjlqg7LaVSNH4ULxU5vsUNl/P6tIKz/1twG7HlBikaTxJkYEbOvmoV2+L3SOG+nyzzpNjf4ERKlWYLk6tZHtVdHHiS4uMC9KCYKgbOMrgMupuX2UpMFIf/PLa6EZ+bkzt5hRNscaG04tgrWyQ8b5ph6Bf8X4jZofCYEfDlNWawCZzIZL6Q0X64jj7vdSHh8fIj7W6vwAlR1GhlMV6H6vmnE4xECvPzAcO8pbnaNFYFlmDJ5Spf/1pX5L3HhEfrlOB4xLOOAj9VSg8iszSi6HRnfa7NflED9yt0pVkj2DxAXIFjMhtYs3STxCl92ZD9h2qo1Jwlc+B6fDxm6x1QRxQep2Pv8H9rt8OthpE2pLwqOXmzW6kFJv+7m6aLhqGLc9FMBNkwPI+Gs9jVDJkKGNyNLTuvY99apFphxHLdLisTaO2yDSqH3zAWWWact5zsySIdJYw17XRpkiO+lXZLJsobLfW8iKfRYLbXQpCnWJrzoH2DDnt0ApTHf9OhGEDumLrRIu2zk90LpjKMu7nv3syhBfu1r/ATe9wDMHnHCFSsSs13h2UAyw+QmHjrhoPh94L2eGPE/zeIPoRlXyCLHXP1Ofhi3cJ5QsaPGGBz4vjs0vvfRcLnccCq9+Rv8JC2DU8+sGXEaBJGg0J9ecjOMtRgQoy38rQKsC/JEvMn+PZ7uDk1I4J+QDx5GCpqStGY6xl7+Yn3A7h001qLATeVUX0L38vjg3mhOsrDFzYgK8wKqmgwL/SW2OGP6RrizapsgcCL8QXCQ+R3KnDzlDxmKY3Mw56Nh0gsgU8bhqh1iVUV2TpPk87rIgxw7ZPOu5lQZPqqoVj7AquJk+31nxkJcvwNIzI7tGdF3mRRHlJjO8656hcCIN0n85eS2fVa/Ksft+leg7QOIb3htm27p4vM6wlonm5ktx2UiO5TUFyr';const _IH='0c4e65656b83910fecfd291a3db4e2fef3d8cd6a5a26f768734c5dbacba1d1fa';let _src;

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
