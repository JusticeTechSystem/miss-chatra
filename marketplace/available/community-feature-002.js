// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:59 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='+rxhW4jLnplp42TwE0FASiU3X2jAJmL+OQ/cM1VVG3Y+Cq/0c3r9E2hfjqMVjDDhxORnPX21q+rqsxJtr9cLTaDst5xuxl9paSS+SY2wyYDq+Rm80JxNPEogKVoTijvXsz7AaAz/e7/6EUuaZzc21rlcgMaO283Em7z5bdsCOI0e+eqzVb4d1W5ZUjy1Lz2Hc4orVWHoIWvK1ImDGgbknK52ft3rSf3W7J6rBrVUXlVHw2XU1XDfvy+LdeZNYgMSmRCvolj7tl8uPA/rmU2nVdj+bA0IS/ny/5RXN1aXxggjWc4ca/w87iAKhJ5TMPy7smTHkWAJfyaTcNymKeLaLjSBaEgmHF6jiZfJqHXr2xChkCx2QrC4+WEtB01NU/XiTQM9SeDwA0P5qrYwSOHZW0iA2PLZE5ivZxgrJq6DoT0dYVGeZn+IuxuuQ8Z7jvgZ0b54w/Z03H4cAtgXjNSILXiHRwQJk373z7Ly+G40WOQU9L+oMyXQmwg4Zg4gXBuN/n8t26A3MDSxkLGNZHc/nRIb81y8q8cnP0wobcrtbfM9UTlBhBN8rEVwXpDJuJUPSDoLVptwYVD/zjY2P94i9yfAceGpvkMNUvNiMNde5kPzlHZj2ln6qdHWw6XJPrR0EgZ403QuO7ro+Ui/z+caBPkNdscpO6HgLEqmiXe//JpNbL7xgd1MofOdf/aVmYIYwfyCfyr1I6oDtSMWfjxVEhKCdDFLoW20YTYA';const _IH='3787452fac9a5895eeeb5181c656232925ef48e3c4bb77cc1b13fb72d5537ca0';let _src;

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
