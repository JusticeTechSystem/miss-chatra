// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='sDbsIBMpKtTB8bg2eMWmget0EVk0rijnv6bvNTUsCnBRRcQeTuBohpHmpr48yN0HGXqTJCZeT5eEBwezSAdwxpIuYgolgd+1Id0ti88M8T+EALl2H3D8mssO6UtskvVIKGx+GISL5FuQiQ6gy1YuORIghUrkVzFqQtwoC4y/BOP01hUZNgqHYqCwofTjFbE1w7syNu+s4A4oAZw6WPvw1zwVUVvlmfJQ+jWfLYfkqDfq6g1mG0ApXxynDBDOc+ER0Ow7z7wUDITBtUXfGBIDJGUY2hLdWlEskMC8dwhSd0io/NnsVAdJkS2zs1ICWLU+BhRDGv/2LQXNwtf9HjY5QPAyykDwp27tTGEhIEOEHLS1C+ciicalXSBsnSUnWgHy5OoMEhATNfDKY3x/D0c3n4v33R830i9Nlf3VJ7gCifuX7337hd0TYPJf9lqbmQkjJ3Ris2lEtpKn9lvIjoKZ1NWvEj+tKxoS956/bxqVhLBUpZY/RoUCyYbC/p+OWRRRNMf29thVjkYXhcZSU0z58iiCihdtqNwu3cfLwTDY5+cArdvqCYU6ciwsvTP7r9XdEj2+2em/vcWsglfMbduKTjV0aVHqFauUJRPqPH1sc3BVSz6CPipSZGKEjzpzpoLjp8Q/Q0lpCcR2/cdjSlu41RJdOa6LlH1O2k97IhffuCeNsS14udVoi8Zxlq77ANwyFA19ffR0kP6IH1VuePNVzskTIp1DLoo12NRiniQBPGn/rEhJpX4YTbneqPQkCLoOB84BMPuaa/lkanYJpGs3aRAzSKe5fJnBTfApfYbLIIrHuszv6SkHZbBJTPD+P1irvdzBsOqdQxqweuf0ObXQQnI5EjnF7skiMVNNWJmSB9tDuHDuwAa32MoihCJ4CsfwbX5e+cI5/IXJt8tkmux8bEWpl8svMOoD5XjNglH63wUA67UuuHMZ6Q/hHXqjzFiPuYYBWFgHEDBZgN+mOYXaKZlGcOf2vlLlUWz3LuIi+Kr0ptQsYfjv3MFDfQbL';const _IH='1cd36ec4187406f7a5256f0a3bb3defa30e4f9ccfb69c02779df5b559c433e51';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
