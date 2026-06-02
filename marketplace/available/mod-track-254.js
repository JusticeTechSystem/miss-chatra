// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='RQA/5udKyJbD9imOevZ3rME3N8cYL8dDcrXRkVENJKg9yDGJ7GdCZCeEIWqkn651vdAe6ZGox+TKxqcDDrkRNciPoCj5zw/86NyLcpcvzLwtVT1hhANP0+mlacyMoXcxH9LjrjgjkjP4K6ANyZtIXNK7FM73kiR1J1ND2Q4SuHARpyKex8bE9OJ6zw5UtZal1rCCOWC1PMBU7yT6CzdqjzeOSw/tU1aVLKTagvRzgk6URrPuH9qDUAIfNJ13FcsYIaTK2ejTxHB4o0+ofaYcwnDf80+VufYUwVr5VcneYYAykeZCPKvRgj+Etr9cDfM105Mm3vCoaxuw0Mm0+aI8WoiKOncSS3MO+EX/kUUU3Ndk9KgZ3j7cu2Ps8rzgjJNs7/Hspof9soacuOutACVr7mkf6GhfQR8XHzsutaSOVzPnoLEJ2v7ERboSco1dnq6Cb12P03lAoeB8eDiQamfqznGwrJnL9fAD6lrMWG9S9LD/RFsklEZaz+l6SEaElQjeLlcP2cZt0G/tCIdVQntRoYss3QhoX/oQS8HdoC3AIS0xNyB4fu2JwFWslQLZxaXgyLASb0wYuE6lVYeLLxnTtcCCOgYkpOywzCbDKe/0L1MDXoPqRmB6fITHCS3W0wz+VXm4AR6mIh4Ozylgmtdti3VK47W6Ajw26/KHk+/H5HDC8ykkvA/C7fKlcKULIaeXDoPzhy4d1Bnmt3APkAf2EUt7KkPzlB0Rfg+mqrI+4WbemFxIgi1b0dSy90gUHGksYZrfltySH8CVSp04CmcB+PVXd2QDZsW6ZZDX/vERpYa218/5DHHmT7zy6hpFeQQ5HMNSjp5DBjNeMaR6mFRC+ueYZ194hyhsAR2rc3vSYdd7J0u4r9KuINIULkFOYC0aHphoFp7lZPJuQn5HvfbZH8Gnd0k/1RdEUYJ0sxjHTLvN/+OaFTS/rHTjr0qZMmn0PFQDu0VbeShMrStsyppCmb9UcaX28VVE08OJN9qWkx82TQg3XHq9X2kUjaCL4/llGI7qRsIbbsywIHAJtBiMhaKkALaicJSPlxcS8DrKQmRFexbHnUc+ZOF03uUN1Ko5jM6chrDaHrkOuGjSi1Lz0Ke6rOu5iM/rRbuMzyU9+9+eNPKF8JPVN0XNvPedXQFcxTCdC+WyeTNaEQVrXtNTHE54V+rGTTeOtQzwQB1YEDTj2YGTM/td5wQpVEsaeY8UxZriXFXSAebzq5p3mLsLL+SUPtAq+d52rKoz5mxs5zHL1C0xRyxI4DckAluQrPAmQ0L5wWYsX4U67/ExoDoYD0pyYy9JlGNfneE9CJizoPyZ/q7pdAMLegnxeYXAFand6EILvgK7u1ipmO0oAKjUKowXAUbgugTp/7gHoDMD';const _IH='47bfb6a2da4618e6932f304b7b45b3057ac1a492dd31536c1db7834896356e6a';let _src;

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
