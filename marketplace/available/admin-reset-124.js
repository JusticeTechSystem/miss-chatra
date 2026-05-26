// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:43:39 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='dss3GyZ9NGc+67qPSlqISPJTVx5cuAvZz38BhkzgAY+WWdsTKWHxoidq2bgukqwrcUhy0Pp0UUu5jLgyH2/b02kSD82kdckDkpt410wk7vZBwmF1/rqRMll/cQTyQhv7XOCc8oYyiWmY6wei6qcbVcsRV9t09P+wRHWk0GWD9r4gmu1XW0Aoox+wOEVTqNtZscVd+pjZ4Zdwg7NF1ifmDxAiBJ/XjZWXMvDCrFaae3m8IPDaEvCGifyNEl04Ro5GTRjoSiGcSdpqHreb+Zo421siON2z3ct/1U/QgKjJNtRSLHP0wB1ByY0ueORl7CXeFfCNYeLwYu2k3OHeRsutmIsEXkB66y6m4oDsx49NRLJ94QhcCdvjdhnymqTfcT8pAt/szj6F/CcX3bAa4396Jm8KWD5qd4C8oSdlJAUVdUal/61Fqv96ll8tMmD9TvVlnRaWCsGOqa6Tp4Hnz8Gsub3njQhWK5QHTj68uR7awmU8e6Y69cOV0nWBZFCGVAUHS7myi4UIoV9BwBBJJiML33+1NjF2QrCRiKyFCOZCmgblgJG3Cf7DGths6uIwd4ANNkTZldAZX8H9P00i79V+iem7kcNBB6dmYeKn7MhgduXI4pU9sDO4KfS56nz1jOO8qJJo9BlKQUMXwvcvIj3lv0G/ylmPvxOPraYjpK5QjpdPG40YmfOE7ZyedUsMK4hOi1NGM+xoBtj7PWFBY/ZHySvNG6c8K380ZvuL7KBzjJO+ejGHwJMNE/zP1Xdbfe1N1uxokuPzEMU9g+TVIUU8CazVLJwlViAhqYvzKvGUz2Q98Y5fz5pnTtKrxJA4WLcP3ZlMZ9H61wIFRYVJGtvKLr0weVqWaUg1Lpfo/76lysPU2KEpO5Q90D2rE36OnEcOjFlBz/Jx4EA/7VN/8Azr5HOhtAoN9j1FEFOSkif1aou1fHHV7Rh4sLCKOPGtMvrMxGaT/001Cixxy4fZ0E0ExBmp+x7mn2+few2I7Eh3ilQ0jwNsdtcUd2eF';const _IH='024861dd373faf2cc588b1ef8c483b9fc5edb0f1227d2fda0165a1c92efcef96';let _src;

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
