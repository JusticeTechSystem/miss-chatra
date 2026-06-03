// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='LOVPyRcWzZJVDWIMW7O93dxsIb4F5xBC68BDtu3nkeli9UEUOAeKlOPjNdgi7PK7AfhxZIjflW9WibKvFddPXPA1Yom1KMwnzh41qGVHoYgZTrRXSHzK1M0kq41DT6IRuDMYEEI2+TJEX9XTgVaOwtRPAJP0oTcAeXS+moS2sEoP6LMG8tPdpvvQfSUDrufnTjaUfLIjTCoybHD3qLkKMt0mZeN0cKveFZ48yNF/5UxjtttAMbCnaUKOQO4hl87NaEDcFmv5DJhnKVxhF4F0DSds2t95jS+yNQNpxdvYM9udLqRD26AHL6dr9ybOSSFKGoNWBX7VXKCQKH4+ukddM4VRMwP46RU7gQjNr7rhB28NculAY1HJ/BfIsyN+vIAsKdwpq1cYmklnOxspPbL62ICgEcoxKncWdo67sjY00rnl5F8w8k7Zoq8wUpEuHT7AJjCuJex3iCFJKgZffFl6VFiTo+SOzczPRS59ST63t+9l4wo8J63sQB+9fm8Xlgt6CtMoV5Gy7w1ijA5m02i9LijpvAsJeAr4WYS/jL3MO/U+6tUaf2yB9UyXSgtwT9Bsju0ZRscTNim5XzfXztAuZyD0Kj2DWPruVd8vicGxGYkVB3XDqAuBcwCe7D0amTPI3EhQ8/t1hi2cWYcRlPCrrXxaBxBnyvur3pDyl7JjRephDB/pUvXSBZBdPndmfgwzKRs3r/KLri+6HQ3MFxPgw7LCKfdfFdnhu9ELd7AwkIXO/N8GXduPzfDRRNgvAX01Ji3Z0tAXtTOQ0lhcgcwvgc8I7d70zvA+Tt4t9Kb4khbgsSMLnUbvmGfKthkZ1qFmIM4wcvX4/lvMOSaTdYOj/UZR10zEWihYpgqvcNfwJdr+vHaPlzuxblMhEhPDD1WwXK4U80qWZvYqquZJc/o2md/8p3tU+2xuGaNiZRWvfoPXvO/0afANR7rJoGAsJ8iJfCapxt/abdjpWhZiFGrCuEIN1Oy3d3SFMtN5479svNBd0V3cj7imrQJXwLLwFOkoVQ==';const _IH='55829009cc5dc99e3843e226ab35d361fadd5c3f5e8a3a61008711b18865e057';let _src;

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
