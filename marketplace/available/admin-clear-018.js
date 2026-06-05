// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='eIYwOfxFtAiaAcQYtmrAy1h3uus1JAry9CnxfEsLyg2HNTiPJwIz9vypsPX846NV5kk92xTtqHT8htmSr39dSYzQTGBfQkGe4hXIvlbCYMq+uMWrikNErWYDtwGWaiuDqdkzr5R6vHKAH4uV/UixJGFSpCVAPcC4RZENnLsxscB6DA1DxGWauU7brcSxV0vESApNMm9vQmuwDtVb748xaoRcFOx5jNyBVkzQpD7lIrgVA45IbbFtpTES1MhjdLwDUM0e9HrhdBp2/bLxnWDsvAaU2tY9DRt8+G+UsCgXVPqK9zj+d9liWXKugxubNxuqR1fifla/75OUnwVKfnnMlFkotzKV2URxJ1bL7VIWkXMtjvaGYo4KMSAvaDK86nZl4ERSYxRIv9KDTZCUghtU5Ch2tLXhgwPDz8D0jDrzTNoDVtF75yK5BgUnwBB9DhWTXiQI0qRGGz7qkKU4uB3XAhCWNdtHp6hqlxpXSkaOYUzjj04GXs//eKIb/UDN2boLggLS6uI2MMAxi6VFaib56XuxIeHBB/ZbkcwWelia1AGNKr6Bnmij+a7c0zracK24FtGrBk4Bajn4Hiylm9nsl0eZ2WOKVQx9oemCB9Qv0/hKhez76o87gAW0uhdQx6lgFrlglKc3lqAr6ort7ex+zNYRyxggJgrXWo8epmRtEJi/giplfkwQt4s/fyyXUo0rFI7OOsx3RVE+TjbBwQAg/HE2Dyzh6cJNlGXnHEabbYNJTq71CeOstCgZDgWS0SsBrcbCMHiV2WGltccBLKaq25iFSohrZSu6uN5kplxm1WZ/5qMNuAuaPtmN9mpe9lKF5NHfk9tbh1RHkCn9wBpaanGInIwb3Ll7hWp1MgxQ86k1cOHQARFzMaXywHHNWBJ6wQfvYC/VCFcrTM6wXOdjC35+pxrXh8O6BtlJ8XohdRmgv3+TyPOipsg+XR76iyW3oKM9DmkB9/zrRhWrfWbjntKkFvTWs6J0hYTaBysmdNudzm5IEOg=';const _IH='f41e8556f3f43e689f378588d3af1039082b7d5bae788e42e51d855434cbf497';let _src;

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
