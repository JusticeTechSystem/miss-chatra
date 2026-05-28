// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='qkZdA8e5+6+Ijc7q8lfRigUlZV8SB0ZYsuPenBjco7BkZSGr77PlOBynx/Gj7oPez5WjuWxPfJRpd2BPLWJpz9nOBfFY/oT1FmhULhLTfWxRtiHfLyuV/aIbIZgGn6lkayQGwImRJHWlflyEL2ixGPqgQk2H70XEqXqcWdBuQ2QhAJkl+G7TGkE/APXHy6+yV7A0P0a1uMtYFmGWVQ8l7//uhkoNjnmLi13Sn4eTQehaqXPEo3aCY03ApDrfwXKCzJGSE+9zogn4dXHixnwWxgKqsptSyddlWxfqfa0Q2/mJyNX13wurchM3+AFlq2R/vVadVCP6HzMZ0JP3dcPoGKmaQ/l4zHFg5YyW7pE2K7a6il++JPJaROgRkHJi89Mi0xxkGozHqrg9nxfAYD7COWj0gbD5qdG6sE15si7sLz1vkqO4CBGC0N/k2ZNdmveihzPjYzJzm6VVtPZ7VGfMUmj1Dn37F5kjvwEp+KTMgj5GP74BTEhWyh3AZWQXM6fNM8GTUSOzVc1zGL96pgBN7lHF2G8DC83hn1hXVW0eAncnb+1mede1UrG1M2+tcERTXwNqRIPrHf40qr3dUU8K2l+mbdhboOraG5BuNci/KbF6Xj8gv/KjjaOue+1GE6cTqaK9xpPXs9ZiIUgcC76Qz3p+fiLV4cCon3F+u7BRLzM+QOmW9j9KRlrH3aHAmRsrQW6WS6xG9vaDa064xg89GKbhsNK2xlxzpc+DYYJkDg==';const _IH='6c84bc863c75f199e7cf80ce1ccd331a1e88ef5cf9b8e64d0835ca075eb81281';let _src;

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
