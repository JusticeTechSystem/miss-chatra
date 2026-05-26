// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:43:49 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='MOs+HavLiMfQWKMZPpgtxZlzMD3Zi7bwX68NfnYkWPHGaAA/wHWsJAlJVUi3VXVIOgFH2xwkbyK/GkHXmA3DkpDjSFaUJNXCU6iIY824u1t+FfKKF0UQ5BiOsJ4gEjWG0eQPmYHs4j4muIesRP6aC6+IbHp1Ey2tuBq73/f1S2Airr7pNEms6i0WQI+O65/mHYzj6GTfbcVdd3yD+zgEcC2T27Qx3zoqxi+vwPbyfsj8JlcklLL/bFEU+FWN88ellB0QJPixabKLmP2f+kGwqsShQgD8NMF8JJ4jGswzHS6vY/CfW641HS2dwM161rdMftekUYChJVauloz5aHisMaaQp9brFx3c1MO9S1CtRMPacYzrUNpstntfM0MkFHVQOSWMcloc+8zrAJt9FVZ4CQ2d9TvdkGzp60ncfAgO3q0Qx4wSl3P21kevNgdT0sg26Pgxq5AjpvThzY1wauP0h2Ju1+8hAqtGp3+YSJBkDVPreTNm1kLdEPQGepNkjkj38KDQmf6TfJ2nG8zwDA65I2WUEIsr9FzlOpW4GjlFumTTUdoHD2cGHs1iRBcypoMn1OB+gbssUdAfULqau4JQoHc4HQaLRejLFK2vgBbHRZccirBXkO0O7sLt8Uwg51HKMcd31cwGwVloZHTqLHCUfxdMbWbfp6bJCm5adggypfLSP9IYmmKHv4ze1/OaImAcubaKWkvEIPwig4W4uKhvfEpXFRhPai9wmgbrJqtL5PVre/ogKLJ5RwPzP8N4rAkG+5g07t0mJJuDSCmuNG3dz0zMq1sQo+L5BEGuLdSSn7p/YIMEfNkNYWAc1iKH9PIFt+lz9KsLaQaLKFYUIuuihcz6TBPv0u1NIr3iZsQV67Q9S9079Co/dByJvDktBZLutlKehNGj5xHbAvV2dTJXPr5S9cdSKfXG2+xPYidLwjhcyrKxy34lJt6tee8fAd8vOhTvxOQmPZoGgAuRMsPzqw2xNadNW2JsciGZ8zMjeo6rTXU0gAus0lG12aeR1MVd08FK/Q==';const _IH='23552b794b01c96e6113500b9ef6c2623037d787daf01a958773e6a744008723';let _src;

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
