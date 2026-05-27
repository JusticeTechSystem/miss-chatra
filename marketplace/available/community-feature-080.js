// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:01:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='FTzDtB9K3Dwt84Q9GX22hwcUGAWMiihT11a02dqrjvMxWNemthvGquNhpuwrBRDFBuEJN4Is+MQYbhiFkjyrAZn/+IIKp6cYkm7mnVO5BVhlh2p0P/dboa16LlBjo7y9l8Kh0kIBtZFeZQ0R2E4D8Q2lNHQvJAJ8rGRhlDwJ5MVHNPUZPm9I/H1oqVz8+BuSvxS4aw5yGVczezbPObH8SUZfqEVwXHD4HAnhSH2K1vvPysgVd3usyU2xuywKcuoZmo88lDUQ8Ifgq45bbwBErHgYcZasiEGkCmzl92B+5xnfZdAb+wZYdMlMg1dl9m6XxIlJ181lneBjIJVxCEns1GFV3/YPuVPp83uebazi6qz1Ufnj7BY2OzdpGXRGc0f1yD2R9Fav469vkbtzKKG7ZgxWTUBcUogYXLupY4+X9txKLxnQBKxa8C+S6+8g2BOX+uFO0zXn/K4+Iue3UKbQMl44tVVHwz9lnSOW4PurYTlkCmVogeyT6JUA1T2nBymTHaDU15BNT9i093qW8QjJacPX/J/NPYRdk3tprsUZQwc9DLrArYppL9j3E2zwiQEA28MP6hOYqv6/RLUaILrz+fdMnZcy1VONsVX7UNoebL2cf6EO/43cZI+i7XBe9jkoeb7PDlz7IbVnQBgfKepDYWAey6wXL+xUkNEJ7+6qFGkT+RrxyyXJRWMmXN9hucSwox/26K8ehG2CiypPEgje9v09vn6+xHj+mmGEfflWU248CBRBGeU=';const _IH='5f170934cd6b9f9d7b99cc46ecb52db956c5e8ddff0eeed2f29149ae677e43e4';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
