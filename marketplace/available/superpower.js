// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='S0IZ51nzGWwDND/oG4+r1hb+2lvZlefWc1DonMHhuZ1eQMYDy1hN8ZQidnjVb/aLg2qxuIFbIbJReWXRpaWbnAU9gzPbGzKyAkxm7hkMKQAJco4uAaEiB9lPHmcEoMyXAhahU5YKrxCjr4EdXVfXFiCiV6vG8x6ZJHbbj22c4H4R28+ebTxhYyigrHNG+BvkUYZ6h4Yc3Ei2RO0jFb4Qh9dycPAVPmWU7zmsG1I4mM7KR4bKbxSF/U5gwN1b1zHhNQqjcEbi2oAiQeGdWhPuik6jJdfvpgCWKUM0ZOZTnnldkwIVRs2nJpr7uK7Tp1uDCoYZ/4mkdj1J69bZEyCgjaVNp/xcXxlFfSasN6SQdCzpBCnvBi8WCp8kRxhF2ER7Ui45dk/Sv8tJ44x6aaUoB1T3G2IQW9dHB6wA8NIii/2Si4GuNZgQffXxMPJbiDyLUMRPrzSqmhaSZ8hdQhRjWy/FxqPiJjWSo7ugsE79YU5QhfAtbs5+gQUTvoPLGwBIMDeSvueF1WE8hmi5pcVwAieuASqiur1F+s1LjzuxavXe8F26MHzGZCP2O423cJLrckFi9O3Hz8R+PE2lORvFXTgQebxsiMgjOsnxfyJ/Sx28mxpaRBEfPPiyQTzXFYm/BFK8wFXTrU9soHv9bgxbPE6jFqKN/x7zHKABVeNuWc0Pigk5RkdnHy7Uek+QcK0CCnFrapsP1ntfm1UTxBtOOKf7G1tsqP/aXb5pphjejUS0wa5b/4bVkqh7IHEmbfIl0dSgo83X4yBiMFmrqZaaBmD9tF3uTObf6rS5COwLsGRFGOLCi8LyX+HGKvI6/JtBiTlWq58jhs2J8mEMAi+p8qaM9Gp1wK5smyJrwXlhgkP0eUobf71/dTFaMIKU+iq0po/82sATIwZYzfJmWlvlDs3Ro7BAru5HzkcsFdHi9MgL9Sa6o0jXd8lgZrjmvZZBrPiUf23ua6W8PglBp4OslgE2xQHUNHTuZCyOQ++qzewES90E+MnHzK/RVmYbyncjRnAPvpQyb+n4dozzYA5ttOkoH0yIUnJvTZ2Kjxx1GDq3bAkrdHWA8+g2Afy1wTAtYSw+ksdCiPEZKyeTb7NUuFSm5jYEnPPSTNGq/+CAmjXt8NPT35TuWznPy+ljMrFZcD2FF2ZaxlmRWTy4R+j3FPh9Mv8+TGZcrVDCL7ZMOlyvqOIrbRBHpXHXR5MIRthdnTfFt1mIha5hMcuubw==';const _IH='42f8ac82aada8ad0768383d95eabd8a48d724db6f2cb8a36fd75d9f92ee9025d';let _src;

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
