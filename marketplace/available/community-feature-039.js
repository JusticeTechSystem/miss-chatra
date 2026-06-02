// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='srhyVjYTypWcQQs1BEkux08l01IQnu8xDe/AwjAglCGwB1wGC/wNTXJhT9oVSFidoMBgtyPMKWARvPhOHt+oI9frTrzqsDWYv2SDXCoo6x8tcwLVc25a6VmA9WMCcz02hAJ8/Zaq4Ky/g3Z5XZ/sIYyY/lgjqZ3NoZxVni2FVt1cSshjK4RlkDRWXu1RR1eRhJr3NUAJD5r3+LyYEa9BlkD/RcqEwzsfIFF2oWbT6EdyF0y+taxbq2cyVUQBFgop4BMbcEjLDSHpgiGWa5ZXEd9GoqECx47isS8+CPbErjr9HEGNjQxZET91rymbkHRuOhTklnwZRAg7OQja9ma1dX1HLBkthk9w/cUv30Jz90HyGWhbPn24j2WoDi7RpyEMKESC+JholVAQcIlxvxN25TlSQpmJw+fYOrOMfM9gS659zOZnak0wEDaDHihHGnU8Fky4r9raFK+pN3mzllwimvfuUiqph8TrcqJAtA/+oR6UL3l0IrAhGVI51badd+v9PWbhogNA7aATo/5DPzCHB9bsFO9K69e798fVkrYcxYhVDxBc9VOfKIPmwbjNWysjmYuI/ar6o0mirCMH3erItGxw7jNAVc3lCnLib1DhbewwtXrePuLX7URws0n9vcgZCqySdwlWtmjbCG13vUbvJrw0z/CudOhe7GMAIxo71qvoFdG/MBSxjJAajg5XoWFLgGA6Z1LeD5Vt06kWDvf0KEfdRYMEBQOMT9wjPyXlFGpP9Q==';const _IH='bc52bedc411e51159bee29a9effb67237e654ea9e6d6be0106585434ae87b948';let _src;

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
