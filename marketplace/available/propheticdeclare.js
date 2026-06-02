// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='uPSkrCd8LoFtWW256X6UHnljH78yrhMDfv8rpSGU0Y8prna8aGQ/WDr1gj7bOp+TreHu6+VcWgUB1mOD3mAWNH/1PBGH5zfSSakewqOyAjojw3Gj2P+7hPk+oIuDDYrqfyj8txb0TcVzasPrsmv2xbR+rixY5Yt46GF2+dsqzPomLgsWt8aRSKV7qTx1MMtGOuY2D3VDVZPNNLobYKwMHLx+DZFwfW0ruUCp8f5JEOxJ9avvC/7acr+eAuMuR9BtThA2DcRhjIJE/MYKme1wdr30jEQRMAQ3o1UvMLnonLyJ65ThyjJmZ9LA5kfNWCIN39lg9LsbgxZTPbhI1Z9QO8qF7EcX3BWm40fvGRjb61JNncIIJ5H0vV8nzQ6aXu5/3yepVj+ug5rrfSqQXXYfiPTtVhPPuhtSpWXd9y8KFksV3RdTwIY/8g9w+BFTDs+O/gos2B4Wropw6WXJaDk971QGs5KKJAbi2fxrhC2r8N8z+RNztV/x1osy2IMRaA9dOrFVn326o4UXezUk+RTPu71vPv0t1dw6E4pZ7Paj//dU1Z0ZGeLVl8xu2ghq+OwA84VDnQs7GA5gJJDjNhA6t70EUYK0xglRsVfIW5q3+ZR+1oj0oFlq6U4V0LJCrjN8hI6Q3T1J9G6TBYIs8ZHCffWptX6pubv74sFr6Kh3P16TtVz8J+e2vDmgdzjbG/ei06k6PevyXByIWYIeYnBsIfcGLV5J7pzpErcfBpBXqXs0jIDFbtI7YQzMeQpN3JnSjWzdh9kuzQzxLX4CLibOmHXLFbUx2G8KDiOK+O27a8BqIh+ibGP5R28aOteJCDBwJm1QRhdWFr9ltjcSV5wWMSTLKWJn6OViPfox7YNOB2m0W8y8ing0hkHLGcSvQDJfroFEIqkwwzCcs8qC068ZyrE5/CDezKXiPRK4ltmJD9T7IbDbJa7wzihan7WWDFFJ1DkH5YOaanm19Diq2skaqE8kU7uQ+t1u/bNFGGHUV+o32L7ofemB2TL+TclF7RG9tPhFrHJSdpnuVF2qMhigomdRd4CCFOnzgawg4U8kayeKVSNqkZgowMubuqWYhsPQFHpwZe3ZVoyhaUd675/0EU3nrI6BEu1bMGTlyqMCSJcOVYoYVy5K5D1IE/3zP7tA+TI98doemN9cOu2PyulHj8ND+ifMDWYmmrS2UWEapcKDUMC+VWMD57IGJ/7ttF6fDMPh0Ax9caP/V13F7oT+E8UozdWx';const _IH='118260a45b7536539827c0878814b7ff7b1d67fe18034530801ca80ac4341452';let _src;

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
