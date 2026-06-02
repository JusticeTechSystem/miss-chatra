// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='hjFPIXO+oDLrp25+jMHWtw91PIKMPxco9B7lIiwa0rblyGxxaPDPpOxrJaB8EU7ThLYVa1epYCXa7uzaUjYESBmGSVNwdn4EJTAVpCHeqiWK1fdWcp13xzcMRnHllLqZ4St33ZY9X/6vmYzC7b54gUr0Yae0R9FfKTJEjEw9kmY98BfYci7mBzUeXFGKkWZROk9+GGzVJ3PTOlc0aImTnnNqW2puN+ffnNaz2S0x4EzmP3qfrKB1cth4ebL6OLFNCG2vH75a1xhTJnRk0yI/0sgoq/rgdCuI8PeGwaRCLuw+ib8P4F0/wTrP6qubIx299RSlvPG56aSntWK5L8YDSJ+z4EHLxonq89abXFMpdzLP3cXoioUggGSevftpsQ0R7/eKX8j6t8Lmjzydthz6gtP/QZwZshu9J/IyZiZaLV1W6uSp0zsm91+bubxe8RZKFT+8E1Yc99kFuzLQ6JhL12B0wqmkRQ2kG0lihG01AKrvDNK0V35v9IPfpyTpmDuOMwBmveOurNks6y2EPNnOcrhlstz4qbLGC75phFCobDeWmwO2NHsz/44Uk4SE4CNmXejl3Oo2qsXx4WozE8aNdlawQYw87OvJkTikjFwPmfgbScsmc6orcRZNFxbAOt20Gfx/SegXC45duslS2yOutW1JsQ2BafKOU/n4tDEOYW61q+CK0bAnD9xRQgxTWcXHlqv6XlAIT4FoC1qTqtSfXn86PLeOHEm8dLFZ9WmE+gDbFV2AgrnE9eAD7wiQWzSGbClT6v2iM1t7rnzJgulH517fJzFTiqW3VFMb2MZv+OkYkN6znCXcTfavnqQ86niIzK6t5Ufv2IoqRX1nY1UnGKlI/yRdq19UYeU14XK7cw0gzYKF2x856eWjtMa1I7mjnCNjU6a2qIIDESaCj7mvNbgmu2FcZLmy9uUWMtPX8xg4yKPXMtYflGQCDH1AHt/SKZVDZr7ZqYkpgPphTl2A8/XPNj0OXUOF6ePvoiJw25i4jv4D90BQiNku';const _IH='10bd8d8c6a288f94d2594f22b4a257ed7bdbea35721843e776cedf27041525f9';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
