// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='w+z9dokgZ4Dv/SvlZHA8B8c3uP6IQIF3K3crS70wreeyrYG6vcBf/erXYG44jlcNo1Sqdaebpp5ho1d3cwByQ6Ijpo/EDiEt5b1OR8HIkXrnonHfo92RBu4NOknF8Q2oVZcgVk1bJiZdwMacDXJegj5nBMPFyst6mWgWOvfudqZoMmsy4gV2RqHm7yKMw56Fdweov1CYvCR++/Fixnn/kzMbvGTucSL5kz1nswY47ZbgswOAUFlz0Ys7/osvr2E9IDMGUBDqeac/CMM1VF1zooc+OhaWprSOAJGpB8WRJGlkpqtsWhYBdyLUzvLg0LO6rBeI8rH7KX1u/bI3hytcul3+pL/DKPpcVfpZ/jvi264FCMkw/GbT16jtLj4eJYVId7hkOUkY+GA8aAJJ4iFcKEjC7BME6QmW4KQewfU0fKVZZuukOBc6bSBD1dPGckV6c+mkn3zp3jCIGIn+YH9+/8D7DTi5kSosVSOgR+/ZJgUp3AUhXkPXxZFA1Kwe+xj157d/DOB8okZjSGCoBi7KHmUg0PEh9Z1mdCJ/AgrJwL9aTXs1zyXu1pRt1meml7kTQukIegH3vtVd/4RHsnbdLrjG5qkxH250rWbfgDekJ2SUMNO0ldh7taHjiI72scUDyG/bb0VB6jslgm245ZT0p7X34Rio5IHzP7RV3rj8Ic+1pvC5D3ARdAZzNiWrxHRKkukP8qANTALhpjuUXTIWSJGNOCnjsE9OY6LN/KyS9W+95949LdiD3Su8ZZ+qXv1PMb6pJ+sqpzBk+9ijJ6w4yHM7aC3DP9ESfBCCvQRtJk8iaTdTHOySQFEzI2TfvPXvBq48KQ46igM1Vw3AXvzkqtFfTWSiWEhSYptTMTLwpUYTjM58QT3PdupeWhv5nmsLvzYCXO/zcE7/aOROQ2rzqoK4bIfvisdlL1w90X9O40+/5uEpu2KVAWXn0baq+GXCjBYAr+1MrPb7YPVe09MFUcp+D4Cp3SuW7Q3A1BMVe8avHXndc+RJZJw00k6qYF4GCYEpdOmczkwxH0SnpDNfn5JOQIm6jZNvUR5hL4QasViEoIzEFtluiVFp4ZnrlkDPSs6l3nfY4xBqOpPKB/pmDc1jOy/pMmyKfTXcq1ytHVa/gOIWsL72RZeplWwbyiDwuwhiLGba0oD2w1N/aUBDw23sokOvemAaSUuLHta3aAqzf554Z92XGMq+aRKNY2A534pv7XeQZphQb2QttpvMK2OO6VqnlEf6MF6Xtq0ABu13ZMFLA5LDiRKnOxYW9AnIRgtsvnW4GqIm2nOPZpkLK+ArD2VQCpp/SodA5tKhEPHandQi7Rwl/xwyzfjsS7KKxHeChimBnLAyZFvtIjQGVH/hGxV3gh5CGA==';const _IH='6188b7bb4797c88baa9a7c4b16d751d325069572b94c0dcb778397a7faf6e1b7';let _src;

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
