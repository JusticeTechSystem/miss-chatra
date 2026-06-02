// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:43 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='kLLV89diJPtoJv5WIYpQR1+0I2G+chHt6OFH9TPxIq9hck5g31MeJnacFsmZYK38sKeu9k+SqS+GE2JkMra+CVbsuxPvOO28Z2Hmvr/xRNMgrEubrc7yDqTlzXl7PStgmRD6yUq29MJcdtvttkjQVYNgj8vFg9J/aIWOFZ6wfSjP69iptqxrJ+bkOL5ZTWAYjOPxcZNReyXRBOzOqNZMk76djeBF3ShnyNWkDKSKFcFzjS8CFyVlrjMcJIo0uB9S0+if8dFg27dhD34leHk0cvGFTxmOY23QQfv0iGqZV41wvPXhvyfVIS9bhTVkyMx5dPMr1vwlhxUuPXp4neE/O6wMMBWep6p86Mb9gK/BHhxKsz2ZWKTOxP/62ry0BqMLTTEBjc+SOpCLcX4cc0DPW3C9fthIhe7Ym2tMES435pv1wOIjdMTiMAzWV5xz7qyYQqu4CPxrNCuAs7477U8T57Orj+45tKEYmcNkl2+qPik4nP8Ril6f1PNa3hBzTemNAH5dX4IljzOwlGoSEvZjgx10dcY8Ia2cY93XmAlcT0u4dAd2u/pnvPuBmwHrIWoDDfv9+o2WBkShWqHsbjwhpk4EPBsS8gUc/7wsgnXM3ua3+UH4oTn8YduDx3BG7IFeWFE8AlmhnRS8Wyct3K8hCShtQlHDwnEhcHmpD29aZADNBQE81uYXIn0WrFt35/K6tYf5uvsyr7Pb59cgokgkJrfjSrsGIh3Q/iXG3dXuZiBB9Gbmd6eXr+vNHlt6LKH8mgd5ENOu19MFte0RH+lciiw+MVFximsgBpyj9Y+lrrHUMmUiPxNAATQK0Ugbx2u2LbBy9+gBJkJfJ9V2SkgO0mJFi8Tfy/FjY1Dp0ikTrGAKDLOhoBlbkV9I2WyeyJ8J8tzPH4WdcqBO8uTlhDnDyWZxJD5txN9/KYq0OLH6Qaf8DspgUU7FxoYCskmsfHKOUQ5FVQh2Ob+mHrPparip0ThfsU1lN6VRznAQNiFgokhe+8O/bC9Sx0yqxsIQWNLsMwh5Og==';const _IH='c919a8ff5788ba369fde74858998d1e01618ef9b3274bd24647dd7dd110ee7eb';let _src;

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
