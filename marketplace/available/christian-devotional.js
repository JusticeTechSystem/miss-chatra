// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:44:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Utqk2iTlFGlhdnasEukoZ6Ht0nwmJRGGsimmHUW1QfrqL9om43kmX+btVVj1bqF8RRc5kB9gA41Nn3m2Cro4nl63UtIH9yfxYOrPMwha5UegI+Cx07qRG3cC49MJR7sgSfBjbe1/9QW10x9miNnqsGnK89gDZvz110kxucL2TfTXCE+NJZ6r/IVEqxTU5yvuhN+E73AwDqU/7KKj49T+cyzvX1bKxTvueNX8dxbRoe3OEiDvRUV5jmnTNEB9H7Rp2DG/BixGe9OLK6yU8fOfgkmz2hfwDVnFTM0YaBNvOeEY+LB5nTuAxaNAdtnMWR1XJFADA99adrFdqa2j93VnFOZQMhQITMky1hsg+6sDtPKBCGt82csL5zYVE2ke9ghopQQhn3EokuJ2i4vQpbL5uxeKoO4GI9dJXZ456A4HsG5cmcr+oaGhZ+lxN5pH7ITh2kTJA40ceJA0LrC0YesjAd1D3KwrkQ2FoWYo2XI0o4z1OBg7jXots/oVslr6wxTyt0OkC/38wg==';const _IH='4064c15dab4249ffb902ff57ea5bdb83988400e54861a5b3f658ea40e8033b2d';let _src;

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
