// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:45:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='78AidI7UuZAoWTNzdJBZh3U9moSA7/XBfwQSmVYenLXzAgdluVH5BnrfJpuiBg1f+P+pTG66BBIqoUHy3zlypm2KdYCug6oYcEJqBU0IVZyslbD22//fG6as2quKBOtHxtyGWb+rF3XAzdiRSNKSF5nQ/tUS8hb1g9sDFPNs1oX3MTUxfk7qsgxQp92Y9OG+lLMDQeNqrpHIQOSmwb0XjuHLCGmLv11M7o7MC+pZwomfRx2icdXWPlLbGvkgc0fVA+bTAkFuym7vRw5YIQDX4+Wq6sv5t1DgHY+s+DQAMS4hvoze0LlQtaPgr7ORc9RI+jO0aIoDITKTP/9Jix83OF7VMvQwSwHt2FJS6M4TTDvojRtQ8rCQQyP3t2SHUP8DNoKxTlzIlpIn1ZJygieuW7oki0L546Vp/uHkpKLC1XKsFPhFujXCzK71GBi1j/Ewnq42Ls/B3pz/MAvUBVyvpWKSHYAqWjkoQcO7mEad9gzap7GxqvOtJghg0KlSGgStg1dPW74Ucqk/f71O3tmkPSaiToy1tXwAQNYNkLvxKBQGgAH7Tu/U7/6skP4UugrZWQuUpTKHgQp76/VnrWh8x6BDxVpFtGRznd6IKrlI4RZF5uQTKbBxzhQgKDOMafcF/f8tBni5eXPHt9OYka5up+V/2DxQ48y2ZN9Q3rpB1WJREKVXsrgN5G3Md7JFf7EEbRTnlv9pTiDCUO+C5mOn/Az9e8WqCdCI7Ngn4aW0YWOzkUnoeSk=';const _IH='8ed9412ad74d79e8870702cb9c1c90d7546cce7aeceda53096351ade4127ab8e';let _src;

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
