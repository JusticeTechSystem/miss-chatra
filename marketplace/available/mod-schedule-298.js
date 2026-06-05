// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:53 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='xZx+f+pWc64c25VHjCHqzdIoMVx5o93xhhyMrpEt82PUCrrTj3yE9eyoDjjP5/l/B2RbkReTKKf88KYXHO/PENLZcmZPdRi30sArx/3/+auLqlkxDtbUPEMYyaaDTblZ0cpy050040WDR0Rr4uvLfQpJ4mMCfYgNrMoNDhB64sy9bYH3Wmgi5qE3jgKPLGeY1CubfnOFNnZ6vZk4NCp4e2N0gENwf7QzltYjvKCdQrqWds3XsqI48auIVdGaRLrIqImw2Jyp79Ot48CkBA2cJ0Rj1vbZGR5vhzGO5+9MHORa4MAwyl0TzOY21G7jjUSBcFuW4NHN/FzS/kVbRYG4TyzC5CcxM80E5EPeCq8reD+JGGB87+htxeRGaX/2OTExcNK3IYbJdHkrYyn0IU4EOHylAOkZSGMv88y5kthRvfY3Oas26zAqrg9R4ccTNbq3+dc4EzAFH6hsq5mYEYOHMUYdfW2o9QwjtxE3eqV5CfFCVojc1XMEsF2is7AeZLm3uT1VqcV/eRQL8zrpgQRcZx2Y9ydI5fDuVZJ5mhIqRQ5E8ToDxhF08Z6pEZoG3JfcYciBJiFfD1ehX+iDJvlbmgl46KtUHFOV//08Mv6eee/bDuyK9kNy3Eexs3yC2EvWhdXIix4y2agjVPnGz5mJLJSjQYn5W/IY251pAejzpfHKgi0yyCLGhGKg0CdpcdCHlgt8euVFL318KreUpcJxuxjiDKTCwocVRiXiixUc8J1e3nYjMuP58Mo3xguTV4b4PgEE39bBdjVCqd90mP5Bo3gy9lhCBhTaFkbgpKeGvMfCgJcFIpdPOBQe8l2BANKBKl8Z60vm7DxzDGvqrQKMp1LrMoawx9LWPVAGsql9CdiT/mGFd8hBxZJcs9PkJ4dLzTCso1b160LlE1RJPEWwjOib6sJjxMP+4BQhLvzqjEStPdz/g/ca75tIvP0gRcWzy8ejxYdyDA0WaBaND7xuojSWqkuKfp00XenUpnV733HsWda2eqglfy3ihJDTgERSIwBq+38WCzUtY3I09f389bZ8ZQTVK06vueKKHE5fOq63420wdv/C+PqDuHRzgt+2U0GELLkiI6kii2+3LOqiod+7wlSLcmjRkd1oOKpWkBk8R9DSDDB+tjSuFr0E/+z67ZKmvV8s6G1i0WvlLtVq6AX355woSvDIPu/P+NKZ/e71/P6NuRkg/c1cMEK0EW3h6ccYzQsooNrLhFD2cTVFTUr6XyWpOkpnL5Lt0+Tw522ZgXcZg5UztYtj2OoksYJtc13wWEUhT5WbzkpciF9MPMtfjr4DhoSx+iuuxlbNBBMqXbtCa7AH3ciL7Ejxl7hz8oTvkM8XpD7l99ZCWchG+PXJITD9pcQx3QwrKf6uskGUSTLszIEzy9f5g8ep1eTZhzL7Hj+yriOSCgCd';const _IH='57824f79284d2b5231a9d090ede62eb898bfe8e0a14f1384cec61d8ac1555a42';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
