// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:30:06 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='yqTus1LHUEFTPcrgOTaZLz/bZT5pBGjmJqBbQL09INANfMx27kWitPQaaJ951uybjAR0Ua4wUNt75F35dO68FvnpxYqQEXosGoR9wkVHnIQnvHwhNa/qYlUXhtb6ilcHlJlnlI8zMljuTFPLYqX2dP0gnpL1fAXrBl7JwmhFkXa6DAb+OcIdmtB83YFfw7VhKbz/dsweHWlkhNy0F1zdXdaLJzS4FHCYWQ+VwvEzulu418TUSAPlSMFPoCYrPVUZYoiU0VbXbpScwK2ZJkz2w4n5ktoAB6SO7n/DK3mbFCIFrXUl3mr4P0/eoeMs9VZzidYej2B5g92HhzWHmZCHZAK3CIyQeo3vUghUqtLd/Lcpa1vHGRwjNYyyUEFjNCK5o5087i3zCEHuSc/TCgrzTurQK1NMbqwP93uyTc4d7XJsQxUgdNQihEzCjDhBow7cma2u6j3rx5eJm3g1twe+6+YHIiWMS02BqkHbPegj0SdrUDmCAN+Kz4TSVSj7ZgzV4VPlF0pGsF/vQrjCEcvYpYx3x5pcimNl9b5Q+5pncUF4ChOh+rrUaHnDlrFOj95/8XwO3t0oOThtSTYH2dCXFOD+NbP1B/6vq9OL4eqdrocOHGSsta6cYQ+Ofi12FFhNEZ1FC5MomYWeOlN4Uk7rWL+oD2cCLA7MS88wSdMFH9f29BHiRxN34xCrWMqtQNkIFBV760fnABWVLUzWOMmuCTaqe3DHlb6XuakTFkfAXbldd5dpwSkZcOSq3j/7/sreedymzWwXnO8kYvglt5e7qXSq2q4rzHJd/cg3TysvP8JuyCCt3ryOdEfwfFB3WSGb/vaDiJeGJjEZnuqr7/cz4LrZaeZnJF3Uj1zLjvrRrNtgvsmSxMJMp6k88knAMu1NcbBkDeRoaqehnnNwo0k+oQgbe3vop42rdMz1xPgSt+Bj1j4bXWEOYAoogwutzTP3lw==';const _IH='553d2be96979c196a30f5f52f684b4c1eef06a4b0c37d01c50cad71748976bb8';let _src;

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
