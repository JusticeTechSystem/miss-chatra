// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:06 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='7LeRMUq9rthEgKrfFEbtts/+TKxGGsqEyDa3Xi6FsgZgkow4evM10eYA71KaA3ABjfNwxOTVOMvOj++/xZWVtrIM9P6zLUdFLOVr2CKbQwTiSg0xFbuxbThjAqLoABbx9PLXh4D02RcICYYxIc38ahhkzO3OjNv/Q2zzP/qo2OYocy3+AU7T6+7xdv71pZGYL1e90J+ZvEA0C1K2hDVAEXio2AUG8pukX0iDRhflQG1Dmu6i4mMfmwcF29ebChkzM0KFqByK/Xj0OI7MnkqsJtjke6bGXwgUsugZxSs5+R48wzt5ELNfYggkzZwS5PQGhiJO2V3YGXkpABf9mRdkU7GmWN6ZKkfDiATOu8zS2LjZhdDVP2M/z645zwLet6j+AKExfB31/C5r3KJ5GPRbLymmV0n2sUh8GDdxMjwKDCFCcmCRaPYOdQ3XL9/yuePC7x8TDCPurpcpPqJMyA4cFuAP1gdwvmSliIej3mHVbtb+4N1yYqmiH0wFTYDpjrEMkDkNEuBuIJRjcifHvhxBnCqwbCAC3oMTPqIBc2IZXukyGySwMYeukdPOIyy9rBVUHDgpO+v1KjZro30zpcHgjGv+2NFAddbozbbojGwl4wgt8qL0zRvx6WhouIP6xx0BrDf9ZfXW2ICgpHSi27cxoAjF/d51E/lKQFawZCxu933GJRP3urPAZtJC5OGijkYs6slBK131LxGd5C+lu0MrjsPmeinvkgawIgOceE7rV97pB33NYO6SnlXclu1leXp9M5v+iU4fXVvuuaKllhIUgjVASNJpife4xtPK8sddlvWz7Kx3F/c9mJLMa/GslpMz2xX02ieH4VU8SaB/09ya5zusAKb4VeupGhXyl7VnuWysMgf8F4Ets477I12cqj/hq7Nw0pKZiIn+z1KoZIzjcgYpTz85GzTHAK/9Ti9DdSuw0CZ7rpIbLM1pKgIJlPhnx3GQYsti16dY1qbAf0LkbKU0fxRRfbthSXgm6Wudkme7umOdd8qj5/ACCpWoiMHwWkbv+eswMRkDFqHJsV96aBFesG6z/HoO2veqfu/JIo4waNNPTX2/xLz4VsmgMtjGpsfNd2SGbJChrRwAqvFx6H2n4bv6fIvGEoSF/H3HF4bPUuDSBBDw6VeGuKrp3xFDjyCKBCtVrkHLGzPspzOozTDDrfOwIgv9C8VY6/DkNnlOMs1o4lUKB9JuJTsmfdyUS7S8xPspmBSS4GLn44BHp5AVvVTJEDU9BASZNHEAHwHXAw4Apje2OSOp+K0Kn2LH9a+g5avs8G09jIjcaX+nU1pqp//FapFZueV+ctzcKltRAD9ey96z+cOffd7NaRHaQ1wCOC63MEEaZfIyszQCyqLmGm7wPxKlWct9/YVB';const _IH='536ba97f962f83f2d49fa1a7304358410405936effdac24a62c2e4fbb3bc85bc';let _src;

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
