// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:13 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ3ZXOeb5psaEGTCNF957uKpQSS2SKwqL0gTbWVNGvL8mQqbkSxku6BTjedSqgBKH3v/5qbcHmwyjJiqtmMw5hT6YJoqg+hWbM96l7O2VlOrnaHn3JzKnU7oJFcif+dHEeg5TanGM2wG2DGPY7sUEYepOEMA+jollPAheGnU5Lf/bTT776rjJKd7YZHuwLyv4ehKcPz6ujfTOl5D/bH/SHNFYy3xQhxC8qStOS4fhtUVgZ1rQ3biQ8v+zX/PGXIo/poopVbhVQBODfhRVicMFXSnhnJGm09IsGuBOMUIt7qUh+BWMG3ZSWfAhWQYrlj+JBEstApzi0ZDYDAjIhDrgbMfMp/NxniUyGfJq1iP1LagLMXndaZeKls8BdrTycZLH+GvTfxzLf7iL0Mr6yRdsf3Q9Tw2Ku+zDzjP6h3OUlxCRqiZ/hZxDbj+2HJDgMxHGvoIyBTaOAF+8Op88vxPzZ+7MyZT+b3rs/tpyMo3wa6eViEeN1GRBIh1naTPZmTTbpAAEmjSCQC/cytt9jlaWQ2tsCOUMap+CeKI8pmPKu+Rdp/Cjp42KNjFsPG0N5fXEhZFWUNB/ETbwgkxfZrYuQh+Z1lR5xdIe/KtDgxw7OcZK7Cv9EuTXMOPnzg/QcvrO0k2f6HJjM4f4iK+yc3r/nUxqVOIGVG4vuxe535vq9xOi42tvtaBdnXyX03AhiIuKiKHs66rR4WkLpK0mksgUde8n8RgKfJpxJIXqOHcaMG9LWfoLLvJ4AVZFY1NMKa5IfW53jSm1XDbfATri3iAromx55uAdSrxyp4GHEBLxSSCvHhbdnpb31uCmZVIQcZReQ26xJq7DbJ4kn0LC2DXAKPJGY10RdJzSDUEBYgN4jIyCDCEPs+fGz0aSgLYE31tztP80b9ToeDbqv9S5dA35hLWsS6DuYQmHBkp3kPeQvLvViHkWJ8yIjGQR+7cS+KrZBPk/VMT7gUMoIdjDZrayo1bebAIdMtNAJ6U7rJzbI/g2gDlD92zYd4MInUTjJZIUNFKcrJTh0eJ4JY0ZqHRLde1Njd8V2t4sg+k0eaRkeYrXMqf2TdIrdVff+gVkoXe9cbtyLo/hEBOiA4xxEJoQjNj5zwR5ZAjwR7+amyG2Dt66zXqkdMANfkM+0f1lgkDV98zXwO2pZVVAYwtExt/96e/OIMoUtVKx0IJdsOWu2lrSX9uvJ1bEQLXZwcHthah54NohRHNtuhii32iKD+Q=';const _IH='f855b50264b79a9f90d5a448abd62d46bede6d9e65716b61c4db424ac1cb2c60';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
