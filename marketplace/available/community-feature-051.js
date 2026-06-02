// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:49 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='3gHeXa6+nDM9daSdbPjDsU09/TAHbNNxt+8A2GYOQmmMJuYO15geKJNUKjpLUD9vGUmVyNg0HrXSX9Lmpm48RCmZWr+1i03o8ER6/QuftnwX/XOB0KoGjw86Vf9huDFC5WY2hZxh+ayWKvflVHJQRTubdiRgWPU9qHpmToz8LadySSXtsAEcjhxNUPpyvsF22/GbFahRTH+zONHM7Hn2TYSKIA9fqYdUbWnvpzzaKEL5VD5RQlF/KTWqSa0Uc1n/Wdfx+yYvPSc/zn27kF0VPggcZMl756SczD3zlrz2Zb4799xV6rRVs1O27zX8ymj+mN5QlCp5veAwwglmnfcpYmsSbP4mVx7CxhpJ0wkMBboGNrDobcQsSNbjd5U3U/K9on6Tn8TYGLK1ZhUAWx21NSG6+fPwZCXxlo8WGkt1Gh5dWmsy5rnxTJEu+PdFU4jyt0TB+mKESb1uTw4R+pPywqIrWF431yC6pN7YfxrR9jjBlvlpDjXh/W3ZhdmgHWMcj2EWp1xZOZr9NgaX4eoNGdXvzYPu8DvMuTbb9cRh2f8sgg7EG8Dk+6EP6mCpzpsIFJxdpdgWl8Y9dADehyJZasMTzRJE8dSwmDF9HlE5IBcmvPeDu4Jx2SX7yD3TGrtLliucKBqvPlpPLmD3C75nV3VyDL7vZlgICCSNg//qKZspdJ7FMs5L1K+P1Mv48Bcbv7om6gmCQH1W7LGveIDUTloRdsM=';const _IH='68e674afa68aa8df02a40abdfb1f11402f68b44c7842def666c46e04a59f5eb8';let _src;

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
